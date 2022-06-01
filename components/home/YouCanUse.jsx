import React from 'react';
import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';
import { useTranslation } from 'next-i18next';

import { CircleCard } from '../';

const YouCanUse = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-4 md:px-0">
        <h4 className="text-xl font-medium text-primary dark:text-white text-center">
          {t('home:you_can_use')}
        </h4>

        <div className="flex justify-center my-8">
          <CircleCard src="/images/react.png" />
          <span className="text-3xl mx-5 my-auto">
            <AiOutlinePlus />
          </span>
          <CircleCard src="/images/tailwind.svg" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center py-4 text-primary dark:text-secondary text-sm">
          {t('home:you_can_use_p')}
          </p>

          <Link href="/docs/components/another">
            <button className="btn dark__btn">
            {t('home:start_right_now')}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default YouCanUse;
