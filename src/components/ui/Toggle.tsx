'use client';

import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  id: string;
}

export const Toggle: React.FC<ToggleProps> = ({ checked, onChange, label, id }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <label htmlFor={id} className="text-sm font-medium text-gray-300">
        {label}
      </label>
      <button
        id={id}
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 ${
          checked ? 'bg-red-700' : 'bg-gray-700'
        }`}
        role="switch"
        aria-checked={checked}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
};
