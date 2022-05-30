import React from 'react';

export const Test = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen -mt-10">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-primary dark:text-white">
            Sorry
          </h1>
          <p className="text-lg font-semibold text-primary dark:text-white">
            This page is not created yet!
          </p>
          <img
            className='mx-auto'
            src="/images/page-not-found/page-not-found.png"
            width={50}
            height={30}
            alt="not found image"
          />
        </div>
      </div>
    </>
  );
};
