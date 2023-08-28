export const Types = () => {
  return (
    <div className="flex flex-wrap items-center">
      <button
        type="button"
        className="btn shadow-blue-100 hover:shadow-blue-300 bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 text-white mx-1 md:mx-2 my-1 md:my-2">
        Solid
      </button>
      <button
        type="button"
        className="btn bg-transparent dark:bg-transparent hover:bg-blue-600 border-2 border-blue-300 hover:border-blue-600 dark:border-blue-600 dark:hover:border-blue-600 text-blue-600 hover:text-white dark:text-blue-600 dark:hover:bg-blue-600 dark:hover:text-white mx-1 md:mx-2 my-1 md:my-2">
        Outline
      </button>
      <button
        type="button"
        className="btn hover:shadow-blue-300 duration-200 bg-transparent hover:bg-blue-100 dark:bg-transparent dark:hover:bg-blue-100 text-blue-600 mx-1 md:mx-2 my-1 md:my-2">
        Ghost
      </button>
      <button
        type="button"
        className="btn hover:shadow-blue-300 duration-200 bg-transparent bg-blue-100 hover:bg-blue-600 dark:bg-blue-100 dark:hover:bg-blue-600 dark:hover:text-white text-blue-600 hover:text-white mx-1 md:mx-2 my-1 md:my-2">
        Soft
      </button>
      <button
        type="button"
        className="btn bg-transparent dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 border-2 border-blue-300 hover:border-blue-600 dark:hover:border-gray-500 text-blue-600 dark:text-white mx-1 md:mx-2 my-1 md:my-2">
        White
      </button>
      <button
        type="button"
        className="hover:underline text-xs md:text-sm rounded-xl py-2 px-4 md:py-3 md:px-6 bg-transparent text-blue-600 active:text-blue-400 mx-1 md:mx-2 my-1 md:my-2">
        Link
      </button>
    </div>
  );
};
