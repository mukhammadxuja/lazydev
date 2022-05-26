import React from 'react';
import { MdDone, MdClose } from 'react-icons/md';

export const WithButton = () => {
  return (
    <div className='w-[20rem] md:w-[25rem] p-2 border-l-4 border-green-400 bg-white dark:bg-[#102a43] rounded-xl flex flex-col shadow-lg'>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="flex items-center justify-center bg-green-300 rounded-xl w-6 h-6">
            <span>
              <MdDone className="text-white" />
            </span>
          </span>
          <div className="pl-4 ">
            <h3 className="text-primary dark:text-white font-medium">
              A success toast
            </h3>
            <p className="text-xs">Toast with button</p>
          </div>
        </div>
        <div>
          <MdClose className="text-lg text-primary dark:text-white mr-4 cursor-pointer" />
        </div>
      </div>
      <div className='flex items-center space-x-2 w-fit ml-10 my-4'>
          <button className='btn bg-gray-200 dark:bg-white text-primary rounded-md'>Button</button>
          <a className='text-sm text-gray-400 dark:text-white' href="#!">Learn more</a>
      </div>
    </div>
  );
};
