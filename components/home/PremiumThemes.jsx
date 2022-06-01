/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'next-i18next';

const PremiumThemes = () => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 my-10 md:py-16 px-4 lg:px-0">
        <div className="relative mx-auto md:mx-0">
          <div className="absolute z-10 -top-16 md:-top-28 -left-0 md:-left-20">
            <LazyLoadImage
              className="block dark:hidden w-[250px] md:w-[350px]"
              effect="blur"
              src="/images/premium/premium-before-light.svg"
              alt="premium them before  image"
            />
            <LazyLoadImage
              className="hidden dark:block w-[250px] md:w-[350px]"
              effect="blur"
              src="/images/premium/premium-before-dark.svg"
              alt="premium them  before image"
            />
          </div>
          <div className="relative z-20 hover:-translate-y-3 duration-200">
            <LazyLoadImage
              className="block dark:hidden w-[250px] md:w-[350px] rounded-xl"
              effect="blur"
              src="/images/premium/light-premium.webp"
              alt="premium them image"
            />
            <LazyLoadImage
              className="hidden dark:block w-[250px] md:w-[350px] rounded-xl"
              effect="blur"
              src="/images/premium/dark-premium.jpg"
              alt="premium them image"
            />
          </div>
        </div>
        <div className="space-y-3 md:space-y-4">
          <h3 className="heading font-medium">
            {t('home:lazydev_premium_themes_heading')}
          </h3>
          <p className="paragraph text-sm">
          {t('home:lazydev_premium_themes_p')}
          </p>
          <div className="space-x-2">
            <button
              onClick={() => router.push('/premium/premium-themes')}
              className="btn btn__primary">
              {t('home:lazydev_see_more')}
            </button>
            <button
              onClick={() => router.push('/premium/premium-themes')}
              className="btn bg-white dark:bg-darkSecondary hover:shadow-2xl">
              {t('home:lazydev_live_demo')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumThemes;
