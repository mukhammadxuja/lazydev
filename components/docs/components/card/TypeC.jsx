import React from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const TypeC = () => {
  return (
    <>
      <div className="w-[10rem] md:w-[13rem]">
        <div className="relative hover:scale-105 duration-200">
          <LazyLoadImage
            effect="blur"
            className="hidden dark:block rounded-r-3xl"
            src="/images/foto13.png"
            alt=""
          />
          <LazyLoadImage
            effect="blur"
            className="block dark:hidden rounded-r-3xl"
            src="/images/foto2.jpg"
            alt=""
          />
          <BsHeartFill className="absolute -top-2 -left-2 h-8 w-8 p-2 rounded-lg flex items-center justify-center bg-white shadow-lg dark:bg-primary text-[#ff4757] text-xl" />
        </div>
        <div className="flex flex-col items-start space-y-1 md:space-y-0 md:flex-row md:items-center justify-between">
          <div>
            <h5 className="text-primary dark:text-white font-semibold text-sm">
              Lazydev 1.0
            </h5>
            <p className="text-xs text-primary font-medium dark:text-gray-400">
              Copy and paste
            </p>
          </div>
          <div className="flex items-center -space-x-3 cursor-pointer">
            <span>
              <LazyLoadImage
                effect="blur"
                className="w-8 rounded-full group-hover:scale-105 duration-200"
                src="/images/avatar/person01.png"
                title="Verified avatar user"
                alt="default avatar rounded-full"
              />
            </span>
            <span>
              <LazyLoadImage
                effect="blur"
                className="w-8 rounded-full group-hover:scale-105 duration-200"
                src="/images/avatar/person04.png"
                title="Unread messages"
                alt="default avatar rounded-full"
              />
            </span>
            <span>
              <LazyLoadImage
                effect="blur"
                className="w-8 rounded-full group-hover:scale-105 duration-200"
                src="/images/avatar/person03.png"
                title="Edit user"
                alt="default avatar rounded-full"
              />
            </span>
            <span>
              <LazyLoadImage
                effect="blur"
                className="w-8 rounded-full group-hover:scale-105 duration-200"
                src="/images/avatar/person02.png"
                title="Online user"
                alt="default avatar rounded-full"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
