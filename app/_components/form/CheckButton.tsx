import React from 'react';
// @ts-ignore
import { useFormStatus } from 'react-dom'

import LoadingIcon from '../icons/LoadingIcon'
import { LoadingIconAttr } from '../../_constants/css_constants'
import CheckIcon from '../icons/CheckIcon'

interface ButtonProps {
  onClick?: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
  css?: string
}

const CheckButton: React.FC<ButtonProps> = ({ onClick, type, css }) => {
  const { pending } = useFormStatus()
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex items-center justify-center min-h-5 min-w-5 h-5 w-5 bg-green-500
         hover:bg-green-600 text-white rounded-full focus:outline-none
        ${css}`}
    >
      {pending ? (
        <LoadingIcon {...LoadingIconAttr} />
      ) : (
        <CheckIcon
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        />
      )}
    </button>
  );
};

export default CheckButton