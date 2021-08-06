import { css } from '@emotion/react'
import Icon from 'components/atoms/Icon'
import MainLogo from 'components/atoms/MainLogo'
import Text from 'components/atoms/Text'
import { SectionList } from 'hooks/api/useGetSections'
import { useToggle } from 'hooks/useToggle'
import palette from 'lib/styles/palette'

import Sidebar from './Sidebar'

export interface MobileHeaderProps {
  courseName: string
  sectionList: SectionList
}

function MobileSectionHeader({ courseName, sectionList }: MobileHeaderProps) {
  const [showOption, toggleOptions] = useToggle(false)

  return (
    <>
      {showOption ? (
        <header css={[common(showOption), headerStyle]}>
          <div css={headerTitleStyle}>
            <Text
              as="p"
              style={{
                fontFamily: 'Archivo',
                color: '#9696a4',
                paddingTop: '1.25rem',
                letterSpacing: '0.1em',
              }}
            >
              COURSE
            </Text>
            <div css={curriculumNameStyle}>{courseName}</div>
          </div>
          <div css={toggleBorderBox} onClick={toggleOptions}>
            <Icon name="closeBold" />
          </div>
          <Sidebar sectionList={sectionList} isMobile />
        </header>
      ) : (
        <header css={[common(showOption), headerStyle]}>
          <MainLogo isMobile />
          <div css={toggleBorderBox} onClick={toggleOptions}>
            <Icon name="menu" />
          </div>
        </header>
      )}
    </>
  )
}

const common = (isLogo?: boolean) => css`
  margin-left: auto;
  margin-right: auto;
  background-color: #f8f8f9;
  ${!isLogo &&
  css`
    background-color: ${palette.white};
  `}
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const headerStyle = css`
  position: fixed;
  min-height: 84px;
  align-items: center;
  width: 100%;
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
  margin-top: 4px;
  color: ${palette.solid.dark};
  width: 200px;
`

const toggleBorderBox = css`
  margin-right: 1.25rem;
  width: 36px;
  height: 36px;
  background: rgba(0, 133, 255, 0.1);
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: 1px solid #0085ff;
`

export default MobileSectionHeader
