import { useEffect, useRef, useState } from "react";
import MenuIcon from "../../shared/svg/MenuIcon";
import logo from "../../assets/codeflux-logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import {
  Sparkles,
  BrainCircuit,
  Code2,
  Globe2,
  Palette,
  Smartphone,
  Cloud,
} from "lucide-react";
// import FlyoutNav from "./FlyoutNav";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";
  // const isAIConsultingPage = location.pathname.includes("aiconsulting") || location.pathname.includes("aiservices") || location.pathname.includes("aboutus");
  

  /*
   * ---------------------------------------------------------
   * Services
   * ---------------------------------------------------------
   */

  const links = [
    {
      label: "AI Consulting",
      link: "/services/aiconsulting",
      icon: BrainCircuit,
    },
    {
      label: "AI Services",
      link: "/services/aiservices",
      icon: Sparkles,
    },
    {
      label: "Software Development",
      link: "/services/softwaredevelopmentservices",
      icon: Code2,
    },
    {
      label: "Web Development",
      link: "/services/webdevelopmentservices",
      icon: Globe2,
    },
    {
      label: "Web Design UI/UX",
      link: "/services/webdesignuiux",
      icon: Palette,
    },
    {
      label: "Mobile App Services",
      link: "/services/mobileappservices",
      icon: Smartphone,
    },
    {
      label: "Cloud Solutions",
      link: "/services/cloudsolutionsservices",
      icon: Cloud,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);


  useEffect(() => {
    setIsDropdownOpen(false);
    setFlyoutOpen(false);
  }, [location.pathname]);


  const Logo = () => {
    return (
      <Link to="/" className="inline-flex items-center">
        <img src={logo} alt="Codeflux" className="h-[36px] md:h-[40px] w-auto"/>
      </Link>
    );
  };


  const Actions = () => {
    return (
      <div className="flex items-center justify-end gap-1 md:gap-3 md:mr-2">
        <button
          type="button"
          className="
            cursor-pointer
            hidden
            md:inline-flex
            min-h-5
            md:min-h-10
            items-center
            rounded-full
            bg-gradient-to-br
            from-[#1d66fc]
            to-[#7c37fc]
            px-4
            md:px-7
            text-xs
            md:text-[14px]
            md:font-extrabold
            text-white

            transition-all
            duration-300

            hover:scale-[1.03]
            hover:shadow-[0_0_25px_rgba(79,70,229,0.35)]
          "
          onClick={() => navigate("/contactus")}
        >
          Start a Project
        </button>
      </div>
    );
  };

  /*
   * ---------------------------------------------------------
   * Mega Menu Item
   * ---------------------------------------------------------
   */

  const MegaMenuItem = ({item, index}: {item: (typeof links)[number]; index: number}) => {
    const Icon = item.icon;

    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: index * 0.035,
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <Link
          to={item.link}
          onClick={() => setIsDropdownOpen(false)}
          className={`
            group
            relative
            flex
            min-h-[44px]
            w-full
            items-center
            gap-4
            overflow-hidden
            rounded-lg
            px-3
            py-2
            transition-all
            duration-300
            border-1
            border-transparent
            hover:border-white/[0.08]
            hover:bg-white/[0.025]
          `}
        >
          {/* -------------------------------------------------
              Hover glow
          ------------------------------------------------- */}

{/* ${isAIConsultingPage ? "text-pink-500 group-hover:text-pink-700" : " group-hover:text-white"} */}
          <span className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_50%,rgba(63,95,252,0.35),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
          <Icon size={16} strokeWidth={0.8} className={`transition-transform duration-300 group-hover:scale-110 
            group-hover:text-white"
          `}/>
          {/* ${isAIConsultingPage
                ? "text-pink-400 group-hover:text-pink-700"
                : "text-gray-300 group-hover:text-white"
              } */}
          <span className={`relative z-10 text-sm font-normal tracking-[-0.01em] transition-colors duration-300
          text-gray-300 group-hover:text-white
             
            `}>
            {item.label}
          </span>
        </Link>
      </motion.div>
    );
  };

  /*
   * ---------------------------------------------------------
   * Navigation
   * ---------------------------------------------------------
   */

  const Nav = () => {
    return (
      <nav
        aria-label="Primary navigation"
        className="hidden md:flex items-center gap-6 text-sm font-medium text-white mr-8">
        <ul className="flex items-center gap-10">

          <li>
            <Link to="/" className="flex items-center text-white transition-colors duration-200 hover:text-white/70">Home</Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              type="button"
              className="
                group
                flex
                items-center
                py-2
                px-3
                md:p-0
                text-white
                transition-colors
                duration-200
                hover:text-white/70
              "
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <span>Services</span>

              <motion.svg
                className="ml-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                animate={{
                  rotate: isDropdownOpen ? 180 : 0,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="m19 9-7 7-7-7"
                />
              </motion.svg>
            </button>

           {/* // ${isAIConsultingPage ? "bg-[#fff]/40" : "bg-[#101319]/60"} */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -15,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                    absolute
                    left-1/2
                    top-full
                    z-[999]
                    mt-8
                    min-w-[250px]
                    -translate-x-1/2
                    overflow-visible
                    rounded-lg
                    border-1
                    border-white/[0.1]
                    backdrop-blur-[24px]
                    bg-[#101319]/60
                    
                    shadow-[0_5px_20px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.08),inset_0_0_40px_rgba(255,255,255,0.025)]
                    p-2                    
                  `}
                >

                  <div className="absolute -top-9 left-0 right-0 h-9"/>
                  <div className="pointer-events-none absolute -top-[50px] -right-[50px] h-[100px] w-[100px] rounded-full bg-blue-500/[0.2] blur-[50px]"/>
                  <div className="pointer-events-none absolute -bottom-[50px] left-[25%] h-[100px] w-[100px] rounded-full bg-blue-500/[0.3] blur-[50px]"/>
                  
                  <div className="relative z-10 flex flex-col gap-2">
                    {links.map((item, index) => <MegaMenuItem key={item.link} item={item} index={index} />)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li><Link to="/aboutus" className="flex items-center text-white transition-colors duration-200 hover:text-white/70">About Us</Link></li>
          <li><Link to="/blogs" className="flex items-center text-white transition-colors duration-200 hover:text-white/70">Blog</Link></li>
          <li><Link to="/contactus" className="flex items-center text-white transition-colors duration-200 hover:text-white/70">Contact</Link></li>
        </ul>
      </nav>
    );
  };


  const getContainerClass = () => {
    if (isScrolled || !isHomePage) {
      return `
        bg-[#01182e]
        shadow-[
          inset_0_0_25px_rgba(16,149,195,0.1),
          inset_0_0_6px_rgba(16,149,195,0.12),
          0_4px_20px_rgba(255,255,255,0.05)
        ]
      `;
    }
    return "";
  };

  const getHeaderClass = () => {
    if (isScrolled || !isHomePage) {
      return `shadow-[inset_0_0_25px_rgba(16,149,195,0.12), inset_0_0_6px_rgba(16,149,195,0.08), 0_4px_20px_rgba(0,0,0,0.15)]`;
    }
    return `bg-white/[0.03] border border-white/[0.10] rounded-xl px-4`;
  };

  return (
      <div
        ref={headerRef}
        className={`
          fixed
          left-0
          right-0
          ${isHomePage ? "top-0" : ""}
          z-[100]
          flex
          items-center
          justify-between
          md:px-4
          py-3
          transition-all
          duration-300
          ${getContainerClass()}
        `}
      >
      <header className={`container-wrapper-transparent flex items-center justify-between ${getHeaderClass()}`}>

        <div className="w-1/2 md:w-1/3 py-3">
          <Logo />
        </div>


        <div className="flex w-1/2 md:w-2/3 items-center justify-end text-right">

          <Nav />

          {/* =================================================
              MOBILE MENU
          ================================================= */}

          <button
            type="button"
            name="Menu"
            aria-label="Menu"
            onClick={() => setFlyoutOpen(true)}
            className="
              -mr-2
              inline-flex
              items-center
              justify-center
              text-gray-700
              transition
              hover:text-blue-800
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              lg:hidden
            "
          >
            <MenuIcon className="h-10 w-10 text-white" />
          </button>

            {flyoutOpen && (
              // <FlyoutNav
              //   open={flyoutOpen}
              //   setOpen={setFlyoutOpen}
              // />
              <MobileMenu
                isOpen={flyoutOpen}
                onClose={() => setFlyoutOpen(false)}
              />
            )}

          {/* Start a Project */}
          <Actions />

        </div>
      </header>
    </div>
  );
};

export default Header;