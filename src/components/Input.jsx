import React from 'react';

const Input = ({ type, placeholder, name, label, isLabel, onChange, className }) => {
  return (
    <div className="flex flex-col gap-1">
      {isLabel && (
        <label className="text-left font-semibold text-sm" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={`border border-gray-300 px-3 py-2 focus:outline-orange-300 rounded-lg transition-all duration-500 ${className}`}
      />
    </div>
  );
};

export default Input;
