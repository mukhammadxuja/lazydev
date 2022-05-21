import React from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { NestedLayout } from '@/components/layout/NestedLayout';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
};

const button = () => {
    return <NestedLayout>
      <div className="pt-20">alert</div>
  </NestedLayout>;
};

export default button;
