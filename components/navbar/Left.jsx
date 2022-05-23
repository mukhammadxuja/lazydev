import React from 'react';
import { useRouter } from 'next/router';
import { FiMenu } from 'react-icons/fi';

const Left = () => {
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div>
      <div className="flex items-center">
        <FiMenu
          onClick={toggleSidebar}
          className="block lg:hidden h-5 w-5 mr-4"
        />
        <div
          onClick={() => router.push('/')}
          className="relative flex items-center group">
          <img
            className="w-10 group-hover:opacity-80"
            src="/images/logo.png"
            alt="logo"
          />
          <div className="relative">
            <h3 className="font-sora tracking-wide -ml-1 font-semibold text-lg cursor-pointer text-primary dark:text-white group-hover:opacity-80">
              Lazydev
            </h3>
            <p className="absolute -top-4 -right-2 text-2xl group-hover:text-[#82ceee]">
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
