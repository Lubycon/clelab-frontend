import { css } from '@emotion/react'
import { mediaQuery } from 'lib/styles/media'
import { PropsWithChildren } from 'react'

export interface LayoutResponsiveProps {
  className?: string
}

function LayoutResponsive({
  className,
  children,
}: PropsWithChildren<LayoutResponsiveProps>) {
  return (
    <div css={layoutStyle} className={className}>
      {children}
    </div>
  )
}

const layoutStyle = css`
  width: 1364px;
  margin: 0 auto;
  ${mediaQuery(1440)} {
    width: 1280px;
  }
  ${mediaQuery(1440)} {
    width: 1024px;
  }
  ${mediaQuery(1056)} {
    width: calc(100% - 32px);
  }
  ${mediaQuery(767)} {
    width: calc(100% - 48px);
  }
`

export default LayoutResponsive
