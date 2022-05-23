import { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { Navbar, Sidebar } from '..';

const Layout = ({ children }) => {
  const [show, setShow] = useState(true);
  const [sidebar, setSidebar] = useState(false);
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
    <div className="dark:bg-darkPrimary">
      <header className="">
        <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      </header>
      <aside>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </aside>
      <div>{children}</div>
      <div
        className={
          show
            ? ' fixed bottom-12 right-10 md:right-10 z-30 sm:right-12 text-white hidden'
            : ' fixed bottom-12 right-10 md:right-10 z-30 sm:right-12 text-white'
        }>
        <a href="#">
          <IoIosArrowUp className="bg-gray-200 dark:bg-darkSecondary z-40 text-primary dark:text-white hover:text-[#1a5cff] hover:shadow-xl w-10 h-10 p-2 md:p-3 rounded-xl" />
        </a>
      </div>
    </div>
  );
};

export default Layout;
