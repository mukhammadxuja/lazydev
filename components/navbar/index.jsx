/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoIosMoon } from 'react-icons/io';
import { TiWeatherSunny } from 'react-icons/ti';

import { Left, Center, Right } from '../';

const Navbar = ({ sidebar, setSidebar }) => {
  // theme
  const { system, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <TiWeatherSunny
          title="Theme light"
          className="w-6 h-6 text-white cursor-pointer hover:text-yellow-600"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <IoIosMoon
          title="Theme dark"
          className="w-6 h-6 text-gray-600 cursor-pointer"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  // group-hover:top-8 group-hover:opacity-100

  return (
    <div className="relative">
      <div className="fixed z-40 top-0 left-0 right-0 py-3 darkOrLight shadow-md px-4 flex items-center justify-between">
        <Left sidebar={sidebar} setSidebar={setSidebar} />
        <Center />
        <div className='flex items-center space-x-2'>
          {renderThemeChanger()}
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
