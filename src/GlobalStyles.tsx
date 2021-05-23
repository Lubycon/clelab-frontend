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
    ]}
  />
)
