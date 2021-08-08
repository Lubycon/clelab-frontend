import { css } from '@emotion/react'
import { logger } from '@lubycon/logger'
import React, { useCallback, useEffect, useState } from 'react'

import { subscribeEmail } from '../../hooks/api/useSubscribe'
import useInput from '../../hooks/useInput'
import { useWindowSize } from '../../hooks/useWindow'
import media, { mediaQuery } from '../../lib/styles/media'
import palette from '../../lib/styles/palette'
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
    size.width >= 786 ? set(true) : set(false)
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
            <Text as="h5" css={subscribeTitle}>
              Clelab 소식 받기
              <Icon
                style={{
                  marginLeft: '12px',
                }}
                name="email"
              />
            </Text>

            <Text
              style={{
                color: palette.white,
                marginTop: '8px',
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
          <Text
            as="span"
            style={{
              borderBottom: `${!mobile ? '1px solid #424242' : 0}`,
              paddingBottom: `${!mobile ? '12px' : 0}`,
            }}
          >
            Copyright 2021. Clelab Co. Ltd. all rights reserved
          </Text>
          <Text
            as="span"
            style={{
              paddingTop: `${!mobile ? '12px' : 0}`,
            }}
          >
            admin@clelab.io
          </Text>
        </div>
      </div>
    </footer>
  )
}

const footerStyle = css`
  background: #2d2f33;
  padding: 42px 0 51px 0;
  margin-top: 42px;
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

const subscribeTitle = css`
  color: ${palette.white};
  font-size: 28px;
  line-height: 41px;
  ${media.small} {
    font-size: 24px;
    line-height: 36px;
  }
`

const style = css`
  background: #6634f8;
  background-image: url('/images/subscribe_background.png');
  justify-content: center;
  ${media.small} {
    width: 100%;
  }

  padding-left: 56px;
  padding-bottom: 24px;
  border-radius: 12px;
  ${media.small} {
    border-radius: 0;
    flex-direction: column;
    padding-left: 0;
  }
`

const contentStyle = css`
  padding-top: 34px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.medium} {
    width: 320px;
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
  margin-top: 38px;
  padding-bottom: 12px;
  margin-right: 20px;
  margin-left: 20px;
  justify-content: space-between;
  font-family: Archivo;
  border-bottom: 1px solid #424242;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 0.03em;
  color: #c8c8c8;
  opacity: 0.7;
  ${media.large} {
    padding-bottom: 34px;
    flex-direction: column;
  }
`
export default MainFooter
