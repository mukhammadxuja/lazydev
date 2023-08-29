import React from 'react';

export const Label = () => {
  return (
    <>
      <div className="flex flex-col space-y-1">
        <label
          className="text-xs md:text-sm font-medium">
          First name
        </label>
        <input
          type="text"
          className="px-3 py-2 md:py-3 md:px-4 block w-full md:w-[18rem] xl:w-[22rem] rounded-lg md:rounded-xl text-sm border-2 ring-2 ring-transparent border-gray-200 hover:border-blue-200 outline-none focus:ring-blue-300  dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 duration-300"
          placeholder="Mukhammadjohn"
        />
      </div>
    </>
  );
};
