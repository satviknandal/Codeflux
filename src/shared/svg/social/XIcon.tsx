import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const XIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M17.2 3h3.3l-7.1 8.1L21.8 21h-6.6l-5.1-6-5.9 6H.9l7.6-8.7L.5 3h6.8l4.6 5.5L17.2 3Zm-1.1 16.3h1.8L6.3 4.6h-2Z" />
    </svg>
  );
};

export default XIcon;