import { css } from '@emotion/react'
import { useRouter } from 'next/dist/client/router'
import { MouseEvent, ReactNode, useCallback } from 'react'

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
  onClick,
  ...rest
}: IconButtonProps) {
  const router = useRouter()

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      onClick?.(e)
      buttonLinkType === 'external' ? window.open(to) : router.push(to)
    },
    [to, router, buttonLinkType, onClick],
  )

  return (
    <Button onClick={handleClick} {...rest}>
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
