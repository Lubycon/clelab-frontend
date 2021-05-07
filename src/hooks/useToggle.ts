import { useCallback, useState } from 'react'

export function useToggle(defaultValue: boolean) {
  const [value, setValue] = useState(defaultValue)
  const onToggle = useCallback(() => {
    setValue(!value)
  }, [value])

  const result: [boolean, VoidFunction] = [value, onToggle]

  return result
}
