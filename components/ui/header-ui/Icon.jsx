import React from 'react';

const Icon = ({ Icon, bg, iconColor }) => {
  return (
    <>
      <button
        className={`btn p-2 ${iconColor} ${bg} hover:drop-shadow-2xl hover:-translate-y-1`}>
        <Icon className="text-xl" />
      </button>
    </>
  );
};

export default Icon;
