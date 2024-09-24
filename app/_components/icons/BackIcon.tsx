import React from "react";

const BackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M10 9V5l-7 7 7 7v-4.1c5.05 0 9 1.94 9 7 0-5.5-3.95-10-9-10z" />
    </svg>
  );
};

export default BackIcon;
