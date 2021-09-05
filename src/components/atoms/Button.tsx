import { css } from '@emotion/react'
import media from 'lib/styles/media'
import { buttonColorMap } from 'lib/styles/palette'
import React, { ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'brandColor' | 'secondary'

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
    <button
      onClick={onClick}
      css={[buttonCss(size), variantStyle(variant)]}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

const buttonCss = (size: string) => css`
  position: relative;
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
  &:disabled {
    cursor: not-allowed;
  }
  ${size === 'small' &&
  css`
    width: 58px;
    min-height: 58px;
    font-size: 14px;
  `}

  ${size === 'large' &&
  css`
    max-width: 260px;
    ${media.small} {
      max-width: 100%;
    }
    min-height: 58px;
    font-size: 14px;
    width: 100%;
    flex: 1;
  `}

  ${size === 'full' &&
  css`
    padding-left: 20px;
    text-align: left;
    min-height: 58px;
    font-size: 14px;
    width: 100%;
  `}  
  svg {
    justify-content: flex-end;
  }
`
export const variantStyle = (variant: ButtonVariant) => css`
  background: ${buttonColorMap[variant].background};
  color: ${buttonColorMap[variant].color};
  border: none;
  font-weight: bold;
  line-height: 20px;
  box-sizing: border-box;
  letter-spacing: normal;
  &:hover {
    ${buttonColorMap[variant].hoverBackground};
    transform: scale(1.01);
  }
`
export default Button
