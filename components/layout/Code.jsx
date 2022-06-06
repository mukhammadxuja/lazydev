import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export const Code = ({ children }) => {
  const [showCode, setShowCode] = useState(true);
  const [copied, setCopied] = useState(false);
  return (
    <div className="rounded-xl bg-opacity-80 bg-white dark:bg-darkPrimary z-0 text-sm overflow-auto my-5">
      <div
        onClick={() => setShowCode(!showCode)}
        className="flex items-center justify-center py-4 cursor-pointer">
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
      <div className={showCode ? 'hidden' : 'p-4 text-primary dark:text-white'}>
        {children}
      </div>
    </div>
  );
};
