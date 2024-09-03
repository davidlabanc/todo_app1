import React from 'react'

const BinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 6h18M9 6v12m6-12v12M5 6v12a2 2 0 002 2h10a2 2 0 002-2V6M10 3h4a1 1 0 011 1v1H9V4a1 1 0 011-1z"
      />
    </svg>
  )
}
export default BinIcon