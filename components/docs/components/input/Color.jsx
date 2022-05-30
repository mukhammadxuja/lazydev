import React from 'react';
import { BiUser } from 'react-icons/bi';

export const Color = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-2">
      <div className="group">
        <input
          className="rounded-xl bg-blue-200 dark:bg-[#1e2639] outline-none py-3 px-4 text-xs duration-200 group-focus-within:bg-opacity-60"
          type="text"
          placeholder="Default"
        />
      </div>
      <div className="relative group">
        <label
          className="absolute top-0 left-0 w-full h-full flex items-center pl-[10px] duration-300 text-xs group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-full group-focus-within:pl-0"
          htmlFor="color">
          Label
        </label>
        <input
          id="color"
          className="rounded-xl bg-red-200 dark:bg-[#352428] outline-none py-3 px-4 text-xs group-focus-within:bg-opacity-60"
          type="text"
        />
      </div>
      <div className="relative group">
        <div className="flex items-center rounded-xl text-[#46c93a] bg-green-200 dark:bg-[#223125]">
          <input
            id="username"
            className="outline-none flex flex-grow p-3 bg-transparent rounded-l-xl px-4 text-xs duration-300"
            type="text"
            placeholder="username"
          />
          <div className="absolute top-0 right-0 duration-300 rounded-xl bg-transparent p-2 group-focus-within:-top-2 group-focus-within:-right-2 group-focus-within:bg-[#264027] group-focus-within:bg-opacity-60">
            <BiUser className="text-primary text-[#46c93a]" />
          </div>
        </div>
      </div>
    </div>
  );
};
