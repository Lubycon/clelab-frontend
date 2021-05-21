import { css } from '@emotion/react'

import LayoutResponsive from '../templates/LayoutResponsive'

export interface HeaderProps {
  title: string
}

function Header({ title }: HeaderProps) {
  return (
    <nav css={headerStyle}>
      <LayoutResponsive>{title}</LayoutResponsive>
    </nav>
  )
}

const headerStyle = css`
  display: flex;
  flex: 1;
  align-items: center;
  background: linear-gradient(
    90deg,
    #d3858a 0%,
    #d66b88 29.69%,
    #b89cc6 52.08%,
    #9bafce 63.54%,
    #64b0cb 100%
  );
  font-family: Archivo;
  margin-bottom: 32px;
  height: 48px;
  color: white;
  font-weight: bold;
  font-size: 20px;
`

export default Header
