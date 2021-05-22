import { useRouter } from 'next/router'

export function useRouterQuery(key: string) {
  const router = useRouter()
  const value = router.query[key] as string

  return value
}
