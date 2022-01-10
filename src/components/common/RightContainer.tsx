import { css } from '@emotion/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function RightContainer({ children }: Props) {
  return <div css={style}>{children}</div>
}

const style = css`
  flex: 1 0 0;
  display: flex;
  justify-content: flex-end;
`

export default RightContainer
