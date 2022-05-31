import React from 'react';
import Image from 'next/image';
import { BsHeartFill } from 'react-icons/bs';
import { RiMessage3Fill } from 'react-icons/ri';
import CardImage from './foto1.png';

export const TypeA = () => {
  return (
    <>
      <div className="flex bg-white dark:bg-[#18191c] shadow-xl hover:shadow rounded-xl hover:scale-105 duration-300">
        <div className="w-[10rem] md:w-[13rem]">
          <div className="relative w-full scale-100">
            <Image className="rounded-xl" src={CardImage} alt="card image" />
            <div className="absolute bottom-3 left-4 flex items-center space-x-2">
              <span className="p-1.5 rounded-lg bg-white hover:bg-red-500 flex items-center justify-center w-fit group duration-200">
                <BsHeartFill className="text-sm text-red-500 group-hover:text-white" />
              </span>
              <span className="p-1.5 rounded-lg bg-white hover:bg-blue-500 flex items-center justify-center w-fit group duration-200 space-x-1">
                <RiMessage3Fill className="text-sm text-blue-500 group-hover:text-white" />
                <small className="text-blue-500 group-hover:text-white">
                  12
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 w-[10rem] md:w-[13rem]">
          <h5 className="text-primary dark:text-white font-medium text-sm">
            Live a life of madness
          </h5>
          <small className="text-xs font-light text-primary dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </small>
        </div>
      </div>
    </>
  );
};
