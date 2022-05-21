/* eslint-disable @next/next/no-img-element */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { AiOutlinePlus } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Setting, Header, Footer, CircleCard } from '../components';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
};

export default function Home({ locale }) {
  return (
    <div className="font-poppins">
      <Setting reverse="flex-row-reverse md:flex-row" position="fixed z-40 bottom-2 right-2 md:left-2" />
      <Header />

      <main className="px-4 md:px-0">
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

            <button className="btn dark__btn">Hoziroq boshlang</button>
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-10 md:py-20">
          <div className="flex justify-center py-10 md:py-0">
            <LazyLoadImage
              className="block dark:hidden w-[20rem] md:w-[30rem] h-auto"
              effect="blur"
              src="/images/illustration-white-4.svg"
              alt="illustration light"
            />
            <LazyLoadImage
              className="hidden dark:block w-[20rem] md:w-[30rem] h-auto"
              effect="blur"
              height={500}
              src="/images/illustration-dark-4.svg"
              alt="illustration light"
            />
          </div>
          <div className="space-y-5">
            <h3 className="heading">
              Qayta foydalanish mumkin bolgan komponentlar va amalga oshirish
              oson
            </h3>
            <p className="paragraph">
              Vuesax yordamida siz bir necha qator kodli va ajoyib
              moslashtirilgan har qanday komponentdan foydalanishingiz mumkin,
              va eng muhimi, foydalanish va tushunish juda oson
            </p>
            <button className="btn btn__primary">Komponentlar</button>
          </div>
        </div>

        <div className="my-10">
          <h3 className="text-xl font-medium text-primary dark:text-white text-center">
            Foydalanilgan elementlar
          </h3>
          <div className="flex overflow-x-scroll my-10 scrollbar-hide">
            <div className="flex flex-nowrap justify-center mx-auto my-8 space-x-4 md:space-x-8 cursor-auto">
              <CircleCard
                src="/images/tools/javascript.png"
                title="Javascript"
                alt="Javascript logo"
              />
              <CircleCard
                src="/images/react.png"
                title="React js"
                alt="React logo"
              />
              <CircleCard
                src="/images/tools/next.svg"
                isHidden="block dark:hidden"
                title="Next js"
                alt="Next light logo"
              />
              <CircleCard
                src="/images/tools/next-dark.svg"
                isHidden="hidden dark:block"
                title="Next js"
                alt="Next dark logo"
              />
              <CircleCard
                src="/images/tailwind.svg"
                title="Tailwind css"
                alt="Tailwind logo"
              />
              <CircleCard
                src="/images/tools/react-icons.svg"
                title="React Icons"
                alt="React icons logo"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center ">
          <div className="space-y-5">
            <h3 className="heading">
              Qayta foydalanish mumkin bolgan komponentlar va amalga oshirish
              oson
            </h3>
            <p className="paragraph">
              Vuesax yordamida siz bir necha qator kodli va ajoyib
              moslashtirilgan har qanday komponentdan foydalanishingiz mumkin,
              va eng muhimi, foydalanish va tushunish juda oson
            </p>
            <button className="btn btn__primary">Komponentlar</button>
          </div>
          <div className="flex justify-center py-10 md:py-0">
            <LazyLoadImage
              className="block dark:hidden w-[20rem] md:w-[30rem] h-auto"
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
      </main>

      <Footer bg="bg-white dark:bg-darkPrimary" />
    </div>
  );
}
