import { css } from '@emotion/react'
import { useRouter } from 'next/dist/client/router'
import NextLink from 'next/link'

import Text from './Text'

export type SidebarItemProps = {
  text: string
  to: string
}

function SidebarItem({ text, to }: SidebarItemProps) {
  const router = useRouter()

  return (
    <li css={linkStyle(router.query.id === to)}>
      <NextLink href="/curriculum/[id]" as={`/curriculum/${to}`}>
        <Text style={{ cursor: 'pointer' }}>{text}</Text>
      </NextLink>
    </li>
  )
}

const linkStyle = (active: boolean) => css`
  border-radius: 8px;
  height: 48px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-right: 48px;
  color: #9696a4;
  ${active &&
  css`
    color: #3ac8e8;
    font-weight: bold;
  `}
`

export default SidebarItem
