import { css } from '@emotion/react'
import Link from 'next/link'

import Icon from './Icon'

interface Props {
  isMobile?: boolean
}

function MainLogo({ isMobile = false }: Props) {
  return (
    <Link href="/">
      <div css={logoStyle(isMobile)}>
        <Icon name="logo" />
      </div>
    </Link>
  )
}

const logoStyle = (isMobile?: boolean) => css`
  cursor: pointer;
  margin-bottom: 30px;
  ${isMobile &&
  css`
    margin-left: 20px;
    margin-bottom: 0;
  `}
  &:hover {
    transform: scale(1.05);
  }
`

export default MainLogo
