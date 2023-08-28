export const Disabled = () => {
  return (
    <div className="flex items-center space-x-1 md:space-x-2">
      <button
        type="button"
        disabled
        className="rounded-lg md:rounded-xl py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm font-medium text-white bg-blue-600 enabled:hover:bg-blue-500 disabled:opacity-75 disabled:cursor-not-allowed enabled:cursor-pointer"
        >
        Disabled
      </button>
      <button
        type="button"
        className="rounded-lg md:rounded-xl py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm border font-medium bg-white text-gray-500 shadow-sm cursor-not-allowed dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
        disabled>
        Disabled
      </button>
    </div>
  );
};
