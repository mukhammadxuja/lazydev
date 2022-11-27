import React from 'react';

export const Undo = () => {
  return (
    <>
      <div
        className="flex items-center w-[15rem] md:w-[20rem] p-4 text-gray-500 bg-white rounded-xl shadow dark:text-gray-400 dark:bg-[#18191c]"
        role="alert">
        <div className="text-sm font-normal">Conversation archived.</div>
        <div className="flex items-center ml-auto space-x-2">
          <a
            className="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-gray-700"
            href="#!">
            Undo
          </a>
          <button
            type="button"
            className="bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-400 dark:bg-[#1e2023] dark:bg-opacity-70 dark:hover:bg-opacity-100">
            <span className="sr-only">Close</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
