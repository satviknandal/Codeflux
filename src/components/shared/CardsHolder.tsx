import React from "react";
import { motion } from "framer-motion";
import { CardContainerVariant, ContainerVariant, ItemVariant } from "../../shared/MotionSetting";

interface Card {
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface CardsHolderProps {
    highlighter?: string;
    title?: string;
    subheading: string;
    data: Card[];
    columns?: number;
    gap?: number | string;
    type?: "default" | "blue" | "white" | 'bluegradient' | 'pinkgradient';  
    width?: string;
    isGreyBg?: boolean;
    bgclass?: string;
}

const CardsHolder = ({
    highlighter = "",
    title = "",
    subheading = "",
    data,
    columns = 4,
    gap = 8,
    type = "default",
    width = "w-full",
    isGreyBg = false,
}: CardsHolderProps) => {

    const getDotStyles  = () => {
      switch (type) {
        case "pinkgradient":
            return "bg-pink-300";
        default:
            return "bg-[#0089f1]";
        }
    };

    const getCompHighlighterStyles  = () => {
      switch (type) {
        case "pinkgradient":
            return "text-pink-200";
        default:
            return "text-[#0089f1]";
        }
    };
    
    const getCompTitleStyles  = () => {
      switch (type) {
        case "blue":
            return "mb-2 text-[#063559]";
        case "bluegradient":
            return "mb-2 text-white";
        case "pinkgradient":
            return "mb-2 text-white";
        case "white":
            return "mb-2 text-[#063559]";
        default:
            return "mb-2 text-[#063559]";
        }
    };

    const getCompSubHeadingStyles  = () => {
      switch (type) {
        case "blue":
            return "mt-2 text-[#215275]";
        case "bluegradient":
            return "mt-2 text-gray-400";
        case "pinkgradient":
            return "mt-2 text-gray-50";
        case "white":
            return "mt-2 text-[#215275]";
        default:
            return "mt-2 text-[#215275]";
        }
    };


    const getCompStyles  = () => {
      switch (type) {
        case "blue":
            return "bg-[#f9f9f9]";
        case "bluegradient":
            return "radialgradient";
        case "pinkgradient":
            return "radialgradientpink";
        case "white":
            return "bg-[#f9f9f9]";
        default:
            return "bg-[#f9f9f9]";
        }
    };

    const getCardStyles  = () => {
      switch (type) {
        case "blue":
            return "bg-[#e3f3ff] border-[#c0ddf3]/60";
        case "bluegradient":
            return "bg-[#e3f3ff]/10 border-[#c0ddf3]/15";
        case "pinkgradient":
            return "bg-[#e3f3ff]/10 hover:bg-[#e3f3ff]/20 border-[#c0ddf3]/15";
        case "white":
            return "bg-white border-[#3798e3]/50";
        default:
            return "bg-[#f5f5f5] border-[#e5e5e5]";
        }
    };

    const getIconStyles = () => {
      switch (type) {
        case "blue":
            return "bg-blue-400 text-white";
        case "bluegradient":
            return "bg-blue-400 text-white";
        case "pinkgradient":
            return "bg-[#d630f0] text-white";
        case "white":
            return "bg-blue-400 text-white";
        default:
            return "bg-blue-400 text-white";
        }
    };
    const getCardTitleStyles  = () => {
      switch (type) {
        case "blue":
            return "text-gray-900";
        case "bluegradient":
            return "text-blue-200";
        case "pinkgradient":
            return "text-pink-100";
        case "white":
            return "text-black";
        default:
            return "text-black";
        }
    };

    const getCardTextStyles  = () => {
      switch (type) {
        case "blue":
            return "text-gray-800";
        case "bluegradient":
            return "text-blue-300";
        case "pinkgradient":
            return "text-pink-100";
        case "white":
            return "text-black";
        default:
            return "text-black";
        }
    };


    const renderCard = () => {
      return (
        <>
        <motion.div
          variants={ContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
 
        <section className="mx-auto flex flex-col items-center">
          {highlighter && highlighter !== "" && <div className={`flex flex-row justify-center items-center  mb-4 ${getCompHighlighterStyles()}`}>
            <span className={`inline-block h-3 w-3 mr-3 rounded-full ${getDotStyles()}`} style={{boxShadow: "0 0 0 4px rgba(37,99,235,.12)"}}/>
            <label className="text-xs uppercase font-medium  tracking-wide">{highlighter}</label>
          </div>}

        <motion.h3 variants={ItemVariant} className={`text-[22px] md:text-4xl leading-normal md:leading-[40px] font-normal ${getCompTitleStyles()}`}>
          {title}
        </motion.h3>
        {subheading !== "" && <motion.span variants={ItemVariant} className={`y-2 ${getCompSubHeadingStyles()} leading-5 md:text-center text-sm md:text-[14px] md:w-[80%]`}>
          {subheading}
        </motion.span>}
          <motion.div variants={CardContainerVariant}
            className={`mt-4 md:mt-8 grid grid-cols-1 gap-1 md:gap-[var(--grid-gap)] w-full md:${width}`}
            style={{
               "--grid-gap": typeof gap === "number" ? `${gap}px` : gap,
              gridTemplateColumns:
                window.innerWidth >= 768
                  ? `repeat(${columns}, minmax(0, 1fr))`
                  : undefined,
            } as React.CSSProperties}
          >
            {data.map((item, index) => (
              <motion.div
                key={index}
                variants={ItemVariant} 
                className={`flex flex-col items-start rounded-lg md:rounded-xl border p-4 md:p-[30px] text-[#1b1b1b] ${getCardStyles()}`}
              >
                <div className={`mb-4 md:mb-[30px] rounded-md md:rounded-lg ${getIconStyles()} px-1.5 md:px-2 py-1 md:py-1.5`}>
                  {item.icon}
                </div>

                <label className={`mb-2 md:mb-4 text-md md:text-lg font-medium md:font-semibold text-black ${getCardTitleStyles()}`}>
                  {item.title}
                </label>

              <p className={`${getCardTextStyles()} text-sm md:text-[14px] leading-5`}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        </motion.div>
        </>
      );
    }

  const renderGreyCard = () => {
    return <div className={`py-6 md:py-16 ${getCompStyles()}`}>
      <div className='container-wrapper-transparent'>
        {renderCard()}
      </div>
    </div>
  }

  return isGreyBg ? renderGreyCard(): renderCard();
};

export default CardsHolder;