import { motion } from "framer-motion";
import { ContainerVariant, ItemVariant } from "../../shared/MotionSetting";
import { ArrowRight } from "lucide-react";

const HomeCta = () => {
  return (
    <motion.div
      variants={ContainerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >  
      <section
        aria-label="Codeflux skills preview"
        className="w-full min-h-[300px] overflow-hidden bg-[linear-gradient(90deg,rgba(17,30,47,0.96),rgba(12,37,54,0.9)),url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"
      >
        <div className="container-wrapper-transparent items-end mx-auto flex flex-col md:flex-row gap-4 md:gap-12 px-3 md:px-0 py-10 md:py-16  lg:gap-24">
          <div className="w-full md:w-3/4">
            <div className={`flex flex-row items-center mb-4`}  style={{color: "#0089f1",}}>
                <span className={`inline-block h-3 w-3 mr-3 rounded-full`} style={{boxShadow: "0 0 0 4px rgba(255,255,255,.1)", backgroundColor: "#0089f1"}}/>
                <label className="text-xs uppercase md:font-medium tracking-wide">Your Technology Partner</label>
            </div>
            <motion.h2 variants={ItemVariant} className="mt-1 text-xl md:text-5xl font-normal leading-tight text-white">
              <div className="text-white">Let's accelerate your</div>
              <span className="font-normal pb-1 md:pb-4 inline-block text-4xl md:text-6xl bg-[linear-gradient(to_right,#0084d1_0%,#0084d1_55%,#22d3ee_70%,#e0f2fe_100%)] bg-clip-text text-transparent">Digital Transformation</span>
            </motion.h2>
            <div className="mt-2 md:mt-6 text-sm md:text-lg font-normal leading-tight text-white">Bring your ideas to reality with our Digital Transformation Services</div>
          </div>
          <div className="mt-4 md:mt-0 w-full md:w-1/4">
            <div className="w-full text-center cursor-pointer
                    rounded-full bg-gray-400 border border-gray-300
                    py-2.5 md:py-3.5
                    text-sm md:text-md font-medium text-gray-900 no-underline
                    shadow-[0_4px_10px_-6px_rgba(0,0,0,0.3)]
                    transition-all duration-300
                    hover:text-white
                    hover:-translate-y-0.5
                    hover:bg-gray-700
                    hover:shadow-[0_4px_8px_-6px_rgba(255,255,255,0.2)]
                  ">sales@codeflux.com.au</div>
            <div className="mt-4">
                <a
                  href="#contact-us"
                  className="w-full justify-center items-center
                    inline-flex gap-2.5
                    rounded-full bg-sky-600 border border-sky-500
                    py-2.5 md:py-3.5
                    text-sm md:text-md font-medium text-white no-underline
                    shadow-[0_4px_10px_-6px_rgba(37,99,235,0.2)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-sky-700
                    hover:shadow-[0_6px_10px_-6px_rgba(0,132,209,0.5)]
                  "
                >
                  Schedule a Consultation
                  <ArrowRight size={18} strokeWidth={2} />
                </a>
              </div>
                
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomeCta;
