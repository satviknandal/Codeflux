import { motion } from "framer-motion";
import { ContainerVariant, ItemVariantLeft, ItemVariantRight } from "../shared/MotionSetting";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { HeroItem } from "./Animation";

const TechAgency = () => {
  return (
    <motion.div
      variants={ContainerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <section
        className="w-full md:min-h-[640px] text-[#182535] bg-white
        [background-image:radial-gradient(circle_at_42%_54%,rgba(14,29,43,0.07)_1px,transparent_1.6px)]
        [background-size:10px_10px]"
        aria-labelledby="about-title"
      >
        <div className="mx-auto grid w-[var(--content-width)] grid-cols-1 gap-12 py-12  md:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:gap-20">
          {/* Left Content */}
          <div className="self-center">
            <motion.p variants={ItemVariantLeft} className="text-xs font-semibold uppercase tracking-wider text-sky-400">About Codeflux</motion.p>
            <motion.h2 variants={ItemVariantLeft} id="about-title" className="m-0 text-[36px] font-normal leading-[1.13] text-[#203045] lg:text-[48px]">
              Most trusted <strong className="font-black">Software Development</strong>{" "}
              company
            </motion.h2>

            <motion.p variants={ItemVariantLeft} className="mt-5 md:mt-7 mb-7 md:mb-9 max-w-[650px] text-sm md:text-base font-medium md:leading-7 text-[#637080]">
              At Codeflux, technology meets imagination, innovation, and a lot of passion! Our quest: Creating meaningful digital experiences and building better solutions. With our insatiable curiosity and relentless drive for excellence, we have become specialists at solving complex technical problems. What we deliver goes beyond good service, it provides our clients with digital assets that improve their present and future.
            </motion.p>

            <HeroItem>
              <Link to="/services" className="px-6 py-3 md:px-10 md:py-4.5
                inline-flex items-center justify-center gap-[14px]
                rounded-full
                bg-sky-600 text-white
                text-sm font-extrabold hover:bg-sky-300 hover:text-sky-950">
                About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
          </HeroItem>
          </div>

          {/* Right Image */}
          <motion.div variants={ItemVariantRight} className="relative hidden md:block min-h-[430px] self-center">
            <div className="absolute -top-[38px] -right-[34px] h-[88%] w-[88%] border-[10px] border-[rgba(32,48,69,0.04)]" />

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=920&q=85"
              alt="Consultants discussing a strategy board"
              className="relative block h-[430px] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default TechAgency;