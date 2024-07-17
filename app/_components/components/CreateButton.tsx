import React from 'react';
// @ts-ignore
import { useFormStatus } from 'react-dom'

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
      className={`flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 ${css}`}
    >
      {pending ? (
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
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {text}
    </button>
  );
};

export default CreateButton