import { css } from '@emotion/react'
import { logger } from '@lubycon/logger'
import { useWindowSize } from '@lubycon/react'
import ArticleCard from 'components/ArticleCard'
import Badge from 'components/common/Badge'
import Icon from 'components/common/Icon'
import StickyButton from 'components/common/StickyButton'
import Text from 'components/common/Text'
import IconButton from 'components/IconButton'
import MobileSectionHeader from 'components/MobileSectionHeader'
import SectionRow from 'components/SectionRow'
import Sidebar from 'components/Sidebar'
import Layout from 'components/templates/Layout'
import LayoutResponsive from 'components/templates/LayoutResponsive'
import useSectionDetail, { Blog, Section } from 'hooks/api/useGetSectionDetail'
import useGetSections, { SectionItem } from 'hooks/api/useGetSections'
import { useRouterQuery } from 'hooks/useRouterQuery'
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
    '@type': ['Course', 'ItemList'],
    name: sectionDetail.title,
    description: sectionDetail.description,
    provider: {
      '@type': 'Organization',
      name: 'Clelab',
      sameAs: `https://clelab.io/course/${courseSlug}/${sectionSlug}`,
    },
    itemListElement: [
      sectionDetail.blogs.map((blog, index) => {
        return {
          '@type': 'ListItem',
          position: index,
          item: {
            type: 'article',
            url: blog.link,
            name: blog.title,
            author: blog.writer,
          },
        }
      }),
    ],
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
        <meta
          key="og:title"
          name="og:title"
          content={`clelab - ${sectionDetail.title}`}
        />
        <meta
          key="og:description"
          name="og:description"
          content={sectionDetail.description}
        />
        <meta
          key="og:image"
          name="og:image"
          content={sectionDetail.thumbnail}
        />
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
              <section css={containerStyle}>
                <SectionRow
                  title={sectionDetail.title}
                  description={sectionDetail.description}
                />
                <article css={blogListStyle}>
                  {sectionDetail.blogs.map((blog) => (
                    <ArticleCard
                      key={blog.link}
                      blogId={blog.id}
                      link={blog.link}
                      title={blog.title}
                      count={blog.clapCount}
                      writer={blog.writer}
                      badge={
                        blog.clelabPick ? (
                          <Badge
                            color={palette.brandColor}
                            bgColor={palette.solid.secondary}
                            text="Clelab Pick 📌"
                          />
                        ) : null
                      }
                      onClick={() => handleBlogClick(blog)}
                    />
                  ))}
                </article>
              </section>
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
                      background: palette.brandColor,
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

export default SectionPage
