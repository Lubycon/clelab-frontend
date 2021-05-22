import { css } from '@emotion/react'

import { useRouterQuery } from '../../hooks/useRouterQuery'
import { mediaQuery } from '../../lib/styles/media'
import Text from '../atoms/Text'
import IconButton from '../molecules/IconButton'
import SectionRow from '../molecules/SectionRow'
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
        <SectionRow title={title} description={description} />
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

export default IntroSection
