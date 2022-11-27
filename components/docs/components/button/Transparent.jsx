export const Transparent = () => {
  return (
    <div className="flex items-center space-x-3">
      <a className="w-fit bg-blue-500 bg-opacity-30 rounded-lg py-2 px-8 cursor-pointer active:scale-95 shadow-md text-sm duration-300 ease-in-out hover:bg-blue-500 font-semibold hover:bg-opacity-30 md:text-sm text-[#1a5cff] hover:bg-transparent">
        Active
      </a>
      <a className="w-fit hover:bg-blue-500 font-medium hover:bg-opacity-30 rounded-lg py-2 px-8 cursor-pointer active:scale-95 shadow-md text-sm duration-300 ease-in-out  md:text-sm text-[#1a5cff] bg-transparent">
        Transparent
      </a>
    </div>
  );
};
