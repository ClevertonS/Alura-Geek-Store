import React from 'react';

interface IButtonProps {
  value: string;
}

export function PrimaryButton({ value }: IButtonProps) {
  return (
    <button
      type="button"
      className="bg-blue-100 px-4 py-3 lg:p-4 text-white font-normal hover:bg-blue-80 hover:transition-colors "
    >
      {value}
    </button>
  );
}
