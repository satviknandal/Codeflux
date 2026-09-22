import { motion } from "framer-motion";
import heroBackground from "../../assets/hero/contactbg.webp";

const ContactHero = () => {
    return (
        <section className="relative overflow-hidden bg-cover bg-center py-10 md:py-24 h-[900px] md:h-[800px]" style={{backgroundImage: `url(${heroBackground})`}}>
            <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
                <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center text-center">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}} 
                            className={`flex flex-row justify-center items-center mb-1 md:mb-4`}  style={{color: '#5200ee'}}>
                            <span className={`inline-block h-2 w-2 md:h-3 md:w-3 mr-3 rounded-full`} style={{boxShadow: "0 0 0 4px rgba(202, 48, 232,.12)", backgroundColor: "#5200ee"}}/>
                            <label className="text-[11px] md:text-xs uppercase md:font-medium  tracking-wide">How We Work</label>
                        </motion.div>

                        <motion.h1
                            initial={{opacity: 0,y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.7, delay: 0.1}}
                            className="text-[24px] md:text-4xl leading-[30px] md:leading-[40px] font-normal mb-2 md:mb-4 text-[#292929]"
                        >
                            Got a Vision ?{" "}
                            <span className="bg-gradient-to-r from-[#6e24fb] via-[#c61ee8] to-[#ff6948] bg-clip-text text-transparent">Let's Build Together</span>
                        </motion.h1>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                        >
                            <p className="text-[#4b497e] y-2 leading-5 md:text-center text-sm md:text-[14px]">
                                Grow your team or grow online with Codeflux. Complete the contact form and our client support team will get in touch with you.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

          

            {/* Small sparkle / decorative icon */}
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0,
                    rotate: -30,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                }}
                transition={{
                    duration: 0.7,
                    delay: 0.5,
                }}
                className="
                    absolute
                    left-[12%]
                    top-[50%]
                    md:top-[35%]
                    z-10
                    flex
                    h-3
                    w-3
                    items-center
                    justify-center
                "
            >
                <div
                    className="
                        h-3
                        w-3
                        rotate-45
                        bg-[#5200ee]
                    "
                />
            </motion.div>

            {/* Right decorative graphic */}
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.8,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.8,
                    delay: 0.4,
                }}
                className="
                    absolute
                    right-[15%]
                    top-[28%]
                    z-10
                    max-md:hidden
                "
            >
                <img
                    src="https://cdn.prod.website-files.com/6814558f14d25d33c9781a2f/68e604646746c9deaa5b64a6_Group%201597884914%20(1).svg"
                    width={31}
                    height={35}
                    alt=""
                    className="h-auto w-[31px]"
                />
            </motion.div>
        </section>
    );
};

export default ContactHero;