/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import {
  BsTelegram,
  BsGithub,
  BsHeartFill,
  BsFillPlayFill,
  BsFillCheckCircleFill,
  BsFillBugFill,
} from 'react-icons/bs';
import { RiErrorWarningLine } from 'react-icons/ri';
import { CgSearch } from 'react-icons/cg';
import { useTranslation } from 'next-i18next';

import {
  Input,
  Icon,
  Avatar,
  Dropdown,
  Toast,
  Card1,
  Card2,
  Card3,
  Card4,
  Ripple,
} from '..';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto w-full h-screen">
      <div className="relative grid grid-cols-1 md:grid-cols-2 content-center items-center h-screen px-4 md:px-0">
        <div className="space-y-3">
          <h3 className="relative text-2xl text-center md:text-left md:text-[1.7rem] lg:text-[2rem] font-semibold text-primary dark:text-white">
            {t('home:heading')}
          </h3>
          <p className="text-sm text-center md:text-left lg:text-base font-medium text-primary dark:text-white">
            {t('home:paragraph')}
          </p>
          <div className="flex items-center w-fit space-x-2 mx-auto md:mx-0">
            <Link href="docs/guide/introduction">
              <button className="btn btn__primary">{t('home:boshlash')}</button>
            </Link>
            <div className="flex items-center space-x-2">
              <a
                target="_blank"
                href="https://t.me/akzmsh"
                className="btn px-3 py-[0.60rem] bg-transparent dark:bg-darkSecondary border-2 border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200 flex items-center space-x-2 text-primary dark:text-white"
                rel="noreferrer">
                <BsTelegram className="text-xl" />
                <p>Telegram</p>
              </a>
              <a
                target="_blank"
                href="https://github.com/AnvarovM/Lazydev"
                className="btn px-3 py-[0.60rem] relative bg-transparent dark:bg-darkSecondary border-2 border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200 flex items-center space-x-2 text-primary dark:text-white"
                rel="noreferrer">
                <BsGithub className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-1 xl:grid-cols-2 items-center">
          <div className="-mt-16 hidden md:inline-flex">
            <div>
              {/* Card1 example */}
              <div className="p-5">
                <Card1 />
              </div>

              {/* Card2 example */}
              <div className="flex items-center space-x-2">
                <div>
                  <Card2 />
                </div>

                {/* Icon example */}
                <div className="animation1 flex flex-col space-y-4">
                  <Icon
                    bg="bg-[#ff4757]"
                    iconColor="text-white"
                    Icon={BsFillPlayFill}
                  />
                  <Icon
                    bg="bg-green-500"
                    iconColor="text-white"
                    Icon={BsFillCheckCircleFill}
                  />
                  <Icon
                    bg="bg-yellow-500"
                    iconColor="text-white"
                    Icon={RiErrorWarningLine}
                  />
                </div>
                <div className="animation1 flex flex-col space-y-4">
                  <Icon
                    bg="bg-purple-500"
                    iconColor="text-white"
                    Icon={BsFillBugFill}
                  />
                  <Icon
                    bg="bg-white"
                    iconColor="text-[#ff4757]"
                    Icon={BsHeartFill}
                  />
                  <Icon
                    bg="bg-[#0081c2]"
                    iconColor="text-white"
                    Icon={BsTelegram}
                  />
                </div>
              </div>

              {/* Input example */}
              <Input
                Icon={CgSearch}
                animation="animation1"
                p="px-2 p-2"
                focusAnimation="px-4"
                width="w-[13rem]"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="hidden xl:block">
            <Toast />
            <div className="flex items-center space-x-4">
              <div>
                {/* Card3 example */}
                <Card3 />
                {/* Dropdown example */}
                <Dropdown />
              </div>
              <div className="space-y-5">
                {/* Card4 example */}
                <Card4 />

                {/* Avatar example */}
                <div className="flex space-x-1">
                  <Avatar
                    src="/images/avatar/person01.png"
                    rounded="rounded-full"
                  />
                  <Avatar
                    src="/images/avatar/person03.png"
                    rounded="rounded-full"
                  />
                  <Avatar
                    src="/images/avatar/person02.png"
                    rounded="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
