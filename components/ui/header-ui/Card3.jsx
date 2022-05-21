import React from 'react';
import Image from 'next/image';
import { BsHeartFill } from 'react-icons/bs';
import { RiMessage3Fill } from 'react-icons/ri';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Crad3 = () => {
  return (
    <>
      <div className="animation2 my-5 p-4 bg-white dark:bg-darkSecondary shadow-xl hover:shadow duration-200 rounded-xl w-fit">
        <div className="relative hover:scale-105 duration-200">
          <LazyLoadImage
            effect='blur'
            className="rounded-xl"
            width={160}
            height={160}
            src="/images/foto3.png"
            alt="card image"
          />
          <div className="absolute -bottom-3 left-4 flex items-center space-x-2">
            <span className="p-1.5 rounded-lg bg-white hover:bg-red-500 flex items-center justify-center w-fit group duration-200">
              <BsHeartFill className="text-sm text-red-500 group-hover:text-white" />
            </span>
            <span className="p-1.5 rounded-lg bg-white hover:bg-blue-500 flex items-center justify-center w-fit group duration-200 space-x-1">
              <RiMessage3Fill className="text-sm text-blue-500 group-hover:text-white" />
              <small className="text-blue-500 group-hover:text-white">12</small>
            </span>
          </div>
        </div>
        <div className="pt-3">
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

export default Crad3;
