import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

import media, { mediaQuery } from '../../lib/styles/media'
import Header from '../atoms/Header'

export interface LayoutProps {
  style?: React.CSSProperties
  className?: string
  hasHeader?: boolean
}
export interface SideProps {}
export interface MainProps {}

const containerStyle = css`
  display: flex;
  height: 100vh;
`
const mainStyle = css`
  flex: 1;
  ${media.medium} {
    width: 768px;
  }
  ${media.small} {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
`
const sidebarStyle = css`
  background: #f8f8f9;
  padding-left: 284px;
  width: 266px;
  height: 100%;
  display: flex;
  padding-top: 38px;
  padding-bottom: 48px;
  ${mediaQuery(1440)} {
    padding-left: 160px;
  }
  ${mediaQuery(1056)} {
    padding-left: 80px;
  }

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
    <>
      {hasHeader && <Header title="Front End" />}
      <div css={containerStyle}>{children}</div>
    </>
  )
}
Layout.Side = Side
Layout.Main = Main
export default Layout
