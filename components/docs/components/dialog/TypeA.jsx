import React, { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';

export const TypeA = () => {
  const [activeDialog, setActiveDialog] = useState(false);

  const dialog = () => {
    setActiveDialog(true);
  };

  const CloseDialog = () => {
    setActiveDialog(false);
  };

  const defaultButton =
    'rounded-xl py-2 px-4 shadow-md text-sm duration-300 active:bg-opacity-80 ease-in-out bg-[#1a5cff] dark:bg-[#1a5cff] md:text-sm text-white hover:shadow-md hover:shadow-blue-500/50 ';

  const buttonBorder =
    'rounded-xl py-2 px-4 shadow-md text-sm duration-300 whitespace-nowrap border border-[#1a5cff] active:bg-opacity-80 ease-in-out bg-transparent md:text-sm text-[#1a5cff] ';

  const buttonTransparent =
    'rounded-xl py-2 px-4 shadow-md text-sm duration-300 whitespace-nowrap ease-in-out bg-blue-500 bg-opacity-30 md:text-sm text-[#1a5cff] ';

  return (
    <>
      <div
        className={
          activeDialog
            ? 'fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 '
            : 'hidden'
        }>
        <div className="relative w-[15rem] md:w-[25rem] p-6 bg-white dark:bg-darkPrimary shadow-lg rounded-xl">
          <div
            onClick={CloseDialog}
            className="absolute -top-1 -right-1 hover:top-0 hover:right-0 p-1.5 rounded-lg bg-white dark:bg-darkPrimary shadow-lg cursor-pointer duration-200">
            <GrFormClose className="text-primary dark:text-white" />
          </div>
          <img
            className="mx-auto w-28 mb-2"
            src="https://media0.giphy.com/media/v8Vux9WxXcnXEnOGn1/giphy.gif?cid=ecf05e47zn1myog0zrkd309o2vq605ztag8vqqu9v1zguc7t&rid=giphy.gif&ct=s"
            alt=""
          />
          <div className="space-y-1 text-center text-primary dark:text-white">
            <h3 className="text-lg font-semibold">
              This is a Type A dialog example!
            </h3>
            <p className="text-sm">
              Save a code or copy and paste your project.{' '}
            </p>
          </div>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <button className={buttonBorder}>Take code</button>
            <button className={buttonTransparent}>Scan pages</button>
          </div>
        </div>
      </div>
      <button onClick={dialog} className={defaultButton}>
        Open Dialog
      </button>
    </>
  );
};
