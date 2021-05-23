import { css } from '@emotion/react'

import { useRouterQuery } from '../../hooks/useRouterQuery'
import media, { mediaQuery } from '../../lib/styles/media'
import palette from '../../lib/styles/palette'
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
        <IconButton
          to={`/course/${courseId}/${nextSectionId}`}
          size="large"
          variant="primary"
          style={{
            background: '#00BCE5',
            color: 'white',
            justifyContent: 'center',
          }}
          onClick={onClickStartButton}
        >
          <Text as="h6">글 읽으러 가기 🔥</Text>
        </IconButton>
      </StickyButton>
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
  font-size: 15px;
  font-family: ' Noto Sans KR';
  margin-top: 10px;
  line-height: 1.69;
  text-align: left;
  color: #000000;
  margin-bottom: 1.5rem;
`

export default IntroSection
