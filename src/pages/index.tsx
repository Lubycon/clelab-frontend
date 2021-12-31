import { logger } from '@lubycon/logger'
import { ErrorBoundary } from '@sentry/react'
import Banner from 'components/common/Banner'
import Header from 'components/common/Header'
import MainFooter from 'components/Footer'
import Layout from 'components/templates/Layout'
import LayoutResponsive from 'components/templates/LayoutResponsive'
import useGetCoruse from 'hooks/api/useGetCoruse'
import dynamic from 'next/dynamic'
import { Suspense, useEffect } from 'react'

const DynamicCourseList = dynamic(
  () => import('components/CourseCard/CourseList'),
)
const mainPageLogger = logger.getPageLogger('main_page')

const IndexPage = () => {
  const { data } = useGetCoruse()

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
            <ErrorBoundary fallback={<div>...error</div>}>
              <Suspense fallback={<div>...fallback index</div>}>
                <DynamicCourseList
                  course={data}
                  onClickItem={({ urlSlug, title }) =>
                    mainPageLogger.click('click_course', {
                      urlSlug,
                      title,
                    })
                  }
                />
              </Suspense>
            </ErrorBoundary>
          </Layout.Main>
        </Layout>
      </LayoutResponsive>
      <MainFooter />
    </>
  )
}

export default IndexPage
