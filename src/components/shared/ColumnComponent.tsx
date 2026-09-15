import React from "react";

interface ColumnComponentProps {
  title: string;
  body: string[];
  image: string;
  orientation?: "left" | "right";
  isButton?: boolean;
  buttonText?: string;
}

const ColumnComponent: React.FC<ColumnComponentProps> = ({
  title,
  body,
  image,
  orientation = "left",
  isButton = false,
  buttonText = ""
}) => {
  const isReverse = orientation === "right";

  return (
    <div
      className={`flex flex-col md:flex-row items-start justify-start mb-6 md:mb-20 gap-2 md:gap-8 ${
        isReverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Content */}
      <div className="w-full md:w-1/2 text-[16px] font-normal leading-6 text-[#10405a] flex flex-col items-start justify-start md:pr-6">
        <h1 className="text-2xl md:text-4xl md:leading-[40px] font-normal text-[#063559] mb-4 md:mb-6">
          {title}
        </h1>

        {body.map((paragraph, index) => (
          <p key={index} className="mb-3 md:mb-5 text-sm md:text-md">
            {paragraph}
          </p>
        ))}

        {isButton && <button className="mt-3 cursor-pointer min-h-8 md:min-h-12 items-center rounded-full bg-gradient-to-br from-[#1681a2] to-[#08a5df] px-4 md:px-7 text-xs md:text-[13px] md:font-extrabold text-white shadow-[0_12px_28px_rgba(255,218,82,0.12)]">{buttonText}</button>}
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="rounded-lg md:rounded-[24px] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ColumnComponent;
