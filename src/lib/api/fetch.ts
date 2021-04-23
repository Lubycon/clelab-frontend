import { get } from './client'

export async function fetcher(path: string) {
  const response = await get(path)

  return response
}
