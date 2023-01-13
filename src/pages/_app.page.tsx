import { Inter } from '@next/font/google';
import localFont from '@next/font/local';
import {
  QueryClient,
  QueryClientProvider,
  QueryOptions,
} from '@tanstack/react-query';
import clsx from 'clsx';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

import api from '@/lib/axios';

import DismissableToast from '@/components/DismissableToast';

const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
  const { data } = await api.get(`${queryKey?.[0]}`);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={clsx('body-font', inter.variable, averta.variable)}>
        <DismissableToast />
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
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
