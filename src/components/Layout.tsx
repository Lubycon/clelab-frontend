import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

import media from '../lib/styles/media'
import Header from './atom/Header'

export type LayoutProps = {
  style?: React.CSSProperties
  className?: string
  hasHeader?: boolean
}
export type SideProps = {}
export type MainProps = {}

const containerStyle = css`
  main {
    height: 100vh;
    display: flex;
  }
`
const mainStyle = css`
  flex: 1;
  background: red;
  ${media.medium} {
    width: 768px;
  }
  ${media.small} {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`
const sidebarStyle = css`
  width: 550px;
  background: #f8f8f9;
  ${media.medium} {
    display: none;
  }
`

function Side({ children }: PropsWithChildren<SideProps>) {
  return <aside css={sidebarStyle}>{children}</aside>
}

function Main({ children }: PropsWithChildren<MainProps>) {
  return <main css={mainStyle}>{children}</main>
}

function Layout({ children, hasHeader }: PropsWithChildren<LayoutProps>) {
  return (
    <div css={containerStyle}>
      {hasHeader && <Header title="Front End" />}
      <main>{children}</main>
    </div>
  )
}
Layout.Side = Side
Layout.Main = Main
export default Layout
