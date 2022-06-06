import React from 'react';
import { MdDone, MdClose } from 'react-icons/md';

export const Done = () => {
  return (
    <>
      <div className="h-max w-[15rem] md:w-[20rem] p-2 border-2 border-green-400 dark:border-opacity-50 bg-green-100 dark:bg-[#223125] rounded-xl flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 bg-green-500 dark:bg-[#264027] rounded-2xl">
            <span className="flex items-center justify-center bg-white rounded-xl w-6 h-6">
              <span>
                <MdDone className="text-green-500 dark:text-[#3ea736]" />
              </span>
            </span>
          </div>
          <div>
            <p className="text-gray-700 dark:text-white pl-4">A success toast</p>
          </div>
        </div>
        <div>
          <MdClose className="text-lg text-gray-700 dark:text-white mr-4 cursor-pointer hover:opacity-60" />
        </div>
      </div>
    </>
  );
};
