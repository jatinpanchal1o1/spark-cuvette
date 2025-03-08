import React from 'react';

function InputField({ label, type, placeholder, className }) {
  const id = `${label.toLowerCase()}-input`;
  return (
    <div className={className}>
      <label htmlFor={id} className="sr-only">{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none"
        aria-label={label}
      />
    </div>
  );
}

export default InputField;