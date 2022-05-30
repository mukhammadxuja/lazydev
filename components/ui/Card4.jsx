import React from 'react';
import Image from 'next/image';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card4 = () => {
  return (
    <>
      <div className="animation1 group">
        <div className="flex items-center justify-center p-4 rounded-xl group-hover:scale-110 duration-200 bg-gray-100 dark:bg-teal-100 mx-auto">
          <LazyLoadImage
            src="/images/react.png"
            effect='blur'
            width={70}
            height={70}
            alt="Tailwind css"
          />
        </div>
        <div className="py-1">
          <h5 className="text-primary text-center dark:text-white font-medium text-sm">
            Segoe cute
          </h5>
          <small className="text-xs text-center font-light text-primary dark:text-gray-400">
            Do you want to participate?
          </small>
        </div>
      </div>
    </>
  );
};

export default Card4;
