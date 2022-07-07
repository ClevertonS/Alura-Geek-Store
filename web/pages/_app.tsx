import '../styles/globals.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

import { AuthProvider } from '../src/context/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YMY64SL00V" />
        <Script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'G-YMY64SL00V');
            `,
          }}
        />
      </Head>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
