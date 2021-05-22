import { css } from '@emotion/react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

import { SectionItem, SectionList } from '../../hooks/api/useGetSections'
import media from '../../lib/styles/media'
import SidebarItem from '../atoms/SidebarItem'
import Text from '../atoms/Text'

interface SidebarProps {
  isMobile?: boolean
  sectionList: SectionList
  onClickSectionItem?: (sectionItem: SectionItem) => void
}

function Sidebar({
  isMobile = false,
  sectionList,
  onClickSectionItem,
}: SidebarProps) {
  const router = useRouter()
  const courseId = router.query.courseId

  /* FIXME  */
  return (
    <div css={sidebarStyle(isMobile)}>
      {!isMobile && (
        <>
          <Text as="p" style={{ fontFamily: 'Archivo', color: '#9696a4' }}>
            CURRICULUM
          </Text>
          <div css={curriculumNameStyle}>{sectionList.curriculum.title}</div>
        </>
      )}
      {/* FIXME */}
      <div
        css={introTitleStyle(isMobile)}
        onClick={() =>
          onClickSectionItem?.({
            id: -1,
            title: '왜 배워야할까',
            order: -1,
          })
        }
      >
        <Link href={`/course/${courseId}`}>왜 배워야 할까?🤔</Link>
      </div>
      <ul css={sectionMenuStyle(isMobile)}>
        {sectionList?.sections.map((item: SectionItem) => (
          <SidebarItem
            key={item.id}
            sectionItem={item}
            onClick={onClickSectionItem}
          />
        ))}
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
