import React, { useState } from 'react';

export const Border = () => {
  const [active, setActive] = useState(true);

  const button =
    'w-fit mx-auto rounded-xl py-2 px-4 shadow-md text-sm duration-300 border border-[#1a5cff] active:bg-opacity-80 ease-in-out bg-transparent md:text-sm text-[#1a5cff] ';

  const disabledButton =
    'w-fit mx-auto rounded-xl py-2 px-4 shadow-md text-sm duration-300 border border-[#1a5cff] active:bg-opacity-80 ease-in-out bg-transparent md:text-sm text-[#1a5cff] opacity-50 cursor-auto select-none';

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => setActive(true)}
        className={active ? button + 'bg-[#1a5cff] text-white' : button}>
        Active
      </button>
      <button
        onClick={() => setActive(false)}
        className={active ? button : button + 'bg-[#1a5cff] text-white'}>
        Default
      </button>
      <button className={disabledButton}>
        Disabled
      </button>
    </div>
  );
};
// 1a5cff
