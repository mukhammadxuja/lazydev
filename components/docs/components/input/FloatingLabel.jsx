import React from 'react';

export const FloatingLabel = () => {
  return (
    <div className='flex flex-col space-y-1 md:space-y-2'>
      <div className="relative group">
        <label
          className="absolute top-0 left-0 w-full h-full flex items-center pl-[16px] duration-300 text-xs md:text-sm font-medium group-focus-within:text-xs md:group-focus-within:text-sm group-focus-within:-top-1 group-focus-within:h-1/2 group-focus-within:-translate-y-full group-focus-within:pl-0 cursor-text"
          htmlFor="label1">
          First name
        </label>
        <input
          id="label1"
          type="text"
          className="px-3 py-2 md:py-3 md:px-4 block w-full md:w-[18rem] xl:w-[22rem] rounded-lg md:rounded-xl text-sm placeholder:opacity-0 placeholder:group-focus-within:opacity-100 placeholder:text-gray-600 placeholder:font-normal border-2 ring-2 ring-transparent border-gray-200 hover:border-blue-200 outline-none focus:ring-blue-300  dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 duration-300"
          placeholder="Mukhammadjohn"
        />
      </div>
      <div className="relative group">
        <label
          className="absolute top-0 left-0 w-full h-full flex items-center pl-[16px] duration-200 text-xs md:text-sm font-medium group-focus-within:font-normal group-focus-within:text-[0.50rem] md:group-focus-within:text-[0.60rem] group-focus-within:-top-1 group-focus-within:h-1/2 group-focus-within:translate-y-1 group-focus-within:translate-x-4 group-focus-within:pl-0 group-focus-within:text-blue-500 cursor-text"
          htmlFor="label2">
          Last name
        </label>
        <input
          id="label2"
          type="text"
          className="px-3 pt-3 pb-1 md:pt-4 md:pb-2 md:px-4 block w-full md:w-[18rem] xl:w-[22rem] rounded-lg md:rounded-xl text-sm placeholder:opacity-0 placeholder:group-focus-within:opacity-100 placeholder:text-gray-600 placeholder:font-normal border-2 ring-2 ring-transparent border-gray-200 hover:border-blue-200 outline-none focus:ring-blue-300  dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 duration-200"
          placeholder="Zayniddinov"
        />
      </div>
    </div>
  );
};
