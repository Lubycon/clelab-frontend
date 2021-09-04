import { css } from '@emotion/react'
import { logger } from '@lubycon/logger'
import { useWindowSize } from '@lubycon/react'
import Icon from 'components/atoms/Icon'
import Text from 'components/atoms/Text'
import ArticleCard from 'components/molecules/ArticleCard'
import IconButton from 'components/molecules/IconButton'
import SectionRow from 'components/molecules/SectionRow'
import StickyButton from 'components/molecules/StickyButton'
import MobileSectionHeader from 'components/organisms/MobileSectionHeader'
import Sidebar from 'components/organisms/Sidebar'
import Layout from 'components/templates/Layout'
import LayoutResponsive from 'components/templates/LayoutResponsive'
import useSectionDetail, { Blog, Section } from 'hooks/api/useGetSectionDetail'
import useGetSections, { SectionItem } from 'hooks/api/useGetSections'
import { useRouterQuery } from 'hooks/useRouterQuery'
import { useWindowSize } from 'hooks/useWindow'
import { mediaQuery } from 'lib/styles/media'
import palette from 'lib/styles/palette'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import { courseRedirectUrl } from 'utils/redirectUrl'

const sectionPageLogger = logger.getPageLogger('section_page')

const generateSectionLink = (courseSlug: string, sectionSlug: string) =>
  `/course/${courseSlug}/${sectionSlug}`

const getSectionLink = (courseSlug: string, section?: Section) => {
  return section != null
    ? generateSectionLink(courseSlug, section.urlSlug)
    : undefined
}

const SectionPage = () => {
  const courseSlug = useRouterQuery('courseSlug')
  const sectionSlug = useRouterQuery('sectionSlug')

  const { data } = useGetSections(courseSlug)
  const { data: sectionDetail } = useSectionDetail(courseSlug, sectionSlug)
  const size = useWindowSize()

  const prevSectionLink =
    getSectionLink(courseSlug, sectionDetail?.prevSection) ??
    generateSectionLink(courseSlug, '')

  const nextSectionLink = getSectionLink(courseSlug, sectionDetail?.nextSection)

  const [mobile, set] = useState<boolean>(false)
  useEffect(() => {
    size.width <= 786 ? set(true) : set(false)
  }, [size.width])

  const handleSectionItemClick = useCallback(
    ({ urlSlug, title }: SectionItem) => {
      sectionPageLogger.click('click_section_item_in_sidebar', {
        courseSlug,
        sectionSlug: urlSlug,
        sectionTitle: title,
      })
    },
    [courseSlug],
  )

  const handleBlogClick = useCallback(
    ({ title, link }: Blog) => {
      sectionPageLogger.click('click_blog_link', {
        title,
        link,
        courseSlug,
        sectionSlug,
      })
    },
    [courseSlug, sectionSlug],
  )

  const handleNavigationClick = useCallback(
    (clickedSection: Section, direction: 'next' | 'prev') => () => {
      sectionPageLogger.click('click_navigation_button', {
        clickedsectionSlug: clickedSection?.id ?? '',
        clickedSectionTitle: clickedSection?.title,
        direction,
        courseSlug,
        sectionSlug,
      })
    },
    [courseSlug, sectionSlug],
  )

  useEffect(() => {
    if (courseSlug == null || sectionSlug == null) {
      return
    }

    sectionPageLogger.view({
      courseSlug,
      sectionSlug,
    })
  }, [courseSlug, sectionSlug])

  if (!sectionDetail || !data) return null

  const schemaData = {
    '@context': 'https://schema.org/',
    '@type': 'webPage',
    name: sectionDetail.title,
    description: sectionDetail.description,
    brand: 'clelab.io',
  }

  return (
    <>
      <Head>
        <title>{sectionDetail.title}</title>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <meta
          name="keywords"
          content={sectionDetail.blogs.map((e) => e.title).join(', ')}
        />
        <meta name="description" content={sectionDetail.description} />
      </Head>
      {mobile && (
        <MobileSectionHeader
          sectionList={data}
          courseName={data.curriculum.title}
        />
      )}
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
                {/* <div css={blogListStyle}>
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
                </div>  */}
                <div css={blogListStyle}>
                  {sectionDetail.blogs.map((blog) => (
                    <ArticleCard
                      key={blog.link}
                      link={blog.link}
                      title={blog.title}
                      writer={blog.writer}
                      onClick={() => handleBlogClick(blog)}
                    />
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
                      color: palette.white,
                      minWidth: '260px',
                    }}
                    onClick={handleNavigationClick(
                      sectionDetail.nextSection,
                      'next',
                    )}
                  >
                    <Text
                      as="p"
                      style={{
                        color: palette.white,
                        alignSelf: 'flex-start',
                        opacity: 0.7,
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  return courseRedirectUrl(context)
}

const containerStyle = css`
  margin-top: 105px;
  box-sizing: border-box;
  padding-bottom: 30px;
  padding-left: 42px;
  ${mediaQuery(1024)} {
    padding-left: 0;
  }
  ${mediaQuery(767)} {
    padding: 0;
    margin-top: 94px;
    margin-bottom: 150px;
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
  flex-wrap: wrap;
  margin-top: 50px;
  ${mediaQuery(1024)} {
    justify-content: space-between;
  }
  ${mediaQuery(767)} {
    margin: 0;
  }
`

const blogButtonStyle = css`
  margin: 12px;
  ${mediaQuery(767)} {
    margin: 6px 0;
  }
  transition: 0.3s box-shadow ease-in, 0.3s transform ease-in;
  &:hover {
    background: ${palette.white};
    border: 1px solid ${palette.solid.deepSkyBlue};
    transform: translateY(-2px);
    box-shadow: 2px 4px 20px rgba(58, 200, 232, 0.25),
      0px 2px 3px rgba(0, 0, 0, 0.04);
  }
  &:active {
    background: ${palette.solid.lightBlue};
    border: 2px solid ${palette.solid.deepSkyBlue};
  }
`

export default SectionPage
