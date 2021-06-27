import { css } from '@emotion/react'
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'

export const getScrollTop = () => {
  if (!document.body) return 0

  return document.documentElement
    ? document.documentElement.scrollTop || document.body.scrollTop
    : document.body.scrollTop
}

const stickyBlock = css`
  width: 100%;
`

export interface StickyProps {
  bottom: number
  className?: string
  children: ReactNode
}

function Sticky({ className, bottom, children }: StickyProps) {
  const [y, setY] = useState(0)
  const element = useRef<HTMLDivElement>(null)
  const [fixed, setFixed] = useState(true)

  const setup = useCallback(() => {
    if (!element.current) return
    const pos = element.current.getBoundingClientRect()
    setY(pos.top + getScrollTop())
  }, [])

  useEffect(() => {
    const scrollTop = getScrollTop()
    const nextFixed = scrollTop + 112 > y
    if (scrollTop === 0) {
      setFixed(nextFixed)
    }

    return () => {
      setY(0)
    }
  }, [y])

  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop()
    const nextFixed = scrollTop + 112 > y
    if (fixed !== nextFixed) {
      setFixed(nextFixed)
    }
  }, [fixed, y])

  useEffect(() => {
    setup()
  }, [setup])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [onScroll])

  return (
    <div
      css={stickyBlock}
      ref={element}
      className={className}
      style={{
        width: 'auto',
        position: fixed ? 'fixed' : 'static',
        bottom: fixed ? `${bottom}px` : undefined,
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  )
}

export default Sticky
