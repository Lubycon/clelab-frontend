import { css } from '@emotion/react'
import LayoutResponsive from 'components/templates/LayoutResponsive'
import media from 'lib/styles/media'

import Text from './Text'
import Timer from './Timer'

function Banner() {
  return (
    <div css={style}>
      <LayoutResponsive>
        <div css={containerStyle}>
          <div css={logoStyle}>Clelab</div>
          <div css={contentStyle}>
            <Timer intervalTime={500} />
            <Text css={contentDescriptionStyle}>나를 발전시키는 시간</Text>
          </div>
        </div>
      </LayoutResponsive>
    </div>
  )
}

const style = css`
  background: #e6e7ec;
  padding: 20px 0 51px 0;
  ${media.medium} {
    padding-bottom: 38px;
  }
`
const containerStyle = css`
  display: flex;
  color: #282828;
  ${media.medium} {
    flex-direction: column;
  }
`

const logoStyle = css`
  flex: 1;
  opacity: 0.7;
`

const contentStyle = css`
  font-family: Archivo;
  font-size: 24px;
  padding-top: 30px;
  display: flex;
  align-items: center;
  ${media.medium} {
    padding-top: 1rem;
    justify-content: center;
    flex-direction: column;
  }
`

const contentDescriptionStyle = css`
  font-size: 18px;
  margin-top: 9px;
  margin-left: 50px;
  ${media.medium} {
    margin-left: 0;
  }
`

export default Banner
