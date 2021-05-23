import { AmplitudeClient } from 'amplitude-js'

const API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_KEY
let amplitudeClient: AmplitudeClient | null = null
let initialized = false

export const getAmplitudeClient = (): Promise<AmplitudeClient | null> => {
  return new Promise((resolve) => {
    if (initialized) {
      resolve(amplitudeClient)

      return
    }

    require('amplitude-js').init(
      API_KEY,
      'unknown',
      {},
      async (client: AmplitudeClient) => {
        initialized = true
        amplitudeClient = client
        resolve(client)
      },
    )
  })
}
