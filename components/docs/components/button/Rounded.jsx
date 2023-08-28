export const Rounded = () => {
  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        className="btn rounded-full shadow-blue-100 hover:shadow-blue-300 bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 text-white">
        Solid
      </button>
      <button
        type="button"
        className="btn rounded-full bg-transparent dark:bg-transparent hover:bg-blue-600 border-2 border-blue-300 hover:border-blue-600 dark:border-blue-600 dark:hover:border-blue-600 text-blue-600 hover:text-white dark:text-blue-600 dark:hover:bg-blue-600 dark:hover:text-white">
        Outline
      </button>
      <button
        type="button"
        className="btn rounded-full hover:shadow-blue-300 duration-200 bg-transparent hover:bg-blue-100 dark:bg-transparent dark:hover:bg-blue-100 text-blue-600">
        Ghost
      </button>
      <button
        type="button"
        className="btn rounded-full hover:shadow-blue-300 duration-200 bg-transparent bg-blue-100 hover:bg-blue-600 dark:bg-blue-100 dark:hover:bg-blue-600 dark:hover:text-white text-blue-600 hover:text-white">
        Soft
      </button>
      <button
        type="button"
        className="btn rounded-full bg-transparent dark:bg-transparent border-2 border-blue-300 hover:border-blue-600 dark:border-gray-600 dark:hover:border-gray-500 text-blue-600 dark:text-white">
        White
      </button>
      <button
        type="button"
        className="hover:underline rounded-xl py-2 px-4 md:py-3 md:px-6 bg-transparent text-blue-600 active:text-blue-400">
        Link
      </button>
    </div>
  );
};
