import React from 'react';
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Description1 = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="hidden md:inline-flex justify-center py-10 md:py-0">
          <LazyLoadImage
            className="block dark:hidden w-[15rem] md:w-[30rem] h-auto"
            effect="blur"
            src="/images/illustration-white-4.svg"
            alt="illustration light"
          />
          <LazyLoadImage
            className="hidden dark:block w-[15rem] md:w-[30rem] h-auto"
            effect="blur"
            height={500}
            src="/images/illustration-dark-4.svg"
            alt="illustration light"
          />
        </div>
        <div className="space-y-5">
          <h3 className="heading">
            Qayta foydalanish mumkin bolgan komponentlar va amalga oshirish oson
          </h3>
          <p className="paragraph">
            Vuesax yordamida siz bir necha qator kodli va ajoyib moslashtirilgan
            har qanday komponentdan foydalanishingiz mumkin, va eng muhimi,
            foydalanish va tushunish juda oson
          </p>
          <Link href="/docs/components/button">
            <button className="btn btn__primary">Komponentlar</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Description1;
