import React, { useState } from 'react';

export const Transparent = () => {
  const [active, setActive] = useState(true);

  const button =
    'w-fit mx-auto rounded-xl py-2 px-4 shadow-md text-sm duration-300 ease-in-out hover:bg-blue-500 hover:bg-opacity-30 md:text-sm text-[#1a5cff] ';

  const disabledButton =
    'w-fit mx-auto rounded-xl py-2 px-4 shadow-md text-sm duration-300 ease-in-out md:text-sm text-[#1a5cff] opacity-50 cursor-auto select-none';

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => setActive(true)}
        className={active ? button + 'bg-blue-500 bg-opacity-30' : button}>
        Active
      </button>
      <button
        onClick={() => setActive(false)}
        className={active ? button : button + 'bg-blue-500 bg-opacity-30'}>
        Default
      </button>
      <button className={disabledButton}>
        Disabled
      </button>
    </div>
  );
};
// 1a5cff
