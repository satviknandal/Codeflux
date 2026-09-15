import React from "react";

export interface ArtificialIntelligenceIconProps extends React.SVGProps<SVGSVGElement> {}

const ArtificialIntelligenceIcon: React.FC<ArtificialIntelligenceIconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(64 64)">
        <path d="M320 64v256H64V64h256ZM171.749 128h-24.931L99.484 256h22.493l8.936-25.023h56.662L196.32 256h23.847L171.749 128Zm88.345 0h-22.402v128h22.402V128Zm-101 21.475L181.409 213.333h-44.274l21.96-63.858ZM341.333 256H384v42.667h-42.667V256ZM85.333 341.333H128V384H85.333v-42.667Zm85.334 0h42.666V384h-42.666v-42.667ZM85.333 0H128v42.667H85.333V0ZM256 341.333h42.667V384H256v-42.667ZM170.667 0h42.666v42.667h-42.666V0ZM256 0h42.667v42.667H256V0Zm85.333 170.667H384v42.666h-42.667v-42.666ZM0 256h42.667v42.667H0V256Zm341.333-170.667H384V128h-42.667V85.333ZM0 170.667h42.667v42.666H0v-42.666ZM0 85.333h42.667V128H0V85.333Z" />
      </g>
    </svg>
  );
};

export default ArtificialIntelligenceIcon;