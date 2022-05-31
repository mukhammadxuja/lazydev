import React from 'react';
import Image from 'next/image';
import { BsHeartFill } from 'react-icons/bs';
import { RiMessage3Fill } from 'react-icons/ri';
import CardImage from './foto1.png';

export const TypeB = () => {
  return (
    <>
      <div className="relative my-5 bg-white dark:bg-[#18191c] shadow-xl hover:shadow duration-200 rounded-xl w-[13rem] md:w-[18rem] group">
        <div className="relative w-full rounded-xl">
          <Image
            className="rounded-xl group-hover:scale-105 duration-300"
            src={CardImage}
            alt="card image"
          />
          <div className="absolute top-3 left-4 flex items-center space-x-2 cursor-pointer">
            <span className="p-1.5 rounded-lg bg-white flex items-center justify-center w-fit duration-200 hover:-translate-y-1">
              <BsHeartFill className="text-sm text-red-500" />
            </span>
            <span className="p-1.5 rounded-lg bg-white flex items-center justify-center w-fit duration-200 space-x-1 hover:-translate-y-1">
              <RiMessage3Fill className="text-sm text-blue-500" />
              <small className="text-blue-500">12</small>
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm p-4 group-hover:py-6 duration-300">
          <h5 className="text-primary font-medium text-sm">
            Segoe cute
          </h5>
          <small className="text-xs font-light text-primary">
            Do you want to participate?
          </small>
        </div>
      </div>
    </>
  );
};
