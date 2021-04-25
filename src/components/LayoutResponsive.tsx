import { PropsWithChildren } from 'react'
import { css } from '@emotion/react'

import { mediaQuery } from '../lib/styles/media'

export type LayoutResponsiveProps = {
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
  margin-left: auto;
  margin-right: auto;
  ${mediaQuery(1920)} {
    width: 1352px;
  }
  ${mediaQuery(1440)} {
    width: 1280px;
  }
  ${mediaQuery(1312)} {
    width: 912px;
  }
  ${mediaQuery(944)} {
    width: calc(100% - 2rem);
  }
  ${mediaQuery(767)} {
    width: calc(100% - 2rem);
  }
`

export default LayoutResponsive
