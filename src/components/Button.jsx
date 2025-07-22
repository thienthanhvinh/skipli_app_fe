import React from 'react';

const Button = ({ type, className = '', text, secondary }) => {
  return (
    <button
      type={type}
      className={`px-2 py-4 rounded-lg ${secondary ? 'bg-red-400' : 'bg-orange-400'} text-sm ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
