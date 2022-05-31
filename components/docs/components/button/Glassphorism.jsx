import React from 'react';

export const Glassphorism = () => {
  const buttonGlassphorism =
    'bg-[#28282d] rounded-xl py-2 px-4 md:py-3 md:px-3 text-white font-medium text-sm group-hover:scale-105 duration-300';
  
    const buttonAfter =
    'absolute -bottom-2 -right-2 group-hover:bottom-3 group-hover:right-1 w-8 h-8 group-hover:w-[90%] group-hover:h-[90%] rounded-xl z-10 bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-[1px] duration-300';

  return (
    <div className="relative cursor-pointer group">
      <button className={buttonGlassphorism}>
        <span className="z-30">Glassphorism</span>
      </button>
      <span className={buttonAfter}></span>
    </div>
  );
};
