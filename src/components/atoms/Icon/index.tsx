import React from 'react'

import * as svg from './svg'

export const iconTypes = Object.keys(svg) as IconType[]

export type IconType = keyof typeof svg

export interface IconProps {
  name: IconType
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

function Icon({ name, className, style, onClick }: IconProps) {
  return React.createElement(svg[name], {
    className,
    style,
    onClick,
  })
}

export default Icon
