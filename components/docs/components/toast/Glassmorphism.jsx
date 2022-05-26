import React from 'react';
import { MdDone, MdClose } from 'react-icons/md';

export const Glassmorphism = () => {
  return (
    <>
      <div className="relative z-20 flex items-center w-[20rem] md:w-[25rem] bg-white shadow-lg dark:bg-darkSecondary p-5 rounded-xl bg-opacity-50 backdrop-filter backdrop-blur-sm">
        <div className="flex items-center justify-center bg-green-200 rounded-xl w-6 h-6 mr-3 md:mr-5">
          <span>
            <MdDone className="text-green-500" />
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-green-500">
            Lazydev ui component
          </h4>
          <p className='text-xs md:text-sm'>A glassmorphism toast</p>
        </div>
      </div>
    </>
  );
};
