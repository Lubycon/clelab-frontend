import { css } from '@emotion/react'
import { ReactNode, useCallback } from 'react'

import Button, { ButtonProps } from '../atoms/Button'
export type ButtonVariant = 'primary'

export interface IconButtonProps extends ButtonProps {
  left?: ReactNode
  right?: ReactNode
  to?: string
}

function IconButton({
  left,
  right,
  title,
  to,
  children,
  ...rest
}: IconButtonProps) {
  const handleGoBlog = useCallback(() => {
    window.open(to)
  }, [to])

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
