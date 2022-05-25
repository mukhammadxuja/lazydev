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
            ? 'fixed z-50 top-[9rem] right-4 duration-300'
            : 'fixed z-50 top-[7rem] right-4 duration-300'
        }>
        <div className="flex flex-col items-center space-x-1">
            {children}
        </div>
      </div>
    </div>
  );
};
