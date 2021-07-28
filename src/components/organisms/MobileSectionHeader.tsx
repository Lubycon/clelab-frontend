import { css } from '@emotion/react'
import Icon from 'components/atoms/Icon'
import Text from 'components/atoms/Text'
import { SectionList } from 'hooks/api/useGetSections'
import { useToggle } from 'hooks/useToggle'
import media from 'lib/styles/media'

import palette from '../../lib/styles/palette'
import Sidebar from './Sidebar'

export interface MobileHeaderProps {
  courseName: string
  sectionList: SectionList
}

function MobileSectionHeader({ courseName, sectionList }: MobileHeaderProps) {
  const [showOption, toggleOptions] = useToggle(false)

  return (
    <>
      <header css={[common, headerStyle]}>
        <div css={headerTitleStyle}>
          <Text as="p" style={{ fontFamily: 'Archivo', color: '#9696a4' }}>
            COURSE
          </Text>
          <div css={curriculumNameStyle}>{courseName}</div>
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
      {showOption && <Sidebar sectionList={sectionList} isMobile />}
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
  background: ${palette.white};
  z-index: 30;
  a {
    display: block;
  }
`
const headerTitleStyle = css`
  margin-left: 24px;
`

const curriculumNameStyle = css`
  font-family: Archivo;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  color: ${palette.solid.dark};
  width: 200px;
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
