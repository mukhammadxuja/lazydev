import React from 'react';
import { MdDone, MdClose } from 'react-icons/md';

export const Done = () => {
  return (
    <>
      <div className="h-max w-[20rem] md:w-[25rem] p-2 border-2 border-green-400 bg-green-100 rounded-xl flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-11 h-11 bg-green-500 rounded-2xl">
            <span className="flex items-center justify-center bg-white rounded-xl w-6 h-6">
              <span>
                <MdDone className="text-green-500" />
              </span>
            </span>
          </div>
          <div>
            <p className="text-primary pl-4">A success toast</p>
          </div>
        </div>
        <div>
          <MdClose className="text-lg text-primary mr-4 cursor-pointer" />
        </div>
      </div>
    </>
  );
};
