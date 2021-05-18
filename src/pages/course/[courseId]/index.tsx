import { useRouter } from 'next/dist/client/router'

import MobileSectionHeader from '../../../components/organisms/MobileSectionHeader'
import Sidebar from '../../../components/organisms/Sidebar'
import IntroSection from '../../../components/templates/IntroSection'
import Layout from '../../../components/templates/Layout'
import LayoutResponsive from '../../../components/templates/LayoutResponsive'
import useSections from '../../../hooks/api/useGetSections'

const Course = () => {
  const router = useRouter()
  const course = router.query.courseId as string

  const { data } = useSections(course)
  if (!data) return null

  return (
    <>
      <MobileSectionHeader
        sectionList={data}
        courseName={data.curriculum.title}
      />
      <LayoutResponsive>
        <Layout>
          <Layout.Side>
            <Sidebar sectionList={data} />
          </Layout.Side>
          <Layout.Main>
            <IntroSection
              title={data.intro.summary}
              description={data.intro.description}
            />
          </Layout.Main>
        </Layout>
      </LayoutResponsive>
    </>
  )
}

export default Course
