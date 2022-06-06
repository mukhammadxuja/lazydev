import { useEffect } from 'react';
import Head from 'next/head';

import { Footer, Setting } from '../../';
import { Sidebar } from './Sidebar';
import { Breadcrumb } from './Breadcrumb';

export const docs = ({ children, title }) => {
  // scroll animation
  const controlNavbar = () => {
    if (window.scrollY > 50) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  // scroll animation
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="flex bg-white dark:bg-darkSecondary shadow-lg">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <Setting
          reverse="flex-row-reverse"
          position="fixed z-40 bottom-5 right-4"
        />

        <div className="bg-gray-100 dark:bg-darkSecondary absolute w-full pl-0 lg:pl-[240px] duration-300">
          <Breadcrumb />

          <div className="max-w-4xl mx-auto px-4 lg:px-0">
            <div>{children}</div>
          </div>
          <Footer bg="bg-gray-100 dark:bg-darkSecondary" />
        </div>
      </div>
    </div>
  );
};
