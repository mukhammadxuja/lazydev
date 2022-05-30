import React from 'react';
import { MdOutlineWarningAmber, MdClose } from 'react-icons/md';

export const Warning2 = () => {
  return (
    <>
      <div className="h-max w-[15rem] p-1 mt-2 border-2 border-blue-400 bg-blue-100 rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-11 h-11 bg-blue-500 rounded-full">
            <span className="flex items-center justify-center bg-white rounded-full w-6 h-6">
              <span>
                <strong className="text-blue-500">i</strong>
              </span>
            </span>
          </div>
          <div className="overflow-hidden whitespace-nowrap truncate">
            <p className="text-primary pl-4">A blue toast</p>
          </div>
        </div>
        <div>
          <MdClose className="text-lg text-primary mr-4 cursor-pointer" />
        </div>
      </div>
    </>
  );
};
