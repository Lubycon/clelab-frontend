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
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700;800&family=Noto+Sans+KR:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon/favicon.ico" />
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta property="og:title" content="clelab" />
          <meta property="og:description" content="나를 발전시키는 시간" />
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
