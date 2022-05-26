import React from 'react';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import Layout from '@/components/layout/Layout';
import { Metadata } from '@/components/pages/MetaData';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../styles/globals.css';

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
