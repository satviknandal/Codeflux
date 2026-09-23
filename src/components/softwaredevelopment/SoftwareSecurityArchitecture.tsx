import React from "react";
import SoftwareArchitecture from "../../shared/svg/SoftwareArchitecture";
import { motion } from "framer-motion";
import { CardContainerVariant, ContainerVariant, ItemVariant, ItemVariantLeft, ItemVariantRight, ParagraphContainerVariant } from "../../shared/MotionSetting";

interface Card {
    title: string;
    description: string;
    icon: React.ReactNode;
    tags: Array<string>
}

interface SoftwareSecurityProps {
    highlighter?: string;
    title?: string;
    body: Array<string>;
    data: Card[];
    width?: string;
}

const SoftwareSecurityArchitecture = ({
    highlighter = "",
    title = "",
    body = [],
    data,
    width = "w-full"
}: SoftwareSecurityProps) => {

    const renderCard = () => {
      return (
        <section className="mx-auto flex flex-col items-center">
          <div className={`flex flex-col md:flex-row justify-center items-center w-full md:${width}`}>
            <div className="md:mr-6 md:w-[50%]">
              {highlighter && highlighter !== "" && <div className="flex flex-row items-center text-[#31a6ff] mb-4">
                  <span className="inline-block h-3 w-3 mr-3 rounded-full bg-[#31a6ff]" style={{boxShadow: "0 0 0 4px rgba(37,99,235,.12)"}}/>
                  <label className="text-xs uppercase font-medium  tracking-wide">{highlighter}</label>
              </div>}
              <motion.h3 variants={ItemVariantLeft} className={`text-[22px] md:text-4xl leading-normal md:leading-[40px] font-normal text-white mb-6 `}>{title}</motion.h3>
              <motion.div variants={ParagraphContainerVariant}>
                {body.map((paragraph, index) => (
                    <motion.p variants={ItemVariant} key={index} className="mb-3 md:mb-5 text-sm md:text-[14px] text-gray-300">
                        {paragraph}
                    </motion.p>
                ))}
              </motion.div>
            </div>
            <motion.div variants={ItemVariantRight} className="w-full md:w-[50%] flex justify-start md:items-end md:justify-end">
              <SoftwareArchitecture className="w-full h-auto max-w-[520px] mx-auto"/>
            </motion.div>
          </div> 
          <motion.div variants={CardContainerVariant} className={`mt-4 md:mt-8 flex flex-col md:flex-row gap-2 md:gap-4 w-full md:${width}`}>
            {data.map((item, index) => (
              <motion.div
                variants={ItemVariant}
                key={index}
                className={`flex flex-col items-start rounded-xl border p-4 md:p-[30px] text-[#1b1b1b] border-[#c0ddf3]/15 bg-[#e3f3ff]/15 `}
              >
                <div className="mb-4 md:mb-[30px] rounded-md md:rounded-lg bg-[#3798e3] px-1.5 md:px-2 py-1.5 md:py-1.5 text-white">
                  {item.icon}
                </div>
                <label className={`mb-1 md:mb-4 text-md md:text-lg font-semibold text-blue-300`}>
                  {item.title}
                </label>
                <p className={`text-xs md:text-[14px] text-blue-200`}>{item.description}</p>
                <div className="mt-6 flex flex-wrap"> 
                    {item.tags && item.tags.length > 0 && item.tags.map((tag, index) => {
                        return <div key={index} className="text-xs md:text-sm font-medium mb-1 mr-1 py-1 px-2 bg-[#d4e6ff] text-[#005295] rounded-md">{tag}</div> 
                    })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      );
    }

  const renderGreyCard = () => {
    return <motion.div 
          variants={ContainerVariant}
          initial="hidden"
          whileInView="visible"
          className={`py-6 md:py-16 radialgradient`}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='container-wrapper-transparent'>
            {renderCard()}
          </div>
        </motion.div>
  }

  return renderGreyCard();
};

export default SoftwareSecurityArchitecture;
