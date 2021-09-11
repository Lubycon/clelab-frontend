import { css } from '@emotion/react'
import Button from 'components/atoms/Button'
import Text from 'components/atoms/Text'
import palette from 'lib/styles/palette'
import { useRouter } from 'next/router'

export default function Clelab404() {
  const router = useRouter()

  return (
    <div css={containerStyle}>
      <div css={wrapperStyle}>
        <Text as="h6" style={{ fontSize: '24px', marginBottom: '24px' }}>
          죄송합니다.
        </Text>
        <Text as="h6" style={{ marginBottom: '120px' }}>
          해당 페이지를 찾을 수 없습니다.
        </Text>
        <Text style={{ color: '#545454', display: 'block' }}>
          문의 : admin@clelab.io
        </Text>
        <Button
          variant="primary"
          style={{
            background: palette.brandColor,
            color: palette.white,
            justifyContent: 'center',
            textAlign: 'center',
            marginTop: '44px',
            width: '203px',
          }}
          onClick={() => {
            router.push('/')
          }}
        >
          <Text
            as="h6"
            style={{
              fontSize: '14px',
              cursor: 'pointer',
              lineHeight: '20px',
            }}
          >
            클랩 메인 페이지로 가기
          </Text>
        </Button>
      </div>
    </div>
  )
}
const containerStyle = css`
  background-color: white;
  width: 100%;
  height: 100vh;
`

const wrapperStyle = css`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`
