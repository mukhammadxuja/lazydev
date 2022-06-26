import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { links } from '../../data/links';

const Center = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="hidden lg:inline-flex items-center space-x-3 md:space-x-8">
        <div>
          <p onClick={() => setGuide(!guide)} className="link list-none">
            Docs
          </p>
        </div>

        <div class="relative group">
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
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-4 px-2 w-screen max-w-md sm:px-0 lg:max-w-3xl hidden group-hover:block">
            <div className="absolute -top-4 w-full h-6 bg-transparent" />
            <ul className="absolute z-10 left-1/2 transform -translate-x-1/2 bg-white dark:bg-darkPrimary shadow-md w-36 rounded-md p-3">
              {links.map((item, index) => (
                <Link href={`${item.path}`}>
                  <li key={index} className="link py-1">
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p onClick={() => setGuide(!guide)} className="link list-none">
            Feedback
          </p>
        </div>
      </div>
    </>
  );
};

export default Center;
