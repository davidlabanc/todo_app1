import React from 'react';
// @ts-ignore
import { useFormStatus } from 'react-dom'

import LoadingIcon from '../icons/LoadingIcon'
import { LoadingIconAttr } from '../../_constants/css_constants'

interface SubmitButtonProps {
  onClick?: () => void;
  label: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick = () => { }, label, type }) => {
  const { pending } = useFormStatus()

  return (
    <button
      onClick={onClick}
      type={type}
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      {pending ? (
        <div className='flex items-center'>
          <LoadingIcon {...LoadingIconAttr} />
          <p className='text-white font-semibold pl-2'>Loading</p>
        </div>
      ) : label}
    </button>
  );
};

export default SubmitButton;
