import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

import { links } from '../../../data/links';

export const Sidebar = () => {
  return (
    <aside className="bg-white dark:bg-darkPrimary fixed z-30 h-screen w-[240px] px-5 pt-[5rem] overflow-y-auto scrollbar-hide">
      <div className="">
        <div className="py-1">
          <div className="flex items-center space-x-1 cursor-pointer">
            <h4 className="font-semibold font-[1rem] text-primary dark:text-white">
              Guide
            </h4>
            <IoIosArrowForward className="text-sm" />
          </div>
          <ul className="p-2">
            <Link href="/docs/guide/introduction">
              <li className="sidebar__link">Introduction</li>
            </Link>
          </ul>
        </div>
        <div className="py-1">
          <div className="flex items-center space-x-1 cursor-pointer">
            <h4 className="font-semibold font-[1rem] text-primary dark:text-white">
              Theme
            </h4>
            <IoIosArrowForward className="text-sm" />
          </div>
          <ul className="p-2">
            <Link href="/docs/theme/">
              <li className="sidebar__link">Colors</li>
            </Link>
          </ul>
        </div>
        <div className="py-1">
          <div className="flex items-center space-x-1 cursor-pointer">
            <h4 className="font-semibold font-[1rem] text-primary dark:text-white">
              Components
            </h4>
            <IoIosArrowForward className="text-sm" />
          </div>
          <ul className="p-2">
            {links.map((item) => (
              <Link href={`${item.path}`}>
                <li key={item.id} className="sidebar__link">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};
