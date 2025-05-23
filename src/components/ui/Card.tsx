'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, title, className }) => {
  return (
    <div
      className={`bg-gray-900 border-2 border-gray-800 rounded-md overflow-hidden shadow-lg h-full flex flex-col ${className || ''}`}
    >
      {title && (
        <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex-shrink-0">
          <h3 className="text-lg font-bold text-red-500 uppercase tracking-wider">{title}</h3>
        </div>
      )}
      <div className="p-4 flex-grow overflow-auto">{children}</div>
    </div>
  );
};
