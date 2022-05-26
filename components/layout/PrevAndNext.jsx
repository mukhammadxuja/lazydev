import React from 'react';
import Link from 'next/link';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export const PrevAndNext = ({ leftPath, rightPath }) => {
  return (
    <>
      <div className="relative top-1/2 flex items-center justify-between">
        <Link href={leftPath}>
          <IoIosArrowBack className="fixed top-1/2 left-0 lg:left-[235px] cursor-pointer text-[2.5rem] p-3 bg-gray-200 dark:bg-darkPrimary rounded-r-lg" />
        </Link>
        <Link href={rightPath}>
          <IoIosArrowForward className="fixed top-1/2 right-0 text-[2.5rem] cursor-pointer p-3 bg-gray-200 dark:bg-darkPrimary rounded-l-lg" />
        </Link>
      </div>
    </>
  );
};
