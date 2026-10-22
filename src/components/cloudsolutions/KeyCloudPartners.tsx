import { motion } from "framer-motion";
const microsoftlogo = "/assets/logo/Microsoft-logo.png";
const awslogo = "/assets/logo/AWS-logo.png";
const gcplogo = "/assets/logo/GCP-logo.png";
import { CardContainerVariant, ContainerVariant, ItemVariant, ItemVariantLeft } from "../../shared/MotionSetting";


const KeyCloudPartners = () => {

    const renderCard = () => {
      return (
        <section className="mx-auto flex flex-col items-center">
          <div className={`flex flex-col justify-center items-center w-full md:w-[80%]`}>
            <motion.h3 variants={ItemVariantLeft} className={`text-[22px] md:text-4xl leading-normal md:leading-[40px] font-normal text-white mb-4 md:mb-12 `}>Our Cloud Partners</motion.h3>
            <motion.div variants={CardContainerVariant} className="flex gap-1 md:gap-2">
                <motion.div variants={ItemVariant} className="bg-sky-200 rounded-md p-4 hover:bg-white">
                    <img src={awslogo} alt="Amazon Web Services" className="w-auto h-[40px] md:h-[100px]" />
                </motion.div>
                <motion.div variants={ItemVariant} className="bg-sky-200 rounded-md p-4 hover:bg-white">
                    <img src={gcplogo} alt="Google Cloud Platform" className="w-auto h-[40px] md:h-[100px]" />
                </motion.div>
                <motion.div variants={ItemVariant} className="bg-sky-200 rounded-md p-4 hover:bg-white">
                    <img src={microsoftlogo} alt="Microsoft Azure" className="w-auto h-[40px] md:h-[100px]" />
                </motion.div>
            </motion.div>
          </div>
        </section>
      );
    }
    
  const renderGreyCard = () => {
    return <motion.div 
          variants={ContainerVariant}
          initial="hidden"
          whileInView="visible"
          className={`py-10 md:py-16 radialgradient`}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='container-wrapper-transparent'>
            {renderCard()}
          </div>
        </motion.div>
  }

  return renderGreyCard();
};

export default KeyCloudPartners;
