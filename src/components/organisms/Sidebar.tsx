import { css } from '@emotion/react'
import MainLogo from 'components/atoms/MainLogo'
import SidebarItem from 'components/atoms/SidebarItem'
import Text from 'components/atoms/Text'
import { SectionItem, SectionList } from 'hooks/api/useGetSections'
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useEffect } from 'react'

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
  const courseSlug = router.query.courseSlug

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = 'hidden'
    }

    return () => document.body.removeAttribute('style')
  }, [isMobile])

  return (
    <>
      <nav css={sidebarStyle(isMobile, !router.query.sectionSlug)}>
        {!isMobile && (
          <>
            <MainLogo />
            <Text as="p" style={{ fontFamily: 'Archivo', color: '#9696a4' }}>
              COURSE
            </Text>
            <Text as="header" css={curriculumNameStyle}>
              {sectionList.curriculum.title}
            </Text>
          </>
        )}
        <div
          css={introTitleStyle(isMobile)}
          onClick={() =>
            onClickSectionItem?.({
              id: -1,
              title: '왜 배워야할까',
              order: -1,
              urlSlug: '',
            })
          }
        >
          <Link href={`/course/${courseSlug}`}>왜 배워야 할까?🤔</Link>
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
      </nav>
    </>
  )
}

const sidebarStyle = (isMobile: boolean, active: boolean) => css`
  font-weight: bold;
  cursor: default;
  z-index: 15;
  flex: 1;
  height: calc(100vh - 84px);
  display: flex;
  flex-direction: column;
  ${active &&
  css`
    a {
      color: ${palette.brandColor};
    }
    font-weight: bold;
  `}
  ${media.medium} {
    display: none;
  }

  ${isMobile &&
  css`
    cursor: default;
    position: fixed;
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
  margin-top: 8px;
  color: ${palette.solid.dark};
`

const introTitleStyle = (isMobile: boolean) => css`
  margin-top: 24px;
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
