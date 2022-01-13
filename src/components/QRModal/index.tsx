import { css } from '@emotion/react'
import { useWindowSize } from '@lubycon/react'
import { useEffect, useState } from 'react'
import { createQRCodeImage } from 'utils/createQRCodeImage'

import { flex } from '../../utils/styles/flex'
import Button from '../common/Button'
import Modal from '../common/Modal'
import { Spacing } from '../common/Spacing'

interface Props {
  isOpen: boolean
  onClose: () => void
}

function QRModal({ isOpen, onClose }: Props) {
  const [qrcode, setQrcode] = useState<string>('')
  const url = process.env.NEXT_PUBLIC_QRCODE ?? ''
  const size = useWindowSize()
  const [mobile, set] = useState<boolean>(false)

  useEffect(() => {
    size.width <= 786 ? set(true) : set(false)
  }, [size.width])

  useEffect(() => {
    createQRCodeImage(url).then((data) => {
      setQrcode(data)
    })
  }, [setQrcode, url])

  const handleMobileToss = () => {
    window.open(url)
    onClose()
  }

  return (
    <Modal isOpen={isOpen}>
      <div
        css={[
          flex({ flexDirection: 'column', alignItems: 'center' }),
          { width: '254px' },
        ]}
      >
        <div css={title}>clelab</div>
        <div css={bodyTitle}>서버비용을 후원해주세요!</div>
        <Spacing size={42} />
        <img src={'/images/toss.svg'} alt="" />
        <Spacing size={12} />
        <img width={132} height={132} src={qrcode} alt="" />
        <Spacing size={26} />
        {mobile && (
          <>
            <Button
              size="large"
              variant="brandColor"
              onClick={handleMobileToss}
              style={{ width: '210px' }}
            >
              토스로 후원하기👏
            </Button>
            <Spacing size={8} />
          </>
        )}
        <Button
          size="large"
          variant="secondary"
          onClick={onClose}
          style={{ width: '210px' }}
        >
          닫기
        </Button>
        <Spacing size={4} />
      </div>
    </Modal>
  )
}

const title = css`
  font-size: 16px;
  line-height: 28px;
  color: #545454;
  font-family: Noto Sans KR;
`

const bodyTitle = css`
  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #282828;
`

export default QRModal
