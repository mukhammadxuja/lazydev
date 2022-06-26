import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FiMenu } from 'react-icons/fi';
import Logo from './logo.png';

const Left = ({ sidebar, setSidebar }) => {
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div>
      <div className="flex items-center group">
        <FiMenu
          onClick={toggleSidebar}
          className="block lg:hidden h-5 w-5 mr-2 md:mr-4"
        />
        <div
          onClick={() => router.push('/')}
          className="relative flex items-center select-none">
          <div className="relative hidden md:block">
            <h3 className="font-sora tracking-wide -ml-1 font-semibold text-lg group-hover:cursor-pointer text-primary dark:text-white group-hover:opacity-80">
              Lazydev
            </h3>
            <p className="absolute -top-4 -right-2 text-2xl group-hover:text-[#82ceee]">
              .
            </p>
          </div>
          <span className='text-[0.65rem] md:mx-3 px-2 py-0.5 rounded-2xl bg-blue-500 text-white'>BETA</span>
        </div>
      </div>
    </div>
  );
};

export default Left;
