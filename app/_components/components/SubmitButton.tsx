import React from 'react';
// @ts-ignore
import { useFormStatus } from 'react-dom'

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
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM2 16.15c-.41-.391-.78-.819-1.1-1.28A9.956 9.956 0 010 12H0v.1h.1c.121.721.31 1.421.56 2.1A10.05 10.05 0 002 16.15z"
            ></path>
          </svg>
          <p className='text-white font-semibold pl-2'>Loading</p>
        </div>
      ) : label}
    </button>
  );
};

export default SubmitButton;
