import { logger } from '@lubycon/logger'
import { useWindowSize } from '@lubycon/react'
import MobileSectionHeader from 'components/MobileSectionHeader'
import Sidebar from 'components/Sidebar'
import IntroSection from 'components/templates/IntroSection'
import Layout from 'components/templates/Layout'
import LayoutResponsive from 'components/templates/LayoutResponsive'
import useSections, { SectionItem } from 'hooks/api/useGetSections'
import { useRouterQuery } from 'hooks/useRouterQuery'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import { courseRedirectUrl } from 'utils/redirectUrl'

const coursePageLogger = logger.getPageLogger('course_page')

const CoursePage = () => {
  const courseSlug = useRouterQuery('courseSlug')
  const utmSource = useRouterQuery('utm_source')

  const { data } = useSections(courseSlug)
  const size = useWindowSize()

  const [mobile, set] = useState<boolean>(false)
  useEffect(() => {
    size.width <= 786 ? set(true) : set(false)
  }, [size.width])

  useEffect(() => {
    if (courseSlug == null) {
      return
    }
    coursePageLogger.view({
      courseSlug,
      utmSource,
    })
  }, [courseSlug, utmSource])

  const handleSectionItemClick = useCallback(
    ({ id, title }: SectionItem) => {
      coursePageLogger.click('click_section_item_in_sidebar', {
        courseSlug,
        sectionId: id,
        sectionTitle: title,
      })
    },
    [courseSlug],
  )

  if (!data) return null

  const schemaData = {
    '@context': 'https://schema.org/',
    '@type': 'Course',
    name: data.curriculum.title,
    description: data.intro.description.summary,
    provider: {
      '@type': 'Organization',
      name: 'Clelab',
      sameAs: `https://clelab.io/course/${courseSlug}`,
    },
    brand: 'clelab.io',
  }

  return (
    <>
      <Head>
        <title>{data.curriculum.title}</title>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <meta name="keywords" content={data.curriculum.title} />
        <meta name="description" content={data.intro.description.summary} />
        <meta
          key="og:title"
          property="og:title"
          content={`clelab - ${data.curriculum.title}`}
        />
        <meta
          key="og:description"
          property="og:description"
          content={data.intro.description.summary}
        />
        <meta key="og:image" property="og:image" content={data.thumbnail} />
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
            <IntroSection
              intro={data.intro}
              nextSectionSlug={data.sections[0].urlSlug}
            />
          </Layout.Main>
        </Layout>
      </LayoutResponsive>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return courseRedirectUrl(context)
}

export default CoursePage
