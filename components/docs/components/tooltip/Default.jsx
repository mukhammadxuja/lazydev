import React from 'react';

export const Default = () => {
  const button =
    'w-fit mx-auto rounded-xl py-2 px-4 shadow-md text-sm duration-300 ease-in-out bg-blue-500 bg-opacity-30 hover:bg-opacity-50 md:text-sm text-[#1a5cff] ';

  return (
    <div className="relative flex flex-col items-center group">
      <button className={button}>Get tooltip</button>
      <div className="absolute bottom-4 hidden flex flex-col items-center mb-6 group-hover:flex">
        <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-gray-600 shadow-lg rounded-md">
          This is tooltip
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-600"></div>
      </div>
    </div>
  );
};
