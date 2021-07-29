import { css } from '@emotion/react'
import Text from 'components/atoms/Text'
import { Statistic } from 'hooks/api/useGetSections'

import palette from '../../lib/styles/palette'

export interface StatisticsProps {
  statistics: Statistic[]
}

function Statistics({ statistics }: StatisticsProps) {
  return (
    <div css={wrapper}>
      {statistics.map((item) => (
        <div css={contentWrapper}>
          <Text css={statisticTitle}>{item.title}</Text>
          <Text as="p" css={statisticDescription}>
            {item.description}
          </Text>
          {item.values.map((valueItem) => (
            <Text
              key={`${valueItem.keyword}-${item.title}`}
              css={courseTopicStyle(valueItem.courseTopic)}
            >
              {valueItem.keyword} : {valueItem.value}
            </Text>
          ))}
        </div>
      ))}
    </div>
  )
}

const wrapper = css`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const contentWrapper = css`
  & + & {
    margin-top: 16px;
  }
`

const statisticTitle = css`
  color: ${palette.solid.dark};
  font-weight: bold;
`

const statisticDescription = css`
  color: #9696a4;
  font-weight: bold;
  margin-bottom: 16px;
`

const courseTopicStyle = (courseTopic: boolean) => css`
  display: flex;
  font-family: Archivo;
  font-weight: bold;
  color: ${courseTopic ? palette.solid.deepSkyBlue : palette.solid.dark};
  margin-bottom: 8px;
`

export default Statistics
