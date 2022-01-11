import { useCallback, useState } from 'react'

export function useModal(): [boolean, () => void, () => void] {
  const [isOpened, setIsOpened] = useState(false)

  const show = useCallback(() => setIsOpened(true), [])
  const hide = useCallback(() => setIsOpened(false), [])

  return [isOpened, show, hide]
}
