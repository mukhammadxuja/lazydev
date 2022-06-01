import React from 'react';
import Image from 'next/image';

export const Stacked = () => {
  return (
    <div className="flex items-center -space-x-4">
      <span>
        <Image
          className="rounded-full group-hover:scale-105 duration-200"
          width={60}
          height={60}
          src="/images/avatar/person01.png"
          title="Verified avatar user"
          alt="default avatar rounded-full"
        />
      </span>
      <span>
        <Image
          className="rounded-full group-hover:scale-105 duration-200"
          width={60}
          height={60}
          src="/images/avatar/person04.png"
          title="Unread messages"
          alt="default avatar rounded-full"
        />
      </span>
      <span>
        <Image
          className="rounded-full group-hover:scale-105 duration-200"
          width={60}
          height={60}
          src="/images/avatar/person03.png"
          title="Edit user"
          alt="default avatar rounded-full"
        />
      </span>
      <span>
        <Image
          className="rounded-full group-hover:scale-105 duration-200"
          width={60}
          height={60}
          src="/images/avatar/person02.png"
          title="Online user"
          alt="default avatar rounded-full"
        />
      </span>
    </div>
  );
};
