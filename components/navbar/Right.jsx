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
    </>
  );
};

export default Right;
