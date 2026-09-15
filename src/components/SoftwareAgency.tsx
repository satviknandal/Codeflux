
import { motion } from "framer-motion";
import { CardContainerVariant, ContainerVariant, ItemVariant } from "../shared/MotionSetting";
import CompHeader from "./shared/CompHeader";

const SoftwareAgency = () => {

  const agencyHighlights = [
    {
      title: "Professional Expertise",
      body:
        "Our team consists of industry experts with extensive experience in developing cutting-edge digital products across various sectors. They bring deep technical knowledge and strategic insight to every project while ensuring that the new product development services we deliver are innovative as well as effective.",
    },
    {
      title: "Enhanced Security",
      body:
        "Our development approach for delivering product development services prioritizes scalability, ensuring that the solutions we build can expand along with your business. Starting from a robust foundation, our designs are built to accommodate growth in users, data, and functionality. This scalable approach means your initial investment continues to serve your business as it expands, allowing for smooth enhancements and additions without the need for complete overhauls.",
    },
    {
      title: "Accelerated Time-to-Market",
      body:
        "We understand the importance of speed in today's competitive landscape. Our efficient processes and agile methodologies enable us to reduce development time and get your product to market faster without compromising quality. Our product engineering services team's commitment to efficiency helps you meet consumer demands faster and capitalize on market opportunities as they arise.",
    },
    {
      title: "Enhanced Scalability",
      body: "Our development approach prioritizes scalability, ensuring that the solutions we build can expand along with your business. Starting from a robust foundation, our designs are built to accommodate growth in users, data, and functionality. This scalable approach means your initial investment continues to serve your business as it expands, allowing for smooth enhancements and additions without the need for complete overhauls."
    },
    {
      title: "Innovative Design and Usability",
      body: "As one of the leading digital product development firms, we focus on creating products with innovative designs that prioritize user experience. Our team ensures that the usability of your digital product meets the highest standards, making it accessible for all users. This intuitive design approach helps differentiate your product in the market and drives user satisfaction."
    },
    {
      title: "Continuous Support",
      body: "A reputed digital product development consultancy like ours offers thorough post-launch support to keep your digital product performing in an optimal manner. Our team is readily available to manage updates, make improvements, and provide troubleshooting, ensuring your product adapts to challenges quickly. As a leading product development consulting firm, this helps us in keeping your product up-to-date and running efficiently, enhancing user satisfaction and ensuring seamless operation."
    }
  ];

  return <motion.div
        variants={ContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
    >

            
      <section className="flex justify-center radialgradient bg-[#edfdfd] md:px-[150px] py-8 md:py-20">
        <div className="mx-auto w-full max-w-[1300px]">
          <CompHeader
              highlighter="Why us"
              title="Why We’re Your Go-To Digital Product Development Company"
              subheading="Choosing the right partner to develop your digital product is crucial for success. As a digital product development company, our approach combines industry expertise, robust security measures, and swift delivery to ensure your product not only meets but exceeds market expectations."
              variant="bluegradient"
          />
          <motion.div variants={CardContainerVariant} className="mt-8 md:mt-[60px] flex flex-col md:flex-row flex-wrap justify-center gap-1 md:gap-2 px-8 md:px-0">
              {agencyHighlights.map((value, index) => (
                    <motion.div variants={ItemVariant} 
                      key={value.title}
                      className={`flex md:w-[49%] flex-row border-b border-[#47ede9]/30 p-3 md:p-6 `} >
                      <div className="text-md md:text-6xl font-normal md:font-normal text-sky-400 mr-4 ">{'0' + (index +1)}</div>
                      <div>
                          <h3 className="mb-2 md:mb-4 text-md md:text-lg font-normal md:font-bold text-[#00afaa] text-gray-100">
                            {value.title}
                          </h3>
                          <p className="text-[#3a6b6a] text-gray-300 text-sm md:text-md">{value.body}</p>
                      </div>

                    </motion.div>
              ))}
          </motion.div>
        </div>
        <div>
          <h1></h1>
          <p>
              
          </p>
          <div>
            
          </div>



        </div>
      </section>
    </motion.div>
}

export default SoftwareAgency
