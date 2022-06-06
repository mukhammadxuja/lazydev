import React from 'react';
import { MdOutlineWarningAmber, MdClose } from 'react-icons/md';

export const Warning = () => {
  return (
    <>
      <div className="h-max  w-[15rem] md:w-[20rem] p-2 border-2 border-yellow-400 dark:border-opacity-50 bg-yellow-100 dark:bg-[#35301f] rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 dark:bg-[#836513] rounded-full">
            <span className="flex items-center justify-center bg-white rounded-full w-6 h-6">
              <span>
                <MdOutlineWarningAmber className="text-yellow-500 dark:text-[#b7ae01]" />
              </span>
            </span>
          </div>
          <div>
            <p className="text-gray-700 dark:text-white pl-4">A warning toast</p>
          </div>
        </div>
        <div>
          <MdClose className="text-lg text-gray-700 dark:text-white mr-4 cursor-pointer hover:opacity-60" />
        </div>
      </div>
    </>
  );
};
