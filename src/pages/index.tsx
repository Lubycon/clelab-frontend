import { logger } from '@lubycon/utils'
import Banner from 'components/atoms/Banner'
import Header from 'components/atoms/Header'
import CourseList from 'components/organisms/CourseList'
import Layout from 'components/templates/Layout'
import LayoutResponsive from 'components/templates/LayoutResponsive'
import useGetCoruse from 'hooks/api/useGetCoruse'
import { useEffect } from 'react'

import MainFooter from '../components/organisms/MainFooter'

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
              onClickItem={({ id, title }) =>
                mainPageLogger.click('click_course', {
                  id,
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
