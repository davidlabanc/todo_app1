import React from 'react';
// @ts-ignore
import { useFormStatus } from 'react-dom'

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
      className={`flex items-center justify-center h-5 w-5 p-1 bg-red-500 hover:bg-red-600 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 mx-3 ${css}`}
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
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 6h18M9 6v12m6-12v12M5 6v12a2 2 0 002 2h10a2 2 0 002-2V6M10 3h4a1 1 0 011 1v1H9V4a1 1 0 011-1z"
          />
        </svg>
      )}
    </button>
  );
};

export default DeleteButton;
