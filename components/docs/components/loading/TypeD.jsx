import React, { useState } from 'react';

export const TypeD = () => {
  const button =
    'w-fit mx-auto rounded-xl py-2 px-4 shadow-md text-sm duration-300 active:bg-opacity-80 ease-in-out bg-[#1a5cff] dark:bg-[#1a5cff] md:text-sm text-white hover:shadow-md hover:shadow-blue-500/50 ';

  const [activeLoading, setActiveLoading] = useState(false);

  const loading = () => {
    setActiveLoading(true);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-[40px] h-[40px] border-l-2 border-[#1a5cff] rounded-full animate-spin" />

      <div>
        <button onClick={loading} className={button}>
          Open loading
        </button>
      </div>
      <div
        onClick={() => setActiveLoading(false)}
        className={
          activeLoading
            ? 'fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50'
            : 'hidden'
        }>
        <div className="w-[50px] h-[50px] border-l-2 border-[#1a5cff] rounded-full animate-spin" />
      </div>
    </div>
  );
};
