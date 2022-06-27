import React, { useState, useLayoutEffect } from 'react';
import Ripple from './Ripple';

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
  useLayoutEffect(() => {
    let bounce = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

export const Default = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="flex items-center space-x-3">
      <a
        onClick={() => setActive(true)}
        className={`${
          active ? '-translate-y-1' : ''
        } w-fit mx-auto rounded-lg py-2 px-8 font-medium overflow-hidden relative shadow-md text-sm duration-300 active:bg-opacity-80 cursor-pointer ease-in-out active:scale-95 bg-[#1a5cff] dark:bg-[#1a5cff] md:text-sm text-white hover:shadow-md`}>
        Active
        <Ripple color={'#fff'} duration={800} />
      </a>
      <a
        onClick={() => setActive(false)}
        className={`${
          active ? '' : '-translate-y-1'
        } w-fit mx-auto rounded-lg py-2 px-8 font-medium overflow-hidden relative shadow-md text-sm duration-300 active:bg-opacity-80 cursor-pointer ease-in-out active:scale-95 bg-[#1a5cff] dark:bg-[#1a5cff] md:text-sm text-white hover:shadow-md`}>
        Default
        <Ripple color={'#fff'} duration={800} />
      </a>
    </div>
  );
};
