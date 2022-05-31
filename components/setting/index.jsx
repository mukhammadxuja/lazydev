import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoIosMoon } from 'react-icons/io';
import { IoLanguageSharp } from 'react-icons/io5';
import { TiWeatherSunny } from 'react-icons/ti';

const Settings = ({ position, reverse }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [language, setLanguage] = useState(true);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

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

  return (
    <div className={`${position} flex ${reverse} items-center space-x-3`}>
      <div className="ml-0 md:ml-3">
        <AiOutlineSetting className="text-xl text-primary ml-3 md:ml-0 dark:text-white cursor-pointer hover:rotate-90 duration-200" />
      </div>
      <div onClick={() => setLanguage(!language)} className="relative group">
        <ul
          className={
            language
              ? 'hidden'
              : 'absolute bottom-10 -left-2 p-2 bg-white shadow-xl dark:bg-darkPrimary rounded-md z-50'
          }>
          <li
            onClick={() => router.push('/uz', '/uz', { locale: 'uz' })}
            className="link cursor-pointer">
            Uz
          </li>
          <li
            onClick={() => router.push('/ru', '/ru', { locale: 'ru' })}
            className="link cursor-pointer">
            Ru
          </li>
          <li
            onClick={() => router.push('/en', '/en', { locale: 'en' })}
            className="link cursor-pointer">
            En
          </li>
        </ul>
        <IoLanguageSharp className="text-xl text-primary dark:text-white cursor-pointer" />
      </div>
      <div>{renderThemeChanger()}</div>
    </div>
  );
};

export default Settings;
