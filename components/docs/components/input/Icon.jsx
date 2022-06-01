import React from 'react';
import { BiUser, BiLockOpenAlt } from 'react-icons/bi';
export const Icon = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-4 md:gap-x-2">
      <div className="relative group">
        <div className="flex items-center rounded-xl bg-gray-200 dark:bg-[#141417]">
          <input
            id="username"
            className="outline-none flex flex-grow p-3 bg-transparent rounded-l-xl px-4 text-xs duration-300"
            type="text"
            placeholder="username"
          />
          <div className="absolute top-0 right-0 duration-300 rounded-xl bg-transparent p-2 group-focus-within:-top-2 group-focus-within:-right-2 group-focus-within:bg-[#18191c]">
            <svg
              className=""
              width="1em"
              height="1em"
              fill="currentColor">
            </svg>
            {/* <BiUser className="text-primary dark:text-white group-focus-within:text-white" /> */}
          </div>
        </div>
      </div>
      <div className="relative group">
        <div className="flex items-center rounded-xl bg-gray-200 dark:bg-[#141417]">
          <input
            id="password"
            className="outline-none flex flex-grow p-3 bg-transparent rounded-l-xl px-4 text-xs duration-300"
            type="password"
            placeholder="password"
          />
          <div className="absolute top-0 right-0 duration-300 rounded-xl bg-transparent p-2 group-focus-within:-top-2 group-focus-within:-right-2 group-focus-within:bg-[#18191c]">
            <BiLockOpenAlt className="text-primary dark:text-white group-focus-within:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
