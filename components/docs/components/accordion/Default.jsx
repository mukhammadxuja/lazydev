import React, { useRef, useState } from 'react';

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-yellow-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
  </svg>
);

const BookmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
    />
  </svg>
);

const FilterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-purple-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
    />
  </svg>
);

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const Accordion = (props) => {
  const { Icon, title, paragraph, content, children } = props;
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('transform duration-700 ease');

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      active
        ? 'transform duration-700 ease'
        : 'transform duration-700 ease rotate-180'
    );
  }
  return (
    <div>
      <div className="border-b border-blue-400 pb-1">
        <div
          className={`${
            active ? 'bg-blue-100 dark:bg-black dark:bg-opacity-40' : ''
          } py-2 px-4 flex items-center cursor-pointer hover:bg-blue-300 hover:bg-opacity-70 dark:hover:bg-black dark:hover:bg-opacity-40 group`}
          onClick={toggleAccordion}>
          {Icon}
          <div className="ml-4 flex-grow">
            <h2 className="">{title}</h2>
            <p className="text-sm font-light text-gray-600 dark:text-gray-200">
              {paragraph}
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              active
                ? 'rotate-180 duration-200 bg-white dark:bg-darkPrimary'
                : 'rotate-0 duration-200'
            } h-8 w-8 p-2 rounded-full group-hover:bg-white dark:group-hover:bg-darkPrimary`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div
          ref={contentSpace}
          style={{ maxHeight: `${height}` }}
          className="overflow-auto duration-300 ease-in-out px-4">
          <p className="py-2">{content}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export const Default = () => {
  return (
    <div className="relative">
      <div className="w-[18rem] md:w-[25rem] bg-white dark:bg-black backdrop-filter backdrop-blur-sm bg-opacity-40 dark:bg-opacity-40 py-2 flex flex-col border border-blue-400 rounded-lg">
        <Accordion
          title="Connected devices"
          paragraph="Two issues to fix right now"
          content="Lorem ipsum, dolor sit amet consectetur"
          Icon={<BellIcon />}
        />
        <Accordion
          title="Started Items"
          paragraph="Bookmarked for the future"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolorum, consequuntur quam repudiandae facere deleniti"
          Icon={<StarIcon />}
        />
        <Accordion
          title="Statement Expended"
          paragraph="Purchase our design kits"
          Icon={<HeartIcon />}>
          <div className="py-2 px-4 bg-blue-100 dark:bg-black dark:bg-opacity-40 w-full rounded-lg">
            <div className="flex items-center">
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Purchase UI kits to boost your design process
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 bg-white dark:bg-darkPrimary rounded-full p-1.5 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </div>
            <div className="flex items-center cursor-pointer py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 text-blue-500 bg-blue-200 dark:bg-white p-2 rounded-lg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              <div className="ml-4 flex-grow">
                <h2 className="text-sm font-semibold">Design system tokens</h2>
                <p className="text-xs font-light text-gray-600">
                  15 march, 2022
                </p>
              </div>
            </div>
            <div className="flex items-center cursor-pointer py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 text-blue-500 bg-blue-200 dark:bg-white p-2 rounded-lg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              <div className="ml-4 flex-grow">
                <h2 className="text-sm font-semibold">Design system tokens</h2>
                <p className="text-xs font-light text-gray-600">
                  15 march, 2022
                </p>
              </div>
            </div>
            <p className="text-xs py-2 text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio fuga maiores voluptatum.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center my-2">
              <a className="w-full md:w-fit text-center mx-auto rounded-xl py-2 px-8 bg-white cursor-pointer active:scale-95 shadow-md text-sm duration-300 ease-in-out hover:bg-blue-500 hover:bg-opacity-30 md:text-sm text-[#1a5cff]">
                Purchase Me
              </a>
              <a className="w-full md:w-fit text-center mx-auto rounded-lg py-2 px-8 font-medium overflow-hidden relative shadow-md text-sm duration-300 active:bg-opacity-80 cursor-pointer ease-in-out active:scale-95 bg-[#1a5cff] dark:bg-[#1a5cff] md:text-sm text-white hover:shadow-md">
                I Want this kit
              </a>
            </div>
          </div>
        </Accordion>
        <Accordion
          title="Bookmark devices"
          paragraph="Add to bookmark right now"
          content="Lorem ipsum, dolor sit amet consectetur"
          Icon={<BookmarkIcon />}
        />
        <Accordion
          title="Filter devices"
          paragraph="Your filtered devices"
          content="Lorem ipsum, dolor sit amet consectetur"
          Icon={<FilterIcon />}
        />
      </div>
    </div>
  );
};
