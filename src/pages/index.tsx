import { logger } from '@lubycon/logger'
import Banner from 'components/common/Banner'
import Header from 'components/common/Header'
import CourseList from 'components/CourseCard/CourseList'
import MainFooter from 'components/Footer'
import Layout from 'components/templates/Layout'
import LayoutResponsive from 'components/templates/LayoutResponsive'
import useGetCoruse from 'hooks/api/useGetCoruse'
import { useEffect } from 'react'

const mainPageLogger = logger.getPageLogger('main_page')

const IndexPage = () => {
  const { data } = useGetCoruse()

  useEffect(() => {
    mainPageLogger.view()
  }, [])

  if (!data) return null

  return (
    <>
      <Banner />
      <Header title="Front-end" />
      <LayoutResponsive>
        <Layout>
          <Layout.Main>
            <CourseList
              course={data}
              onClickItem={({ urlSlug, title }) =>
                mainPageLogger.click('click_course', {
                  urlSlug,
                  title,
                })
              }
            />
          </Layout.Main>
        </Layout>
      </LayoutResponsive>
      <MainFooter />
    </>
  )
}

export default IndexPage
