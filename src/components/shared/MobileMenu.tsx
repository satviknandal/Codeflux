import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/codeflux-logo.png";
import {ChevronRight, ChevronDown, ArrowUpRight, XIcon, Cloud, Smartphone, Palette, Globe2, Code2, BrainCircuit, Sparkles} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ItemVariant } from "../../shared/MotionSetting";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ServiceCategory {
  label: string;
  link: string;
  icon?: any;
}

const navigationlinks: ServiceCategory[] = [
    {
      label: "Our Services",
      link: "/services",
      icon: BrainCircuit
    },
    {
      label: "AI Consulting",
      link: "/services/aiconsulting",
      icon: BrainCircuit
    },
    {
      label: "AI Services",
      link: "/services/aiservices",
      icon: Sparkles
    },
    {
      label: "Software Development",
      link: "/services/softwaredevelopmentservices",
      icon: Code2,
    },
    {
      label: "Web Development",
      link: "/services/webdevelopmentservices",
      icon: Globe2
    },
    {
      label: "Web Design UI/UX",
      link: "/services/webdesignuiux",
      icon: Palette
    },
    {
      label: "Mobile App Services",
      link: "/services/mobileappservices",
      icon: Smartphone
    },
    {
      label: "Cloud Solutions",
      link: "/services/cloudsolutionsservices",
      icon: Cloud
    },
  ];


const navigationOtherlinks: ServiceCategory[] = [
    {
      label: "About Us",
      link: "/aboutus"
    },
    {
      label: "Team",
      link: "/team"
    },
    {
      label: "Blogs",
      link: "/blogs"
    },
    {
      label: "Careers",
      link: "/careers"
    },
    {
      label: "Client Stories",
      link: "/clientstories"
    },
    {
      label: "Contact Us",
      link: "/contactus"
    },
  ];

const MotionLink = motion(Link);

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
}) => {
    const navigate = useNavigate();
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleClose = () => {
    setServicesOpen(false);
    onClose();
  };


  const MobileHeader = () => {
    return <div className="flex items-center justify-between px-5 py-5 h-[80px] max-h-[80px] text-right border-b-[1px] border-b-black/25 bg-black/20">
        <img src={logo} className="h-10"/>
        <button
            type="button"
            aria-label="Close menu"
            onClick={handleClose}
            className="z-[1000001] text-white transition hover:text-cyan-300"
        >
        <XIcon className="h-7 w-7"/>
        </button>
    </div>
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-black/20"
            onClick={handleClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed right-0 top-0 flex flex-col left-0 top-0 h-[100dvh] w-full overflow-y-auto bg-gradient-to-br from-[#082847] to-[#01294f]" style={{zIndex: 1000000}}
          >
            <MobileHeader/>

            {/* Navigation */}
            <div className="flex flex-1 flex-col overflow-y-auto px-8 py-4">
              {/* Work */}
              <MotionLink variants={ItemVariant} 
                to="/"
                onClick={handleClose}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="group flex items-center justify-between py-3.5"
              >
                <span className="text-xl font-light leading-none tracking-[-0.04em] text-white">
                  Home
                </span>

                <ChevronRight
                  size={30}
                  strokeWidth={1.4}
                  className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </MotionLink>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="py-3.5"
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between"
                  aria-expanded={servicesOpen}
                >
                  <span className={`text-xl font-light leading-none tracking-[-0.04em] ${servicesOpen ? "text-[#7c9aff]": "text-white"}`}>
                    Services
                  </span>

                  <motion.div
                    animate={{
                      rotate: servicesOpen ? 180 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown
                      size={28}
                      strokeWidth={1}
                      className="text-white"
                    />
                  </motion.div>
                </button>

                {/* Services Content */}
                <AnimatePresence initial={false}>
                  {servicesOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -15 }}
                        animate={{ y: 0 }}
                        exit={{ y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="pt-6"
                      >
                        {navigationlinks && (
                            <div className="">
                                {navigationlinks.map((item, key) => {
                                    const Icon = item.icon;
                                    return <MotionLink key={key} to={item.link} onClick={handleClose} className="group flex items-center justify-between border-t border-white/10 py-4">
                                        <div className="flex justify-center items-center">
                                            <Icon size={16} strokeWidth={0.8} className={`mr-2.5 text-sky-50 transition-transform duration-300 group-hover:scale-110 group-hover:text-white"`}/>
                                            <span className="text-[15px] font-light text-white/80 transition-colors">{item.label}</span>
                                        </div>
                                        <ArrowUpRight size={17} strokeWidth={1.5} className="text-white/80"/>
                                    </MotionLink>
                                }
                                )}
                            </div>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {navigationOtherlinks.map((nav, key) => {
                return <MotionLink variants={ItemVariant} 
                    key={key}
                    to={nav.link}
                    onClick={handleClose}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="group flex items-center justify-between py-3.5"
                >
                    <span className="text-xl font-light leading-none tracking-[-0.04em] text-white">
                    {nav.label}
                    </span>

                    <ChevronRight
                    size={30}
                    strokeWidth={1.4}
                    className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                </MotionLink>
              })}

             
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="text-center h-[80px] max-h-[80px]">
                <button
                    type="button"
                    className="
                        w-[300px]
                        cursor-pointer
                        min-h-12
                        items-center
                        rounded-full
                        bg-gradient-to-br
                        from-[#1d66fc]
                        to-[#7c37fc]
                        border border-white/30
                        text-md
                        text-white
                    "
                    onClick={() => navigate("/contactus")}
                    >
                    Start a Project
                    </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;