import { css } from '@emotion/react'
import Lottie from 'lottie-web'
import { useEffect, useRef } from 'react'

import { ClapButton } from './ClapButton'

interface Props {
  animation: any
  assetPath?: string
  count: number
  width?: string
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

function LottieContainer({ animation, assetPath, blogId }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    Lottie.loadAnimation({
      container: ref.current,
      animationData: animation,
      assetsPath: assetPath,
    })
  }, [animation, assetPath])

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

export default LottieContainer
