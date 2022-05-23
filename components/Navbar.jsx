/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BsThreeDots, BsGithub, BsTelegram } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { useTranslation } from 'next-i18next';

import { Left, Center, Right } from './';

const Navbar = ({ sidebar, setSidebar }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [input, setInput] = React.useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  // group-hover:top-8 group-hover:opacity-100

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
