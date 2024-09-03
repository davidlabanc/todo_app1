import React, { useState } from 'react';

interface CheckboxProps {
  label?: string;
  checked: boolean;
  name?: string 
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, name, onChange }) => {
  const [isChecked, setisChecked] = useState(checked)

  return (
    <label className="flex items-center space-x-3">
      <input
        type="checkbox"
        name={name}
        className="form-checkbox h-5 w-5 text-blue-600 dark:border-neutral-200 dark:bg-gray-700 dark:text-neutral-200"
        checked={isChecked}
        onChange={()=>{
          setisChecked(!isChecked)
          onChange()
        }}
      />
      <span className="text-gray-900">{label}</span>
    </label>
  );
};

export default Checkbox