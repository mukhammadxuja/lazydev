import React from 'react';
import { useRouter } from "next/router";

import { Left, Center, Right } from '../';

const Navbar = ({ sidebar, setSidebar }) => {
  const router = useRouter();
  return (
    <div className="relative">
      <div className={`${router.asPath == "/" ? "container mx-auto" : "px-5"} fixed z-40 top-0 left-0 right-0 py-3 md:py-4 lg:py-5 darkOrLight border-b border-gray-200 dark:border-darkSecondary bg-white/90 dark:bg-darkPrimary w-full backdrop-blur dark:backdrop-blur flex items-center justify-between`}>
        <Left sidebar={sidebar} setSidebar={setSidebar} />
        <Center />
        <Right />
      </div>
    </div>
  );
};

export default Navbar;
