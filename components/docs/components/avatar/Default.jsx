import React from 'react';
import Image from 'next/image';

export const Default = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="group">
        <Image
          className="rounded-lg group-hover:scale-105 duration-200"
          width={60}
          height={60}
          src="/images/avatar/3d-avatar1.webp"
          alt="default avatar rounded-lg"
        />
      </div>
      <div className="group">
        <Image
          className="rounded-2xl group-hover:scale-105 duration-200"
          width={60}
          height={60}
          src="/images/avatar/3d-avatar2.webp"
          alt="default avatar rounded-2xl"
        />
      </div>
      <div className="group">
        <Image
          className="rounded-full group-hover:scale-105 duration-200"
          width={60}
          height={60}
          src="/images/avatar/3d-avatar3.webp"
          alt="default avatar rounded-full"
        />
      </div>
    </div>
  );
};
