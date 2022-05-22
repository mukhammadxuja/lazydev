/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BsThreeDots, BsGithub, BsTelegram } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import { useTranslation } from 'next-i18next';

import { links } from '../data/links'

const Navbar = ({ sidebar, setSidebar }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [guide, setGuide] = React.useState(true);
  const [components, setComponents] = React.useState(true);
  const [social, setSocial] = React.useState(true);
  const [input, setInput] = React.useState(true);
  const router = useRouter();
  const { t } = useTranslation();

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }

  const guideData = [
    {
      title: `${t('home:kirish')}`,
      link: '/docs/introduction',
    },
    {
      title: `${t('home:boshlash')}`,
      link: '/docs/gettingStarted',
    },
  ];

  const socialData = [
    {
      title: 'Github',
      link: '',
    },
    {
      title: 'Telegram',
      link: '',
    },
  ];

  // group-hover:top-8 group-hover:opacity-100

  return (
    <div className='relative'>
      <div className="fixed z-40 top-0 left-0 right-0 py-3 darkOrLight shadow-md px-4 flex items-center justify-between">
        <div className="flex items-center">
          <FiMenu onClick={toggleSidebar} className="block lg:hidden h-5 w-5 mr-4" />
          <div onClick={() => router.push('/')} className='relative flex items-center group'>
            <img className='w-10 group-hover:opacity-80' src="/images/logo.png" alt="logo" />
            <div className='relative'>
              <h3 className='font-sora tracking-wide -ml-1 font-semibold text-lg cursor-pointer text-primary dark:text-white group-hover:opacity-80'>Lazydev</h3>
              <p className='absolute -top-4 -right-2 text-2xl group-hover:text-[#82ceee]'>.</p>
            </div>
          </div>
        </div>
        <ul className="hidden lg:inline-flex list-none items-center space-x-3 md:space-x-8">
          <span className="relative flex items-center space-x-1">
            <li onClick={() => setGuide(!guide)} className="link">
              {t('home:xarita')}
            </li>
            <MdOutlineKeyboardArrowDown className={guide ? "link rotate-0 transition duration-150": "link -rotate-180 transition duration-150"} />
            <ul
              className={
                guide
                  ? 'ul__hover_dropdown invisible'
                  : 'ul__hover_dropdown top-8 opacity-100'
              }>
              {guideData.map((item, index) => (
                <li
                  onClick={() => router.push(`${item.link}`)}
                  key={index}
                  className="link py-1">
                  {item.title}
                </li>
              ))}
            </ul>
          </span>

          <span className="relative w-full flex items-center space-x-1">
            <li onClick={() => setComponents(!components)} className="link">
              {t('home:komponentlar')}
            </li>
            <MdOutlineKeyboardArrowDown  className={components ? "link rotate-0 transition duration-150": "link -rotate-180 transition duration-150"} />
            <ul
              className={
                components
                  ? 'ul__hover_dropdown invisible'
                  : 'ul__hover_dropdown top-8 opacity-100'
              }>
              {links.map((item, index) => (
                <li
                  onClick={() => router.push(`${item.path}`)}
                  key={index}
                  className="link py-1">
                  {item.title}
                </li>
              ))}
            </ul>
          </span>

          <span className="relative flex items-center space-x-1">
            <li onClick={() => setSocial(!social)} className="link cursor-text">
              {t('home:ecosystem')}
            </li>
            <MdOutlineKeyboardArrowDown  className={social ? "link rotate-0 transition duration-150": "link -rotate-180 transition duration-150"} />
            <ul
              className={
                social
                  ? 'ul__hover_dropdown invisible'
                  : 'ul__hover_dropdown top-8 opacity-100'
              }>
              {socialData.map((item, index) => (
                <li
                  onClick={() => router.push(`${item.link}`)}
                  key={index}
                  className="link py-1">
                  {item.title}
                </li>
              ))}
            </ul>
          </span>
          
          <BsThreeDots className="link" />
        </ul>
        <div className="flex items-center space-x-3">
          <div
            className={
              input
                ? 'flex items-center space-x-3'
                : 'hidden items-center space-x-3 lg:inline-flex'
            }>
            <a className="link">v1.x</a>
            <BsGithub
              title="GitHub | Give a star"
              className="link text-primary dark:text-gray-400 cursor-pointer"
            />
            <BsTelegram
              title="Telegram"
              className="link text-primary dark:text-gray-400 cursor-pointer"
            />
          </div>
          <div className="relative flex items-center bg-gray-200 dark:bg-[#16181A] rounded-lg px-3 py-2">
            <input
              className={
                input
                  ? 'hidden lg:block bg-transparent outline-none text-primary flex-grow font-normal text-sm'
                  : 'block bg-transparent outline-none text-primary flex-grow font-normal text-sm'
              }
              type="text"
              placeholder="Lazy Search"
            />
            <BiSearch
              onClick={() => setInput(!input)}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="link text-lg dark:text-white cursor-auto"
            />
          </div>
        </div>
      </div>
      </div>
  );
};

export default Navbar;
