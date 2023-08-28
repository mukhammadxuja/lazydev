export const Animations = () => {
  return (
    <div className="flex flex-wrap items-center">
      <button
        type="button"
        className="rounded-lg md:rounded-xl py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium hover:-translate-y-0.5 active:translate-y-0 shadow-blue-100 hover:shadow-blue-300 bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 text-white mx-1 md:mx-2 my-1 md:my-2">
        Jump
      </button>
      <button
        type="button"
        className="rounded-lg md:rounded-xl py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium hover:scale-105 active:scale-100 shadow-blue-100 hover:shadow-blue-300 bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 text-white mx-1 md:mx-2 my-1 md:my-2">
        Scale
      </button>
      <button
        type="button"
        className="rounded-lg md:rounded-xl py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium shadow-blue-100 hover:shadow-blue-300 bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 text-white mx-1 md:mx-2 my-1 md:my-2 btn-shine">
        Shine
      </button>
    </div>
  );
};
