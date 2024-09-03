import React from 'react'

const LoadingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox= "0 0 24 24"
      {...props}
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
  )
}

export default LoadingIcon