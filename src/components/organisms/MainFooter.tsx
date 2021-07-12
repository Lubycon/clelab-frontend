import { css } from '@emotion/react'
import { logger } from '@lubycon/utils'
import React, { useCallback, useEffect, useState } from 'react'

import { subscribeEmail } from '../../hooks/api/useSubscribe'
import useInput from '../../hooks/useInput'
import { useWindowSize } from '../../hooks/useWindow'
import media, { mediaQuery } from '../../lib/styles/media'
import Button from '../atoms/Button'
import Icon from '../atoms/Icon'
import Input from '../atoms/Input'
import Text from '../atoms/Text'

function MainFooter() {
  const [email, onChangeEmail] = useInput('')
  const [sendMail, setSendMail] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string>('')

  const subscribeLogger = logger.getPageLogger('subscribe_main')

  const handleSubscribeSuccess = useCallback(() => {
    subscribeLogger.click('click_subscribe_main')
  }, [subscribeLogger])

  const size = useWindowSize()
  const [mobile, set] = React.useState<boolean>(false)
  useEffect(() => {
    size.width >= 768 ? set(true) : set(false)
  }, [size.width])

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
    <footer css={footerStyle}>
      <div css={containerStyle}>
        <div css={style}>
          <div css={contentStyle}>
            <Text as="h5" style={{ color: 'white' }}>
              Clelab 소식 받기{' '}
              <Icon
                style={{
                  marginLeft: '12px',
                }}
                name="email"
              />
            </Text>

            <Text
              style={{
                color: '#ffffff',
                marginTop: '16px',
                opacity: 0.7,
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
            {!sendMail && (
              <>
                {!mobile ? (
                  <Button
                    size="small"
                    onClick={() => {
                      handleSubscribe(email)
                    }}
                    disabled={!email}
                    style={{
                      width: '44px',
                      minHeight: '48px',
                      background: '#381E99',
                    }}
                  >
                    <div css={svgIconStyle}>
                      <Icon name="right" />
                    </div>
                  </Button>
                ) : (
                  <Button
                    size="medium"
                    style={{
                      minHeight: '48px',
                      background: '#381E99',
                      marginLeft: '16px',
                    }}
                    disabled={!email}
                    onClick={() => {
                      handleSubscribe(email)
                    }}
                  >
                    지금 구독하기 👏
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
        <div css={copyright}>
          <Text as="span">
            Copyright 2021. Clelab Co. Ltd. all rights reserved.
          </Text>
          <Text as="span">admin@clelab.io</Text>
        </div>
      </div>
    </footer>
  )
}

const footerStyle = css`
  background: #2d2f33;
  padding: 20px 0 51px 0;
  margin-top: 64px;
  ${media.medium} {
    padding-bottom: 38px;
    padding: 0;
  }
`

const containerStyle = css`
  margin-left: auto;
  margin-right: auto;
  width: 1352px;
  ${mediaQuery(1440)} {
    width: 1280px;
  }
  ${mediaQuery(1440)} {
    width: 1024px;
  }
  ${mediaQuery(1056)} {
    width: calc(100% - 32px);
  }
  ${mediaQuery(767)} {
    width: 100%;
  }
`
const style = css`
  background: #6634f8;
  justify-content: center;
  ${mediaQuery(767)} {
    width: 100%;
  }

  padding-left: 20px;
  padding-bottom: 24px;
  border-radius: 12px;
  ${media.small} {
    border-radius: 0;
    flex-direction: column;
    padding-left: 0;
  }
`

const contentStyle = css`
  width: 320px;
  padding-top: 34px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.small} {
    padding-left: 24px;
    padding-top: 24px;
  }
`

const formStyle = css`
  width: 100%;
  margin-top: 24px;
  display: flex;
  align-items: flex-start;

  margin-left: auto;
  margin-right: auto;
  ${media.small} {
    width: 320px;
    justify-content: space-evenly;
  }
`
const svgIconStyle = css`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  svg {
    vertical-align: middle;
  }
`

const copyright = css`
  display: flex;
  margin-top: 34px;
  padding-bottom: 12px;
  margin-right: 20px;
  margin-left: 20px;
  justify-content: space-between;
  color: #c8c8c8;
  font-size: 12px;
  border-bottom: 1px solid #424242;
  ${mediaQuery(767)} {
    padding-bottom: 34px;
    flex-direction: column;
  }
`
export default MainFooter
