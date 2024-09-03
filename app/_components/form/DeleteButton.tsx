import React from 'react';
// @ts-ignore
import { useFormStatus } from 'react-dom'

import LoadingIcon from '../icons/LoadingIcon'
import { LoadingIconAttr } from '../../_constants/css_constants'

import BinIcon from '../icons/BinIcon'

interface DeleteButtonProps {
  onClick?: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  css?: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick = () => { }, type, css }) => {

  const { pending } = useFormStatus()
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex items-center justify-center h-6 w-6 p-1 bg-red-500 
        hover:bg-red-600 text-white rounded-full focus:outline-none mx-3 ${css}`}
    >
      {pending ? (
        <LoadingIcon {...LoadingIconAttr} />
      ) : (
        <BinIcon
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      )}
    </button>
  );
};

export default DeleteButton;
