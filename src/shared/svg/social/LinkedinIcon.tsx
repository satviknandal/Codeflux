


import React from "react";

export interface LinkedinIconProps extends React.SVGProps<SVGSVGElement> {}

const LinkedinIcon: React.FC<LinkedinIconProps> = (props) => {
  return (
    <svg
      aria-hidden="true"
      className="h-7 w-7"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
        <path d="M6.5 9.5V20" />
        <path d="M10.5 20v-6c0-2.8 1.5-4.5 4-4.5 2.2 0 3.5 1.5 3.5 4.2V20" />
        <path d="M10.5 13.8V10" />
        <circle cx="6.5" cy="5.8" r="1.8" />
    </svg>
  );
};

export default LinkedinIcon;