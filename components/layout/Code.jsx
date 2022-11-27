import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const Code = ({ children }) => {
  const [showCode, setShowCode] = useState(true);
  const [copySuccess, setCopySuccess] = useState('Copy');

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied');
      setInterval(() => {
        setCopySuccess('Copy');
      }, 3000);
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
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
      <div className="relative overflow-y-scroll">
        <div
          className={
            showCode ? 'hidden h-0' : 'p-8 text-primary dark:text-white h-auto'
          }>
          {children}
        </div>
        {/* <a
          onClick={() => copyToClipBoard(children.toString())}
          className="absolute top-4 right-4 px-6 py-2 rounded-md bg-gray-100 hover:bg-opacity-75 active:bg-white shadow-lg cursor-pointer">
          {copySuccess}
        </a> */}
      </div>
    </div>
  );
};
