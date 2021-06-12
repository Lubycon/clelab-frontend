import { logger } from '@lubycon/utils'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { isProduction } from 'constants/env'
import { firebaseConfig } from 'constants/firebase'
import { GlobalStyle } from 'GlobalStyles'
import { AppProps } from 'next/app'
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
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default App
