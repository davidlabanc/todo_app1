import React, { ChangeEvent, useState } from 'react';

interface InputProps {
  type: string;
  value: string;
  name: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ type = "text", value = "", name, placeholder }) => {
  const [newvalue, setnewvalue] = useState(value)
  return (
    <div className="flex flex-grow">
      <input
        type={type}
        value={newvalue}
        name={name}
        onChange={(event) => setnewvalue(event.target.value)}
        placeholder={placeholder}
        className="w-full dark:bg-gray-800 dark:border-neutral-200 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Input