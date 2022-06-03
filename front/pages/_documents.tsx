import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext) {
  //   const sheet = new ServerStyleSheet();
  //   const originalRenderPage = ctx.renderPage;
  //   try {
  //     ctx.renderPage = () =>
  //       originalRenderPage({
  //         enhanceApp: (App) => (props) =>
  //           sheet.collectStyles(<App {...props} />),
  //       });

  //     const initialProps = await Document.getInitialProps(ctx);
  //     return {
  //       ...initialProps,
  //       styles: (
  //         <>
  //           {initialProps.styles}
  //           {sheet.getStyleElement()}
  //         </>
  //       ),
  //     };
  //   } finally {
  //     sheet.seal();
  //   }
  // }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="UTF-8" />
          <title>Stylelint</title>
          {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="author" content="Stylelint" />
          <meta name="apple-mobile-web-app-title" content="Stylelint" />
          <meta name="description" content="여성 의류 쇼핑몰 Stylelint 입니다." />
          <meta property="og:title" content="스타일린트" />
          <meta property="og:url" content="https://www.stylelint.ml/" />
          <meta property="og:description" content="여성 의류 쇼핑몰 Stylelint 입니다." />
          {/* <meta property="og:img" content=""> */}
          <meta property="twitter:card" content="summary" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
