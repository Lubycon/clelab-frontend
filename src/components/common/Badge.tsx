import { css } from '@emotion/react'
import Text from 'components/common/Text'

interface IBadge {
  color: string
  bgColor: string
  text: string
}

function Badge({ color, bgColor, text }: IBadge) {
  const dynamicStyle = css`
    color: ${color};
    background-color: ${bgColor};
  `

  return (
    <div css={[badgeStyle, dynamicStyle]}>
      <Text>{text}</Text>
    </div>
  )
}

export default Badge

const badgeStyle = css`
  margin-bottom: 8px;
  width: max-content;
  border-radius: 12px;
  padding: 4px 12px 4px 14px;

  span {
    font-weight: 600;
    font-size: 13px;
    line-height: 14px;
  }
`
