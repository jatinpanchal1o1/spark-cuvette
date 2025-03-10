import React from "react";

function FormInput({ label, type, name, value, onChange, required = false }) {
  const id = `input-${name}`;

  return (
    <div className="mb-3.5">
      <label htmlFor={id} className="mb-1 text-sm text-stone-500 block">
        {label}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="px-3 py-0 w-full rounded-lg border-solid border-[0.705px] border-stone-500 border-opacity-30 h-[39px] max-sm:h-[45px]"
        aria-required={required}
      />
    </div>
  );
}

export default FormInput;
