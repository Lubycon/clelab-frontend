import { css } from '@emotion/react'
import { useRouter } from 'next/router'

import { Intro } from '../../hooks/api/useGetSections'
import { useRouterQuery } from '../../hooks/useRouterQuery'
import media, { mediaQuery } from '../../lib/styles/media'
import palette from '../../lib/styles/palette'
import { generateLogger } from '../../utils/logger'
import Button from '../atoms/Button'
import Text from '../atoms/Text'
import StickyButton from '../molecules/StickyButton'
import MajorCompanyList from '../organisms/MajorCompanyList'
import Statistics from '../organisms/Statistics'

export type IntroSectionProps = {
  intro: Intro
  nextSectionId: number
}

function IntroSection({ intro, nextSectionId }: IntroSectionProps) {
  const router = useRouter()
  const courseId = useRouterQuery('courseId')
  const logger = generateLogger('course_page')

  return (
    <>
      <div css={containerStyle}>
        <div css={titleWrapperStyle}>
          <Text as="h5">왜 배워야 할까?🤔</Text>
        </div>
        <div css={courseCardStyle()}>
          <Text
            as="h6"
            style={{
              fontSize: '16px',
              color: palette.solid.primary,
            }}
          >
            {intro.description.summary}
          </Text>
        </div>
        <div css={majorCompanyWrapper}>
          <MajorCompanyList majorCompany={intro.majorCompany} />
          <Text
            as="p"
            css={descriptionStyle}
            dangerouslySetInnerHTML={{ __html: intro.description.header }}
          />
        </div>
        <div css={courseCardStyle(true)}>
          <Text
            as="h6"
            style={{
              fontSize: '16px',
              color: palette.solid.deepSkyBlue,
            }}
          >
            {intro.description.subSummary}
          </Text>
        </div>
        <div css={majorCompanyWrapper}>
          <div css={stackOverflowTrendStyle}>
            <Text css={stackOverflowTitleStyle}>
              {intro.stackOverflowTrend.title}
            </Text>
            <Text as="p" css={stackOverflowDescription}>
              {intro.stackOverflowTrend.description}
            </Text>

            <img
              alt="stackOverflowTrend-img"
              src={intro.stackOverflowTrend.imagePath}
            />
          </div>
          <Statistics statistics={intro.statistics} />
        </div>
        <Text
          as="p"
          css={descriptionStyle}
          dangerouslySetInnerHTML={{ __html: intro.description.footer }}
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
            textAlign: 'center',
          }}
          onClick={() => {
            logger.click('click_start_button')
            router.push(`/course/${courseId}/${nextSectionId}`)
          }}
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
const courseCardStyle = (isWhite?: boolean) => css`
  padding: 1rem;
  display: flex;
  align-items: center;
  min-height: 65px;
  background: ${isWhite ? '#fff' : '#ebfafd'};
  border: 1px solid
    ${isWhite ? 'rgba(58, 200, 232, 0.5)' : 'rgba(58, 200, 232, 0.08)'};
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
  display: flex;
  flex: 1;
  font-size: 15px;
  font-family: 'Noto Sans KR';
  line-height: 24px;
  text-align: left;
  color: #545454;
  font-weight: 400;
  margin-bottom: 24px;
  white-space: pre-line;
`

const majorCompanyWrapper = css`
  display: flex;
  ${media.small} {
    flex-direction: column;
  }
`

const stackOverflowTrendStyle = css`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  img {
    width: 468px;
    height: 298px;
  }
  ${media.small} {
    img {
      width: 324px;
    }
    margin-right: 0;
  }
`

const stackOverflowTitleStyle = css`
  color: #282828;
  font-weight: bold;
`

const stackOverflowDescription = css`
  color: #9696a4;
  font-weight: bold;
  margin-top: 4px;
  margin-bottom: 16px;
`

export default IntroSection
