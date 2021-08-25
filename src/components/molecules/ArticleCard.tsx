import { css } from '@emotion/react'
import Icon from 'components/atoms/Icon'
import Text from 'components/atoms/Text'
import { Course } from 'hooks/api/useGetCoruse'
import palette from 'lib/styles/palette'
import Link from 'next/link'
export interface ArticleCardProps {
  course: Course
  onClick?: (course: Course) => void
}
function ArticleCard() {
  return (
    <div css={ArticleCardStyle}>
      <Text as="h6" css={ArticleTitleStyle}>
        타입스크립트와 함께 컴포넌트를 단계 별로 추상화해보자 타입스크립트와
        함께 알아보자
      </Text>
      <div css={ArticleFooterStyle}>
        <div css={BlogInfo}>
          <img src="https://www.naver.com/favicon.ico" alt="favicon" />
          {/* <link
            rel="icon"
            // href="https://clelab.io/favicon.ico"
            type="image/x-icon"
          /> */}
          <Text style={{ fontSize: '13px' }}>이름</Text>
        </div>
        <Icon name="applaud_off" />
      </div>
    </div>
  )
}

const ArticleCardStyle = css`
  width: 320px;
  background-color: ${palette.white};
  border: 1px solid ${palette.solid.grey};
  border-radius: 8px;
  box-sizing: border-box;
  padding: 24px 20px;
`

const ArticleTitleStyle = css`
  display: -webkit-box;
  width: 276px;
  height: 52px;
  font-size: 16px;
  line-height: 26px;
  color: ${palette.black};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 30px;
`

const ArticleFooterStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BlogInfo = css``
export default ArticleCard
