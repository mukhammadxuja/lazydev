import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsGithub, BsTelegram } from 'react-icons/bs';

const Right = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [input, setInput] = useState(false);

  return (
    <>
      <div className="flex items-center space-x-3">
        <div
          className={
            input
              ? 'hidden items-center space-x-3 lg:inline-flex'
              : 'flex items-center space-x-3'
          }>
          <a className="link cursor-text text-lg">v1.x</a>
          <a
            href="https://github.com/mukhammadxuja/Lazydev"
            target="_blank"
            rel="noopener noreferrer">
            <BsGithub
              title="GitHub | Give a star"
              className="link text-lg text-primary dark:text-gray-400 cursor-pointer"
            />
          </a>
          <a href="http://t.me/akzmsh" target="_blank" rel="noopener noreferrer">
            <BsTelegram
              title="Telegram"
              className="link text-lg text-primary dark:text-gray-400 cursor-pointer"
            />
          </a>
        </div>
        <div className="relative flex items-center bg-gray-200 dark:bg-[#16181A] rounded-lg px-3 py-2">
          <input
            className={
              input
                ? 'block w-auto bg-transparent outline-none text-primary flex-grow font-normal text-sm'
                : 'hidden lg:block bg-transparent outline-none text-primary flex-grow font-normal text-sm'
            }
            type="search"
            placeholder="Lazy Search"
          />
          <BiSearch
            onClick={() => setInput(!input)}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="link text-lg dark:text-white cursor-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Right;
