import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiOutlineSend } from 'react-icons/ai';

import { Input } from '..';

const Footer = ({ bg }) => {
  const router = useRouter();
  return (
    <div className={`${bg} px-4 lg:px-0`}>
      <div className="flex flex-col items-center justify-center py-10 md:py-16">
        <h3 className="text-center font-medium text-primary dark:text-white">
          <span className="text-[#1a5cff]">Subscribe</span> to our Weekly
          Newsletter
        </h3>
        <Input
          Icon={AiOutlineSend}
          animation=""
          p="py-3 px-4"
          focusAnimation="px-6"
          width="w-[15rem] md:w-[17rem]"
          placeholder="Search"
        />
      </div>
      <div className="max-w-4xl py-6 md:py-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="py-2 space-y-2 md:space-y-4">
          <h3 className="text-xl font-medium text-primary dark:text-white py-4">
            Lazy dev
          </h3>
          <Link href="/docs/guide/introduction/#about-lazydev">
            <p className="link text-sm">Lazy.dev haqida</p>
          </Link>
          <Link href="/docs/guide/introduction/#why-lazydev">
            <p className="link text-sm">Nima uchun Lazy.dev?</p>
          </Link>
          <Link href="/docs/guide/introduction/#faq">
            <p className="link text-sm">FAQ</p>
          </Link>
        </div>
        <div className="py-2 space-y-2 md:space-y-4">
          <h3 className="text-xl font-medium text-primary dark:text-white py-4">
            Resurslar
          </h3>
          <Link href="docs/components">
            <p className="link text-sm">Dakumintatsiya</p>
          </Link>
          <Link href="https://github/AnvarovM/lazydev">
            <p className="link text-sm">GitHUb</p>
          </Link>
          <Link href="">
            <p className="link text-sm">Privacy Policy</p>
          </Link>
        </div>
        <div className="py-2 space-y-2 md:space-y-4">
          <h3 className="text-xl font-medium text-primary dark:text-white py-4">
            Yordam
          </h3>
          <Link href="https://github/AnvarovM/lazydev">
            <p className="link text-sm">Issues</p>
          </Link>
          <Link href="/docs/guide/introduction/#faq">
            <p className="link text-sm">FAQ</p>
          </Link>
        </div>
        <div className="py-2 space-y-2 md:space-y-4">
          <h3 className="text-xl font-medium text-primary dark:text-white py-4">
            Jamoa
          </h3>
          <Link className="list-none" href="/docs/components/avatar">
            <p className="link text-sm">Website</p>
          </Link>
          <Link target="_blank" href="">
            <p className="link text-sm">Telegram</p>
          </Link>
        </div>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row space-y-1 md:space-y-0 items-start md:items-center md:justify-between pt-3 pb-5 md:py-10">
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
