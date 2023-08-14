import React from "react";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
  return (
    <input
      className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500 mb-2"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
