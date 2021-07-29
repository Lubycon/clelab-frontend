import { logger } from '@lubycon/utils'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { isProduction } from 'constants/env'
import { firebaseConfig } from 'constants/firebase'
import { GlobalStyle } from 'GlobalStyles'
import { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { SWRConfig } from 'swr'
import swrConfig from 'utils/swrConfig'

const App = ({ Component, pageProps }: AppProps) => {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
  })

  useEffect(() => {
    logger.init({
      services: {
        firebase: firebaseConfig,
        amplitude: process.env.NEXT_PUBLIC_AMPLITUDE_KEY ?? '',
      },
      mode: isProduction ? 'production' : 'development',
    })
  }, [])

  return (
    <SWRConfig value={swrConfig}>
      <Head>
        <title>나를 발전시키는 시간 - Clelab</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  )
}

App.getInitialProps = async ({ ctx }: AppContext) => {
  const redirectUrl = (asPath?: string) => {
    switch (asPath) {
      case '/course/0':
        return '/course/react'
      case '/course/0/0':
        return '/course/react/getting-started'
      case '/course/0/1':
        return '/course/react/what-is-jsx'
      case '/course/0/2':
        return '/course/react/make-my-own-component'
      case '/course/0/3':
        return '/course/react/class-component-and-functional-component'
      case '/course/0/4':
        return '/course/react/javascript-ui'
      case '/course/0/5':
        return '/course/react/conditional-rendering'
      case '/course/0/6':
        return '/course/react/list-and-keys'
      case '/course/0/7':
        return '/course/react/handling-events'
      case '/course/0/8':
        return '/course/react/form-component'
      case '/course/0/9':
        return '/course/react/component-best-practices'
      case '/course/0/10':
        return '/course/react/composition-vs-inheritance'
      case '/course/1':
        return '/course/modern-javascript'
      case '/course/1/11':
        return '/course/modern-javascript/ecma-script'
      case '/course/1/12':
        return '/course/modern-javascript/es6'
      case '/course/1/13':
        return '/course/modern-javascript/es7'
      case '/course/1/14':
        return '/course/modern-javascript/es8'
      case '/course/1/15':
        return '/course/modern-javascript/es9'
      case '/course/1/16':
        return '/course/modern-javascript/es10'
      case '/course/1/17':
        return '/course/modern-javascript/es11'
      case '/course/2':
        return '/course/graphql'
      case '/course/2/18':
        return '/course/graphql/getting-started'
      case '/course/2/19':
        return '/course/graphql/apollo'
      case '/course/2/20':
        return '/course/graphql/relay'
      case '/course/3':
        return '/course/developer-interview'
      case '/course/3/21':
        return '/course/developer-interview/browser-activity'
      case '/course/3/22':
        return '/course/developer-interview/dom'
      case '/course/3/23':
        return '/course/developer-interview/cors'
      case '/course/3/24':
        return '/course/developer-interview/ssr'
      case '/course/3/25':
        return '/course/developer-interview/css'
      case '/course/3/26':
        return '/course/developer-interview/webpack-babel'
      case '/course/4':
        return '/course/frontend-interview'
      case '/course/4/27':
        return '/course/frontend-interview/html'
      case '/course/4/28':
        return '/course/frontend-interview/javascript'
      case '/course/4/29':
        return '/course/frontend-interview/cs-fundamental'
      case '/course/4/30':
        return '/course/frontend-interview/react'
      case '/course/5':
        return '/course/culture-interview'
      case '/course/5/31':
        return '/course/culture-interview/growth'
      case '/course/5/32':
        return '/course/culture-interview/soft-skills'
      case '/course/5/33':
        return '/course/culture-interview/question'
      case '/course/5/34':
        return '/course/culture-interview/retrospective'
      default:
        return '/'
    }
  }
  const regexUrl = /\/course\/(\d+)/.test(ctx.asPath || '/')
  if (ctx.res && regexUrl) {
    ctx.res.writeHead(301, { Location: redirectUrl(ctx.asPath) })
    ctx.res.end()
  }

  return {}
}

export default App
