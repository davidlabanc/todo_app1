import React, { useState } from "react";
// @ts-ignore
import { useFormStatus } from "react-dom";

interface CheckboxProps {
  label?: string;
  checked: boolean;
  name?: string;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  name,
  onChange,
}) => {
  const [isChecked, setisChecked] = useState(checked);
  const { pending } = useFormStatus();

  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        name={name}
        className="form-checkbox h-5 w-5 text-blue-600 dark:border-neutral-200 dark:bg-gray-700 dark:text-dark-header"
        checked={isChecked}
        disabled={pending}
        onChange={() => {
          setisChecked(!isChecked);
          onChange();
        }}
      />
      <span className="text-gray-900">{label}</span>
    </label>
  );
};

export default Checkbox;
