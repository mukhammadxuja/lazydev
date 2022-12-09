import React from 'react';
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'next-i18next';

const Description2 = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="space-y-5">
          <h3 className="heading">{t('home:description_heading_2')}</h3>
          <p className="paragraph">{t('home:description_p_2')}</p>
          <Link href="/docs/components/button">
            <button className="btn btn__primary">{t('home:components')}</button>
          </Link>
        </div>
        <div className="hidden md:inline-flex justify-center py-10 md:py-0">
          <LazyLoadImage
            className="w-[15rem] md:w-[30rem]"
            effect="blur"
            src="/images/illustrations/without-npm.svg"
            alt="illustration light"
          />
        </div>
      </div>
    </>
  );
};

export default Description2;
