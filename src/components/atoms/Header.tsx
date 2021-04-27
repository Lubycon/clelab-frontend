import { css } from '@emotion/react'

import { mediaQuery } from '../../lib/styles/media'

export interface HeaderProps {
  title: string
}

function Header({ title }: HeaderProps) {
  return <nav css={headerStyle}>{title}</nav>
}

const headerStyle = css`
  margin-top: 38px;
  margin-bottom: 32px;
  font-size: 24px;
  height: 28px;
  font-weight: 700;
  cursor: default;
  ${mediaQuery(767)} {
    margin-left: 24px;
  }
`

export default Header
