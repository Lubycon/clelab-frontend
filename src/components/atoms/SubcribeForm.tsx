import { css } from '@emotion/react'
import { logger } from '@lubycon/logger'
import { useCallback, useState } from 'react'

import { subscribeEmail } from '../../hooks/api/useSubscribe'
import useInput from '../../hooks/useInput'
import media from '../../lib/styles/media'
import Button from './Button'
import Icon from './Icon'
import Input from './Input'
import Text from './Text'

export interface SubcribeFormProps {
  onClose: () => void
}

function SubcribeForm({ onClose }: SubcribeFormProps) {
  const [email, onChangeEmail] = useInput('')
  const [sendMail, setSendMail] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string>('')

  const subscribeLogger = logger.getPageLogger('subscribe_modal')

  const handleSubscribeSuccess = useCallback(() => {
    subscribeLogger.click('click_subscribe')
  }, [subscribeLogger])

  const handleSubscribe = useCallback(
    async (email: string) => {
      const data = await subscribeEmail(email)

      if (data.email) {
        setSendMail(true)
        handleSubscribeSuccess()
      }
      if (data?.message) {
        setErrorMsg(data.message)
      }
    },
    [handleSubscribeSuccess],
  )

  return (
    <div css={style}>
      <div css={headerStyle}>
        <Icon onClick={onClose} name="close" />
      </div>
      <div css={contentStyle}>
        <Icon name="mail" />
        <Text as="h5">Clelab 소식 받기</Text>
        <Text
          style={{
            color: '#9696A4',
            marginTop: '16px',
            textAlign: 'center',
          }}
        >
          {sendMail
            ? '이메일 인증을 완료해주세요!  🎉'
            : '클랩에서는 2주마다 프론트엔드 개발자를 위한 코스를 공개하고 있어요!'}
        </Text>
      </div>
      <div css={formStyle}>
        {!sendMail && (
          <Input
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일 주소를 입력해 주세요."
            comment={errorMsg}
          />
        )}
        {sendMail ? (
          <Button
            size="medium"
            style={{
              width: '142px',
              minHeight: '48px',
            }}
            onClick={onClose}
          >
            구독 완료!
          </Button>
        ) : (
          <Button
            size="medium"
            style={{
              minHeight: '48px',
            }}
            disabled={!email}
            onClick={() => {
              handleSubscribe(email)
            }}
          >
            지금 구독하기 👏
          </Button>
        )}
      </div>
    </div>
  )
}

const style = css`
  border-radius: 8px;
  justify-content: center;
  width: 568px;
  ${media.small} {
    flex-direction: column;
    width: 288px;
  }
`

const headerStyle = css`
  display: flex;
  justify-content: flex-end;
  svg {
    cursor: pointer;
  }
`

const contentStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  svg {
    margin-top: 16px;
    margin-bottom: 20px;
  }
`

const formStyle = css`
  width: 422px;
  margin-top: 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: auto;
  ${media.small} {
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    button {
      width: 100%;
      margin-left: 0;
      margin-top: 48px;
    }
  }
`

export default SubcribeForm
