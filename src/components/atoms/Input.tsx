import { css } from '@emotion/react'
import React, { useCallback, useRef, useState } from 'react'

import palette from '../../lib/styles/palette'
import InputBase from './InputBase'

export type InputProps = {
  disabled?: boolean
  comment?: string
} & React.InputHTMLAttributes<HTMLInputElement>

function Input({ className, comment, disabled = false, ...rest }: InputProps) {
  const ref = useRef<HTMLInputElement>(null)

  const [focus, setFocus] = useState(false)
  const onFocus = useCallback(() => {
    setFocus(true)
  }, [])
  const onBlur = useCallback(() => {
    setFocus(false)
  }, [])

  return (
    <InputBase
      css={wrapper(focus, !!comment)}
      onClick={() => ref.current?.focus()}
      className={className}
      disabled={disabled}
      comment={comment}
    >
      <input
        onFocus={onFocus}
        onBlur={onBlur}
        css={style}
        ref={ref}
        disabled={disabled}
        {...rest}
      />
    </InputBase>
  )
}

const wrapper = (focus?: boolean, error?: boolean) => css`
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: text;
  background: rgba(248, 248, 249, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  ${focus &&
  css`
    border: 1px solid ${palette.black};
  `}
  ${error &&
  css`
    border: 1px solid ${palette.solid.error};
  `}
`

const style = css`
  flex: 1;
  border: none;
  color: inherit;
  background: none;
  outline: none;
  font-size: inherit;
  &::placeholder {
    color: #ffffff;
    opacity: 0.5;
  }
  &:disabled {
    cursor: not-allowed;
    color: inherit;
  }
`

export default Input
