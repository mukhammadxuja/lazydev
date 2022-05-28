import React, { useState } from 'react';

export const Gradient = () => {
  const [active, setActive] = useState(true);

  const button =
    'w-fit mx-auto rounded-xl py-2 px-4 shadow-md text-sm duration-300 active:bg-opacity-80 ease-in-out bg-gradient-to-r from-[#1a5cff] via-purple-500 to-pink-500 md:text-sm text-white hover:shadow-md hover:shadow-blue-500/50 ';

  const disabledButton =
    'w-fit mx-auto rounded-xl py-2 px-4 shadow-md text-sm duration-300 active:bg-opacity-80 ease-in-out bg-gradient-to-r from-[#1a5cff] via-purple-500 to-pink-500 md:text-sm text-white ';

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => setActive(true)}
        className={active ? button + '-translate-y-1 shadow-md shadow-blue-500/50' : button}>
        Active
      </button>
      <button
        onClick={() => setActive(false)}
        className={active ? button : button + '-translate-y-1 shadow-md shadow-blue-500/50'}>
        Default
      </button>
      <button className={disabledButton + 'opacity-50 cursor-auto select-none'}>
        Disabled
      </button>
    </div>
  );
};
