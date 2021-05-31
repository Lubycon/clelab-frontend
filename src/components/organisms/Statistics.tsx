import { css } from '@emotion/react'

import { Statistic } from '../../hooks/api/useGetSections'
import Text from '../atoms/Text'

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
  margin-top: 1rem;;
}
`

const statisticTitle = css`
  color: #282828;
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
  color: ${courseTopic ? '#3AC8E8' : '#282828'};
  margin-bottom: 8px;
`

export default Statistics
