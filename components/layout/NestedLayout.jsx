import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
// import { IoIosArrowForward } from 'react-icons/io';
import { BiArrowBack } from 'react-icons/bi';

import { Footer, Setting } from '../';
import { sidebar } from '../../data/links';

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
            {sidebar.map((item) => (
              <div key={item.id} className="flex flex-col space-y-1">
                <h2 className="font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h2>
                <ul className="py-2 px-4 border-l-2  border-gray-100">
                  {item.links.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        router.asPath == link.path
                          ? 'sidebar__link text-blue-500'
                          : 'sidebar__link '
                      }`}>
                      <Link href={link.path}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
                ? 'breadcrumbs__div py-4 bg-gray-200 duration-300'
                : 'breadcrumbs__div py-3 md:py-4 bg-gray-100 dark:bg-darkSecondary duration-300'
            }>
            <div>
              <div className="max-w-4xl mx-auto px-4 lg:px-0 flex items-center justify-between z-30">
                <h3
                  className={
                    show
                      ? 'heading duration-300 -mb-2'
                      : 'heading text-base font-medium pt-1 -mb-2 duration-300'
                  }>
                  {name}
                </h3>
              </div>
              <div className="hidden lg:block">
                <BiArrowBack
                  onClick={() => router.push('/')}
                  title="Go to Back"
                  className="absolute left-3 top-1/2 text-lg hover:opacity-75 rounded-lg cursor-pointer -mt-1 mb-1"
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
