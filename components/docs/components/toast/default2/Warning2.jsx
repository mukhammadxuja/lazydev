import React from 'react';
import { MdOutlineWarningAmber, MdClose } from 'react-icons/md';

export const Warning2 = () => {
  return (
    <>
      <div className="h-max w-[15rem] md:w-[20rem] p-2 mt-2 border-2 border-blue-400 bg-blue-100 dark:bg-[#1e2639] rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-500 dark:bg-blue-800 rounded-full">
            <span className="flex items-center justify-center bg-white rounded-full w-6 h-6">
              <span>
                <strong className="text-blue-500 dark:text-[#1c3c88]">i</strong>
              </span>
            </span>
          </div>
          <div className="overflow-hidden whitespace-nowrap truncate">
            <p className="text-gray-700 dark:text-white pl-4">A blue toast</p>
          </div>
        </div>
        <div>
          <MdClose className="text-lg text-gray-700 dark:text-white mr-4 cursor-pointer hover:opacity-60" />
        </div>
      </div>
    </>
  );
};
