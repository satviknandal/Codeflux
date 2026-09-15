import React from "react";

type MenuIconProps = React.SVGProps<SVGSVGElement>;

const MenuIcon: React.FC<MenuIconProps> = ({
  className,
  ...props
}) => {
  return (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <g id="Menu / Hamburger_MD">
        <path
            id="Vector"
            d="M5 17H19M5 12H19M5 7H19"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        </g>
    </svg>

  )
}

export default MenuIcon;
