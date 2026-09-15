import { motion } from "framer-motion";
import { CardContainerVariant, ContainerVariant } from "../../shared/MotionSetting";
import MobileAppServiceCard from "../MobileAppServiceCard";
import CompHeader from "../shared/CompHeader";


interface MobileServicesProps {
    highlighter?: string;
    title?: string;
    subheading: string;
    data: Array<any>;
    width?: string;
}

const MobileServices = ({
    data,
    width = "w-full"
}: MobileServicesProps) => {

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
            highlighter='Mobile Capabilities'
            title="Our Mobile App Development Services"
            subheading="Codeflux delivers custom mobile app development services for iOS, Android, and cross-platform applications. Our team builds secure, scalable, and user-ready mobile products for startups and enterprises worldwide."
            variant="default"
          />
          <motion.div variants={CardContainerVariant} className={`mt-4 md:mt-8 flex flex-col gap-6 w-full md:${width}`}>
            {data.map((item, index) => <MobileAppServiceCard key={index} index={index} data={item}/>)}
          </motion.div>
        </section>

        </motion.div>
        </>
      );
    }

  return <div className={`py-6 md:py-20 bg-[#f9f9f9]`}>
    <div className='container-wrapper-transparent'>
      {renderCard()}
    </div>
  </div>
};

export default MobileServices;