import React from 'react';
import { MdClose } from 'react-icons/md';

export const IconWithButton = ({ Icon, iconColor, text, paragraph, buttonText, buttonStyle }) => {
  return (
    <>
      <div className={`p-4 rounded-lg bg-white shadow-lg dark:bg-[#102a43] my-2`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div
              className={`w-7 h-7 flex items-center justify-center rounded-full mr-3`}>
              <Icon className={`text-${iconColor}`} />
            </div>
            <h4 className="text-gray-700 dark:text-white font-semibold">{text}</h4>
          </div>
          <div>
            <MdClose className="text-gray-700 dark:text-white text-lg" />
          </div>
        </div>
        <div>
          <p className="ml-10 text-gray-500">{paragraph}</p>
        </div>
        <div className='my-2'>
            <button className={`btn ${buttonStyle} w-full`}>{buttonText}</button>
        </div>
      </div>
    </>
  );
};
