import React from 'react';
import { useTranslation } from 'next-i18next';

export const Introduction = () => {
  const { t } = useTranslation();
  return (
    <div className="py-10 space-y-4 md:space-y-8">
      <div />
      <div id='what-is-lazydev' className="space-y-2 md:space-y-3">
        <h2 className="text-base md:text-2xl font-semibold text-primary dark:text-white">
          {t('introduction:what_is_lazydev')}
        </h2>
        <ul className="list-disc space-y-4 px-8 md:px-0">
          <li className="text-primary dark:text-white font-light text-sm">
            {t('introduction:what_is_lazydev_p_1')}
          </li>
          <li className="text-primary dark:text-white font-light text-sm">
            {t('introduction:what_is_lazydev_p_2')}
          </li>
          <li className="text-primary dark:text-white font-light text-sm">
            {t('introduction:what_is_lazydev-p_3')}
          </li>
        </ul>
      </div>
      <div />
      <div id='why-lazydev' className="space-y-2 md:space-y-3">
        <h2 className="text-base md:text-2xl font-semibold text-primary dark:text-white">
          {t('introduction:why_lazydev')}
        </h2>
        <ul className="list-disc space-y-4 px-8 md:px-0">
          <li className="text-primary dark:text-white font-light text-sm">
            {t('introduction:why_lazydev_p_1')}
          </li>
          <li className="text-primary dark:text-white font-light text-sm">
            {t('introduction:why_lazydev_p_2')}
          </li>
          <li className="text-primary dark:text-white font-light text-sm">
            {t('introduction:why_lazydev_p_3')}
          </li>
          <li className="text-primary dark:text-white font-light text-sm">
            {t('introduction:why_lazydev_p_4')}
          </li>
          <li className="text-primary dark:text-white font-light text-sm">
            {t('introduction:why_lazydev_p_5')}
          </li>
          <li className="text-primary dark:text-white font-light text-sm">
            {t('introduction:why_lazydev_p_6')}
          </li>
          <li className="text-primary dark:text-white font-light text-sm">
            {t('introduction:why_lazydev_p_8')}
          </li>
        </ul>
      </div>
    </div>
  );
};
