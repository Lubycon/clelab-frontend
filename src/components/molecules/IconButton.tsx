import { css } from '@emotion/react'
import { useRouter } from 'next/dist/client/router'
import { ReactNode, useCallback } from 'react'

import Button, { ButtonProps } from '../atoms/Button'
export type ButtonVariant = 'primary'

type buttonLinkType = 'external' | 'internal'
export interface IconButtonProps extends ButtonProps {
  left?: ReactNode
  right?: ReactNode
  to: string
  buttonLinkType?: buttonLinkType
}

function IconButton({
  left,
  right,
  title,
  to,
  buttonLinkType,
  children,
  ...rest
}: IconButtonProps) {
  const router = useRouter()

  const handleGoBlog = useCallback(() => {
    buttonLinkType === 'external' ? window.open(to) : router.push(to)
  }, [to, router, buttonLinkType])

  return (
    <Button onClick={handleGoBlog} {...rest}>
      {left && left}
      <div css={contentWrapperStyle}>{children}</div>
      {right && right}
    </Button>
  )
}

const contentWrapperStyle = css`
  display: flex;
  flex-direction: column;
`

export default IconButton
