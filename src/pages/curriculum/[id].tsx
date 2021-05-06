import { css } from '@emotion/react'

import Icon from '../../components/atoms/Icon'
import Text from '../../components/atoms/Text'
import IconButton from '../../components/molecules/IconButton'
import SectionRow from '../../components/molecules/SectionRow'
import StickyButton from '../../components/molecules/StickyButton'
import MobileSectionHeader from '../../components/organisms/MobileSectionHeader'
import Sidebar from '../../components/organisms/Sidebar'
import Layout from '../../components/templates/Layout'
import LayoutResponsive from '../../components/templates/LayoutResponsive'
import { mediaQuery } from '../../lib/styles/media'
import palette from '../../lib/styles/palette'

const dummyBlogList = [
  { id: 1, title: ' 블로그 글 제목', link: 'https://blog.songc.io' },
  { id: 2, title: ' 블로그 글 제목', link: 'https://blog.songc.io' },
  { id: 3, title: ' 블로그 글 제목', link: 'https://blog.songc.io' },
  { id: 4, title: ' 블로그 글 제목', link: 'https://blog.songc.io' },
  { id: 5, title: ' 블로그 글 제목', link: 'https://blog.songc.io' },
  { id: 6, title: ' 블로그 글 제목', link: 'https://blog.songc.io' },
  { id: 7, title: ' 블로그 글 제목', link: 'https://blog.songc.io' },
  { id: 8, title: ' 블로그 글 제목', link: 'https://blog.songc.io' },
  { id: 9, title: ' 블로그 글 제목', link: 'https://blog.songc.io' },
  { id: 10, title: ' 블로그 글 제목', link: 'https://blog.songc.io' },
]

const Curriculum = () => {
  return (
    <>
      <MobileSectionHeader sectionName="HTML" />
      <LayoutResponsive>
        <Layout>
          <Layout.Side>
            <Sidebar />
          </Layout.Side>
          <Layout.Main>
            <div css={containerStyle}>
              <SectionRow
                title="01 기술소개"
                description="섹션에 대한 설명섹션에 대한 설명섹션에 대한 설명섹션에 대한설명섹션에 대한 설명섹션에 대한 설명섹션에 대한 설명섹션에 대한설명섹션에 대한 설명섹션에 대"
              />
              <div css={blogListStyle}>
                {dummyBlogList.map((item) => (
                  <IconButton
                    css={blogButtonStyle}
                    key={item.id}
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
              <IconButton size="small" variant="secondary">
                <Icon name="back" />
              </IconButton>
              <IconButton
                size="large"
                variant="primary"
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
                    alignItems: 'flex-start',
                  }}
                >
                  Next
                </Text>
                <Text as="h6">하이퍼컨넥트와 속성</Text>
              </IconButton>
            </StickyButton>
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
