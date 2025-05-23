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
  const contentRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      {/* Backdrop for click-outside closing */}
      <div className="absolute inset-0" onClick={handleBackdropClick}></div>
      
      {/* Modal container */}
      <div 
        ref={modalRef}
        className="relative bg-gray-900 border-2 border-red-900 rounded-md shadow-2xl flex flex-col overflow-hidden"
        style={{ 
          minWidth: '50vw',
          maxWidth: '98vw',
          height: '90vh',
          maxHeight: '90vh'
        }}
      >
        {/* Header - fixed */}
        <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex justify-between items-center flex-shrink-0">
          <h3 className="text-lg font-bold text-red-500 uppercase tracking-wider">
            {title || 'ASCII Preview'}
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white focus:outline-none"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Content container with padding and scrolling */}
        <div 
          ref={contentRef}
          className="flex-1 overflow-auto"
          style={{ 
            height: 'calc(90vh - 50px)', 
            backgroundColor: '#1a1a1a',
            padding: '20px',
            overflow: 'auto'
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
