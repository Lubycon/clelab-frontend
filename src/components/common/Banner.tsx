import { css } from '@emotion/react'
import LayoutResponsive from 'components/templates/LayoutResponsive'
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

import Text from './Text'
import Timer from './Timer'

function Banner() {
  return (
    <div css={style}>
      <LayoutResponsive>
        <div css={containerStyle}>
          <div css={logoStyle}>
            <img src="/images/logo.svg" alt="" />
          </div>
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
  padding: 16px 0 54px 0;
  ${media.medium} {
    padding-bottom: 26px;
  }
`
const containerStyle = css`
  display: flex;
  color: ${palette.solid.dark};
  ${media.medium} {
    flex-direction: column;
  }
`

const logoStyle = css`
  flex: 1;
  height: 34px;
`

const contentStyle = css`
  font-family: Archivo;
  font-size: 24px;
  padding-top: 30px;
  display: flex;
  align-items: center;
  ${media.medium} {
    padding-top: 0px;
    display: grid;
    justify-content: flex-end;
    flex-direction: column;
  }
`

const contentDescriptionStyle = css`
  font-size: 24px;
  line-height: 26px;
  margin-left: 50px;
  ${media.medium} {
    justify-content: center;
    margin-left: 0;
  }
`

export default Banner
