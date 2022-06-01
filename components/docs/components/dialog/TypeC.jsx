import React, { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { BiUser, BiLockOpenAlt } from 'react-icons/bi';

export const TypeC = () => {
  const [activeDialog, setActiveDialog] = useState(false);

  const dialog = () => {
    setActiveDialog(true);
  };

  const CloseDialog = () => {
    setActiveDialog(false);
  };

  const defaultButton =
    'w-full rounded-xl py-2 px-4 shadow-md text-sm duration-300 active:bg-opacity-80 ease-in-out bg-[#1a5cff] dark:bg-[#1a5cff] md:text-sm text-white hover:shadow-md hover:shadow-blue-500/50 ';

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
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-sm md:text-base font-semibold text-center">
              Welcome to Lazydev!
            </h3>
            <div className="relative flex items-center rounded-xl bg-gray-200 dark:bg-[#141417] group">
              <input
                id="username"
                className="outline-none flex flex-grow p-3 bg-transparent rounded-l-xl px-4 text-xs duration-300"
                type="text"
                placeholder="username"
              />
              <div className="absolute top-0 right-0 duration-300 rounded-xl bg-transparent p-2 group-focus-within:-top-2 group-focus-within:-right-2 group-focus-within:bg-[#18191c]">
                <BiUser className="text-primary dark:text-white group-focus-within:text-white" />
              </div>
            </div>
            <div className="relative flex items-center rounded-xl bg-gray-200 dark:bg-[#141417] group">
              <input
                id="password"
                className="outline-none flex flex-grow p-3 bg-transparent rounded-l-xl px-4 text-xs duration-300"
                type="password"
                placeholder="password"
              />
              <div className="absolute top-0 right-0 duration-300 rounded-xl bg-transparent p-2 group-focus-within:-top-2 group-focus-within:-right-2 group-focus-within:bg-[#18191c]">
                <BiLockOpenAlt className="text-primary dark:text-white group-focus-within:text-white" />
              </div>
            </div>
            <div className="hidden md:flex items-center md:justify-between">
              <span className="flex items-center space-x-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded-lg bg-gray-50 focus:ring-3 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
                <small className="text-blue-500 cursor-pointer">
                  Remember me
                </small>
              </span>
              <small className="text-gray-500 cursor-pointer">
                Forgot password?
              </small>
            </div>
            <button className={defaultButton}>Sign In</button>
            <span className="flex items-center space-x-1 w-fit mx-auto">
              <p className="text-xs">New here?</p>
              <a
                className="text-xs text-blue-600 active:text-blue-400"
                href="#!">
                Create new Account
              </a>
            </span>
          </div>
        </div>
      </div>
      <button onClick={dialog} className={defaultButton}>
        Open Dialog
      </button>
    </>
  );
};
