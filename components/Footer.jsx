import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

import { Input } from './';

const Footer = ({ bg }) => {
  return (
    <div className={`${bg} px-4 lg:px-0`}>
      <div className="flex flex-col items-center justify-center py-10 md:py-16">
        <h3 className="text-center font-medium text-primary dark:text-white">
          <p className="text-[#1a5cff]">Subscribe</p> to our Weekly Newsletter
        </h3>
        <Input
          Icon={AiOutlineSend}
          p="py-3 px-4"
          focusAnimation="px-6"
          width="w-[15rem] md:w-[17rem]"
          placeholder="Search"
        />
      </div>
      <div className="max-w-4xl py-10 md:py-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="py-2 space-y-3 md:space-y-4">
          <h3 className="text-xl font-medium text-primary dark:text-white py-4">
            Lazy dev
          </h3>
          <p className="link text-sm">Lazy.dev haqida</p>
          <p className="link text-sm">Nima uchun Lazy.dev?</p>
          <p className="link text-sm">FAQ</p>
        </div>
        <div className="py-2 space-y-4">
          <h3 className="text-xl font-medium text-primary dark:text-white py-4">
            Resurslar
          </h3>
          <p className="link text-sm">Dakumintatsiya</p>
          <p className="link text-sm">GitHUb</p>
          <p className="link text-sm">Privacy Policy</p>
        </div>
        <div className="py-2 space-y-4">
          <h3 className="text-xl font-medium text-primary dark:text-white py-4">
            Yordam
          </h3>
          <p className="link text-sm">Issues</p>
          <p className="link text-sm">FAQ</p>
        </div>
        <div className="py-2 space-y-4">
          <h3 className="text-xl font-medium text-primary dark:text-white py-4">
            Jamoa
          </h3>
          <p className="link text-sm">Website</p>
          <p className="link text-sm">Telegram</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row space-y-1  md:space-y-0 items-start md:items-center md:justify-between py-5 md:py-10">
        <p className="text-secondary text-sm">Copyright © 2022 Lazydev</p>
        <p className="text-secondary text-sm">
          Created By{' '}
          <a
            target="_blank"
            className="font-medium hover:text-white"
            href="https://anvarovm.vercel.app"
            rel="noreferrer">
            Akzmsh
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
