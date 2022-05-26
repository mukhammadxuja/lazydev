import React from 'react';
import { MdOutlineWarningAmber, MdClose } from 'react-icons/md';

export const Warning = () => {
  return (
    <>
      <div className="h-max w-[20rem] md:w-[25rem] p-2 border-2 border-yellow-400 bg-yellow-100 rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-11 h-11 bg-yellow-500 rounded-full">
            <span className="flex items-center justify-center bg-white rounded-full w-6 h-6">
              <span>
                <MdOutlineWarningAmber className="text-yellow-500" />
              </span>
            </span>
          </div>
          <div>
            <p className="text-primary pl-4">A warning toast</p>
          </div>
        </div>
        <div>
          <MdClose className="text-lg text-primary mr-4 cursor-pointer" />
        </div>
      </div>
    </>
  );
};
