import { css } from '@emotion/react'

import { mediaQuery } from '../../lib/styles/media'
import { CurriculumItem } from '../../model/curriculum'
import CurriculumCard from '../molecules/CurriculumCard'

export type CurriculumListProps = {
  curriculums: CurriculumItem[]
}

function CurriculumList({ curriculums }: CurriculumListProps) {
  return (
    <div css={blockStyle}>
      {curriculums.map((item, index) => (
        <CurriculumCard curriculum={item} key={index} />
      ))}
    </div>
  )
}

const blockStyle = css`
  display: flex;
  margin: -12px;
  flex-wrap: wrap;
  ${mediaQuery(767)} {
    margin: 0;
  }
`

export default CurriculumList
