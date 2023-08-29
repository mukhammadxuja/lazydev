import React, { useState, useRef } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export const Code = ({ children }) => {
  const [showCode, setShowCode] = useState(true);
  const [copy, setCopy] = useState('Copy');
  const codeRef = useRef(null)

  const handleCopy = () => {
    const textToCopy = codeRef.current.textContent;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopy('Copied!');
        setTimeout(() => {
          setCopy('Copy');
        }, 3000);
      })
      .catch((error) => {
        console.error('Failed to copy text:', error);
      });
  };

  return (
    <div className="rounded-xl bg-opacity-80 bg-white dark:bg-darkPrimary z-0 text-sm overflow-auto my-5">
      <div
        onClick={() => setShowCode(!showCode)}
        className="flex items-center justify-center shadow-lg py-4 cursor-pointer">
        {showCode ? (
          <span className="flex items-center space-x-2">
            <FiEye /> <small>Show code</small>
          </span>
        ) : (
          <span className="flex items-center space-x-2">
            <FiEyeOff /> <small>Hide code</small>
          </span>
        )}
      </div>
      <div className="relative overflow-scroll">
        <div
          ref={codeRef}
          className={
            showCode ? 'hidden h-0' : 'text-xs md:text-sm xl:text-base px-0 py-4 lg:p-8 text-primary dark:text-white h-96'
          }>
          {children}
        </div>
        <button className='absolute top-4 right-4 px-6 py-2 rounded-md bg-gray-100 hover:bg-opacity-75 active:bg-white shadow-lg cursor-pointer' onClick={handleCopy}>{copy}</button>
      </div>
    </div>
  );
};
