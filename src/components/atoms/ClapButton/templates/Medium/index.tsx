import { css, keyframes } from '@emotion/react'
import { FC, useCallback, useRef, useState } from 'react'

import { ClapButtonTemplateComponentProps } from '../..'
import { ClapEmpty } from './icons/ClapEmpty'
import { ClapFull } from './icons/ClapFull'
import { style } from './style'

export const Medium: FC<ClapButtonTemplateComponentProps> = ({
  isLoading,
  userClaps,
  totalClaps,
  handlePress,
  isCounterVisible = true,
}) => {
  console.log(isLoading, isCounterVisible)
  const [animationActive, setAnimationActive] = useState<boolean>(false)

  const triangles = []
  for (let i = 0; i < 5; i++) {
    triangles.push(
      <div
        key={i}
        css={{
          transform: `rotate(${(360 / 5) * i}deg)`,
          transformOrigin: `${0.2}rem 0`,
          marginLeft: `-${0.2}rem`,
        }}
      >
        <div css={triangleAnimation(animationActive)} />
      </div>,
    )
  }

  const circles = []
  for (let i = 0; i < 5; i++) {
    circles.push(
      <div
        key={i}
        css={{
          transform: `rotate(${(360 / 5) * i}deg)`,
          transformOrigin: `${0.05}em 0`,
          marginLeft: `-${0.05}em`,
        }}
      >
        <div css={circleAnimation(animationActive)} />
      </div>,
    )
  }
  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setAnimationActive(true)

      if (timeoutId.current) {
        clearTimeout(timeoutId.current)
      }

      timeoutId.current = setTimeout(() => setAnimationActive(false), 300)

      handlePress(e)
    },
    [handlePress],
  )

  /** TODO 추후 더이상 clab 방지 */
  const Icon = userClaps && userClaps > 0 ? ClapEmpty : ClapFull

  return (
    <div css={style.root}>
      <div css={style.buttonContainer}>
        <div css={style.centeredContainer}>
          <div
            key={timeoutId.current && timeoutId.current.toString()}
            css={baloonStyle(animationActive)}
          >
            {userClaps}
          </div>
        </div>
        <button onClick={handleClick} css={style.button} disabled={!isLoading}>
          <div css={style.centeredContainer}>{triangles}</div>
          <div css={style.centeredContainer}>{circles}</div>
          <Icon css={iconStyle} />
        </button>
      </div>

      {!isCounterVisible && <div css={style.counter}>{totalClaps}</div>}
    </div>
  )
}

const baloonFade = keyframes`
  0% {
    opacity: 0.5;
    transform: translateY(-2.6em);
  }
  72% {
    opacity: 1;
    transform: translateY(-3.4em);
  }
  100% {
    opacity: 0;
    transform: translateY(-5em);
  }
`

const triangleFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-0.5em) scale(1);
  }
  32% {
    opacity: 1;
    transform: translateY(-1em) scale(1.3);
  }
  100% {
    opacity: 1;
    transform: translateY(-2em) scale(1.6);
  }
`

const iconScale = keyframes`
  0% {
    transform: scale(1);
  }
  32% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

const iconStyle = css`
  height: 2em;
  fill: black;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:active {
    animation: ${iconScale} ${500}ms ease forwards;
  }
`

const baloonStyle = (animationActive: boolean) => css`
  opacity: 0;
  position: absolute;
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #292929;
  border-radius: 100%;
  font-size: 0.7em;
  height: 2.4em;
  width: 2.4em;
  top: -1.2em;
  left: -1.2em;
  ${animationActive &&
  css`
    animation: ${baloonFade} 2s ease forwards;
  `}
`

const circleAnimation = (animationActive: boolean) => css`
  opacity: 0;
  border-radius: 100%;
  padding: 0.05em;
  background-color: #4086ff;
  position: absolute;
  ${animationActive &&
  css`
    animation: ${triangleFade} 0.5s ease forwards;
  `}
`

const triangleAnimation = (animationActive: boolean) => css`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  border-left: ${0.02}em solid transparent;
  border-right: ${0.02}em solid transparent;
  padding: 0.05em;
  background-color: #ff365e;
  ${animationActive &&
  css`
    animation: ${triangleFade} 1s ease forwards;
  `}
`
