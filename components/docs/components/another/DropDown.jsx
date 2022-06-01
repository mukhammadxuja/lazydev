import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export const DropDown = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <div onClick={() => setDropdown(!dropdown)}>
        <div className="p-3 bg-white dark:bg-darkSecondary shadow-lg rounded-xl flex items-center justify-between w-44 cursor-pointer">
          <small>DropDown</small>
          <MdOutlineKeyboardArrowDown
            className={
              dropdown ? 'rotate-180 duration-200' : 'rotate-0 duration-200'
            }
          />
        </div>
        <ul
          className={
            dropdown
              ? 'flex my-1 items-center space-x-2 p-2 rounded-xl bg-white dark:bg-darkSecondary shadow-2xl w-fit'
              : 'invisible inline-flex my-1 items-center space-x-2 p-2 rounded-xl bg-white dark:bg-darkSecondary shadow-2xl w-fit'
          }>
          <li>😍</li>
          <li>😋</li>
          <li>😡</li>
          <li>😎</li>
          <li>😭</li>
          <li>😩</li>
        </ul>
      </div>
    </>
  );
};
