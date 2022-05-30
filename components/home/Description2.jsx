import React from 'react';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Description2 = () => {
  const router = useRouter();
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="space-y-5">
          <h3 className="heading">
            Qayta foydalanish mumkin bolgan komponentlar va amalga oshirish oson
          </h3>
          <p className="paragraph">
            Vuesax yordamida siz bir necha qator kodli va ajoyib moslashtirilgan
            har qanday komponentdan foydalanishingiz mumkin, va eng muhimi,
            foydalanish va tushunish juda oson
          </p>
          <button className="btn btn__primary">Komponentlar</button>
        </div>
        <div className="flex justify-center py-10 md:py-0">
          <LazyLoadImage
            className="block dark:hidden w-[15rem] md:w-[30rem] h-auto"
            effect="blur"
            src="/images/illustration-white-3.svg"
            alt="illustration light"
          />
          <LazyLoadImage
            className="hidden dark:block w-[23rem] md:w-[30rem] h-auto"
            effect="blur"
            height={500}
            src="/images/illustration-dark-3.svg"
            alt="illustration light"
          />
        </div>
      </div>
    </>
  );
};

export default Description2;
