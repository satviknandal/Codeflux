import { motion, type Variants } from "framer-motion";
import { ContainerVariant } from "../../shared/MotionSetting";
import CompHeader from "../shared/CompHeader";

interface Card {
  title: string;
  description: string;
  icon: any;
  img?: string;
  tags: Array<string>;
}

interface CloudPlatformServicesProps {
  data: Array<Card>;
  gap?: number | string;
  width?: string;
  bgclass?: string;
}

const ItemVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const CloudPlatformServices = ({
  data,
  gap = 8,
  width = "w-full",
}: CloudPlatformServicesProps) => {
  const renderCard = () => {
    return (
      <section className="mx-auto flex flex-col items-center">
        <CompHeader
          highlighter="Our Services"
          title="Our Cloud & Platform Engineering Services"
          subheading="Our offerings cover the full lifecycle, from strategy to deployment to optimization, so your cloud infrastructure delivers performance, auditability, and cost control across workloads. Together, our cloud engineering services & solutions help organizations modernize infrastructure while maintaining governance and cost visibility."
          variant="default"
        />

        {/* Cards */}
        <div
          className={`mt-4 flex w-full flex-wrap md:mt-8 ${width}`}
          style={{
            gap: typeof gap === "number" ? `${gap}px` : gap,
          }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={ItemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.01,
              }}
              className="
                group
                flex
                w-full
                flex-col
                items-start
                overflow-hidden
                rounded-xl
                border
                border-[#e5e5e5]
                bg-[#f5f5f5]
                text-[#1b1b1b]
                md:w-[calc((100%-16px)/2)]
                lg:w-[calc((100%-32px)/3)]
              "
            >
              {item.img && (
                <div className="w-full overflow-hidden">
                  <img src={item.img} alt={item.title} className="block h-auto max-h-[350px] w-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
              )}

              <div className="w-full p-4">
                <div className="mb-2 text-sm font-semibold leading-5 text-black md:mb-4 md:text-lg group-hover:text-sky-600 transition-colors">
                  {item.title}
                </div>

                <p className="text-xs text-black md:text-sm">{item.description}</p>

                {/* Tags */}
                {item.tags?.length > 0 && (
                  <div className="mt-4 flex flex-col flex-wrap gap-2">
                    {item.tags.map((tag, key) => (
                      <div
                        key={key}
                        className="
                          w-fit
                          rounded-2xl
                          bg-gradient-to-r
                          from-gray-200
                          to-[#f5f5f5]
                          px-4
                          py-2
                          text-xs
                          font-medium
                          text-gray-800
                          group-hover:text-gray-600 transition-colors
                          group-hover:bg-gradient-to-r
                          group-hover:from-[#ebf7ff]
                          group-hover:to-[#f5f5f5]
                        "
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

  const renderGreyCard = () => {
    return (
      <motion.div
        variants={ContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.01,
        }}
        className="bg-[#f9f9f9] py-6 md:py-16"
      >
        <div className="container-wrapper-transparent">
          {renderCard()}
        </div>
      </motion.div>
    );
  };

  return renderGreyCard();
};

export default CloudPlatformServices;