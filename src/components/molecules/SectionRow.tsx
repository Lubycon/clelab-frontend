import { css } from '@emotion/react'

import media from '../../lib/styles/media'
import Text from '../atoms/Text'

export type SectionRowProps = {
  title: string
  description?: string
}

function SectionRow({ title, description }: SectionRowProps) {
  return (
    <div css={rowStyle}>
      <div css={titleWrapperStyle}>
        <Text as="h6">{title}</Text>
      </div>
      {description && <div css={descriptionStyle}>{description}</div>}
    </div>
  )
}

const rowStyle = css`
  padding-top: 16px;
  padding-bottom: 16px;
`

const titleWrapperStyle = css`
  flex-shrink: 0;

  ${media.small} {
    margin-bottom: 8px;
  }
`
const descriptionStyle = css`
  font-size: 13px;
  margin-top: 10px;
  line-height: 1.69;
  text-align: left;
  color: #545454;
`

export default SectionRow
