/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const TypeD = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center space-x-4 p-2 md:p-3 rounded-xl shadow-lg bg-white dark:bg-darkSecondary">
        <div className="relative w-fit hover:scale-105 duration-200 py-2 md:py-0">
          <LazyLoadImage
            className="hidden dark:block w-20 h-20 rounded-3xl hover:scale-110 duration-300"
            effect="blur"
            src="/images/foto12.png"
            alt="avatar"
          />
          <LazyLoadImage
            className="block dark:hidden w-20 h-20 rounded-3xl"
            effect="blur"
            src="/images/foto1.png"
            alt="avatar"
          />
          <p className="absolute bottom-2 text-white -right-1 w-5 h-5 flex items-center justify-center p-2 text-xs rounded-2xl bg-[#ff4757]">
            8
          </p>
        </div>
        <div className="flex flex-col space-y-1 py-2 md:py-0">
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
