import React from 'react';

export const Label = () => {
  return (
    <div className="relative group">
      <label
        className="absolute top-0 left-0 w-full h-full flex items-center pl-[10px] duration-300 text-xs group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-full group-focus-within:pl-0"
        htmlFor="label">
        Label
      </label>
      <input
        id="label"
        className="rounded-xl w-[15rem] md:w-[25rem] bg-gray-200 dark:bg-[#141417] outline-none py-3 px-4 text-xs group-focus-within:bg-opacity-60"
        type="text"
      />
    </div>
  );
};
