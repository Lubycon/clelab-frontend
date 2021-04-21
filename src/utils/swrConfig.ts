import { SWRConfiguration } from 'swr/dist/types'

/** Global swrConfig configuration */
const swrConfig: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  revalidateOnMount: true,
}

export default swrConfig
