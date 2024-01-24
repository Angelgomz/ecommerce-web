import React from "react";
const InputField = ({ label, type, id, value, placeholder, onChange, pattern,name }) => {
  return (
    <div className="w-full md px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        pattern={pattern}
      />
    </div>
  );
};

export {InputField} ;
