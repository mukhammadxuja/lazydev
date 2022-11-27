import React, { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';

export const TypeD = () => {
  const [activeDialog, setActiveDialog] = useState(false);

  const dialog = () => {
    setActiveDialog(true);
  };

  const CloseDialog = () => {
    setActiveDialog(false);
  };

  const defaultButton =
    'rounded-xl py-2 px-4 shadow-md text-sm duration-300 active:bg-opacity-80 ease-in-out bg-[#1a5cff] dark:bg-[#1a5cff] md:text-sm text-white hover:shadow-md hover:shadow-blue-500/50 ';

  return (
    <>
      <div
        className={
          activeDialog
            ? 'fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 '
            : 'hidden'
        }>
        <div className="relative w-[90%] md:w-[35rem] lg:w-[45rem] h-[60%] md:h-[30rem] bg-white dark:bg-darkPrimary shadow-lg rounded-xl space-y-2 overflow-y-scroll scrollbar-hide">
          <div className="sticky z-20 top-0 left-0 right-0 flex items-center justify-between bg-white dark:bg-darkPrimary shadow-sm py-4 px-6">
            <h1 className="text-sm md:text-2xl font-semibold">Introduction</h1>
            <GrFormClose onClick={CloseDialog} className="cursor-pointer" />
          </div>
          <div className="space-y-2 md:space-y-3 pt-2 pb-6 px-6">
            <div className="space-y-2">
              <h2 className="text-base md:text-lg font-semibold opacity-80">
                What is a Lazydev?
              </h2>
              <p className="text-xs md:text-sm font-medium text-gray-500">
                Lazydev is a framework of UI components created with React.js to
                make projects easily and with a unique and pleasant style,
                lazydev is created from scratch and designed for all types of
                developers from the frontend lover to the backend who wants to
                easily create their visual approach to the end-user We are
                focused on streamlining the work of the programmer by giving
                components created in their entirety and with independent
                customization and very easy to implement, so creativity is in
                our hands but we do not neglect that each project is different
                both visually and in its ecosystem Lazydev does not have a
                design line such as other component frameworks based on Material
                Design, we believe that there are already emaciated frameworks
                that look visually and in UI / UX and we don&apos;t want to be one
                more of the bunch, apart from that we love to create and design
                new experiences and surprise you with new elements or details
                that we can only do by being visually free.
              </p>
            </div>
            <div className="space-y-2 md:space-y-3">
              <h2 className="text-base md:text-lg font-semibold opacity-80">
                Why Lazydev?
              </h2>
              <p className="text-xs md:text-sm font-medium text-gray-500">
                Lazydev is a relatively new framework with a refreshing design
                and in the latest trends, lazydev based on react.js which means
                that we go hand in hand with one of the most popular javascript
                frameworks in the world and with a huge community with which you
                will have all the help and documentation to create and make your
                project
              </p>
              <p className="text-xs md:text-sm font-medium text-gray-500">
                -Lazydev - unlike many frameworks, is designed from scratch and
                we are not anchored to any design line, this is something great
                since your project is going to be unique and very different from
                the others
              </p>
              <p className="text-xs md:text-sm font-medium text-gray-500">
                - We are focused on the quick and easy creation of projects
                giving a beautiful visual line but without forgetting the
                personalization and independence of the developer
              </p>
              <p className="text-xs md:text-sm font-medium text-gray-500">
                - Lazydev uses native css variables for better customization and
                production changes such as changing to dark theme or changing
                the main color of the entire application with few javascript
                lines
              </p>
              <p className="text-xs md:text-sm font-medium text-gray-500">
                - Lazydev is a frame designed to have a great visual impact and
                that is always in trend with respect to design.
              </p>
              <p className="text-xs md:text-sm font-medium text-gray-500">
                - An open-source community to create, improve and correct any
                component or function.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={dialog} className={defaultButton}>
        Open Dialog
      </button>
    </>
  );
};
