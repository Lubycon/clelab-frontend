import Head from 'next/head'
import { useCallback, useEffect } from 'react'

import MobileSectionHeader from '../../../components/organisms/MobileSectionHeader'
import Sidebar from '../../../components/organisms/Sidebar'
import IntroSection from '../../../components/templates/IntroSection'
import Layout from '../../../components/templates/Layout'
import LayoutResponsive from '../../../components/templates/LayoutResponsive'
import useSections, { SectionItem } from '../../../hooks/api/useGetSections'
import { useRouterQuery } from '../../../hooks/useRouterQuery'
import { generateLogger } from '../../../utils/logger'

const logger = generateLogger('course_page')

const CoursePage = () => {
  const courseId = useRouterQuery('courseId')

  const { data } = useSections(courseId)

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

  useEffect(() => {
    if (courseId == null) {
      return
    }
    logger.view({
      courseId,
    })
  }, [courseId])

  if (!data) return null

  return (
    <>
      <Head>
        <title>{data.curriculum.title}</title>
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
