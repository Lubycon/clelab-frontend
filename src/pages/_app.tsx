import { logger } from '@lubycon/logger'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { getLocalStorageItem, setLocalStorageItem } from 'browser-toolkit'
import { isProduction } from 'constants/env'
import { firebaseConfig } from 'constants/firebase'
import { GlobalStyle } from 'GlobalStyles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { SWRConfig } from 'swr'
import { isNil } from 'temen'
import swrConfig from 'utils/swrConfig'

interface IAmplitudeConfig {
  apiKey: string
  userId: string
}
const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
  })

  useEffect(() => {
    const email = router.asPath.match(new RegExp(`[&?]${'email'}=(.*?)(&|$)`))

    if (!isNil(email)) {
      setLocalStorageItem('email', email[1])
    }

    const amplitudeConfig = {
      apiKey: process.env.NEXT_PUBLIC_AMPLITUDE_KEY ?? '',
      userId: getLocalStorageItem('email') ?? 'unknown',
    } as IAmplitudeConfig

    logger.init({
      services: {
        firebase: firebaseConfig,
        amplitude: amplitudeConfig,
      },
      mode: isProduction ? 'production' : 'development',
    })
  }, [router.asPath])

  return (
    <SWRConfig value={swrConfig}>
      <Head>
        <title>나를 발전시키는 시간 - Clelab</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  )
}
export async function getStaticProps(context: any) {
  console.log(context)
}
export default App
