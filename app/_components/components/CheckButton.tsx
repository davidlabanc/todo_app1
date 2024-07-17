import React from 'react';
// @ts-ignore
import { useFormStatus } from 'react-dom'

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
      className={`flex items-center justify-center min-h-5 min-w-5 h-5 w-5 bg-green-500 hover:bg-green-600 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 ${css}`}
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
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </button>
  );
};

export default CheckButton