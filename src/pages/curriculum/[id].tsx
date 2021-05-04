import { css } from '@emotion/react'

import Icon from '../../components/atoms/Icon'
import IconButton from '../../components/molecules/IconButton'
import SectionRow from '../../components/molecules/SectionRow'
import Sidebar from '../../components/molecules/Sidebar'
import Layout from '../../components/templates/Layout'
import LayoutResponsive from '../../components/templates/LayoutResponsive'
import { mediaQuery } from '../../lib/styles/media'

const Curriculum = () => {
  return (
    <LayoutResponsive hasSide>
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
              <IconButton
                css={blogButtonStyle}
                icon={<Icon name="arrow" />}
                variant="primary"
              >
                블로그 글 제목
              </IconButton>
            </div>
          </div>
        </Layout.Main>
      </Layout>
    </LayoutResponsive>
  )
}

const containerStyle = css`
  margin-left: 78px;
  margin-top: 105px;
  ${mediaQuery(767)} {
    margin: 0;
    justify-content: center;
  }
`

const blogListStyle = css`
  display: flex;
  margin: -12px;
  flex-wrap: wrap;
  margin-top: 16px;
  ${mediaQuery(767)} {
    margin: 0;
  }
`

const blogButtonStyle = css`
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
