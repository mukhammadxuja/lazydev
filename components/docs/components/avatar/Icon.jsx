import React from 'react';
import Image from 'next/image';
import { MdVerified, MdEdit } from 'react-icons/md';

export const Icon = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative group">
        <Image
          className="rounded-full group-hover:scale-105 duration-200"
          width={60}
          height={60}
          src="/images/avatar/3d-avatar3.webp"
          title='Verified avatar user'
          alt="default avatar rounded-full"
        />
        <div className="absolute bottom-1 -right-1 bg-white rounded-full">
          <MdVerified className="text-2xl text-[#019eeb]" />
        </div>
      </div>
      <div className="relative group">
        <Image
          className="rounded-full group-hover:scale-105 duration-200"
          width={60}
          height={60}
          src="/images/avatar/3d-avatar2.webp"
          title='Unread messages'
          alt="default avatar rounded-full"
        />
        <div className="absolute bottom-1 -right-1 flex items-center justify-center bg-yellow-400 w-7 h-7 rounded-full">
          <small className="text-xs text-primary font-medium">321</small>
        </div>
      </div>
      <div className="relative group">
        <Image
          className="rounded-full group-hover:scale-105 duration-200"
          width={60}
          height={60}
          src="/images/avatar/3d-avatar1.webp"
          title='Edit user'
          alt="default avatar rounded-full"
        />
        <div className="absolute bottom-1 -right-1 bg-blue-500 w-7 h-7 flex items-center justify-center rounded-full">
          <MdEdit className="text-lg text-white" />
        </div>
      </div>
      <div className="relative group">
        <Image
          className="rounded-full group-hover:scale-105 duration-200"
          width={60}
          height={60}
          src="/images/avatar/3d-avatar2.webp"
          title='Online user'
          alt="default avatar rounded-full"
        />
        <div className="absolute bottom-1 -right-1 bg-[#019eeb] w-7 h-7 rounded-full" />
      </div>
    </div>
  );
};
