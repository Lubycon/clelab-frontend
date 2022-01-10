import { logger } from '@lubycon/logger'
import Banner from 'components/common/Banner'
import Header from 'components/common/Header'
import CourseList from 'components/CourseCard/CourseList'
import MainFooter from 'components/Footer'
import QRModal from 'components/QRModal'
import Layout from 'components/templates/Layout'
import LayoutResponsive from 'components/templates/LayoutResponsive'
import useGetCoruse from 'hooks/api/useGetCoruse'
import { useModal } from 'hooks/useModal'
import { useEffect } from 'react'

const mainPageLogger = logger.getPageLogger('main_page')

const IndexPage = () => {
  const { data } = useGetCoruse()
  const [isOpen, showModal, hideModal] = useModal()

  useEffect(() => {
    mainPageLogger.view()
  }, [])

  if (!data) return null

  return (
    <>
      <Banner />
      <QRModal isOpen={isOpen} onClose={hideModal} />
      <Header title="Front-end" onShowModal={showModal} />
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
