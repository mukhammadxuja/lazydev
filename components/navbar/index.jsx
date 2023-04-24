import React from 'react';

import { Left, Center, Right } from '../';

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <div className="w-full fixed z-40 top-0 left-0 right-0">
      <div className="container mx-auto py-3 md:py-4 lg:py-5 darkOrLight border-b border-gray-200 dark:border-darkSecondary bg-white/90 dark:bg-darkPrimary w-screen backdrop-blur dark:backdrop-blur flex items-center justify-between">
        <Left sidebar={sidebar} setSidebar={setSidebar} />
        <Center />
        <Right />
      </div>
    </div>
  );
};

export default Navbar;
