import { css } from '@emotion/react'
import { useEffect, useState } from 'react'

import media from '../../lib/styles/media'
import { getCurrentTime } from '../../utils/dateTime'
import Text from './Text'

function Timer() {
  const [time, setTime] = useState(getCurrentTime)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(getCurrentTime())
    }, 10000)

    return () => {
      window.clearInterval(timer)
    }
  }, [])

  return (
    <div css={style}>
      <Text as="h4">{`${time[0]}:${time[1]}`}</Text>
      <Text
        style={{
          marginLeft: '12px',
          color: '#FFFFFF',
          opacity: '0.5',
        }}
      >
        {time[2]}
      </Text>
    </div>
  )
}

const style = css`
  display: flex;
  align-items: center;
  color: #00bce5;
  font-family: Archivo;
  margin-right: 50px;
  ${media.medium} {
    margin-right: 0;
  }
`

export default Timer
