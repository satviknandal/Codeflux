import { motion } from "framer-motion";
import aiconsulting from "../../assets/ai/aiconsulting.webp";
import AIengineering from "../../assets/webapp.png";
import { Link } from "react-router-dom";
import { ContainerVariant, ItemVariant } from "../../shared/MotionSetting";

const MotionLink = motion(Link);

const AboutServices = () => {

  const RenderAICard = () => {
    return <motion.div variants={ContainerVariant} className="relative p-4 md:p-8 bg-[#ffd0fe] w-full rounded-lg md:rounded-xl overflow-hidden h-[600px] md:h-[800px]">
        <div className="mb-16">
           <motion.h3 variants={ItemVariant} className="font-normal text-2xl md:text-3xl mb-6 md:leading-11">Pioneer the AI Revolution through <span className="font-semibold">CodefluxAI</span></motion.h3>
          <motion.p variants={ItemVariant} className="mb-12 text-sm md:text-base">Integrity is our foundation. We uphold honesty, transparency, and ethical conduct in all our business activities, ensuring a trust-based relationship with all stakeholders.</motion.p>
          <MotionLink variants={ItemVariant} className="
            cursor-pointer
            min-h-5
            md:min-h-10
            items-center
            rounded-full
            bg-white
            px-8
            py-4
            text-sm
            md:text-base
            text-black
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:shadow-[0_0_25px_rgba(79,70,229,0.35)]
          "
          to="../services/aiservices">Explore Our CodefluxAI Services</MotionLink>
        </div>
        <motion.div variants={ItemVariant} className="absolute -left-0">
          <img src={aiconsulting} className=""/>
        </motion.div>
    </motion.div>
  }

  const RenderDigitalCard = () => {
    return <motion.div variants={ContainerVariant} className="relative p-4 md:p-8 bg-[#3761fc] w-full rounded-lg md:rounded-xl text-white overflow-hidden h-[600px] md:h-[800px]">
        <div className="mb-4 md:mb-16">
          <motion.h3 variants={ItemVariant} className="font-normal text-2xl md:text-3xl mb-6 md:leading-11">Amplify Your Market Presence with <span className="font-semibold">Codeflux Digital</span></motion.h3>
          <motion.p variants={ItemVariant} className="mb-12 text-sm md:text-base">We believe in the power of collective dreams, daring, and collaboration. Our vision involves forging strong, transparent partnerships with co-workers, clients, and partners, fostering trust and long-term alliances for impactful results.</motion.p>
          <MotionLink variants={ItemVariant} className="
            cursor-pointer
            min-h-5
            md:min-h-10
            items-center
            rounded-full
            bg-white
            px-8
            py-4
            text-sm
            md:text-base
            text-black
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:shadow-[0_0_25px_rgba(0,0,0,0.15)]
          "
          to="../services/webdevelopmentservices">View CodefluxAI Digital Services</MotionLink>
        </div>
        <motion.div variants={ItemVariant} className="absolute left-0 bottom-0">
          <img src={AIengineering} />
        </motion.div>
      </motion.div>
  }

  return (
    <div className='bg-white py-8 md:py-16'>
        <div className='container-wrapper-transparent'>
          <motion.div
            className="flex flex-col md:flex-row gap-4 w-full justify-between"
            variants={ContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <RenderDigitalCard/>
            <RenderAICard/>

          </motion.div>
        </div>
      </div>
  );
}

export default AboutServices;

