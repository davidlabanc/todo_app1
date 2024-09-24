import React from "react";

const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke-linecap="round"
      stroke-linejoin="round"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5l4 4L7 21l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
};

export default EditIcon;
