import { css } from '@emotion/react'
import { useRouter } from 'next/dist/client/router'

import Icon from '../../../../components/atoms/Icon'
import Text from '../../../../components/atoms/Text'
import IconButton from '../../../../components/molecules/IconButton'
import SectionRow from '../../../../components/molecules/SectionRow'
import StickyButton from '../../../../components/molecules/StickyButton'
import MobileSectionHeader from '../../../../components/organisms/MobileSectionHeader'
import Sidebar from '../../../../components/organisms/Sidebar'
import Layout from '../../../../components/templates/Layout'
import LayoutResponsive from '../../../../components/templates/LayoutResponsive'
import useSectionDetail from '../../../../hooks/api/useGetSectionDetail'
import useGetSections from '../../../../hooks/api/useGetSections'
import { mediaQuery } from '../../../../lib/styles/media'
import palette from '../../../../lib/styles/palette'

const Curriculum = () => {
  const router = useRouter()
  const course = router.query.courseId as string
  const section = router.query.sectionId as string

  const { data } = useGetSections(course)
  const { data: sectionDetail } = useSectionDetail(course, section)

  if (!sectionDetail || !data) return null

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
            <>
              <div css={containerStyle}>
                <SectionRow
                  title={sectionDetail.title}
                  description={sectionDetail.description}
                />
                <div css={blogListStyle}>
                  {sectionDetail.blogs.map((item) => (
                    <IconButton
                      css={blogButtonStyle}
                      key={item.link}
                      to={item.link}
                      variant="lightBlue"
                      right={<Icon name="arrow" />}
                    >
                      {item.title}
                    </IconButton>
                  ))}
                </div>
              </div>
              <StickyButton>
                <IconButton
                  buttonLinkType="internal"
                  size="small"
                  to={`/course/${course}/${sectionDetail.prevSection?.id}`}
                  variant="secondary"
                >
                  <Icon name="back" />
                </IconButton>
                <IconButton
                  buttonLinkType="internal"
                  size="large"
                  variant="primary"
                  to={`/course/${course}/${
                    sectionDetail.nextSection?.id || ''
                  }`}
                  right={<Icon name="arrow" />}
                  style={{
                    background: '#00BCE5',
                    color: 'white',
                  }}
                >
                  <Text
                    as="p"
                    style={{
                      color: palette.solid.secondary,
                      alignSelf: 'flex-start',
                    }}
                  >
                    Next
                  </Text>
                  <Text as="h6">{sectionDetail.nextSection?.title || ''}</Text>
                </IconButton>
              </StickyButton>
            </>
          </Layout.Main>
        </Layout>
      </LayoutResponsive>
    </>
  )
}

const containerStyle = css`
  margin-left: 78px;
  margin-top: 105px;
  box-sizing: border-box;
  padding-bottom: 80px;
  ${mediaQuery(767)} {
    margin-left: 0;
    margin-top: 96px;
    height: auto;
    justify-content: center;
  }
`

const blogListStyle = css`
  display: flex;
  margin: -12px;
  flex-wrap: wrap;
  ${mediaQuery(767)} {
    margin: 0;
    justify-content: center;
  }
`

const blogButtonStyle = css`
  margin: 12px;
  ${mediaQuery(767)} {
    margin: 12px 0;
  }
  transition: 0.3s box-shadow ease-in, 0.3s transform ease-in;
  &:hover {
    background: #ffffff;
    border: 1px solid #3ac8e8;
    transform: translateY(-2px);
    box-shadow: 2px 4px 20px rgba(58, 200, 232, 0.25),
      0px 2px 3px rgba(0, 0, 0, 0.04);
  }
  &:active {
    background: #ebfafd;
    border: 2px solid #3ac8e8;
  }
`

export default Curriculum
