import { css } from '@emotion/react'

import media from '../../lib/styles/media'

export type SectionRowProps = {
  title: string
  editButton?: boolean
  description?: string
}

function SectionRow({ title, description }: SectionRowProps) {
  return (
    <div css={rowStyle}>
      <div className="wrapper">
        <div className="title-wrapper">
          <h3>{title}</h3>
        </div>
      </div>
      {description && <div className="description">{description}</div>}
    </div>
  )
}

const rowStyle = css`
  padding-top: 16px;
  padding-bottom: 16px;
  & > .wrapper {
    display: flex;
    ${media.small} {
      flex-direction: column;
    }
  }
  .title-wrapper {
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
  }
  .description {
    font-size: 13px;
    margin-top: 10px;
    line-height: 1.69;
    text-align: left;
    color: #545454;
  }
`

export default SectionRow
