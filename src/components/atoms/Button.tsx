import { css } from '@emotion/react'
import React, { ReactNode } from 'react'

export type ButtonVariant = 'primary'

/** BASIC BUTTON */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: string
  children: ReactNode
}

function Button({
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button onClick={onClick} css={[buttonCss(size), variantStyle]} {...rest}>
      {children}
    </button>
  )
}

const buttonCss = (size: string) => css`
  display: flex;
  width: 320px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  font-weight: bold;
  min-height: 56px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  ${size === 'small' &&
  css`
    min-height: 32px;
    font-size: 14px;
  `}

  ${size === 'large' &&
  css`
    min-height: 52px;
    font-size: 16px;
  `}
  
  svg {
    justify-content: flex-end;
  }
`
export const variantStyle = css`
  background: #ebfafd;
  color: #00b1d8;
  border: none;
  font-weight: bold;
  line-height: 20px;
  box-sizing: border-box;
  letter-spacing: normal;
`
export default Button
