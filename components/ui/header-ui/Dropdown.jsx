import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const DropDown = () => {
  const [dropdown, setDropdown] = useState(true);
  return (
    <>
      <div
        onClick={() => setDropdown(!dropdown)}
        className="animation2 select-none">
        <div className="p-2 bg-white dark:bg-darkSecondary shadow-2xl rounded-xl flex items-center justify-between w-44 cursor-pointer">
          <small>DropDown</small>
          <MdOutlineKeyboardArrowDown
            className={
              dropdown ? 'rotate-180 duration-200' : 'rotate-0 duration-200'
            }
          />
        </div>
        <ul className={dropdown ? 'dropdown__ul opacity-0' : 'dropdown__ul'}>
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

export default DropDown;
