import { logger } from '@lubycon/logger'
import AsyncBoundary from 'components/AsyncBoundary'
import Banner from 'components/common/Banner'
import Header from 'components/common/Header'
import MainFooter from 'components/Footer'
import Layout from 'components/templates/Layout'
import LayoutResponsive from 'components/templates/LayoutResponsive'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const DynamicCourseList = dynamic(
  () => import('components/CourseCard/CourseList'),
  { suspense: true },
)
const mainPageLogger = logger.getPageLogger('main_page')

const IndexPage = () => {
  useEffect(() => {
    mainPageLogger.view()
  }, [])

  return (
    <>
      <Banner />
      <Header title="Front-end" />
      <LayoutResponsive>
        <Layout>
          <Layout.Main>
            <AsyncBoundary suspenseFallback={<div />} errorFallback={<div />}>
              <DynamicCourseList
                onClickItem={({ urlSlug, title }) =>
                  mainPageLogger.click('click_course', {
                    urlSlug,
                    title,
                  })
                }
              />
            </AsyncBoundary>
          </Layout.Main>
        </Layout>
      </LayoutResponsive>
      <MainFooter />
    </>
  )
}

export default IndexPage
