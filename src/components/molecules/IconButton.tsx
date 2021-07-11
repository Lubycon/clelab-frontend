import { css } from '@emotion/react'
import Button, { ButtonProps } from 'components/atoms/Button'
import { useRouter } from 'next/dist/client/router'
import { MouseEvent, ReactNode, useCallback } from 'react'
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
      {right && <div css={svgIconStyle}>{right}</div>}
    </Button>
  )
}

const contentWrapperStyle = css`
  display: flex;
  flex-direction: column;
  padding-right: 30px;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
`
const svgIconStyle = css`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  svg {
    vertical-align: middle;
  }
`

export default IconButton
