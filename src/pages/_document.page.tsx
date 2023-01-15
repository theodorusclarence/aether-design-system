import { Head, Html, Main, NextScript } from 'next/document';

const fonts = [
  '/fonts/inter-var-latin.woff2',
  '/fonts/AvertaStd/AvertaStd-Regular.woff2',
  '/fonts/AvertaStd/AvertaStd-RegularItalic.woff2',
  '/fonts/AvertaStd/AvertaStd-Semibold.woff2',
  '/fonts/AvertaStd/AvertaStd-SemiboldItalic.woff2',
  '/fonts/AvertaStd/AvertaStd-Bold.woff2',
  '/fonts/AvertaStd/AvertaStd-BoldItalic.woff2',
];

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {fonts.map((font) => (
          <link
            key={font}
            rel='preload'
            href={font}
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
