import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  const devMode = process.env.DEV_MODE
  return (
    <Html lang='en'>
      <Head />
      <body className={`${devMode ? 'debug-screens' : ''} scroll-smooth`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}