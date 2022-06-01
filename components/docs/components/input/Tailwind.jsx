import React from 'react';

export const Tailwind = () => {
  return (
    <div className='flex items-center rounded-md w-[15rem] md:w-[25rem] bg-gray-100 dark:bg-[#111827] px-2 ring-2 ring-gray-300 dark:ring-[#111827] focus-within:ring-blue-600 dark:focus-within:ring-blue-600'>
      <svg className="w-[1.25rem] h-[1.25rem] fill-gray-400" viewBox="0 0 512 512">
        <path d="M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z"></path>
      </svg>
      <input
        className="flex-grow bg-transparent outline-none text-xs font-semibold px-2 py-4 text-gray-400"
        type="email"
        placeholder="Email address"
      />
      <button className='text-xs text-blue-500 font-semibold py-3 px-4 rounded-2xl hover:bg-blue-300 hover:bg-opacity-30'>SUBSCRIBE</button>
    </div>
  );
};
