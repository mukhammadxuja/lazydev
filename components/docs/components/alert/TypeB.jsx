import React from 'react';

export const TypeB = () => {
  return (
    <div className="space-y-2">
      {/* Solid alert */}
      <div className="p-2 border-l-2 border-blue-300 bg-[#1a5cff] text-white rounded-r-lg mx-8">
        <div className="mx-4">
          <h4 className="text-[1rem] py-1 font-semibold">Solid alert</h4>
          <p className="text-sm py-2">
            Lazydev is a copy and paste components to make projects easily and
            with a Unique and pleasant style, Lazydev is created from scratch
            and designed for all types of developed from the frontend lover to
            the backend that wants to easily create your visual approach to the
            end user
          </p>
        </div>
      </div>
      {/* Opacity alert */}
      <div className="p-2 border-l-2 border-blue-600 bg-[#E8EEFF] dark:bg-[#1e2639] text-blue-600 rounded-r-lg mx-8">
        <div className="mx-4">
          <h4 className="text-[1rem] py-1 font-semibold">Opacity alert</h4>
          <p className="text-sm py-2">
            Lazydev is a copy and paste components to make projects easily and
            with a Unique and pleasant style, Lazydev is created from scratch
            and designed for all types of developed from the frontend lover to
            the backend that wants to easily create your visual approach to the
            end user
          </p>
        </div>
      </div>
      {/* border alert */}
      <div className="p-2 border-2 border-blue-600 bg-transparent text-blue-600 rounded-r-lg mx-8">
        <div className="mx-4">
          <h4 className="text-[1rem] py-1 md:py-3 font-semibold">
            Border alert
          </h4>
          <p className="text-sm">
            Lazydev is a copy and paste components to make projects easily and
            with a Unique and pleasant style, Lazydev is created from scratch
            and designed for all types of developed from the frontend lover to
            the backend that wants to easily create your visual approach to the
            end user
          </p>
        </div>
      </div>
    </div>
  );
};
