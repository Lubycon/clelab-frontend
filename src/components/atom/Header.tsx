import { css } from '@emotion/react'

export type HeaderProps = {
  title: string
}

function Header({ title }: HeaderProps) {
  return <div css={headerStyle}>{title}</div>
}

const headerStyle = css`
  margin-top: 2.375rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  height: 1.75rem;
  font-weight: 700;
  cursor: default;
`

export default Header
