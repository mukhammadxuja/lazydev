export const Gradient = () => {
  return (
    <div className="flex items-center space-x-3">
      <button className="text-white bg-gradient-to-br from-[#009FFD] to-[#2A2A72] hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb- active:scale-95 duration-300">
        Active
      </button>

      <button className="relative inline-flex items-center justify-center p-0.5 mb-0 mr-2 overflow-hidden text-sm font-medium text-[#1a5cff] rounded-lg group bg-gradient-to-br from-[#009FFD] to-[#2A2A72] hover:text-white active:scale-95 duration-300">
        <span className="relative px-5 py-2 transition-all ease-in duration-200 bg-white rounded-md group-hover:bg-opacity-0">
          Gradient
        </span>
      </button>
    </div>
  );
};
