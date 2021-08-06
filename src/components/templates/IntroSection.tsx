import { css } from '@emotion/react'
import { logger } from '@lubycon/logger'
import Button from 'components/atoms/Button'
import Text from 'components/atoms/Text'
import StickyButton from 'components/molecules/StickyButton'
import MajorCompanyList from 'components/organisms/MajorCompanyList'
import Statistics from 'components/organisms/Statistics'
import { Intro } from 'hooks/api/useGetSections'
import { useRouterQuery } from 'hooks/useRouterQuery'
import media, { mediaQuery } from 'lib/styles/media'
import palette from 'lib/styles/palette'
import { useRouter } from 'next/router'

export type IntroSectionProps = {
  intro: Intro
  nextSectionSlug: string
}

const coursePageLogger = logger.getPageLogger('course_page')
function IntroSection({ intro, nextSectionSlug }: IntroSectionProps) {
  const router = useRouter()
  const courseSlug = useRouterQuery('courseSlug')

  const { majorCompany, description, statistics, stackOverflowTrend } = intro

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
            {description.summary}
          </Text>
        </div>
        <div css={majorCompanyWrapper}>
          {majorCompany && <MajorCompanyList majorCompany={majorCompany} />}
          <Text
            as="p"
            css={descriptionStyle}
            dangerouslySetInnerHTML={{ __html: description.header }}
          />
        </div>
        {description.subSummary && (
          <div css={courseCardStyle(true)}>
            <Text
              as="h6"
              style={{
                fontSize: '16px',
                color: palette.solid.deepSkyBlue,
              }}
            >
              {description.subSummary}
            </Text>
          </div>
        )}
        <div css={majorCompanyWrapper}>
          {stackOverflowTrend && (
            <div css={stackOverflowTrendStyle}>
              <Text css={stackOverflowTitleStyle}>
                {stackOverflowTrend.title}
              </Text>
              <Text as="p" css={stackOverflowDescription}>
                {stackOverflowTrend.description}
              </Text>

              <img
                alt="stackOverflowTrend-img"
                src={stackOverflowTrend.imagePath}
              />
            </div>
          )}
          {statistics && <Statistics statistics={statistics} />}
        </div>
        <Text
          as="p"
          css={descriptionStyle}
          dangerouslySetInnerHTML={{ __html: description.footer }}
        />
      </div>
      <StickyButton>
        <Button
          size="large"
          variant="primary"
          style={{
            background: '#00BCE5',
            color: palette.white,
            justifyContent: 'center',
            textAlign: 'center',
          }}
          onClick={() => {
            coursePageLogger.click('click_start_button')
            router.push(`/course/${courseSlug}/${nextSectionSlug}`)
          }}
        >
          <Text
            as="h6"
            style={{
              fontSize: '14px',
              cursor: 'pointer',
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
  padding-top: 120px;
  box-sizing: border-box;
  padding-bottom: 100px;
  ${mediaQuery(767)} {
    padding: 0;
    margin-top: 94px;
    margin-bottom: 150px;
    overflow-y: auto;
    justify-content: center;
  }
`
const courseCardStyle = (isWhite?: boolean) => css`
  padding: 1rem;
  display: flex;
  align-items: center;
  min-height: 65px;
  background: ${isWhite ? palette.white : palette.solid.lightBlue};
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
  margin-bottom: 36px;
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
    justify-content: center;
    img {
      width: 324px;
    }
    margin-right: 0;
  }
  ${media.custom(320)} {
    justify-content: center;
    img {
      width: 100%;
    }
  }
`

const stackOverflowTitleStyle = css`
  color: ${palette.solid.dark};
  font-weight: bold;
`

const stackOverflowDescription = css`
  color: #9696a4;
  font-weight: bold;
  margin-top: 4px;
  margin-bottom: 16px;
`

export default IntroSection
