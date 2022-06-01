import React from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = () => {
  return (
    <>
      <div className="animation2 p-5">
        <div className="relative hover:scale-105 duration-200">
          <LazyLoadImage
            effect='blur'
            className="hidden dark:block rounded-r-3xl w-44 h-44"
            src="/images/foto13.png"
            alt=""
          />
          <LazyLoadImage
            effect='blur'
            className="block dark:hidden rounded-r-3xl w-44 h-44"
            src="/images/foto2.jpg"
            alt=""
          />
          <BsHeartFill className="absolute -top-2 -left-2 h-8 w-8 p-2 rounded-lg flex items-center justify-center bg-white shadow-lg dark:bg-primary text-[#ff4757] text-xl" />
        </div>
        <div className="flex items-center justify-between w-fit">
          <div>
            <h5 className="text-primary dark:text-white font-semibold text-sm">
              Lazydev 1.0
            </h5>
            <p className="text-xs text-primary font-medium dark:text-gray-400">
              Copy and paste
            </p>
          </div>
          <div className="flex items-center justify-center ml-7 hover:scale-105 duration-200">
            <LazyLoadImage
              className="z-[3] rounded-full"
              effect='blur'
              objectFit="contain"
              width={30}
              height={30}
              src="/images/foto12.png"
              alt="avatars"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
