import 'firebase/analytics'

import firebase from 'firebase/app'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { SWRConfig } from 'swr'

import { firebaseConfig } from '../constants/firebase'
import { GlobalStyle } from '../GlobalStyles'
import swrConfig from '../utils/swrConfig'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
    firebase.analytics()
  }, [])

  return (
    <SWRConfig value={swrConfig}>
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default App
