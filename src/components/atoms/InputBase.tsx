import { css } from '@emotion/react'
import React, { forwardRef } from 'react'

import Text from './Text'

export type InputBaseProps = {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  disabled?: boolean
  comment?: string
} & React.HTMLAttributes<HTMLDivElement>

function InputBase(
  {
    className,
    style,
    children,
    disabled = false,
    comment,
    ...rest
  }: InputBaseProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div css={container}>
      <div
        css={wrapper(disabled)}
        style={style}
        className={className}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
      {comment && (
        <Text as="p" style={{ color: 'red' }}>
          {comment}
        </Text>
      )}
    </div>
  )
}

const container = css`
  & + & {
    margin-top: 1.5rem;
  }
`

const wrapper = (disabled: boolean) => css`
  background: white;
  display: flex;
  outline: none;
  width: 260px;
  height: 48px;
  border: 1px solid #d9dae2;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 14px;
  ${disabled &&
  css`
    opacity: 0.4;
    cursor: not-allowed;
  `};
`

export default forwardRef<HTMLDivElement, InputBaseProps>(InputBase)
