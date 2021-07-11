import { css } from '@emotion/react'
import LayoutResponsive from 'components/templates/LayoutResponsive'

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
  font-family: Archivo;
  margin-bottom: 32px;
  height: 48px;
  color: #282828;
  font-weight: bold;
  font-size: 20px;
  border-bottom: 1px solid #e0e0e6;
`

export default Header
