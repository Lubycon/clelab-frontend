import { css } from '@emotion/react'
import Header from 'components/common/Header'
import media from 'lib/styles/media'
import { PropsWithChildren } from 'react'

export interface LayoutProps {
  style?: React.CSSProperties
  className?: string
  hasHeader?: boolean
}
export interface SideProps {}
export interface MainProps {}

const containerStyle = css`
  display: flex;
  height: 100%;
`
const mainStyle = css`
  flex: 1;
  position: relative;
  ${media.medium} {
    width: 768px;
  }
  ${media.small} {
    width: 100%;
  }
`
const sidebarStyle = css`
  width: 290px;
  height: 100%;
  display: flex;
  padding-top: 38px;
  padding-bottom: 48px;
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
