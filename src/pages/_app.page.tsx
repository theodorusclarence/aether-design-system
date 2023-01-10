import { Inter } from '@next/font/google';
import localFont from '@next/font/local';
import clsx from 'clsx';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={clsx('body-font', inter.variable, averta.variable)}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

//#region  //*=========== Fonts ===========
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const averta = localFont({
  src: [
    {
      path: '../../public/fonts/AvertaStd/AvertaStd-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AvertaStd/AvertaStd-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/AvertaStd/AvertaStd-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AvertaStd/AvertaStd-SemiboldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/AvertaStd/AvertaStd-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AvertaStd/AvertaStd-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-averta',
});

//#endregion  //*======== Fonts ===========
