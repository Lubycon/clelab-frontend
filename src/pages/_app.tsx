import { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

import swrConfig from '../utils/swrConfig'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig value={swrConfig}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default App
