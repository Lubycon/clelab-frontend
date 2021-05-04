import {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
  ReactElement,
} from 'react'

/**
 * @description
 * refer
 * https://evan-moon.github.io/2020/11/28/making-your-components-extensible-with-typescript/
 */
export type Combine<T, K> = T & Omit<K, keyof T>
export type CombineElementProps<E extends ElementType, P = unknown> = Combine<
  P,
  ComponentPropsWithoutRef<E>
>

export type ComponentElementType<T> = ReactElement<ComponentType<T>>

export type OverridableProps<E extends ElementType, P = unknown> = {
  as?: E
} & CombineElementProps<E, P>
