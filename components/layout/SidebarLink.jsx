import React, { useState, useEffect } from 'react';

export const SidebarLink = ({ children }) => {
  const [show, setShow] = useState(true);

  // scroll animation
  const controlNavbar = () => {
    if (window.scrollY > 200) {
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
            ? 'hidden md:block fixed z-50 top-[10rem] right-4 duration-300'
            : 'hidden md:block fixed z-50 top-[7rem] right-4 duration-300'
        }>
        <div className="flex flex-col text-right text-xs md:text-sm text-primary dark:text-gray-400 dark:hover:text-white space-x-1">
          {children}
        </div>
      </div>
    </div>
  );
};
