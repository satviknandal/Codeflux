import { useState } from "react";
import { motion } from "framer-motion";
import { ContainerVariant } from "../../shared/MotionSetting";
import whyus from "../../assets/1.jpg";
import { CircleCheckIcon } from "lucide-react";
import CompHeader from "../shared/CompHeader";

interface WhyCodefluxforAIProps {
    pointers: any, 
    pointerClass: any
}

const WhyCodefluxforAI = ({pointers, pointerClass}: WhyCodefluxforAIProps) => {
    const [activePointer, setActivePointer] = useState<number | null>(null); 
    

    const renderPointers = () => { 
        return <div className="w-full md:w-[60%] md:max-w-4xl"> 
            {pointers.map((pointer: any, index: number) => { 
                const isActive = activePointer === index; 
                return <div key={index} className="border-b border-[#063559]/15" > 
                    <button type="button" onClick={() => setActivePointer(isActive ? null : index) } className="w-full flex items-center gap-2 md:gap-4 py-3 md:py-5 text-left" aria-expanded={isActive} > 
                        <span className={`flex-shrink-0 text-lg  transition-transform duration-300 ${pointerClass ? pointerClass : 'text-[#0089f1]'} ${ isActive ? "rotate-45" : "rotate-0" }`} > 
                            {pointerClass ? (
                              <svg width="0" height="0">
                                  <defs>
                                      <linearGradient
                                          id={`pointer-gradient-${index}`}
                                          x1="0%"
                                          y1="0%"
                                          x2="100%"
                                          y2="0%"
                                      >
                                          <stop offset="0%" stopColor="#6025F5" />
                                          <stop offset="50%" stopColor="#E40CD3" />
                                          <stop offset="100%" stopColor="#FF5555" />
                                      </linearGradient>
                                  </defs>
                              </svg>
                          ) : null}

                          <CircleCheckIcon size={24} stroke={pointerClass ? `url(#pointer-gradient-${index})` : "#0089f1"}/>
                        </span> 
                        <label className={`cursor-pointer text-sm md:text-base font-medium transition-colors ${ isActive ? "text-[#0089f1]" : "text-[#063559]" }`} > 
                            {pointer.title} 
                        </label> 
                    </button> 
                    <motion.div initial={false} animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0, }} transition={{ duration: 0.3, ease: "easeInOut", }} className="overflow-hidden" > 
                        <p className="pb-4 md:pb-5 md:pr-8 text-sm md:text-md leading-6 text-[#494949]"> {pointer.description} </p> 
                    </motion.div> 
                </div> 
        })} 
        </div>
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
            <CompHeader
                highlighter="Why Choose us"
                title={<p><span className='bg-[linear-gradient(to_right,#6025F5,#E40CD3,#FF5555)] bg-clip-text text-transparent'>Why Choose Codeflux ?</span></p>}
                subheading={"Codeflux combines vast industry experience with a focus on technology and client needs. Keep reading to see why we are your best choice for web application development!"}
                variant="pinkdefault"
                />
        <div className="flex gap-16 mt-0 md:mt-16">
            {renderPointers()}
            <div className="hidden md:block w-[40%]">
                <img src={whyus} className="w-full rounded-2xl"/>
            </div>
        </div>
        </section>
        </motion.div>
        </>
      );
    }

  return <div className={`py-6 md:py-16 bg-[#f9f9f9]`}>
      <div className='container-wrapper-transparent'>
        {renderCard()}
      </div>
    </div>
};

export default WhyCodefluxforAI;