import { css } from '@emotion/react'
import { AnimatePresence, motion } from 'framer-motion'
import * as React from 'react'

import palette from '../../lib/styles/palette'

const overlayStyle = css`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

const modalContainer = css`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  background-color: ${palette.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  padding: 32px 24px;
`

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
}
const containerVariant = {
  initial: { top: '-50%', transition: { type: 'spring' } },
  isOpen: { top: '50%' },
  exit: { top: '-50%' },
}

export interface ModalProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
  isOpen: boolean
}

function Modal({ children, isOpen, ...rest }: ModalProps) {
  const htmlProps = rest as any

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={'initial'}
          animate={'isOpen'}
          exit={'exit'}
          variants={modalVariant}
          css={overlayStyle}
        >
          <motion.div
            css={modalContainer}
            variants={containerVariant}
            {...htmlProps}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
