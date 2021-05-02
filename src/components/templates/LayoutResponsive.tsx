import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

import { mediaQuery } from '../../lib/styles/media'

export interface LayoutResponsiveProps {
  className?: string
  hasSide?: boolean
}

function LayoutResponsive({
  className,
  hasSide = false,
  children,
}: PropsWithChildren<LayoutResponsiveProps>) {
  return (
    <div css={layoutStyle(hasSide)} className={className}>
      {children}
    </div>
  )
}

const layoutStyle = (hasSide: boolean) => css`
  ${!hasSide &&
  css`
    margin-left: auto;
  `}
  margin-right: auto;
  width: 1352px;
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
    width: calc(100% - 40px);
  }
`

export default LayoutResponsive
