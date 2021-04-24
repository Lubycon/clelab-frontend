import { get } from './client'

export async function fetcher<T>(path: string) {
  const response = await get<T>(path)

  return response
}
