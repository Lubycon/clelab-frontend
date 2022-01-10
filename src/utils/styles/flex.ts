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
    ${justifyContent != null
      ? css`
          justify-content: ${justifyContent};
        `
      : undefined}
    ${alignItems != null
      ? css`
          align-items: ${alignItems};
        `
      : undefined}
   ${flexDirection != null
      ? css`
          flex-direction: ${flexDirection};
        `
      : undefined}
  `
}
