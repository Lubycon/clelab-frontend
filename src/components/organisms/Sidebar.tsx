import { css } from '@emotion/react'
import SidebarItem from 'components/atoms/SidebarItem'
import Text from 'components/atoms/Text'
import { SectionItem, SectionList } from 'hooks/api/useGetSections'
import media from 'lib/styles/media'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useEffect } from 'react'

import { useToggle } from '../../hooks/useToggle'
import palette from '../../lib/styles/palette'
import Button from '../atoms/Button'
import Modal from '../atoms/Modal'
import Sticky from '../atoms/Sticky'
import SubcribeForm from '../atoms/SubcribeForm'

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
  const [toggle, set] = useToggle(false)


  useEffect(() => {
    // 사이드바가 열렸을 때 상위영역 스크롤 방지
    if(isMobile) {
      document.body.style.overflow = 'hidden';
    }

    return () => document.body.removeAttribute('style');
  }, [])
  return (
    <>
      <div css={sidebarStyle(isMobile, !router.query.sectionId)}>
        {!isMobile && (
          <>
            <Text as="p" style={{ fontFamily: 'Archivo', color: '#9696a4' }}>
              COURSE
            </Text>
            <div css={curriculumNameStyle}>{sectionList.curriculum.title}</div>
          </>
        )}
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
        <Sticky isMobile={isMobile} bottom={isMobile ? 0 : 15}>
          <Button
            size={isMobile ? 'full' : 'medium'}
            variant="primary"
            onClick={set}
            style={
              isMobile
                ? {
                    textAlign: 'center',
                    borderRadius: 0,
                    background: '#6D3DF7',
                  }
                : { background: '#6D3DF7', width: '214px' }
            }
          >
            <Text
              as="h6"
              style={{
                fontSize: '16px',
                color: palette.white,
              }}
            >
              Clelab 소식 받아보기 👏
            </Text>
          </Button>
        </Sticky>
      </div>
      <Modal isOpen={toggle} style={{ backgroundColor: `${palette.solid}` }}>
        <SubcribeForm onClose={set} />
      </Modal>
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
      color: #3ac8e8;
    }
    font-weight: bold;
  `}
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
  margin-top: 24px;
  font-family: 'Noto Sans KR';
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
