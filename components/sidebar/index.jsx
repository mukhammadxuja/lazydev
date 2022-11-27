import React, { useState } from 'react';
import { links } from '../../data/links';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from './logo.png';

const Sidebar = ({ sidebar, setSidebar }) => {

  const router = useRouter();

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <aside className={sidebar ? 'sidebar__active' : 'sidebar'}>
        <div className="">
          <div className="flex items-center justify-between">
            <div
              onClick={() => router.push('/')}
              className="relative flex items-center group py-4 -ml-2">
              <Image
                className="group-hover:opacity-80"
                width={35}
                height={35}
                src={Logo}
                alt="logo"
              />
              <div className="relative">
                <h3 className="font-sora tracking-wide -ml-1 font-semibold text-lg cursor-pointer text-primary dark:text-white group-hover:opacity-80">
                  Lazydev
                </h3>
                <p className="absolute -top-4 -right-2 text-2xl group-hover:text-[#82ceee]">
                  .
                </p>
              </div>
            </div>
            <IoIosArrowBack onClick={toggleSidebar} />
          </div>
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
                <li
                  key={item.id}
                  className={`router.pathname === ${item.path} ? sidebar__link : sidebar__link`}>
                  <Link href={item.path}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
      <div
        onClick={toggleSidebar}
        className={
          sidebar
            ? 'fixed z-20 h-screen w-screen bg-black opacity-40'
            : 'hidden'
        }
      />
    </div>
  );
};

export default Sidebar;
