import { GetServerSidePropsContext } from 'next'

type RedirectMap = Record<string, string>

const redirectMap: RedirectMap = {
  '/course/0': '/course/react',
  '/course/0/0': '/course/react/react-프로젝트-시작하기',
  '/course/0/1': '/course/react/jsx-알아보기',
  '/course/0/2': '/course/react/react-컴포넌트',
  '/course/0/3': '/course/react/클래스-컴포넌트-vs-함수형-컴포넌트',
  '/course/0/4': '/course/react/javascript-ui',
  '/course/0/5': '/course/react/react-조건부-렌더링',
  '/course/0/6': '/course/react/react-컴포넌트-반복-렌더링',
  '/course/0/7': '/course/react/react-이벤트-핸들링',
  '/course/0/8': '/course/react/react-폼-컴포넌트',
  '/course/0/9': '/course/react/좋은-컴포넌트-설계하기',
  '/course/0/10': '/course/react/react-합성-vs-상속',
  '/course/1': '/course/modern-javascript',
  '/course/1/11': '/course/modern-javascript/ecma-script',
  '/course/1/12': '/course/modern-javascript/es6',
  '/course/1/13': '/course/modern-javascript/es7',
  '/course/1/14': '/course/modern-javascript/es8',
  '/course/1/15': '/course/modern-javascript/es9',
  '/course/1/16': '/course/modern-javascript/es10',
  '/course/1/17': '/course/modern-javascript/es11',
  '/course/2': '/course/graphql',
  '/course/2/18': '/course/graphql/graphql-이란',
  '/course/2/19': '/course/graphql/graphql-apollo',
  '/course/2/20': '/course/graphql/graphql-relay',
  '/course/3': '/course/developer-interview',
  '/course/3/21': '/course/developer-interview/브라우저의-동작-원리',
  '/course/3/22': '/course/developer-interview/dom이란',
  '/course/3/23': '/course/developer-interview/cors란',
  '/course/3/24':
    '/course/developer-interview/서버-사이드-렌더링-vs-클라이언트-사이드-렌더링',
  '/course/3/25': '/course/developer-interview/올바른-css-사용법',
  '/course/3/26': '/course/developer-interview/webpack과-babel',
  '/course/4': '/course/frontend-interview',
  '/course/4/27': '/course/frontend-interview/html-면접-질문',
  '/course/4/28': '/course/frontend-interview/자바스크립트-면접-질문',
  '/course/4/29': '/course/frontend-interview/cs-지식',
  '/course/4/30': '/course/frontend-interview/react-면접-질문',
  '/course/5': '/course/culture-interview',
  '/course/5/31': '/course/culture-interview/개발자-성장-면접-질문',
  '/course/5/32': '/course/culture-interview/개발자-소프트스킬-면접-질문',
  '/course/5/33': '/course/culture-interview/개발자-면접-역질문',
  '/course/5/34': '/course/culture-interview/면접-회고-모음',

  '/course/react/getting-started': 'react-프로젝트-시작하기',
  '/course/react/what-is-jsx': '/course/react/jsx-알아보기',
  '/course/react/make-my-own-component': '/course/react/react-컴포넌트',
  '/course/react/class-component-and-functional-component':
    '/course/react/클래스-컴포넌트-vs-함수형-컴포넌트',
  '/course/react/javascript-ui': '/course/react/javascript-ui',
  '/course/react/conditional-rendering': '/course/react/react-조건부-렌더링',
  '/course/react/list-and-keys': '/course/react/react-컴포넌트-반복-렌더링',
  '/course/react/handling-events': '/course/react/react-이벤트-핸들링',
  '/course/react/form-component': '/course/react/react-폼-컴포넌트',
  '/course/react/component-best-practices':
    '/course/react/좋은-컴포넌트-설계하기',
  '/course/react/composition-vs-inheritance':
    '/course/react/react-합성-vs-상속',
  '/course/graphql/getting-started': '/course/graphql/graphql-이란',
  '/course/graphql/apollo': '/course/graphql/graphql-apollo',
  '/course/graphql/relay': '/course/graphql/graphql-relay',
  '/course/developer-interview/browser-activity':
    '/course/developer-interview/브라우저의-동작-원리',
  '/course/developer-interview/dom': '/course/developer-interview/dom이란',
  '/course/developer-interview/cors': '/course/developer-interview/cors란',
  '/course/developer-interview/ssr':
    '/course/developer-interview/서버-사이드-렌더링-vs-클라이언트-사이드-렌더링',
  '/course/developer-interview/css':
    '/course/developer-interview/올바른-css-사용법',
  '/course/developer-interview/webpack-babel':
    '/course/developer-interview/webpack과-babel',
  '/course/frontend-interview/html':
    '/course/frontend-interview/html-면접-질문',
  '/course/frontend-interview/javascript':
    '/course/frontend-interview/자바스크립트-면접-질문',
  '/course/frontend-interview/cs-fundamental':
    '/course/frontend-interview/cs-지식',
  '/course/frontend-interview/react':
    '/course/frontend-interview/react-면접-질문',
  '/course/culture-interview/growth':
    '/course/culture-interview/개발자-성장-면접-질문',
  '/course/culture-interview/soft-skills':
    '/course/culture-interview/개발자-소프트스킬-면접-질문',
  '/course/culture-interview/question':
    '/course/culture-interview/개발자-면접-역질문',
  '/course/culture-interview/retrospective':
    '/course/culture-interview/면접-회고-모음',
  '/course/react-state-management/recoil':
    '/course/react-state-management/recoil이란',
  '/course/react-state-management/redux':
    '/course/react-state-management/redux란',
  '/course/react-state-management/context-api':
    '/course/react-state-management/context-api란',
  '/course/react-state-management/mobx':
    '/course/react-state-management/mobx란',
  '/course/react-state-management/getting-started':
    '/course/react-state-management/상태관리란',
  '/course/redux/getting-started': '/course/redux/redux-심화',
  '/course/redux/redux-middleware': '/course/redux/redux-saga',
  '/course/redux/swr': '/course/redux/react-swr',
  '/course/typescript-basic/what-is-typescript':
    '/course/typescript-basic/typescript란',
  '/course/typescript-basic/class':
    '/course/typescript-basic/typescript-클래스',
  '/course/typescript-basic/interface':
    '/course/typescript-basic/typescript-인터페이스',
  '/course/typescript-basic/function':
    '/course/typescript-basic/typescript-function',
  '/course/typescript-basic/generic':
    '/course/typescript-basic/typescript-제네릭',
  '/course/typescript-basic/enum': '/course/typescript-basic/typescript-enum',
  '/course/typescript-basic/type-interface':
    '/course/typescript-basic/typescript-타입-추론',
  '/course/typescript/type-guard': '/course/typescript/typescript-타입-가드',
  '/course/typescript/type-alias':
    '/course/typescript/typescript-type-vs-interface',
  '/course/typescript/utility-types':
    '/course/typescript/typescript-유틸리티-타입',
  '/course/typescript/inheritance-mixins':
    '/course/typescript/typescript-상속과-믹스인',
  '/course/typescript/covariance-contravariance':
    '/course/typescript/typescript-공변성-반공변성-이변성',
  '/course/typescript/tsconfig': '/course/typescript/typescript-tsconfig-설정',
  '/course/typescript-usage/typescript-react-cra':
    '/course/typescript-usage/typescript-react-프로젝트-시작하기',
  '/course/typescript-usage/typescript-react-webpack-babel':
    '/course/typescript-usage/cra-없이-typescript-react-시작하기',
  '/course/typescript-usage/typescript-react-component':
    '/course/typescript-usage/typescript-react-컴포넌트',
  '/course/typescript-usage/typescript-react-hook':
    '/course/typescript-usage/typescript-react-hook-작성하기',
  '/course/typescript-usage/typescript-react-redux':
    '/course/typescript-usage/typescript-react-redux-사용하기',
}

export const courseRedirectUrl = (context: GetServerSidePropsContext) => {
  const valid = Object.keys(redirectMap).includes(context.resolvedUrl)

  if (valid) {
    const { res } = context
    res.writeHead(301, {
      location: encodeURI(redirectMap[context.resolvedUrl]) ?? '/',
    })
    res.end()
  }

  return {
    props: {},
  }
}
