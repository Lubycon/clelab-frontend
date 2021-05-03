import { ReactNode } from 'react'

import Button, { ButtonProps } from '../atoms/Button'

export type ButtonVariant = 'primary'

export interface IconButtonProps extends ButtonProps {
  icon?: ReactNode
}

function IconButton({ icon, title, children, ...rest }: IconButtonProps) {
  return (
    <Button {...rest}>
      {children}
      {icon}
    </Button>
  )
}

export default IconButton
