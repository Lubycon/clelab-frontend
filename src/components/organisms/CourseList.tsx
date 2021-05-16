import { css } from '@emotion/react'

import { Course } from '../../hooks/api/useGetCoruse'
import { mediaQuery } from '../../lib/styles/media'
import CourseCard from '../molecules/CourseCard'

export interface CourseListProps {
  course: Course[]
}

function CourseList({ course }: CourseListProps) {
  return (
    <div css={blockStyle}>
      {course.map((item) => (
        <CourseCard course={item} key={item.id} />
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

export default CourseList
