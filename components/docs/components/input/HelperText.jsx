import React from 'react';

export const HelperText
 = () => {
  return (
    <div className='flex flex-col space-y-2 md:space-y-3'>
      <div className="flex flex-col space-y-1 md:space-y-2">
        <label
          className="text-xs md:text-sm font-medium">
          Helper text
        </label>
        <input
          type="text"
          className="px-3 py-2 md:py-3 md:px-4 block w-full md:w-[18rem] xl:w-[22rem] rounded-lg md:rounded-xl text-sm border-2 ring-2 ring-transparent border-gray-200 hover:border-blue-200 outline-none focus:ring-blue-300  dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 duration-300"
          placeholder="Example one"
        />
        <p className='text-sm text-gray-500 mt-2'>We wll never share your details.</p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-x-2">
        <label
          className="text-xs md:text-sm font-medium">
          Inline helper text
        </label>
        <input
          type="text"
          className="px-3 py-2 md:py-3 md:px-4 block w-full md:w-[18rem] xl:w-[22rem] rounded-lg md:rounded-xl text-sm border-2 ring-2 ring-transparent border-gray-200 hover:border-blue-200 outline-none focus:ring-blue-300  dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 duration-300"
          placeholder="Example two"
        />
        <p className='text-sm text-gray-500 mt-2'>We wll never share your details.</p>
      </div>
    </div>
  );
};
