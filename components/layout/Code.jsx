import React, { useState, useRef } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export const Code = ({ children }) => {
  const [showCode, setShowCode] = useState(true);
  const [copy, setCopy] = useState('Copy');
  const codeRef = useRef(null);

  const handleCopy = () => {
    const textToCopy = codeRef.current.textContent;
    navigator.clipboard
      .writeText(textToCopy)
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
            showCode
              ? 'hidden h-0'
              : 'text-xs md:text-sm xl:text-base px-0 py-4 lg:p-8 text-primary dark:text-white h-96'
          }>
          {children}
        </div>
        <button
          className={`${
            copy === 'Copy'
              ? 'bg-transparent hover:bg-gray-50'
              : 'bg-blue-50 text-blue-500 border-blue-200'
          } absolute text-xs md:text-sm top-4 flex items-center space-x-1 right-4 px-4 py-2.5 rounded-xl border border-gray-200 duration-200`}
          onClick={handleCopy}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
            />
          </svg>
          <span>{copy}</span>
        </button>
      </div>
    </div>
  );
};
