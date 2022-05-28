import React, { useState } from 'react';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import Layout from '@/components/layout/Layout';
import { Metadata } from '@/components/pages/MetaData';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../styles/globals.css';
import ErrorBoundary from '../components/ErrorBoundary';

function MyApp({ Component, pageProps }) {
  const [errorInfo, setErrorInfo] = useState(null);
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ErrorBoundary>
        <Layout>
          <Metadata />
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
