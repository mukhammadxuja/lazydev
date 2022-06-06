import React, { useState } from 'react';
import { BiArrowToBottom, BiArrowToTop, BiCheck } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';

export const TypeA = () => {
  const [openSelect, setOpenSelect] = useState(false);
  const [select, setSelect] = useState(1)

  const toggleSelect = () => {
    setOpenSelect(!openSelect);
  };

  const chooseOne = (index) => {
      setSelect(index);
  };

  const button =
    'w-full rounded-xl py-2 px-4 shadow-md text-sm duration-300 active:bg-opacity-80 ease-in-out bg-[#1a5cff] dark:bg-[#1a5cff] md:text-sm text-white hover:shadow-md hover:shadow-blue-500/50';
  return (
    <>
      <div className="relative rounded-2xl bg-gray-200 dark:bg-[#323741]">
        <div className="py-4 px-4">
          <div className="flex items-center divide-x divide-[#323741] dark:divide-white bg-gray-300 dark:bg-[#272d36] p-3 rounded-2xl space-x-2">
            <FiSearch className="text-[#323741] dark:text-white" />
            <input
              className="bg-transparent px-2 outline-none text-sm truncate"
              type="text"
              placeholder="Choose one"
            />
          </div>
        </div>
        <div className={openSelect ? 'p-4 space-y-2' : 'hidden'}>
          <div onClick={() => chooseOne(1)} className="flex items-center p-3 bg-gray-300 dark:bg-[#232832] rounded-2xl cursor-pointer">
            <div className={select === 1 ? "flex items-center justify-center w-6 h-6 rounded-lg border border-transparent rotate-45 bg-[#0071ff]" : "flex items-center justify-center w-6 h-6 rounded-lg border border-[#232832] dark:border-gray-300 rotate-45 bg-transparent"}>
              <BiCheck className="-rotate-45 text-lg text-white" />
            </div>
            <h3 className="ml-3 text-[#323471] dark:text-white">Lazydev</h3>
          </div>
          <div onClick={() => chooseOne(2)} className="flex items-center p-3 bg-gray-300 dark:bg-[#232832] rounded-2xl cursor-pointer">
            <div className={select === 2 ? "flex items-center justify-center w-6 h-6 rounded-lg border border-transparent rotate-45 bg-[#0071ff]" : "flex items-center justify-center w-6 h-6 rounded-lg border border-[#232832] dark:border-gray-300 rotate-45 bg-transparent"}>
              <BiCheck className="-rotate-45 text-lg text-white" />
            </div>
            <h3 className="ml-3 text-[#323471] dark:text-white">React.js</h3>
          </div>
          <div onClick={() => chooseOne(3)} className="flex items-center p-3 bg-gray-300 dark:bg-[#232832] rounded-2xl cursor-pointer">
            <div className={select === 3 ? "flex items-center justify-center w-6 h-6 rounded-lg border border-transparent rotate-45 bg-[#0071ff]" : "flex items-center justify-center w-6 h-6 rounded-lg border border-[#232832] dark:border-gray-300 rotate-45 bg-transparent"}>
              <BiCheck className="-rotate-45 text-lg text-white" />
            </div>
            <h3 className="ml-3 text-[#323471] dark:text-white">Next.js</h3>
          </div>
          <div onClick={() => chooseOne(4)} className="flex items-center p-3 bg-gray-300 dark:bg-[#232832] rounded-2xl cursor-pointer">
            <div className={select === 4? "flex items-center justify-center w-6 h-6 rounded-lg border border-transparent rotate-45 bg-[#0071ff]" : "flex items-center justify-center w-6 h-6 rounded-lg border border-[#232832] dark:border-gray-300 rotate-45 bg-transparent"}>
              <BiCheck className="-rotate-45 text-lg text-white" />
            </div>
            <h3 className="ml-3 text-[#323471] dark:text-white">Tailwindcss</h3>
          </div>
          <button className={button}>Send</button>
        </div>
        <div
          onClick={toggleSelect}
          className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-xl bg-[#0071ff] flex items-center justify-center cursor-pointer hover:bg-opacity-70">
          {openSelect ? (
            <BiArrowToTop className="text-white" />
          ) : (
            <BiArrowToBottom className="text-white animate-bounce" />
          )}
        </div>
      </div>
    </>
  );
};
