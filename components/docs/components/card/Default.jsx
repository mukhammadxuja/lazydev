import React from 'react';
import Image from 'next/image';
import { BsHeartFill } from 'react-icons/bs';
import { RiMessage3Fill } from 'react-icons/ri';
import CardImage from './foto1.png';

export const Default = () => {
  return (
    <>
      <div className="my-5 bg-white dark:bg-[#18191c] shadow-xl hover:shadow duration-200 rounded-xl w-[13rem] md:w-[18rem]">
        <div className="relative w-full rounded-xl">
          <Image className="rounded-xl hover:scale-105 duration-300" src={CardImage} alt="card image" />
          <div className="absolute bottom-3 left-4 flex items-center space-x-2">
            <span className="p-1.5 rounded-lg bg-white hover:bg-red-500 flex items-center justify-center w-fit duration-200 group">
              <BsHeartFill className="text-sm text-red-500 group-hover:text-white" />
            </span>
            <span className="p-1.5 rounded-lg bg-white hover:bg-blue-500 flex items-center justify-center w-fit duration-200 space-x-1 group">
              <RiMessage3Fill className="text-sm text-blue-500 group-hover:text-white" />
              <small className="text-blue-500 group-hover:text-white">12</small>
            </span>
          </div>
        </div>
        <div className="p-4">
          <h5 className="text-primary dark:text-white font-medium text-sm">
            Segoe cute
          </h5>
          <small className="text-xs font-light text-primary dark:text-gray-400">
            Do you want to participate?
          </small>
        </div>
      </div>
    </>
  );
};
