import React, { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';

export const TypeB= () => {
  const [activeDialog, setActiveDialog] = useState(false);

  const dialog = () => {
    setActiveDialog(true);
  };

  const CloseDialog = () => {
    setActiveDialog(false);
  };

  const defaultButton =
    'rounded-xl py-2 px-4 shadow-md text-sm duration-300 active:bg-opacity-80 ease-in-out bg-[#1a5cff] dark:bg-[#1a5cff] md:text-sm text-white hover:shadow-md hover:shadow-blue-500/50 ';

  const emojiStyle = 'text-xl md:text-2xl p-2 bg-pink-100 rounded-lg hover:bg-pink-200 cursor-pointer '

  return (
    <>
      <div
        className={
          activeDialog
            ? 'fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 '
            : 'hidden'
        }>
        <div className="relative w-[15rem] md:w-[25rem] p-6 bg-white dark:bg-darkPrimary shadow-lg rounded-xl space-y-2">
          <div className='flex items-center justify-between'>
            <h4 className='text-sm md:text-base font-semibold'>Question*</h4>
            <GrFormClose onClick={CloseDialog} className='cursor-pointer' />
          </div>
          <p>How would you rate this ui?*</p>
          <div className='flex items-center justify-between'>
            <span className={emojiStyle}>🥴</span>
            <span className={emojiStyle}>😕</span>
            <span className={emojiStyle + 'hidden md:block'}>🙃</span>
            <span className={emojiStyle}>🙂</span>
            <span className={emojiStyle + 'hidden md:block'}>😇</span>
            <span className={emojiStyle}>😍</span>
          </div>
        </div>
      </div>
      <button onClick={dialog} className={defaultButton}>
        Open Dialog
      </button>
    </>
  );
};