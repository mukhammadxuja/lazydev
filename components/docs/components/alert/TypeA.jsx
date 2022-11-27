import React from 'react';

export const TypeA = () => {
  const viewMoreButton =
    'text-white bg-gray-700 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 focus:outline-none text-center inline-flex items-center ';
  const dismissButton =
    'border focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center ';

  return (
    <>
      {/* Blue alert */}
      <div
        className="p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200 mx-8"
        role="alert">
        <div className="flex items-center">
          <svg
            className="mr-2 w-5 h-5 text-blue-700 dark:text-blue-800"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"></path>
          </svg>
          <h3 className="text-lg font-medium text-blue-700 dark:text-blue-800">
            This is a info alert
          </h3>
        </div>
        <div className="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
          More info about this info alert goes here. This example text is going
          to run a bit longer so that you can see how spacing within an alert
          works with this kind of content.
        </div>
        <div className="flex">
          <button
            type="button"
            className={
              viewMoreButton +
              'bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-900'
            }>
            <svg
              className="-ml-0.5 mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path
                clipRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"></path>
            </svg>
            View more
          </button>
          <button
            type="button"
            className={
              dismissButton +
              'text-blue-700 bg-transparent border-blue-700 hover:bg-blue-800 hover:text-white dark:border-blue-800 dark:text-blue-800 dark:hover:text-white'
            }>
            Dismiss
          </button>
        </div>
      </div>
      {/* Red alert */}
      <div
        className="p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200 mx-8"
        role="alert">
        <div className="flex items-center">
          <svg
            className="mr-2 w-5 h-5 text-red-700 dark:text-red-800"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"></path>
          </svg>
          <h3 className="text-lg font-medium text-red-700 dark:text-red-800">
            This is a danger alert
          </h3>
        </div>
        <div className="mt-2 mb-4 text-sm text-red-700 dark:text-red-800">
          More info about this info danger goes here. This example text is going
          to run a bit longer so that you can see how spacing within an alert
          works with this kind of content.
        </div>
        <div className="flex">
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-red-800 dark:hover:bg-red-900">
            <svg
              className="-ml-0.5 mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path
                clipRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"></path>
            </svg>
            View more
          </button>
          <button
            type="button"
            className="text-red-700 bg-transparent border border-red-700 hover:bg-red-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-red-800 dark:text-red-800 dark:hover:text-white">
            Dismiss
          </button>
        </div>
      </div>
      {/* Green alert */}
      <div
        className="p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200 mx-8"
        role="alert">
        <div className="flex items-center">
          <svg
            className="mr-2 w-5 h-5 text-green-700 dark:text-green-800"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"></path>
          </svg>
          <h3 className="text-lg font-medium text-green-700 dark:text-green-800">
            This is a success alert
          </h3>
        </div>
        <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
          More info about this info success goes here. This example text is
          going to run a bit longer so that you can see how spacing within an
          alert works with this kind of content.
        </div>
        <div className="flex">
          <button
            type="button"
            className={
              viewMoreButton +
              'bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-900'
            }>
            <svg
              className="-ml-0.5 mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path
                clipRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"></path>
            </svg>
            View more
          </button>
          <button
            type="button"
            className={
              dismissButton +
              'text-green-700 bg-transparent border-green-700 hover:bg-green-800 hover:text-white focus:ring-green-300dark:border-green-800 dark:text-green-800 dark:hover:text-white'
            }>
            Dismiss
          </button>
        </div>
      </div>
      {/* Yellow alert */}
      <div
        className="p-4 mb-4 bg-yellow-100 rounded-lg dark:bg-yellow-200 mx-8"
        role="alert">
        <div className="flex items-center">
          <svg
            className="mr-2 w-5 h-5 text-yellow-700 dark:text-yellow-800"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"></path>
          </svg>
          <h3 className="text-lg font-medium text-yellow-700 dark:text-yellow-800">
            This is a warning alert
          </h3>
        </div>
        <div className="mt-2 mb-4 text-sm text-yellow-700 dark:text-yellow-800">
          More info about this info warning goes here. This example text is
          going to run a bit longer so that you can see how spacing within an
          alert works with this kind of content.
        </div>
        <div className="flex">
          <button
            type="button"
            className={
              viewMoreButton +
              'bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-800 dark:hover:bg-yellow-900'
            }>
            <svg
              className="-ml-0.5 mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path
                clipRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"></path>
            </svg>
            View more
          </button>
          <button
            type="button"
            className={
              dismissButton +
              'text-yellow-700 bg-transparent border-yellow-700 hover:bg-yellow-800 hover:text-white focus:ring-yellow-300  dark:border-yellow-800 dark:text-yellow-800 dark:hover:text-white'
            }>
            Dismiss
          </button>
        </div>
      </div>
      {/* Gray alert */}
      <div
        className="p-4 bg-gray-100 rounded-lg dark:bg-gray-700 mx-8"
        role="alert">
        <div className="flex items-center">
          <svg
            className="mr-2 w-5 h-5 text-gray-700 dark:text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"></path>
          </svg>
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
            This is a dark alert
          </h3>
        </div>
        <div className="mt-2 mb-4 text-sm text-gray-700 dark:text-gray-300">
          More info about this info dark goes here. This example text is going
          to run a bit longer so that you can see how spacing within an alert
          works with this kind of content.
        </div>
        <div className="flex">
          <button
            type="button"
            className={
              viewMoreButton +
              'hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600'
            }>
            <svg
              className="-ml-0.5 mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path
                clipRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"></path>
            </svg>
            View more
          </button>
          <button
            type="button"
            className={
              dismissButton +
              'text-gray-700 bg-transparent border-gray-700 hover:bg-gray-800 hover:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:text-gray-300 dark:hover:text-white'
            }>
            Dismiss
          </button>
        </div>
      </div>
    </>
  );
};
