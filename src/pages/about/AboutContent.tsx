import { motion } from "framer-motion";
import { ContainerVariant, ItemVariant, ParagraphContainerVariant } from "../../shared/MotionSetting";

const AboutContent = () => {
  return (
    <main className="container-wrapper">
      <motion.div
        className="m-0 mb-3 md:mb-8 text-left font-medium leading-tight text-[#07324a]"
        variants={ContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* H1 */}
        <motion.h1
          variants={ItemVariant}
          className="mb-0 text-base md:text-2xl"
        >
          We are Codeflux:
        </motion.h1>

        {/* Blue Heading */}
        <motion.div
          variants={ItemVariant}
          className="text-[#3798e3] text-2xl md:text-3xl"
        >
          Creating Technology That Moves Businesses Forward
        </motion.div>

        {/* Content */}
        <motion.div
          variants={ParagraphContainerVariant}
          className="mt-4 md:mt-8 flex flex-col md:flex-row gap-4 md:gap-8 text-sm md:text-[14px]"
        >
          <div className="flex flex-col gap-2 md:gap-4 md:w-1/2 font-normal">
            <motion.p variants={ItemVariant}>
              Founded in 2026, Codeflux began with the goal of simplifying
              technology for businesses. Our mission is to understand and
              transform the digital landscape so that more people can harness
              and benefit from the power of technology. We started with a simple
              question: How can we make technology easier for businesses to
              succeed? These problems beg the question, “there must be a better
              way.”
            </motion.p>

            <motion.p variants={ItemVariant}>
              Our curious and inclusive approach means that we work closely with
              our clients to build precisely to the requirements of their
              project, leaving them with a tailored and playful experience that
              enables them to concentrate on running their business effectively
              and empowers them to scale more efficiently.
            </motion.p>
          </div>

          <div className="flex flex-col gap-2 md:gap-4 md:w-1/2 font-normal">
            <motion.p variants={ItemVariant}>
              We continue to aim to become the go-to tech house for brands and
              talent seeking to make a difference in the world. We aspire to set
              the standard for technical implementation, solutions, and
              workplace culture, whilst providing a tailored and playful
              experience that lets you run your business efficiently.
            </motion.p>

            <motion.p variants={ItemVariant}>
              Our technical expertise and innovative solutions have allowed us
              to extend our reach, serving clients and their customers both
              nationwide and internationally. With a deep respect for
              collaboration and a commitment to making technology accessible and
              beneficial for all, we continually push the boundaries of what's
              possible.
            </motion.p>

            <motion.p variants={ItemVariant}>
              We're here to build better solutions, disrupt the status quo, and
              have fun doing it. Join us on this adventure—let's make things
              better together!
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

export default AboutContent;