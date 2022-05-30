import React from 'react';

import { Left, Center, Right } from '../';

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <div className="relative">
      <div className="fixed z-40 top-0 left-0 right-0 py-3 darkOrLight shadow-md px-4 flex items-center justify-between">
        <Left sidebar={sidebar} setSidebar={setSidebar} />
        <Center />
        <Right />
      </div>
    </div>
  );
};

export default Navbar;
