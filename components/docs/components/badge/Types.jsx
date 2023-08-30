export const Types = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center py-1.5 px-3 rounded-full text-xs font-medium bg-blue-500 text-white">
        Solid
      </span>
      <span className="inline-flex items-center py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-500">
        Soft
      </span>
      <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-500">
        <span className="w-1.5 h-1.5 inline-block bg-blue-500 rounded-full"></span>
        Indicator
      </span>
      <span className="inline-flex items-center gap-1.5 py-1.5 pl-3 pr-2 rounded-full text-xs font-medium bg-blue-100 text-blue-500">
        Remove
        <button
          type="button"
          className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-blue-600 hover:bg-blue-200 hover:text-blue-500 focus:outline-none focus:bg-blue-200 focus:text-blue-500">
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </span>
      <span className="inline-flex items-center gap-1.5 py-1.5 pl-2 pr-3 rounded-full text-xs font-medium bg-blue-100 text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="flex-shrink-0 w-4 h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        Icon
      </span>
      <span className="inline-flex items-center py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 border border-blue-500 text-blue-500">
        Bordered
      </span>
      <span className="inline-flex items-center py-1.5 px-3 rounded-md text-xs font-medium bg-blue-100 text-blue-500">
        Rounded
      </span>
      <a
        href="#!"
        className="bg-blue-100 hover:bg-blue-200 text-blue-500 text-xs font-semibold mr-2 px-3 py-1.5 rounded-md border border-blue-500">
        Badge link
      </a>
      <span className="max-w-[10rem] truncate whitespace-nowrap inline-block py-1.5 px-3 rounded-md text-xs font-medium bg-blue-100 text-blue-500">
        This content is a little bit longer.
      </span>
    </div>
  );
};
