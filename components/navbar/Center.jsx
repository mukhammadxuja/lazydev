import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import Link from 'next/link';

import { links } from '../../data/links';

const Center = () => {
  const [guide, setGuide] = useState(true);
  const [components, setComponents] = useState(true);
  const [social, setSocial] = useState(true);
  const { t } = useTranslation();

  const guideData = [
    {
      title: `${t('home:kirish')}`,
      link: '/docs/guide/introduction',
    },
    {
      title: 'Theme',
      link: '/docs/theme',
    },
  ];

  const socialData = [
    {
      title: 'Github',
      link: 'https://github.com/AnvarovM/Lazydev',
    },
    {
      title: 'Telegram',
      link: 'https://t.me/akzmsh',
    },
  ];

  return (
    <>
      <div className="hidden lg:inline-flex items-center space-x-3 md:space-x-8">
        <div className="relative flex items-center space-x-1">
          <p onClick={() => setGuide(!guide)} className="link list-none">
            {t('home:xarita')}
          </p>
          <MdOutlineKeyboardArrowDown
            className={
              guide
                ? 'link rotate-0 transition duration-150'
                : 'link -rotate-180 transition duration-150'
            }
          />
          <ul
            className={
              guide
                ? 'ul__hover_dropdown invisible'
                : 'ul__hover_dropdown top-8 opacity-100'
            }>
            {guideData.map((item, index) => (
              <Link href={`${item.link}`}>
                <li key={index} className="link py-1">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="relative w-full flex items-center space-x-1">
          <p onClick={() => setComponents(!components)} className="link">
            {t('home:komponentlar')}
          </p>
          <MdOutlineKeyboardArrowDown
            className={
              components
                ? 'link rotate-0 transition duration-150'
                : 'link -rotate-180 transition duration-150'
            }
          />
          <ul
            className={
              components
                ? 'ul__hover_dropdown invisible'
                : 'ul__hover_dropdown top-8 opacity-100'
            }>
            {links.map((item, index) => (
              <Link href={`${item.path}`}>
                <li key={index} className="link py-1">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="relative flex items-center space-x-1">
          <p onClick={() => setSocial(!social)} className="link cursor-text">
            {t('home:ecosystem')}
          </p>
          <MdOutlineKeyboardArrowDown
            className={
              social
                ? 'link rotate-0 transition duration-150'
                : 'link -rotate-180 transition duration-150'
            }
          />
          <ul
            className={
              social
                ? 'ul__hover_dropdown invisible'
                : 'ul__hover_dropdown top-8 opacity-100'
            }>
            {socialData.map((item, index) => (
              <Link
                href={item.link}
                target="_blank"
                key={index}
                rel="noreferrer">
                <li className="link py-1" rel="noreferrer">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <BsThreeDots className="link" />
      </div>
    </>
  );
};

export default Center;
