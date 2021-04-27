import { css } from '@emotion/react'

import { mediaQuery } from '../../lib/styles/media'
import { CurriculumItem } from '../../model/curriculum'
import ImageSection from '../atoms/ImageSection'

export interface CurriculumCardProps {
  curriculum: CurriculumItem
}

function CurriculumCard({ curriculum }: CurriculumCardProps) {
  const { thumbnail, title, description } = curriculum

  return (
    <div css={containerStyle}>
      <ImageSection src={thumbnail} widthRatio={2.5} heightRatio={1.1} />
      <div css={contentStyle}>
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  )
}

const containerStyle = css`
  width: 320px;
  margin: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  ${mediaQuery(1056)} {
    width: calc(50% - 32px);
  }
  ${mediaQuery(767)} {
    margin: 0;
    width: 100%;
    & + & {
      margin-top: 16px;
    }
  }
`

const contentStyle = css`
  color: #7d7d7d;
  font-size: 15px;
  margin-top: 12px;
  h4 {
    font-weight: bold;
    margin: 0;
    color: #282828;
  }
  span {
    font-size: 13px;
    margin-top: 8px;
  }
`
export default CurriculumCard
