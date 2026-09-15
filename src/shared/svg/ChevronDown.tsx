import * as React from "react";

type ChevronDownIconProps = React.SVGProps<SVGSVGElement>;

const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({ className, ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M17 9.5L12 14.5L7 9.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronDownIcon;
