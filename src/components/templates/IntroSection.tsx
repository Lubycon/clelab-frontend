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

// FIXME!!!
const content = [
  '현재 대한민국에서 프론트엔드 개발자로 일하기 위해 배우는 가장 대표적인 기술이기도 하기도 해요.',
  '프론트엔드 진영에서는 Angular, Vue, Svelte 등 다양한 UI 프레임워크와 라이브러리를 사용하고 있지만, React는 그 중에서도 단연 가장 트렌디하고 점유율이 높은 기술이라고 할 수 있죠.',
  '2020년 조사에 따르면 응답한 개발자 중 81%가 React를 앞으로도 계속 사용할 예정이거나, 학습에 대한 관심을 가지고 있다고 이야기할 만큼 다른 프레임워크, 라이브러리에 비해 압도적인 비율을 차지했어요.',
  '그리고 React는 Angular나 Vue와 다르게 정확하게 UI를 렌더링하는 부분에 대한 책임만을 가지고 있기 때문에 처음 배우는 사람이 이해하기도 쉬운 편이고, 전 세계에 있는 수 많은 사용자들이 이미 생태계를 형성해놓은 라이브러리이기 때문에 구글링을 했을 때 내가 원하는 정보가 나올 확률 또한 높아요.',
  '자, 그럼 이제 클랩과 함께 리액트를 공부하러 함께 떠나볼까요?',
]

function IntroSection({
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
            React는 전 세계에서 가장 많이 사용하는 UI 라이브러리입니다.
          </Text>
        </div>
        {content.map((value) => (
          <Text as="p" css={descriptionStyle}>
            {value}
          </Text>
        ))}
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
  color: #545454;
  margin-bottom: 1.5rem;
`

export default IntroSection
