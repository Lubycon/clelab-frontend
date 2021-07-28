import { css } from '@emotion/react'
import ImageSection from 'components/atoms/ImageSection'
import Text from 'components/atoms/Text'
import { Course } from 'hooks/api/useGetCoruse'
import { mediaQuery } from 'lib/styles/media'
import Link from 'next/link'

export interface CourseCardProps {
  course: Course
  onClick?: (course: Course) => void
}

function CourseCard({ course, onClick }: CourseCardProps) {
  const { id, thumbnail, title, description } = course

  return (
    <Link href={`/course/${id}`}>
      <div
        css={containerStyle}
        onClick={() => onClick?.(course)}
        role="button"
        tabIndex={0}
      >
        <ImageSection src={thumbnail} widthRatio={2.5} heightRatio={1.2} />
        <div css={contentStyle}>
          <Text as="h6" style={{ color: '#282828', marginBottom: '14px' }}>
            {title}
          </Text>
          <Text>{description}</Text>
        </div>
      </div>
    </Link>
  )
}

const containerStyle = css`
  width: 320px;
  margin: 22px 12px 22px 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &,
  img {
    transition: transform 0.2s ease-in-out;
  }
  ${mediaQuery(1056)} {
    width: calc(50% - 32px);
  }
  ${mediaQuery(767)} {
    margin: 22px 0;
    width: 100%;
    & + & {
      margin-top: 16px;
    }
  }
  &:hover {
    transform: scale(1.01);
    img {
      transform: scale(1.1);
    }
  }
`

const contentStyle = css`
  color: #7d7d7d;
  font-size: 15px;
  margin-top: 12px;
`
export default CourseCard
