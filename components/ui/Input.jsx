import React from 'react';
import { CgSearch } from 'react-icons/cg';

const Input = ({ Icon, p, focusAnimation, width, placeholder, animation }) => {
  return (
    <>
      <div className={`${animation} m-5 w-fit flex items-center bg-gray-200 dark:bg-darkSecondary justify-between shadow-xl rounded-lg`}>
        <input
          className={`${p} ${width} text-xs bg-transparent flex-grow outline-none focus:${focusAnimation} duration-300`}
          type="text"
          placeholder={placeholder}
        />
        <Icon className="text-3xl text-white p-2 rounded-xl bg-[#1a5cff] hover:bg-[#0081c2] cursor-pointer duration-200" />
      </div>
    </>
  );
};

export default Input;
