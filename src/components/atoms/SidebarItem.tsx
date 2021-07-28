import { css } from '@emotion/react'
import { SectionItem } from 'hooks/api/useGetSections'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

import palette from '../../lib/styles/palette'
import Text from './Text'

export type SidebarItemProps = {
  sectionItem: SectionItem
  onClick?: (sectionItem: SectionItem) => void
}

function SidebarItem({ sectionItem, onClick }: SidebarItemProps) {
  const { id, order, title } = sectionItem
  const router = useRouter()
  const courseId = router.query.courseId

  return (
    <li
      css={linkStyle(router.query.sectionId === String(id))}
      onClick={() => onClick?.(sectionItem)}
    >
      <Link href={`/course/${courseId}/${id}`}>
        <Text
          css={animationStyle}
          style={{ cursor: 'pointer', fontWeight: 'bold' }}
        >
          {order}. {title}
        </Text>
      </Link>
    </li>
  )
}

const linkStyle = (active: boolean) => css`
  border-radius: 8px;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 20px;
  color: #9696a4;
  font-weight: bold;
  ${active &&
  css`
    color: ${palette.solid.deepSkyBlue};
  `}
`

const animationStyle = css`
  &:hover {
    transform: scale(1.05);
  }
`

export default SidebarItem
