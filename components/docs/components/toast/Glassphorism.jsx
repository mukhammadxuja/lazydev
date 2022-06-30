import React from 'react';
import { MdDone } from 'react-icons/md';

export const Glassphorism = () => {
  return (
    <>
      <div className="relative z-20 flex items-center w-[15rem] md:w-[20rem] py-3 px-4 bg-gradient-to-r from-green-200 via-transparent to-transparent shadow-lg dark:bg-darkSecondary rounded-xl bg-opacity-40 backdrop-filter backdrop-blur-sm">
        <div className="flex items-center justify-center bg-green-300 rounded-full h-8 w-8 mr-3 md:mr-5">
          <span>
            <MdDone className="text-green-500 text-lg" />
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-green-500">Glassphorism toast</h4>
          <p className="text-xs">Lazydev glassphorism toast ui</p>
        </div>
      </div>
    </>
  );
};
