/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = () => {
  return (
    <>
      <div className="animation1 flex items-center space-x-4">
        <div className="relative w-fit hover:scale-105 duration-200">
          <LazyLoadImage
            className="hidden dark:block w-20 h-20 rounded-3xl hover:scale-110 duration-300"
            effect='blur'
            src="/images/foto12.png"
            alt="avatar"
          />
          <LazyLoadImage
            className="block dark:hidden w-20 h-20 rounded-3xl"
            effect='blur'
            src="/images/foto1.png"
            alt="avatar"
          />
          <p className="absolute bottom-2 text-white -right-1 w-5 h-5 flex items-center justify-center p-2 text-xs rounded-2xl bg-[#ff4757]">
            8
          </p>
        </div>
        <div className="flex flex-col space-y-1">
          <h5 className="text-primary dark:text-white font-medium text-sm">
            Segoe cute
          </h5>
          <small className="text-xs font-lighttext-primary  dark:text-gray-400">
            Do you want to participate in our initiative?
          </small>
          <span className="space-x-2">
            <button className="py-1 px-3 rounded-lg text-white bg-[#ff4757] text-[0.6rem] duration-300 hover:-translate-y-0.5">
              Open
            </button>
            <button className="py-1 px-3 rounded-lg bg-white shadow-xl dark:bg-primary text-[0.6rem] duration-300 hover:-translate-y-1">
              Cancel
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
