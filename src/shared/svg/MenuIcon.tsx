import type { SVGProps } from "react";

const MenuIcon = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M7 8h10M7 12h10M7 16h10" />
  </svg>
);

export default MenuIcon;