export const Default = () => {
  return (
    <div className="flex items-center space-x-2">
      <button type="button" className="w-fit mx-auto overflow-hidden rounded-xl py-2 px-4 md:py-3 md:px-6 shadow-lg shadow-blue-100 hover:shadow-blue-300 md:text-sm duration-200 bg-[#1a5cff] dark:bg-[#1a5cff] font-medium text-xs text-white hover:-translate-y-1 active:translate-y-0">Solid</button>
      <button type="button" className="btn shadow-none py-2 px-4 md:px-6 md:py-3 bg-transparent dark:bg-darkSecondary hover:bg-[#1a5cff] border-2 border-blue-300 font-medium hover:border-[#1a5cff] dark:border-gray-600 dark:hover:border-gray-200 flex items-center space-x-2 text-[#1a5cff] hover:text-white dark:text-white hover:-translate-y-1 active:translate-y-0">Outline</button>
      <button type="button" className="w-fit mx-auto overflow-hidden rounded-xl py-2 px-4 md:py-3 md:px-6 hover:shadow-blue-300 md:text-sm duration-200 bg-transparent hover:bg-blue-100 dark:bg-[#1a5cff] font-medium text-xs text-[#1a5cff] hover:-translate-y-1 active:translate-y-0">Ghost</button>
      <button type="button" className="w-fit mx-auto overflow-hidden rounded-xl py-2 px-4 md:py-3 md:px-6 hover:shadow-blue-300 md:text-sm duration-200 bg-transparent bg-blue-100 hover:bg-[#1a5cff] dark:bg-[#1a5cff] font-medium text-xs text-[#1a5cff] hover:text-white hover:-translate-y-1 active:translate-y-0">Soft</button>
      <button type="button" className="btn shadow-none py-2 px-4 md:py-3 md:px-6 font-medium bg-transparent dark:bg-darkSecondary border-2 border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200 flex items-center space-x-2 text-primary dark:text-white hover:-translate-y-1 active:translate-y-0">White</button>
      <button type="button" className="duration-200 hover:underline rounded-xl py-2 px-4 md:py-3 md:px-6 md:text-sm bg-transparent dark:bg-[#1a5cff] font-medium text-xs text-[#1a5cff] active:text-blue-400">Link</button>
    </div>
  );
};
