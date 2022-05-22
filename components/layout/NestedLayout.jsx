import React from 'react';
import { useRouter } from 'next/router';
import { IoIosArrowForward } from 'react-icons/io';

import { Footer, Setting } from '../';
import { links } from '../../data/links';

export const NestedLayout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="test flex bg-white dark:bg-darkSecondary shadow-lg">
      <div className="hidden lg:block">
        <aside className="bg-white dark:bg-darkPrimary fixed z-30 h-screen w-[240px] px-5 pt-[5rem] overflow-y-auto scrollbar-hide">
          <div className="">
            <div className="py-1">
              <span className="flex items-center space-x-1 cursor-pointer">
                <h4 className="font-semibold font-[1rem] text-primary dark:text-white">
                  Guide
                </h4>
                <IoIosArrowForward className="text-sm" />
              </span>
              <ul className="p-2">
                <li className="sidebar__link">Introduction</li>
                <li className="sidebar__link">Getting started</li>
              </ul>
            </div>
            <div className="py-1">
              <span className="flex items-center space-x-1 cursor-pointer">
                <h4 className="font-semibold font-[1rem] text-primary dark:text-white">
                  Theme
                </h4>
                <IoIosArrowForward className="text-sm" />
              </span>
              <ul className="p-2">
                <li className="sidebar__link">Colors</li>
              </ul>
            </div>
            <div className="py-1">
              <span className="flex items-center space-x-1 cursor-pointer">
                <h4 className="font-semibold font-[1rem] text-primary dark:text-white">
                  Components
                </h4>
                <IoIosArrowForward className="text-sm" />
              </span>
              <ul className="p-2">
                {links.map((item) => (
                  <li
                    onClick={() => router.push(`${item.path}`)}
                    key={item.id}
                    className="sidebar__link">
                    {item.title}
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

      <div className="right-content bg-white dark:bg-darkSecondary absolute w-full pl-0 lg:pl-[240px]">
        <div className="breadCramp sticky top-[3.5rem] mt-[3.5rem] py-10 bg-white dark:bg-[#141417] rounded-bl-[2rem]">
          <div className="max-w-6xl mx-auto px-4 lg:px-0">breadcramp</div>
        </div>
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
          <div>{children}</div>
        </div>

        <Footer bg="bg-white dark:bg-darkSecondary" />
      </div>
    </div>
  );
};
