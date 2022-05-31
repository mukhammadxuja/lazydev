import React from 'react';

import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';

import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';

import Layout from '@/components/layout/Layout';
import { Metadata } from '@/components/pages/MetaData';

import 'react-lazy-load-image-component/src/effects/blur.css';
import '../styles/globals.css';

const progress = new ProgressBar({
  size: 3,
  color: '#1a5cff',
  className: 'z-50 bar-of-progress',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Metadata />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
