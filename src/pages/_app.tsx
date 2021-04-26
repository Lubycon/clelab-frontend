import { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

import { GlobalStyle } from '../GlobalStyles'
import swrConfig from '../utils/swrConfig'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig value={swrConfig}>
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default App
