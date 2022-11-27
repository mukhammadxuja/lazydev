import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { IoIosArrowForward } from 'react-icons/io';
import { BiArrowBack } from 'react-icons/bi';

import { Footer, Setting } from '../';
import { links } from '../../data/links';

export const NestedLayout = ({ children, name, title }) => {
  const [show, setShow] = useState(true);
  const router = useRouter();

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
          <aside className="bg-white dark:bg-darkPrimary fixed z-30 h-screen w-[240px] px-5 pt-[5rem] overflow-y-auto scrollbar-hide">
            <div className="">
              <div className="py-1">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <h4 className="font-semibold text-primary dark:text-white">
                    Guide
                  </h4>
                  <IoIosArrowForward className="text-sm" />
                </div>
                <ul className="p-2">
                  <Link href="/docs/guide/introduction">
                    <li className="sidebar__link">Introduction</li>
                  </Link>
                </ul>
              </div>
              <div className="py-1">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <h4 className="font-semibold text-primary dark:text-white">
                    Theme
                  </h4>
                  <IoIosArrowForward className="text-sm" />
                </div>
                <ul className="p-2">
                  <Link href="/docs/theme/">
                    <li className="sidebar__link">Colors</li>
                  </Link>
                </ul>
              </div>
              <div className="py-1">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <h4 className="font-semibold text-primary dark:text-white">
                    Components
                  </h4>
                  <IoIosArrowForward className="text-sm" />
                </div>
                <ul className="p-2">
                  {links.map((item) => (
                    <li key={item.id} className="sidebar__link">
                      <Link href={item.path}>
                        <a>{item.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
        <Setting
          reverse="flex-row-reverse"
          position="fixed z-40 bottom-5 right-4"
        />

        <div className="bg-gray-100 dark:bg-darkSecondary absolute w-full pl-0 lg:pl-[240px] duration-300">
          <div
            className={
              show
                ? 'breadcrumbs__div py-5 bg-gray-200'
                : 'breadcrumbs__div py-3 bg-gray-100 dark:bg-darkSecondary'
            }>
            <div>
              <div className="max-w-4xl mx-auto px-4 lg:px-0 flex items-center justify-between z-30">
                <h3
                  className={
                    show ? 'heading' : 'heading text-base font-medium'
                  }>
                  {name}
                </h3>
              </div>
              <div className="hidden lg:block">
                <BiArrowBack
                  onClick={() => router.push('/')}
                  title="Go to Back"
                  className="absolute left-3 top-1/3 text-lg hover:opacity-75 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 lg:px-0">
            <div>{children}</div>
          </div>

          <Footer bg="bg-gray-100 dark:bg-darkSecondary" />
        </div>
      </div>
    </div>
  );
};
