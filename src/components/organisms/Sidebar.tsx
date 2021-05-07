import { css } from '@emotion/react'

import media from '../../lib/styles/media'
import SidebarItem from '../atoms/SidebarItem'
import Text from '../atoms/Text'

interface SidebarProps {
  isMobile?: boolean
}

function Sidebar({ isMobile = false }: SidebarProps) {
  /* FIXME  */
  return (
    <div css={sidebarStyle(isMobile)}>
      {!isMobile && (
        <>
          <Text as="p" style={{ fontFamily: 'Archivo', color: '#9696a4' }}>
            CURRICULUM
          </Text>
          <div css={curriculumNameStyle}>HTML</div>
        </>
      )}
      {/* FIXME */}
      <div css={introTitleStyle(isMobile)}>왜 배워야 할까?🤔</div>
      <ul css={sectionMenuStyle(isMobile)}>
        <SidebarItem to="1" text="01 기술소개" />
        <SidebarItem to="2" text="02 기본문법" />
        <SidebarItem to="3" text="03 하이퍼텍스트와 속성" />
        <SidebarItem to="4" text="04 문서의 구조" />
        <SidebarItem to="5" text="05 기술소개" />
        <SidebarItem to="6" text="06 기본문법" />
        <SidebarItem to="7" text="07 하이퍼텍스트와 속성" />
        <SidebarItem to="8" text="08 문서의 구조" />
        <SidebarItem to="9" text="09 기술소개" />
        <SidebarItem to="10" text="10 기본문법" />
        <SidebarItem to="11" text="11 하이퍼텍스트와 속성" />
        <SidebarItem to="12" text="12 문서의 구조" />
        <SidebarItem to="13" text="13 Doctype" />
        <SidebarItem to="14" text="14 웹사이트 만들기" />
        <SidebarItem to="15" text="15 개발도구" />
        <SidebarItem to="16" text="16 HTML의 변천사와 통계" />
      </ul>
    </div>
  )
}

const sidebarStyle = (isMobile: boolean) => css`
  cursor: default;
  z-index: 15;
  flex: 1;
  height: calc(100vh - 84px);
  display: flex;
  flex-direction: column;
  ${media.medium} {
    display: none;
  }

  ${isMobile &&
  css`
    cursor: default;
    position: absolute;
    background: #f8f8f9;
    width: 100%;
    top: 84px;
    flex-direction: column;
    justify-content: center;
    display: none;

    ${media.medium} {
      display: flex;
    }
  `}
`

const curriculumNameStyle = css`
  font-family: Archivo;
  font-size: 20px;
  font-weight: bold;
  color: #282828;
`

const introTitleStyle = (isMobile: boolean) => css`
  margin-top: 21px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;

  ${isMobile &&
  css`
    padding-left: 44px;
  `}
`

const sectionMenuStyle = (isMobile: boolean) => css`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  flex: 1;

  ${isMobile &&
  css`
    padding-left: 44px;
  `}
`

export default Sidebar
