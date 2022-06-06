import React, { useState } from 'react';
import Image from 'next/image';
import AvatarImg from './person01.png';
import { BiSearch } from 'react-icons/bi';
import {
  BsBasket2Fill,
  BsCompassFill,
  BsFillStarFill,
  BsFolderFill,
  BsInboxesFill,
  BsPlusCircleFill,
} from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdDashboardCustomize, MdSavings } from 'react-icons/md';

export const TypeA = () => {
  const [sidebarShow, setSidebarShow] = useState(true);

  const toggleSidebar = () => {
    setSidebarShow(!sidebarShow);
  };

  const closeAndOpenDefaultClass =
    'absolute px-0.5 py-3 bg-[#C5C4C0] dark:bg-[#323435] text-[#161925] dark:text-white cursor-pointer ';

  const listTextDefaultClass = 'text-gray-700 group-hover:text-white dark:text-white font-semibold ml-4 '

  return (
    <>
      <div
        className={
          sidebarShow
            ? 'w-[20rem] rounded-lg bg-gray-200 dark:bg-[#161819] shadow-xl duration-200'
            : 'w-24 rounded-lg bg-gray-200 dark:bg-[#161819] shadow-xl duration-200'
        }>
        <div className="flex items-center space-x-2 p-2">
          <span className="w-2 h-2 rounded-full bg-[#ee6a5e]" />
          <span className="w-2 h-2 rounded-full bg-[#f4bd4f]" />
          <span className="w-2 h-2 rounded-full bg-[#60c455]" />
        </div>
        <div className="space-y-6 p-5">
          <div className="relative flex items-center">
            <div className="flex items-center justify-center rounded-2xl border-2 border-gray-300 dark:border-transparent bg-transparent dark:bg-[#242627] w-fit p-1">
              <Image
                className="rounded-full"
                width={50}
                height={50}
                objectFit="contain"
                src={AvatarImg}
                alt="avatar img"
              />
            </div>
            <div className={sidebarShow ? 'relative ml-4' : 'hidden'}>
              <h2 className="text-[#242627] dark:text-white font-semibold text-lg">
                Andy
              </h2>
              <span className="absolute -top-0.5 -right-2 w-2 h-2 rounded-full bg-[#6fce97]" />
            </div>
            <div
              onClick={toggleSidebar}
              className={
                sidebarShow
                  ? closeAndOpenDefaultClass + '-right-5  rounded-l-lg'
                  : closeAndOpenDefaultClass + '-right-10  rounded-r-lg'
              }>
              {sidebarShow ? <IoIosArrowBack /> : <IoIosArrowForward />}
            </div>
          </div>
          <div className="flex items-center rounded-lg bg-[#f2f3f7] dark:bg-[#252728] px-4 py-2 md:py-3">
            <BiSearch className={sidebarShow ? "text-xl text-[#252728] dark:text-gray-200" : "mx-auto"} />
            <input
              className={sidebarShow ? "flex flex-grow bg-transparent outline-none px-2 text-sm" : "hidden"}
              type="text"
              placeholder="Keyword"
            />
            <BsFillStarFill className={sidebarShow ? "text-yellow-300" : "hidden"} />
          </div>
          <div className="px-1">
            <small className="text-xs font-medium text-[#161925] dark:text-gray-500 uppercase py-2">
              Overview
            </small>
            <div>
              <div className="flex items-center dark:text-white p-3 rounded-xl cursor-default hover:bg-[#3f8dfd] group">
                <MdDashboardCustomize className="text-2xl group-hover:text-white text-gray-500" />
                <h1 className={sidebarShow ? listTextDefaultClass : 'hidden'}>
                  Dashboard
                </h1>
              </div>
              <div className="flex items-center dark:text-white p-3 rounded-xl cursor-default hover:bg-[#3f8dfd] group">
                <BsFolderFill className="text-2xl group-hover:text-white text-gray-500" />
                <h1 className={sidebarShow ? listTextDefaultClass : 'hidden'}>
                  Project Board
                </h1>
              </div>
              <div className="flex items-center dark:text-white p-3 rounded-xl cursor-default hover:bg-[#3f8dfd] group">
                <BsCompassFill className="text-2xl group-hover:text-white text-gray-500" />
                <h1 className={sidebarShow ? listTextDefaultClass : 'hidden'}>
                  Feed
                </h1>
              </div>
              <div className="flex items-center dark:text-white p-3 rounded-xl cursor-default hover:bg-[#3f8dfd] group">
                <BsInboxesFill className="text-2xl group-hover:text-white text-gray-500" />
                <h1 className={sidebarShow ? listTextDefaultClass : 'hidden'}>
                  Inbox
                </h1>
              </div>
              <div className="flex items-center dark:text-white p-3 rounded-xl cursor-default hover:bg-[#3f8dfd] group">
                <MdSavings className="text-2xl group-hover:text-white text-gray-500" />
                <h1 className={sidebarShow ? listTextDefaultClass : 'hidden'}>
                  Savings
                </h1>
              </div>
              <div className="flex items-center dark:text-white p-3 rounded-xl cursor-default hover:bg-[#3f8dfd] group">
                <BsBasket2Fill className="text-2xl group-hover:text-white text-gray-500" />
                <h1 className={sidebarShow ? listTextDefaultClass : 'hidden'}>
                  Sales
                </h1>
              </div>
            </div>
          </div>
          <div className="px-1">
            <small className="text-xs font-medium text-[#161925] dark:text-gray-500 uppercase py-2 truncate">
              Add new
            </small>
          </div>
          <div></div>
          <div className="flex flex-col items-center justify-center cursor-pointer border hover:border-gray-500 hover:dark:border-white py-4 rounded-lg bg-[#f2f3f7] dark:bg-[#323435]">
            <BsPlusCircleFill className="text-[#3f8dfd] text-3xl bg-white rounded-full shadow-xl" />
            <small className={sidebarShow ? "font-semibold text-gray-500 dark:text-white py-2" : "hidden"}>
              Add new Project
            </small>
          </div>
        </div>
      </div>
    </>
  );
};
