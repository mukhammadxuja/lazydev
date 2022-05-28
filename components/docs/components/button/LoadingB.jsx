import React, { useState } from 'react';

export const LoadingB = () => {
  const [active, setActive] = useState(true);

  const button =
    'relative w-fit mx-auto rounded-xl py-2 px-4 shadow-md text-sm duration-300 active:bg-opacity-80 ease-in-out bg-[#1a5cff] dark:bg-[#1a5cff] md:text-sm text-white hover:shadow-md hover:shadow-blue-500/50 ';

  const disabledButton =
    'relative w-fit mx-auto rounded-xl py-2 px-4 shadow-md text-sm duration-300 active:bg-opacity-80 ease-in-out bg-[#1a5cff] dark:bg-[#1a5cff] md:text-sm text-white ';

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => setActive(true)}
        className={
          active
            ? button + '-translate-y-1 shadow-md shadow-blue-500/50'
            : button
        }>
        <div className='bg-black bg-opacity-40'>
          <span className="absolute w-[15px] h-[15px] rounded-full border-[2px] border-transparent border-r-white animate-spin" />
        </div>
        <p>Active</p>
      </button>
      <button
        onClick={() => setActive(false)}
        className={
          active
            ? button
            : button + '-translate-y-1 shadow-md shadow-blue-500/50'
        }>
        <span className="w-[15px] h-[15px] rounded-full border-[2px] border-transparent border-r-white animate-spin" />
        <p>Default</p>
      </button>
      <button className={disabledButton + 'opacity-50 cursor-auto select-none'}>
        <span className="w-[15px] h-[15px] rounded-full border-[2px] border-transparent border-r-white animate-spin" />
        <p>Disabled</p>
      </button>
    </div>
  );
};
