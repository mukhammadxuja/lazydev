export const Default = () => {
  return (
    <div className="flex items-center space-x-2">
    <button type="button" className="w-fit mx-auto overflow-hidden rounded-xl py-2 px-4 md:py-3 md:px-6 shadow-lg shadow-blue-100 hover:shadow-blue-300 md:text-sm duration-200 bg-blue-600 dark:bg-blue-600 font-medium text-xs text-white hover:-translate-y-1 active:translate-y-0">Solid</button>
    <button type="button" className="w-fit mx-auto overflow-hidden duration-200 rounded-xl py-2 px-4 md:py-3 md:px-6 bg-transparent dark:bg-darkSecondary hover:bg-blue-600 border-2 border-blue-300 font-medium hover:border-blue-600 dark:border-gray-600 dark:hover:border-gray-200 flex items-center space-x-2 text-blue-600 hover:text-white dark:text-white hover:-translate-y-1 active:translate-y-0 text-xs md:text-sm">Outline</button>
    <button type="button" className="w-fit mx-auto overflow-hidden rounded-xl py-2 px-4 md:py-3 md:px-6 hover:shadow-blue-300 md:text-sm duration-200 bg-transparent hover:bg-blue-100 dark:bg-blue-600 font-medium text-xs text-blue-600 hover:-translate-y-1 active:translate-y-0">Ghost</button>
    <button type="button" className="w-fit mx-auto overflow-hidden rounded-xl py-2 px-4 md:py-3 md:px-6 hover:shadow-blue-300 md:text-sm duration-200 bg-transparent bg-blue-100 hover:bg-blue-600 dark:bg-blue-600 font-medium text-xs text-blue-600 hover:text-white hover:-translate-y-1 active:translate-y-0">Soft</button>
    <button type="button" className="w-fit mx-auto overflow-hidden rounded-xl duration-200 py-2 px-4 md:py-3 md:px-6  font-medium bg-transparent dark:bg-darkSecondary border-2 border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200 flex items-center space-x-2 text-primary dark:text-white hover:-translate-y-1 active:translate-y-0 text-xs md:text-sm">White</button>
    <button type="button" className="duration-200 hover:underline rounded-xl py-2 px-4 md:py-3 md:px-6 md:text-sm bg-transparent dark:bg-blue-600 font-medium text-xs text-blue-600 active:text-blue-400">Link</button>
  </div>
  );
};
