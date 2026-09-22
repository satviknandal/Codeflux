import { motion } from "framer-motion";
import { CardContainerVariant, ContainerVariant, ItemVariant } from "../../shared/MotionSetting";
import CompHeader from "../shared/CompHeader";

interface Card {
    title: string;
    description: string;
    icon: any;
    img?: string;
    tags: Array<string>
}

interface CloudPlatformServicesProps {
    data: Array<Card>;
    columns?: number;
    gap?: number | string;
    width?: string;
    bgclass?: string;
}

const CloudPlatformServices = ({
    data,
    columns = 4,
    gap = 8,
    width = "w-full"
}: CloudPlatformServicesProps) => {

    const renderCard = () => {
      return (
        <section className="mx-auto flex flex-col items-center">
          <CompHeader
            highlighter='Our Services'
            title="Our Cloud & Platform Engineering Services"
            subheading="Our offerings cover the full lifecycle, from strategy to deployment to optimization, so your cloud infrastructure delivers performance, auditability, and cost control across workloads. Together, our cloud engineering services & solutions help organizations modernize infrastructure while maintaining governance and cost visibility."
            variant="default"
          />
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
                    className={`flex flex-col items-start rounded-xl border text-[#1b1b1b] bg-[#f5f5f5] border-[#e5e5e5]`}
                >
                    <img src={item.img} className="rounded-tl-xl rounded-tr-xl"/>
                    <div className="p-4">
                        <div className={`mb-2 md:mb-4 text-sm md:text-lg font-semibold leading-5 text-black`}>{item.title}</div>
                        <p className={`text-black text-xs md:text-md`}>{item.description}</p>
                        <div className="mt-4 flex flex-col gap-2">
                          {item.tags && item.tags.map((obj, key) => {
                            return <div key={key} className="w-fit text-xs font-medium bg-gradient-to-r from-gray-200 to-[#f5f5f5] rounded-2xl px-4 py-2 text-gray-800">{obj}</div>
                          })}
                        </div>
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
          className={`py-6 md:py-16 bg-[#f9f9f9]`}
          viewport={{ once: true, amount: 0.3 }}
        >
        <div className='container-wrapper-transparent'>
          {renderCard()}
        </div>
      </motion.div>
  }

  return renderGreyCard();
};

export default CloudPlatformServices;
