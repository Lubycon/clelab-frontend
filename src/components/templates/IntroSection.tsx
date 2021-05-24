import { css } from '@emotion/react'
import { useRouter } from 'next/router'

import { useRouterQuery } from '../../hooks/useRouterQuery'
import media, { mediaQuery } from '../../lib/styles/media'
import palette from '../../lib/styles/palette'
import Button from '../atoms/Button'
import Text from '../atoms/Text'
import IconButton from '../molecules/IconButton'
import StickyButton from '../molecules/StickyButton'

export type IntroSectionProps = {
  title: string
  description: string
  nextSectionId: number
  onClickStartButton?: () => void
}

function IntroSection({
  title,
  description,
  nextSectionId,
  onClickStartButton,
}: IntroSectionProps) {
  const router = useRouter()
  const courseId = useRouterQuery('courseId')
  return (
    <>
      <div css={containerStyle}>
        <div css={titleWrapperStyle}>
          <Text as="h5">왜 배워야 할까?🤔</Text>
        </div>
        <div css={courseCardStyle}>
          <Text
            as="h6"
            style={{
              fontSize: '16px',
              color: palette.solid.primary,
            }}
          >
            {title}
          </Text>
        </div>
        <Text
          as="p"
          css={descriptionStyle}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <StickyButton>
        <Button
          size="large"
          variant="primary"
          style={{
            background: '#00BCE5',
            color: 'white',
            justifyContent: 'center',
            textAlign:'center',
          }}
          onClick={() => {
            router.push(`/course/${courseId}/${nextSectionId}`)
            onClickStartButton}}
        >
          <Text
            as="h6"
            style={{
              fontSize: '14px',
            }}
          >
            글 읽으러 가기 🔥
          </Text>
        </Button>
      </StickyButton>
    </>
  )
}

const containerStyle = css`
  padding-left: 78px;
  padding-top: 105px;
  box-sizing: border-box;
  padding-bottom: 100px;
  ${mediaQuery(767)} {
    height: 100vh;
    padding-left: 0;
    padding-top: 94px;
    padding-bottom: 150px;
    overflow: scroll;
    justify-content: center;
  }
`
const courseCardStyle = css`
  padding: 1rem;
  display: flex;
  align-items: center;
  min-height: 65px;
  background: #ebfafd;
  border: 1px solid rgba(58, 200, 232, 0.08);
  box-sizing: border-box;
  border-radius: 8px;
  margin: 24px 0;
`

const titleWrapperStyle = css`
  flex-shrink: 0;

  ${media.small} {
    margin-bottom: 8px;
  }
`
const descriptionStyle = css`
  font-size: 16px;
  font-family: ' Noto Sans KR';
  margin-top: 10px;
  line-height: 24px;
  text-align: left;
  color: #545454;
  font-weight: 400;
  margin-bottom: 1.5rem;
`

export default IntroSection
