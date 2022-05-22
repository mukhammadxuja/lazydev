import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Footer } from '../../components';

const PremiumThemes = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-primary dark:text-white">
            Sorry
          </h1>
          <p className="text-lg font-semibold text-primary dark:text-white">
            This page is not created yet!
          </p>
          <LazyLoadImage
            src="/images/page-not-found/page-not-found.png"
            effect='blur'
            width={50}
            height={30}
            alt="not found image"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PremiumThemes;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
};
