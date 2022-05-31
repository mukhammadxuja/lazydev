/* eslint-disable @next/next/no-img-element */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  Setting,
  Header,
  Footer,
  YouCanUse,
  Tools,
  PremiumThemes,
  Description1,
  Description2,
} from '../components';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
};

export default function Home({ locale }) {
  return (
    <div className="font-poppins space-y-10">
      <Setting
        reverse="flex-row-reverse md:flex-row"
        position="fixed z-50 bottom-2 right-2 md:left-2"
      />
      <Header />

      <div className="space-y-16 px-4 md:px-0">
        <YouCanUse />
        <Description1 />
        <Tools />
        <Description2 />
        <PremiumThemes />
      </div>

      <Footer bg="bg-white dark:bg-darkPrimary" />
    </div>
  );
}
