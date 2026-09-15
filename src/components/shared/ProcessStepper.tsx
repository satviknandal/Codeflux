import React from "react";
import { motion } from "framer-motion";
import { CardContainerVariant, ContainerVariant, ItemVariant } from "../../shared/MotionSetting";

interface Stepper {
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface ProcessStepperProps {
    highlighter?: string;
    title?: string;
    subheading: string;
    data: Stepper[];
    columns?: number;
    gap?: number | string;
    type?: "default" | "blue" | "white" | 'bluegradient';  
    width?: string;
    isGreyBg?: boolean;
    bgclass?: string;
}

const ProcessStepper = ({
    highlighter = "",
    title = "",
    subheading = "",
    data,
    columns = 4,
    gap = 8,
    type = "default",
    width = "w-full",
    isGreyBg = false,
}: ProcessStepperProps) => {
    
    const getCompTitleStyles  = () => {
      switch (type) {
        case "blue":
            return "mb-2 text-[#063559]";
        case "bluegradient":
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
        case "white":
            return "bg-[#f9f9f9]";
        default:
            return "bg-[#f9f9f9]";
        }
    };

    const getCardStyles  = () => {
      switch (type) {
        case "blue":
            return "bg-[#e3f3ff] border-[#c0ddf3]";
        case "bluegradient":
            return "bg-[#e3f3ff]/10 border-[#c0ddf3]/15";
        case "white":
            return "bg-white border-[#3798e3]";
        default:
            return "border-sky-200";
        }
    };

    const getCardTitleStyles  = () => {
      switch (type) {
        case "blue":
            return "text-black";
        case "bluegradient":
            return "text-blue-200";
        case "white":
            return "text-black";
        default:
            return "text-black";
        }
    };

    const getCardTextStyles  = () => {
      switch (type) {
        case "blue":
            return "text-black";
        case "bluegradient":
            return "text-blue-300";
        case "white":
            return "text-black";
        default:
            return "text-gray-600";
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
          {highlighter && highlighter !== "" && <div className="flex flex-row justify-center items-center text-[#0089f1] mb-4">
            <span className="inline-block h-3 w-3 mr-3 rounded-full bg-[#0089f1]" style={{boxShadow: "0 0 0 4px rgba(37,99,235,.12)"}}/>
            <label className="text-xs uppercase font-medium  tracking-wide">{highlighter}</label>
          </div>}

        <motion.h3 variants={ItemVariant} className={`text-[22px] md:text-4xl leading-normal md:leading-[40px] font-normal ${getCompTitleStyles()}`}>
          {title}
        </motion.h3>
        {subheading !== "" && <motion.span variants={ItemVariant} className={`y-2 ${getCompSubHeadingStyles()} leading-5 md:text-center text-sm md:text-md md:w-[80%]`}>
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
                className={`flex flex-col items-start rounded-xl border p-4 md:p-[30px] text-[#1b1b1b] ${getCardStyles()}`}
              >
                <div className="mb-4 rounded-md md:rounded-lg text-[#3798e3] text-6xl font-normal">0{index+1}</div>
                {/* <div className="mb-4 md:mb-[30px] rounded-md md:rounded-lg bg-[#3798e3] px-1.5 md:px-2 py-1 md:py-1.5 text-white">
                  {item.icon}
                </div> */}

                <label className={`mb-2 md:mb-4 text-sm md:text-lg font-semibold text-gray-800 ${getCardTitleStyles()}`}>
                  {item.title}
                </label>

              <p className={`${getCardTextStyles()} text-xs md:text-[14px]`}>{item.description}</p>
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

export default ProcessStepper;