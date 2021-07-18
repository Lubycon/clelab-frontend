import { logger } from '@lubycon/utils'
import MobileSectionHeader from 'components/organisms/MobileSectionHeader'
import Sidebar from 'components/organisms/Sidebar'
import IntroSection from 'components/templates/IntroSection'
import Layout from 'components/templates/Layout'
import LayoutResponsive from 'components/templates/LayoutResponsive'
import useSections, { SectionItem } from 'hooks/api/useGetSections'
import { useRouterQuery } from 'hooks/useRouterQuery'
import Head from 'next/head'
import { useCallback, useEffect } from 'react'

const coursePageLogger = logger.getPageLogger('course_page')

const CoursePage = () => {
  const courseId = useRouterQuery('courseId')
  const utmSource = useRouterQuery('utm_source')

  const { data } = useSections(courseId)

  const handleSectionItemClick = useCallback(
    ({ id, title }: SectionItem) => {
      coursePageLogger.click('click_section_item_in_sidebar', {
        courseId,
        sectionId: id,
        sectionTitle: title,
      })
    },
    [courseId],
  )

  useEffect(() => {
    if (courseId == null) {
      return
    }
    coursePageLogger.view({
      courseId,
      utmSource,
    })
  }, [courseId, utmSource])

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
              nextSectionId={data.sections[0].id}
            />
          </Layout.Main>
        </Layout>
      </LayoutResponsive>
    </>
  )
}

export default CoursePage
