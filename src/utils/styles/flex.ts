import { css } from '@emotion/react'

interface FlexOptions {
  justifyContent?: 'flex-start' | 'space-between' | 'flex-end' | 'center'
  alignItems?: 'flex-start' | 'center' | 'flex-end'
  flexDirection?: 'column' | 'row'
}

export function flex({
  justifyContent,
  alignItems,
  flexDirection,
}: FlexOptions = {}) {
  return css`
    display: flex;
    ${justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
    ${alignItems &&
    css`
      align-items: ${alignItems};
    `}
   ${flexDirection &&
    css`
      flex-direction: ${flexDirection};
    `}
  `
}
