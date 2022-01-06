import { css } from '@emotion/react'
import useGetCourse, { Course } from 'hooks/api/useGetCoruse'
import { fetcher } from 'lib/api/fetch';
import { mediaQuery } from 'lib/styles/media'

import CourseCard from './'

export interface CourseListProps {
  onClickItem?: (course: Course) => void
}

function CourseList({onClickItem}: CourseListProps) {
  const { data } = useGetCourse();


  return (
    <div css={blockStyle}>
      {data?.map((item) => (
        <CourseCard course={item} key={item.id} onClick={onClickItem} />
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

export async function getServerSidProps() {
  const data = await fetcher('curriculums')

  return {
    props: {
      fallback: {
        '/curriculums': data,
      },
    },
  }
}

export default CourseList

