import useSWR from 'swr'

import { fetcher } from '../lib/api/fetch'

const key = 'https://api.hnpwa.com/v0/ask.json'

export default function useSampleFetch() {
  return useSWR<any>(key, fetcher)
}
