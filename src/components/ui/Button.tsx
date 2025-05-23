'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const baseStyles =
    'font-bold uppercase tracking-wider border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-red-900 hover:bg-red-800 text-gray-200 border-red-700 focus:ring-red-700',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-gray-200 border-gray-600 focus:ring-gray-600',
    destructive: 'bg-black hover:bg-gray-900 text-red-500 border-red-900 focus:ring-red-900',
  };

  const sizeStyles = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};
