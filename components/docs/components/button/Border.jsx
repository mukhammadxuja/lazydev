export const Border = () => {
  return (
    <div className="flex items-center space-x-3">
      <button
        className="w-fit rounded-lg py-2 px-8 active:scale-95
      shadow-md text-sm font-medium duration-300 bg-[#1a5cff] active:bg-opacity-80
      ease-in-out bg-transparent md:text-sm text-white hover:bg-transparent border border-[#1a5cff] hover:text-[#1a5cff]">
        Active
      </button>
      <button
        className="w-fit rounded-lg py-2 px-8 active:scale-95
    shadow-md text-sm font-medium duration-300 border border-[#1a5cff] active:bg-opacity-80
    ease-in-out bg-transparent md:text-sm text-[#1a5cff] hover:bg-[#1a5cff] hover:text-white">
        Border
      </button>
    </div>
  );
};
