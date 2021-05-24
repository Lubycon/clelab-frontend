import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { mediaQuery } from '../../lib/styles/media'

export interface StickyButtonProps {
  children: ReactNode
}

function StickyButton({ children }: StickyButtonProps) {
  return <div css={stickyStyle}>{children}</div>
}

const stickyStyle = css`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 14.29%
  );
  position: relative;
  justify-content: flex-end;
  ${mediaQuery(767)} {
    width: 100%;
    position: absolute;
  }

  right: 0;
  bottom: 0;
  display: flex;
  flex: 1;
  padding: 24px 0;
  button + button {
    margin-left: 16px;
  }
`

export default StickyButton
