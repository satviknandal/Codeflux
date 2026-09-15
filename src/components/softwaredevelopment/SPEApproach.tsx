import Sdsapproach from "../../assets/services/SPE-Approach.svg";
import { motion } from "framer-motion";
import { ContainerVariant } from "../../shared/MotionSetting";
import CompHeader from "../shared/CompHeader";

interface SoftwareSecurityProps {
    width?: string;
}

const SPEApproach = ({width = "w-full"}: SoftwareSecurityProps) => {
        
    const renderCard = () => {
      return (
        <section className="mx-auto flex flex-col items-center">
          <div className={`flex flex-col justify-center items-center w-full md:${width}`}>
            <CompHeader
                highlighter="AI Assited Development"
                title="An integrated approach with AI at its core"
                subheading="As a leading software development company, we translate ideas into winning products and accelerate the software product engineering process with a digital-first approach."
                variant="default"
            />
            <img src={Sdsapproach} className="w-full md:w-[1000px]"/>
          </div> 
        </section>
      );
    }

  const renderGreyCard = () => {
    return <motion.div 
          variants={ContainerVariant}
          initial="hidden"
          whileInView="visible"
          className={`py-10 md:py-16`}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='container-wrapper-transparent'>
            {renderCard()}
          </div>
        </motion.div>
  }

  return renderGreyCard();
};

export default SPEApproach;
