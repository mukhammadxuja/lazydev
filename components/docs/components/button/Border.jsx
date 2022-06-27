import React, { useState } from 'react';

export const Border = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="flex items-center space-x-3">
      <a
        onClick={() => setActive(true)}
        className={`${
          active ? 'bg-[#1a5cff] text-white' : ''
        } w-fit mx-auto rounded-lg py-2 px-8 cursor-pointer active:scale-95 shadow-md text-sm duration-300 border border-[#1a5cff] active:bg-opacity-80 ease-in-out bg-transparent md:text-sm text-[#1a5cff]`}>
        Active
      </a>
      <a
        onClick={() => setActive(false)}
        className={`${
          active ? '' : 'bg-[#1a5cff] text-white'
        } w-fit mx-auto rounded-lg py-2 px-8 cursor-pointer active:scale-95 shadow-md text-sm duration-300 border border-[#1a5cff] active:bg-opacity-80 ease-in-out bg-transparent md:text-sm text-[#1a5cff]`}>
        Default
      </a>
    </div>
  );
};
