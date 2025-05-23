"use client";

import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Close when clicking outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 transition-opacity overflow-auto">
      <div 
        className="fixed inset-0" 
        onClick={handleBackdropClick}
      />
      <div 
        ref={modalRef}
        className="bg-gray-900 border-2 border-red-900 rounded-md shadow-2xl w-auto min-w-fit overflow-visible flex flex-col"
        style={{ maxWidth: '95vw', maxHeight: '95vh' }}
      >
        <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex justify-between items-center">
          <h3 className="text-lg font-bold text-red-500 uppercase tracking-wider">
            {title || 'ASCII Preview'}
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-auto flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
};
