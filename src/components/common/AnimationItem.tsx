import { css } from '@emotion/react'

import { ClapButton } from './ClapButton'

interface Props {
  blogId: number
}

const container = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 10;
  svg {
    &:active {
      transform: scale(1.1);
      stroke: #6634f8;
    }
  }
`

function AnimationItem({ blogId }: Props) {
  return (
    <div css={container}>
      <ClapButton
        id={`${blogId}_clab`}
        blogId={blogId}
        component={ClapButton.templates.Medium}
      />
    </div>
  )
}

export default AnimationItem
