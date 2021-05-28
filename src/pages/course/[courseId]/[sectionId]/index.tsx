import { css } from '@emotion/react'
import Head from 'next/head'
import { useCallback, useEffect } from 'react'

import Icon from '../../../../components/atoms/Icon'
import Text from '../../../../components/atoms/Text'
import IconButton from '../../../../components/molecules/IconButton'
import SectionRow from '../../../../components/molecules/SectionRow'
import StickyButton from '../../../../components/molecules/StickyButton'
import MobileSectionHeader from '../../../../components/organisms/MobileSectionHeader'
import Sidebar from '../../../../components/organisms/Sidebar'
import Layout from '../../../../components/templates/Layout'
import LayoutResponsive from '../../../../components/templates/LayoutResponsive'
import useSectionDetail, {
  Blog,
  Section,
} from '../../../../hooks/api/useGetSectionDetail'
import useGetSections, {
  SectionItem,
} from '../../../../hooks/api/useGetSections'
import { useRouterQuery } from '../../../../hooks/useRouterQuery'
import { mediaQuery } from '../../../../lib/styles/media'
import palette from '../../../../lib/styles/palette'
import { generateLogger } from '../../../../utils/logger'

const logger = generateLogger('section_page')

const generateSectionLink = (courseId: string, sectionId: string) =>
  `/course/${courseId}/${sectionId}`

const getSectionLink = (courseId: string, section?: Section) => {
  return section != null
    ? generateSectionLink(courseId, String(section.id))
    : undefined
}

const SectionPage = () => {
  const courseId = useRouterQuery('courseId')
  const sectionId = useRouterQuery('sectionId')

  const { data } = useGetSections(courseId)
  const { data: sectionDetail } = useSectionDetail(courseId, sectionId)

  const prevSectionLink =
    getSectionLink(courseId, sectionDetail?.prevSection) ??
    generateSectionLink(courseId, '')

  const nextSectionLink = getSectionLink(courseId, sectionDetail?.nextSection)

  const handleSectionItemClick = useCallback(
    ({ id, title }: SectionItem) => {
      logger.click('click_section_item_in_sidebar', {
        courseId,
        sectionId: id,
        sectionTitle: title,
      })
    },
    [courseId],
  )

  const handleBlogClick = useCallback(
    ({ title, link }: Blog) => {
      logger.click('click_blog_link', {
        title,
        link,
        courseId,
        sectionId,
      })
    },
    [courseId, sectionId],
  )

  const handleNavigationClick = useCallback(
    (clickedSection: Section, direction: 'next' | 'prev') => () => {
      logger.click('click_navigation_button', {
        clickedSectionId: clickedSection?.id ?? '',
        clickedSectionTitle: clickedSection?.title,
        direction,
        courseId,
        sectionId,
      })
    },
    [courseId, sectionId],
  )

  useEffect(() => {
    if (courseId == null || sectionId == null) {
      return
    }

    logger.view({
      courseId,
      sectionId,
    })
  }, [courseId, sectionId])

  if (!sectionDetail || !data) return null

  return (
    <>
      <Head>
        <title>{sectionDetail.title}</title>
        <meta
          name="keywords"
          content={sectionDetail.blogs.map((e) => e.title).join(', ')}
        />
        <meta name="description" content={sectionDetail.description} />
      </Head>
      <MobileSectionHeader
        sectionList={data}
        courseName={data.curriculum.title}
      />
      <LayoutResponsive>
        <Layout>
          <Layout.Side>
            <Sidebar
              sectionList={data}
              onClickSectionItem={handleSectionItemClick}
            />
          </Layout.Side>
          <Layout.Main>
            <>
              <div css={containerStyle}>
                <SectionRow
                  title={sectionDetail.title}
                  description={sectionDetail.description}
                />
                <div css={blogListStyle}>
                  {sectionDetail.blogs.map((item) => (
                    <IconButton
                      css={blogButtonStyle}
                      buttonLinkType="external"
                      key={item.link}
                      to={item.link}
                      size="full"
                      variant="lightBlue"
                      right={<Icon name="arrow" />}
                      onClick={() => handleBlogClick(item)}
                    >
                      {item.title}
                    </IconButton>
                  ))}
                </div>
              </div>
              <StickyButton>
                <IconButton
                  buttonLinkType="internal"
                  size="small"
                  to={prevSectionLink}
                  variant="secondary"
                  onClick={handleNavigationClick(
                    sectionDetail.prevSection,
                    'prev',
                  )}
                >
                  <Icon name="back" />
                </IconButton>
                {nextSectionLink ? (
                  <IconButton
                    buttonLinkType="internal"
                    size="large"
                    variant="primary"
                    to={nextSectionLink}
                    right={<Icon name="arrow" />}
                    style={{
                      background: '#00BCE5',
                      color: 'white',
                    }}
                    onClick={handleNavigationClick(
                      sectionDetail.nextSection,
                      'next',
                    )}
                  >
                    <Text
                      as="p"
                      style={{
                        color: palette.solid.secondary,
                        alignSelf: 'flex-start',
                      }}
                    >
                      Next
                    </Text>
                    <Text
                      as="h6"
                      css={nextButtonTextStyle}
                      style={{
                        fontSize: '14px',
                      }}
                    >
                      {sectionDetail.nextSection?.title ?? ''}
                    </Text>
                  </IconButton>
                ) : null}
              </StickyButton>
            </>
          </Layout.Main>
        </Layout>
      </LayoutResponsive>
    </>
  )
}

const containerStyle = css`
  padding-left: 78px;
  padding-top: 105px;
  box-sizing: border-box;
  padding-bottom: 30px;
  ${mediaQuery(767)} {
    height: 100vh;
    padding-left: 0;
    padding-top: 94px;
    padding-bottom: 150px;
    overflow: scroll;
    justify-content: center;
  }
`

const nextButtonTextStyle = css`
  text-align: left;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const blogListStyle = css`
  display: flex;
  margin: -12px;
  flex-wrap: wrap;
  ${mediaQuery(767)} {
    margin: 0;
    justify-content: center;
  }
`

const blogButtonStyle = css`
  margin: 12px;
  ${mediaQuery(767)} {
    margin: 6px 0;
  }
  transition: 0.3s box-shadow ease-in, 0.3s transform ease-in;
  &:hover {
    background: #ffffff;
    border: 1px solid #3ac8e8;
    transform: translateY(-2px);
    box-shadow: 2px 4px 20px rgba(58, 200, 232, 0.25),
      0px 2px 3px rgba(0, 0, 0, 0.04);
  }
  &:active {
    background: #ebfafd;
    border: 2px solid #3ac8e8;
  }
`

export default SectionPage
