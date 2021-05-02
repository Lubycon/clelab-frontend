import React from 'react'

import * as svg from './svg'

export const iconTypes: IconType[] = Object.keys(svg) as any[]

export type IconType = keyof typeof svg

export type IconProps = {
  name: IconType
  className?: string
  style?: React.CSSProperties
  onClick?(): void
}

function Icon({ name, className, style, onClick }: IconProps) {
  return React.createElement(svg[name], {
    className,
    style,
    onClick,
  })
}

export default Icon
