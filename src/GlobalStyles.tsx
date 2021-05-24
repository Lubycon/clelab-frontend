import { css, Global } from '@emotion/react'

export const GlobalStyle = () => (
  <Global
    styles={[
      css`
        * {
          box-sizing: inherit;
        }
        body {
          background-color: #ffffff;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-family: 'Noto Sans KR';
          -ms-user-select: none;
          -moz-user-select: -moz-none;
          -khtml-user-select: none;
          -webkit-user-select: none;
          user-select: none;
        }
        html,
        body,
        #root {
          height: 100%;
          font-size: 100%;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
      `,
      baseFont,
    ]}
  />
)

const baseFont = css`
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/NotoSansKR-Regular.woff2') format('woff2'),
      url('/fonts/NotoSansKR-Regular.woff') format('woff'),
      url('/fonts/NotoSansKR-Regular.otf') format('opentype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/NotoSansKR-Medium.woff2') format('woff2'),
      url('/fonts/NotoSansKR-Medium.woff') format('woff'),
      url('/fonts/NotoSansKR-Medium.otf') format('opentype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/NotoSansKR-Bold.woff2') format('woff2'),
      url('/fonts/NotoSansKR-Bold.woff') format('woff'),
      url('/fonts/NotoSansKR-Bold.otf') format('opentype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/NotoSansKR-Bold.woff2') format('woff2'),
      url('/fonts/NotoSansKR-Bold.woff') format('woff'),
      url('/fonts/NotoSansKR-Bold.otf') format('opentype');
    font-display: swap;
  }
`
