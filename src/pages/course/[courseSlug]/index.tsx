import { logger } from '@lubycon/logger'
import MobileSectionHeader from 'components/organisms/MobileSectionHeader'
import Sidebar from 'components/organisms/Sidebar'
import IntroSection from 'components/templates/IntroSection'
import Layout from 'components/templates/Layout'
import LayoutResponsive from 'components/templates/LayoutResponsive'
import useSections, { SectionItem } from 'hooks/api/useGetSections'
import { useRouterQuery } from 'hooks/useRouterQuery'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useCallback, useEffect } from 'react'
import { courseRedirectUrl } from 'utils/redirectUrl'

const coursePageLogger = logger.getPageLogger('course_page')

const CoursePage = () => {
  const courseSlug = useRouterQuery('courseSlug')
  const utmSource = useRouterQuery('utm_source')

  const { data } = useSections(courseSlug)

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

  useEffect(() => {
    if (courseSlug == null) {
      return
    }
    coursePageLogger.view({
      courseSlug,
      utmSource,
    })
  }, [courseSlug, utmSource])

  if (!data) return null

  const schemaData = {
    '@context': 'https://schema.org/',
    '@type': 'webPage',
    name: data.curriculum.title,
    description: data.intro.description.summary,
    brand: 'clelab.io',
  }

  return (
    <>
      <Head>
        <title>{data.curriculum.title}</title>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <meta name="keywords" content={data.curriculum.title} />
        <meta name="description" content={data.intro.description.summary} />
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
