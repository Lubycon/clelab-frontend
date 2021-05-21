import Banner from '../components/atoms/Banner'
import Header from '../components/atoms/Header'
import CourseList from '../components/organisms/CourseList'
import Layout from '../components/templates/Layout'
import LayoutResponsive from '../components/templates/LayoutResponsive'
import useGetCoruse from '../hooks/api/useGetCoruse'

const IndexPage = () => {
  const { data } = useGetCoruse()

  if (!data) return null

  return (
    <>
      <Banner />
      <Header title="Front-end" />
      <LayoutResponsive>
        <Layout>
          <Layout.Main>
            <CourseList course={data} />
          </Layout.Main>
        </Layout>
      </LayoutResponsive>
    </>
  )
}

export default IndexPage
