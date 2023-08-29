import React, { useState, useEffect } from 'react';

export const SidebarLink = ({ children }) => {
  const [show, setShow] = useState(true);

  // scroll animation
  const controlNavbar = () => {
    if (window.scrollY > 50) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  // scroll animation
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);
  return (
    <div>
      <div
        className={
          show
            ? 'hidden xl:block fixed z-50 top-[10rem] right-4 duration-300'
            : 'hidden xl:block fixed z-50 top-[8rem] right-4 duration-300'
          }>
        <div className="flex flex-col">
          <h4 className='float-right ml-auto text-black font-semibold text-xs md:text-base dark:text-white'>On this page</h4>
          <div className='flex flex-col text-right text-xs mt-1'>
          {children}
          </div>
        </div>
      </div>
    </div>
  );
};
