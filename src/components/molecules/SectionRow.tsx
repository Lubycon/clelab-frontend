import { css } from '@emotion/react'

import media from '../../lib/styles/media'

export type SectionRowProps = {
  title: string
  description?: string
}

function SectionRow({ title, description }: SectionRowProps) {
  return (
    <div css={rowStyle}>
      <div css={titleWrapperStyle}>
        <h3>{title}</h3>
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
  width: 152px;
  flex-shrink: 0;
  h3 {
    line-height: 1.5;
    margin: 0;
    font-size: 17px;
    font-weight: bold;
    ${media.small} {
      margin-bottom: 8px;
    }
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
