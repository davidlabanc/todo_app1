import React from 'react';
// @ts-ignore
import { useFormStatus } from 'react-dom'

import LoadingIcon from '../icons/LoadingIcon'
import { LoadingIconAttr } from '../../_constants/css_constants'
import PlusIcon from '../icons/PlusIcon'

interface ButtonProps {
  onClick?: () => void;
  text: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
  css?: string;
}

const CreateButton: React.FC<ButtonProps> = ({ onClick, text, type, css }) => {
  const { pending } = useFormStatus()
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex items-center justify-center px-4 py-2 bg-buttons-submit hover:bg-blue-600 text-buttons-font focus:outline-none focus:ring-2 focus:ring-blue-400 ${css}`}
      data-test='create-new-button'
    >
      {pending ? (
        <LoadingIcon {...LoadingIconAttr} />
      ) : (
        <PlusIcon fill="currentColor" className="h-5 w-5"/>
      )}
      {text}
    </button>
  );
};

export default CreateButton