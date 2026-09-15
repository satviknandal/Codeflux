import React from "react";
import { motion } from "framer-motion";
import { CardContainerVariant, ContainerVariant, ItemVariant } from "../../shared/MotionSetting";
import CompHeader from "../shared/CompHeader";

interface Card {
    title: string;
    description: string;
    icon: React.ReactNode;
    tags: Array<string>;
}

interface WebDevelopmentServicesProps {
    data: Card[];
    columns?: number;
    gap?: number | string;
}

const WebDevelopmentServices = ({
    data,
    columns = 4,
    gap = 8
}: WebDevelopmentServicesProps) => {

  const RenderComp = ({children}: {children: React.ReactNode}) => {
    return <section className="py-6 md:py-16 relative overflow-hidden bg-sky-500 py-[90px]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(12,11,29,0.92)_0%,rgba(12,11,29,0.72)_50%,rgba(12,11,29,0.92)_100%)]"/>
      {/* Dot pattern */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:30px_30px]"/>
      {/* Top right glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_65%)]"/>

      {/* Bottom left glow */}
      <div className="pointer-events-none absolute -bottom-[60px] -left-[60px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.08)_0%,transparent_70%)]"/>

      <div className="relative z-[3] mx-auto container-wrapper-transparent">
        {children}
      </div>
    </section>
  }

  const renderCard = () => {
    return <motion.div
        variants={ContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
      <section className="mx-auto flex flex-col items-center">
        <CompHeader
          highlighter="Our Services"
          title="Driving Digital Success with Web Development"
          subheading="Our web development services deliver modern, user-focused digital solutions that leave a lasting impression on your audience."
          variant="bluegradient"
        />
        <motion.div variants={CardContainerVariant}
          className={`mt-4 md:mt-8 grid grid-cols-1 gap-1 md:gap-[var(--grid-gap)] w-full md:w-full`}
          style={{
              "--grid-gap": typeof gap === "number" ? `${gap}px` : gap,
            gridTemplateColumns:
              window.innerWidth >= 768
                ? `repeat(${columns}, minmax(0, 1fr))`
                : undefined,
          } as React.CSSProperties}
        >
          {data.map((item, index) => {
            return (
            <motion.div
              key={index}
              variants={ItemVariant} 
              className="
                  group relative flex flex-col overflow-hidden rounded-[14px]
                  border border-white/[0.07]
                  border-t-2 border-t-sky-600/35
                  bg-white/[0.04]
                  px-5 pb-5 pt-[22px]
                  transition-all duration-300
                  hover:-translate-y-[3px]
                  hover:border-sky-600/60
                  hover:border-t-sky-600
                  hover:bg-white/[0.06]
                  hover:shadow-[0_16px_40px_rgba(0,0,0,0.3),0_4px_12px_rgba(37,99,235,0.15)]
                "
              >
                <div className="mb-4 md:mb-[16px] ">
                  <span className="
                      flex h-9 w-9 shrink-0 items-center justify-center
                      rounded-[9px]
                      border border-sky-600/25
                      bg-sky-600/15
                      transition-all duration-300
                      group-hover:border-sky-600
                      group-hover:bg-sky-600
                    ">
                    {item.icon}
                  </span>
                </div>

              <label className={`mb-2 text-[18px] font-semibold leading-[1.25] text-white`}>
                {item.title}
              </label>
              <p className={`text-xs md:text-[14px] text-gray-300 h-[100px]`}>{item.description}</p>
              <div className="mt-4 flex flex-col gap-2">
                {item.tags && item.tags.map((obj) => {
                  return <div className="w-fit text-sm font-medium bg-gradient-to-r from-sky-300/20 to-[#335778]/10 rounded-2xl px-4 py-2 text-[#ffffff]/80">{obj}</div>
                })}
              </div>
            </motion.div>
          )})}
        </motion.div>
      </section>

      </motion.div>
  }

  return <RenderComp children={renderCard()}/>
};

export default WebDevelopmentServices;
