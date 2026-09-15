import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const FacebookIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M14 8.2h2.1V5h-2.5c-3 0-4.4 1.8-4.4 4.4v2H6.8v3.4h2.4V22h3.6v-7.2h3l.5-3.4h-3.5V9.8c0-1 .3-1.6 1.2-1.6Z" />
    </svg>
  );
};

export default FacebookIcon;

