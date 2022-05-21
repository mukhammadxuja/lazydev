import React from 'react';
import Image from 'next/image';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Avatar = ({ src, rounded }) => {
  return (
    <div className="animation1">
      <span>
        <LazyLoadImage
          className={`bg-gray-200 cursor-pointer dark:bg-pink-200 ${rounded}`}
          effect="blur"
          objectFit="contain"
          width={50}
          height={50}
          src={src}
          alt="avatar 1"
        />
      </span>
    </div>
  );
};

export default Avatar;
