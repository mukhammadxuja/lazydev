export const Loading = () => {
  return (
    <div className="flex items-center space-x-3">
      <button className="w-fit flex items-center space-x-2 mx-auto rounded-lg py-2 px-4 shadow-md text-sm active:bg-opacity-80 ease-in-out bg-[#1a5cff] dark:bg-[#1a5cff] md:text-sm active:scale-95 duration-200 text-white hover:shadow-md hover:shadow-blue-500/50">
        <div className="border-t-transparent w-[12px] h-[12px] border-[2px] border-white rounded-full animate-spin" />
        <p>Loading A</p>
      </button>
      <button className="w-fit flex items-center space-x-2 mx-auto rounded-lg py-2 px-4 shadow-md text-sm active:bg-opacity-80 ease-in-out bg-[#1a5cff] dark:bg-[#1a5cff] md:text-sm active:scale-95 duration-200 text-white hover:shadow-md hover:shadow-blue-500/50">
        <div className="border-t-transparent w-[12px] h-[12px] border-[2px] border-white border-dotted rounded-full animate-spin" />
        <p>Loading B</p>
      </button>
    </div>
  );
};
