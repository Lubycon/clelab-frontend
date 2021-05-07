import { css } from '@emotion/react'

import { useToggle } from '../../hooks/useToggle'
import media from '../../lib/styles/media'
import Icon from '../atoms/Icon'
import Text from '../atoms/Text'
import Sidebar from './Sidebar'

export interface MobileHeaderProps {
  sectionName: string
}

function MobileSectionHeader({ sectionName }: MobileHeaderProps) {
  const [showOption, toggleOptions] = useToggle(false)

  return (
    <>
      <header css={[common, headerStyle]}>
        <div css={headerTitleStyle}>
          <Text as="p" style={{ fontFamily: 'Archivo', color: '#9696a4' }}>
            CURRICULUM
          </Text>
          <div css={curriculumNameStyle}>{sectionName}</div>
        </div>
        <div css={headerRightWrapper}>
          <div css={headerRight} onClick={toggleOptions}>
            <Text as="p" style={{ color: '#9696a4' }}>
              교육과정 보기
            </Text>
            <Icon name="down" />
          </div>
        </div>
      </header>
      {showOption && <Sidebar isMobile />}
    </>
  )
}

const common = css`
  display: none;
  margin-left: auto;
  margin-right: auto;

  ${media.small} {
    background-color: #f8f8f9;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const headerStyle = css`
  position: fixed;
  height: 84px;
  align-items: center;
  width: 100%;
  background: white;
  z-index: 30;
  a {
    display: block;
  }
`
const headerTitleStyle = css`
  margin-left: 32px;
`

const curriculumNameStyle = css`
  font-family: Archivo;
  font-size: 20px;
  font-weight: bold;
  color: #282828;
`

const headerRightWrapper = css`
  position: absolute;
  top: 0;
  right: 0;
`

const headerRight = css`
  display: flex;
  align-items: center;
  height: 64px;
  padding-right: 16px;
`

export default MobileSectionHeader
