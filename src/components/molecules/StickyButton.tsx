import { css } from '@emotion/react'
import { mediaQuery } from 'lib/styles/media'
import { ReactNode } from 'react'

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
    position: fixed;
    padding: 24px;
    box-sizing: border-box;
  }
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex: 1;
  padding: 24px 0;
  button + button {
    margin-left: 6px;
  }
`

export default StickyButton
