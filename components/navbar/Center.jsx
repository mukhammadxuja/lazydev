import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { links } from '../../data/links';

const Center = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="hidden lg:inline-flex items-center space-x-3 md:space-x-8">
        <Link href="/docs/guide/introduction">
          <p className="link list-none">Docs</p>
        </Link>

        <div className="relative group">
          <button
            type="button"
            className="link list-none flex items-center"
            aria-expanded="false">
            <span>{t('home:komponentlar')}</span>
            <svg
              className="ml-1 h-5 w-5 link list-none transition ease-in-out duration-150 group-hover:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                clipRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </button>
          <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-4 px-2 w-screen max-w-md sm:px-0 lg:max-w-3xl hidden group-hover:block">
            <div className="absolute -top-4 w-full h-6 bg-transparent" />
            <ul className="absolute z-10 left-1/2 transform -translate-x-1/2 bg-white dark:bg-darkPrimary shadow-md w-36 rounded-md p-3">
              {links.map((item, index) => (
                <li key={index} className="link py-1">
                  <Link href={`${item.path}`}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/mukhammadxuja/Lazydev"
            className="link flex items-center space-x-2 -ml-1 list-none">
            Give a star
            <svg
              aria-hidden="true"
              height="14"
              viewBox="0 0 16 16"
              version="1.1"
              width="14"
              fill="#fcd706"
              className='mt-1 ml-1'>
              <path
                fillRule="evenodd"
                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Center;
