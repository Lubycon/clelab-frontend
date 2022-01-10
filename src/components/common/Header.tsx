import { css } from '@emotion/react'
import LayoutResponsive from 'components/templates/LayoutResponsive'
import palette from 'lib/styles/palette'
import { flex } from 'utils/styles/flex'

import RightContainer from './RightContainer'

export interface HeaderProps {
  title: string
  onShowModal?: () => void
}

function Header({ title, onShowModal }: HeaderProps) {
  return (
    <nav css={headerStyle}>
      <LayoutResponsive>
        <div css={flex()}>
          <div>{title}</div>
          <RightContainer>
            <div onClick={onShowModal} css={rightTextStyle}>
              서버비용 후원하기
            </div>
          </RightContainer>
        </div>
      </LayoutResponsive>
    </nav>
  )
}

const headerStyle = css`
  display: flex;
  flex: 1;
  align-items: center;
  font-family: Archivo;
  margin-bottom: 32px;
  height: 48px;
  color: ${palette.solid.dark};
  font-weight: bold;
  font-size: 20px;
  border-bottom: 1px solid #e0e0e6;
`

const rightTextStyle = css`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #9696a4;
`

export default Header
