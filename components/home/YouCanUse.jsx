import React from 'react';
import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';

import { CircleCard } from '../';

const YouCanUse = () => {
  return (
    <>
      <div className="px-4 md:px-0">
        <h4 className="text-xl font-medium text-primary dark:text-white text-center">
          Foydalanishingiz mumkin
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
            Bu men oldinga siljishim va rivojlanishim uchun maxsus ishlab
            chiqish vaqtini tolashga yordam beradi .
          </p>

          <Link href="/docs/components/another">
            <button className="btn dark__btn">Hoziroq boshlang</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default YouCanUse;
