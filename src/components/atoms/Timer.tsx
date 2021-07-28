import { css } from '@emotion/react'
import media from 'lib/styles/media'
import { useEffect, useMemo, useState } from 'react'
import { formatDatetime } from 'utils/dateTime'

import palette from '../../lib/styles/palette'
import Text from './Text'
interface TimerProps {
  intervalTime: number
}

function Timer({ intervalTime }: TimerProps) {
  const [now, setNow] = useState(new Date())
  const formattedTime = useMemo(() => formatDatetime(now), [now])
  const showColon = useMemo(() => now.getSeconds() % 2 === 0, [now])

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, intervalTime)

    return () => {
      clearInterval(timer)
    }
  }, [intervalTime])

  return (
    <div css={style}>
      <Text as="h4" css={{ lineHeight: '33px' }}>
        <span>{formattedTime[0]}</span>
        <span
          css={{
            transition: 'opacity .2s ease-in-out',
            opacity: showColon ? 1 : 0,
          }}
        >
          :
        </span>
        <span>{formattedTime[1]}</span>
      </Text>
      <Text
        css={{
          marginLeft: 9,
          marginBottom: 2,
          color: palette.solid.dark,
          opacity: '0.5',
        }}
      >
        {formattedTime[2]}
      </Text>
    </div>
  )
}

const style = css`
  display: flex;
  align-items: flex-end;
  color: #6d3df6;
  font-family: Archivo;
  ${media.medium} {
    margin-right: 0;
  }
`

export default Timer
