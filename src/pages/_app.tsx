import { logger } from '@lubycon/logger'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import NextSeo from 'components/MetaSeo'
import { isProduction } from 'constants/env'
import { firebaseConfig } from 'constants/firebase'
import { GlobalStyle } from 'GlobalStyles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { SWRConfig } from 'swr'
import swrConfig from 'utils/swrConfig'
const App = ({ Component, pageProps }: AppProps) => {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
  })
  useEffect(() => {
    logger.init({
      services: {
        firebase: firebaseConfig,
        amplitude: process.env.NEXT_PUBLIC_AMPLITUDE_KEY ?? '',
      },
      mode: isProduction ? 'production' : 'development',
    })
  }, [])

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
export default App
