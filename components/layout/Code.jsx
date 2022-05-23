import React from 'react';

export const Code = ({ children }) => {
  return (
    <div className="rounded-xl bg-opacity-80 bg-white dark:bg-darkPrimary z-0 text-sm overflow-auto my-5">
      <div className="p-4 text-primary dark:text-white">{children}</div>
    </div>
  );
};
