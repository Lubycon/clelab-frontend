import { css, Global } from '@emotion/react'
import { getFontFamilyWithFallbackFont } from 'lib/styles/font'

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
          font-family: ${getFontFamilyWithFallbackFont([
            'Noto Sans KR',
            'Archivo',
          ])};
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
    ]}
  />
)
