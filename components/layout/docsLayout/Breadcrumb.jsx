import { useState } from 'react';
import { FiEdit, FiCode } from 'react-icons/fi';
import { BiBug, BiArrowBack } from 'react-icons/bi';

export const Breadcrumb = ({ name }) => {
  const [show, setShow] = useState(true);

  return (
    <div
      className={
        show
          ? 'breadcrumbs__div py-5 bg-gray-200'
          : 'breadcrumbs__div py-3 bg-gray-100 dark:bg-darkSecondary'
      }>
      <div>
        <div className="max-w-4xl mx-auto px-4 lg:px-0 flex items-center justify-between z-30">
          <h3 className={show ? 'heading' : 'heading text-base font-medium'}>
            {name}
          </h3>
          <div className="flex items-center space-x-2 md:space-x-3">
            <FiEdit
              title="Edit Page"
              className="text-lg hover:opacity-75 rounded-lg cursor-pointer"
            />
            <FiCode
              title="View Github Code"
              className="text-lg hover:opacity-75 rounded-lg cursor-pointer"
            />
            <BiBug
              title="Report a Bug"
              className="text-lg hover:opacity-75 rounded-lg cursor-pointer"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <BiArrowBack
            onClick={() => router.push('/')}
            title="Go to Back"
            className="absolute left-3 top-1/3 text-lg hover:opacity-75 rounded-lg cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
