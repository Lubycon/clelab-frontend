import { GetServerSidePropsContext } from 'next'

type RedirectMap = Record<string, string>

const redirectMap: RedirectMap = {
  '/course/0': '/course/react',
  '/course/0/0': '/course/react/getting-started',
  '/course/0/1': '/course/react/what-is-jsx',
  '/course/0/2': '/course/react/make-my-own-component',
  '/course/0/3': '/course/react/class-component-and-functional-component',
  '/course/0/4': '/course/react/javascript-ui',
  '/course/0/5': '/course/react/conditional-rendering',
  '/course/0/6': '/course/react/list-and-keys',
  '/course/0/7': '/course/react/handling-events',
  '/course/0/8': '/course/react/form-component',
  '/course/0/9': '/course/react/component-best-practices',
  '/course/0/10': '/course/react/composition-vs-inheritance',
  '/course/1': '/course/modern-javascript',
  '/course/1/11': '/course/modern-javascript/ecma-script',
  '/course/1/12': '/course/modern-javascript/es6',
  '/course/1/13': '/course/modern-javascript/es7',
  '/course/1/14': '/course/modern-javascript/es8',
  '/course/1/15': '/course/modern-javascript/es9',
  '/course/1/16': '/course/modern-javascript/es10',
  '/course/1/17': '/course/modern-javascript/es11',
  '/course/2': '/course/graphql',
  '/course/2/18': '/course/graphql/getting-started',
  '/course/2/19': '/course/graphql/apollo',
  '/course/2/20': '/course/graphql/relay',
  '/course/3': '/course/developer-interview',
  '/course/3/21': '/course/developer-interview/browser-activity',
  '/course/3/22': '/course/developer-interview/dom',
  '/course/3/23': '/course/developer-interview/cors',
  '/course/3/24': '/course/developer-interview/ssr',
  '/course/3/25': '/course/developer-interview/css',
  '/course/3/26': '/course/developer-interview/webpack-babel',
  '/course/4': '/course/frontend-interview',
  '/course/4/27': '/course/frontend-interview/html',
  '/course/4/28': '/course/frontend-interview/javascript',
  '/course/4/29': '/course/frontend-interview/cs-fundamental',
  '/course/4/30': '/course/frontend-interview/react',
  '/course/5': '/course/culture-interview',
  '/course/5/31': '/course/culture-interview/growth',
  '/course/5/32': '/course/culture-interview/soft-skills',
  '/course/5/33': '/course/culture-interview/question',
  '/course/5/34': '/course/culture-interview/retrospective',
}

const isValidCourseUrl = (url: string) => /\/course\/(\d+)/.test(url)

export const courseRedirectUrl = (context: GetServerSidePropsContext) => {
  if (isValidCourseUrl(context.resolvedUrl)) {
    const { res } = context
    res.writeHead(301, { location: redirectMap[context.resolvedUrl] ?? '/' })
    res.end()
  }

  return {
    props: {},
  }
}
