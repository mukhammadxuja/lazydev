import React from 'react';
import { MdErrorOutline, MdClose } from 'react-icons/md';

export const Error = () => {
  return (
    <>
      <div className="h-max w-[15rem] md:w-[20rem] p-2 mt-2 border-2 border-red-400 dark:border-opacity-50 bg-red-100 dark:bg-[#352428] rounded-xl flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 bg-red-500 dark:bg-[#4a272d] rounded-2xl">
            <span className="flex items-center justify-center bg-white rounded-xl w-6 h-6">
              <span>
                <MdErrorOutline className="text-red-500 dark:text-[#b33131]" />
              </span>
            </span>
          </div>
          <div>
            <p className="text-gray-700 dark:text-white pl-4">A error toast</p>
          </div>
        </div>
        <div>
          <MdClose className="text-lg text-gray-700 dark:text-white mr-4 cursor-pointer hover:opacity-60" />
        </div>
      </div>
    </>
  );
};
