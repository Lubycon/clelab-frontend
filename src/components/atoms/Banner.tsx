import { css } from '@emotion/react'

import media from '../../lib/styles/media'
import LayoutResponsive from '../templates/LayoutResponsive'
import Text from './Text'
import Timer from './Timer'

function Banner() {
  return (
    <>
      <div css={style}>
        <LayoutResponsive>
          <div css={containerStyle}>
            <div css={logoStyle}>Clelab</div>
            <div css={contentStyle}>
              <Timer />
              <Text style={{ fontSize: '18px' }}>나를 발전시키는 시간</Text>
            </div>
          </div>
        </LayoutResponsive>
      </div>
    </>
  )
}

const style = css`
  background: #313647;
  height: 140px;
`
const containerStyle = css`
  display: flex;
  color: white;
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
  padding-top: 3rem;
  display: flex;
  align-items: center;
  ${media.medium} {
    padding-top: 1rem;
    justify-content: center;
    flex-direction: column;
  }
`

export default Banner
