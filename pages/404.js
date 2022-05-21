import React from "react";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const notFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-xl font-semibold text-primary dark:text-white">404</h1>
        <p className="text-lg font-semibold text-primary dark:text-white">Page not found</p>
        <Image
          src="/page-not-found/page-not-found.png"
          width={50}
          height={30}
          alt="not found image"
        />
      </div>
    </div>
  );
};

export default notFound;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
};
