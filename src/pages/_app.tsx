import 'firebase/analytics'

import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import firebase from 'firebase/app'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { SWRConfig } from 'swr'

import { firebaseConfig } from '../constants/firebase'
import { GlobalStyle } from '../GlobalStyles'
import swrConfig from '../utils/swrConfig'

const App = ({ Component, pageProps }: AppProps) => {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
  })

  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
    firebase.analytics()
  }, [])

  return (
    <SWRConfig value={swrConfig}>
      <Head>
        <title>나를 발전시키는 시간 - Clelab</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default App
