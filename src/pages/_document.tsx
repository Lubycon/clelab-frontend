import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta
            name="google-site-verification"
            content="ZlOPMIW-1Hrn-6yUnr5OX76e2M3cvrrd2C4vLaq-Qko"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700;800&family=Noto+Sans+KR:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon/favicon.ico" />
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta property="og:title" content="clelab - 나를 발전시키는 시간 " />
          <meta
            property="og:description"
            content="저희는 구글에 널리 퍼져있는 블로그 글을 수집하여 프론트엔드 코스를 만들어주는 서비스를 운영하고 있는 클랩팀👏이라고 합니다!"
          />
          <meta property="og:image" content="/clelab_open_graph.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
