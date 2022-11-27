import React from 'react';

export const Example1 = () => {
  return (
    <div className="space-y-2 md:scroll-py-4">
      <div className="overflow-hidden relative max-w-[18rem] md:max-w-[25rem] mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-darkSecondary dark:highlight-white/5">
        <img
          className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"
          src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
        />
        <div className="min-w-0 py-5 pl-28 pr-5">
          <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
            Andrew Alfred
          </div>
          <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
            Assistant to the Traveling Secretary
          </div>
        </div>
      </div>
      <div className="overflow-hidden relative bg-white dark:bg-darkSecondary shadow-lg rounded-xl p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="bg-slate-400 absolute -top-6 -left-6 w-28 h-28 rounded-full shadow-lg"></div>
          <div className="flex-1 space-y-5 py-1 pl-20">
            <div className="h-2 bg-slate-400 rounded w-[50%]" />
            <div className="h-2 bg-slate-400 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};
