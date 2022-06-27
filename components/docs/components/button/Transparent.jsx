import React, { useState } from 'react';

export const Transparent = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="flex items-center space-x-3">
      <a
        onClick={() => setActive(true)}
        className={`${
          active ? 'bg-blue-500 bg-opacity-30' : ''
        } w-fit mx-auto rounded-xl py-2 px-8 cursor-pointer active:scale-95 shadow-md text-sm duration-300 ease-in-out hover:bg-blue-500 hover:bg-opacity-30 md:text-sm text-[#1a5cff]`}>
        Active
      </a>
      <a
        onClick={() => setActive(false)}
        className={`${
          active ? '' : 'bg-blue-500 bg-opacity-30'
        } w-fit mx-auto rounded-xl py-2 px-8 cursor-pointer active:scale-95 shadow-md text-sm duration-300 ease-in-out hover:bg-blue-500 hover:bg-opacity-30 md:text-sm text-[#1a5cff]`}>
        Default
      </a>
    </div>
  );
};
