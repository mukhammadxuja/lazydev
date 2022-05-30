import React from 'react';
import { MdErrorOutline, MdClose } from 'react-icons/md';

export const Error = () => {
  return (
    <>
      <div className="h-max w-[15rem] p-1 mt-2 border-2 border-red-400 bg-red-100 rounded-xl flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-11 h-11 bg-red-500 rounded-2xl">
            <span className="flex items-center justify-center bg-white rounded-xl w-6 h-6">
              <span>
                <MdErrorOutline className="text-red-500" />
              </span>
            </span>
          </div>
          <div>
            <p className="text-primary pl-4">A error toast</p>
          </div>
        </div>
        <div>
          <MdClose className="text-lg text-primary mr-4 cursor-pointer" />
        </div>
      </div>
    </>
  );
};
