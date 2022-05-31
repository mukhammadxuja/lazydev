import React from 'react';

export const Glassphorism = () => {
  const buttonGlassphorism =
    'bg-[#28282d] rounded-xl py-2 px-4 md:py-4 md:px-5 text-white font-medium text-sm group-hover:scale-110 group-hover:z-1 duration-300';
  const buttonAfter =
    'absolute -bottom-2 -right-2 group-hover:bottom-2 group-hover:right-0 w-8 h-8 group-hover:w-full group-hover:h-full rounded-xl z-10 bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-sm duration-300';

  return (
    <div className="relative cursor-pointer group">
      <button className={buttonGlassphorism}>
        <span className="z-30">Glassphorism</span>
      </button>
      <span className={buttonAfter}></span>
    </div>
  );
};
