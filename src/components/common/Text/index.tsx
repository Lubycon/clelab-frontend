import { css, SerializedStyles } from '@emotion/react'
import React, { ElementType, forwardRef, Ref } from 'react'
import { OverridableProps } from 'utils/elementType'

export const DEFAULT_ELEMENT = 'span' as const

interface TextBaseProps {
  style?: React.CSSProperties
}

export type textProps<
  T extends ElementType = typeof DEFAULT_ELEMENT
> = OverridableProps<T, TextBaseProps>

function Text<T extends ElementType = typeof DEFAULT_ELEMENT>(
  { type, style, children, as, ...rest }: textProps<T>,
  ref: Ref<HTMLElement>,
) {
  const target = as ?? DEFAULT_ELEMENT
  const Component = target
  const typographyStyle = typoStyles[target as string]

  return (
    <Component
      ref={ref}
      css={[wrapper, typographyStyle]}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  )
}

const wrapper = css`
  font-weight: normal;
  cursor: default;
`

/** TODO typo style 재정의 필요 */
const typoStyles: { [key: string]: SerializedStyles } = {
  h1: css`
    font-size: 6rem;
    font-weight: bold;
    line-height: 1.5;
  `,
  h2: css`
    font-size: 4rem;
    font-weight: bold;
    line-height: 1.5;
  `,
  h3: css`
    line-height: 1.5;
    margin: 0;
    font-size: 17px;
    font-weight: bold;
  `,
  h4: css`
    font-size: 2.25rem;
    margin: 0;
    font-weight: bold;
    line-height: 1.5;
  `,
  h5: css`
    font-size: 1.5rem;
    margin: 0;
    font-weight: bold;
    line-height: 1.5;
  `,
  h6: css`
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
    margin: 0;
  `,
  p: css`
    margin: 0;
    font-size: 12px;
    font-weight: 500;
  `,
  span: css`
    font-size: 15px;
  `,
  header: css`
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
    margin: 0;
  `,
}

export default forwardRef(Text) as typeof Text
