import { css } from '@emotion/react'
import { ReactNode } from 'react'

import Sticky from '../atoms/Sticky'

export interface StickyButtonProps {
  children: ReactNode
}

function StickyButton({ children }: StickyButtonProps) {
  return (
    <Sticky css={stickyStyle} bottom={0}>
      {children}
    </Sticky>
  )
}

const stickyStyle = css`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 14.29%
  );
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 24px;
  width: calc(100% - 32px);
  button + button {
    margin-left: 16px;
  }
`

export default StickyButton
