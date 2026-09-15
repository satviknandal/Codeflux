import { useEffect, useRef, useState } from 'react';
import MenuIcon from '../../shared/svg/MenuIcon';
import logo from "../../assets/codeflux-logo.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  // const [headerHeight, setHeaderHeight] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  // Detect window scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   if (flyoutOpen) {
  //     if (headerRef.current) {
  //       setHeaderHeight(headerRef.current.offsetHeight);
  //     }
  //   } else {
  //     setHeaderHeight(0);
  //   }
  // }, [flyoutOpen]);

useEffect(() => {
  // Internal pages always use the scrolled header
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

  const Logo = () => {
    return (
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="h-[36px] md:h-[40px]"
        />
      </Link>
    );
  };

  const Actions = () => {
    return (
      <div className="flex items-center justify-end gap-1 md:gap-3 md:mr-2">
        <button
          className="cursor-pointer hidden md:inline-flex min-h-5 md:min-h-10 items-center rounded-full bg-gradient-to-br from-[#1d66fc] to-[#7c37fc] px-4 md:px-7 text-xs md:text-[14px] md:font-extrabold text-white"
          onClick={() => navigate('/contactus')}
        >
          Start a Project
        </button>
      </div>
    );
  };

  const Nav = () => {
    const links = [
      { label: "AI Consulting", link: '/services/aiconsulting' },
      { label: "AI Services", link: '/services/aiservices' },
      { label: "Software Development", link: '/services/softwaredevelopmentservices' },
      { label: "Web Development", link: '/services/webdevelopmentservices' },
      { label: "Web Design UI/UX", link: '/services/webdesignuiux' },
      { label: "Mobile App Services", link: '/services/mobileappservices' },
      { label: "Cloud Solutions", link: '/services/cloudsolutionsservices' }
    ];

    return (
      <nav
        aria-label="Primary navigation"
        className="hidden md:flex items-center gap-6 text-sm font-bold text-white mr-8"
      >
        <ul className="flex items-center gap-10">

          <li>
            <Link to="/" className="flex items-center text-white">
              Home
            </Link>
          </li>

          <li className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex items-center py-2 px-3 text-white md:p-0"
              aria-expanded={isDropdownOpen}
            >
              Services

              <motion.svg
                className="w-4 h-4 ms-1.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                animate={{
                  rotate: isDropdownOpen ? 180 : 0
                }}
                transition={{ duration: 0.2 }}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </motion.svg>
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                    scale: 0.95
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                    scale: 0.95
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut"
                  }}
                  className="absolute left-0 top-full mt-3 z-50 bg-white border rounded-lg shadow-lg origin-top w-50"
                >
                  <ul className="p-2 text-left text-sm font-medium text-gray-700">
                    {links.map((obj) => (
                      <li key={obj.link}>
                        <Link
                          to={obj.link}
                          className="p-2 flex items-center rounded hover:bg-gray-100"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {obj.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link to="/aboutus" className="flex items-center text-white">
              About Us
            </Link>
          </li>

          <li>
            <Link to="/blogs" className="flex items-center text-white">
              Blog
            </Link>
          </li>

          <li>
            <Link to="/contactus" className="flex items-center text-white">
              Contact
            </Link>
          </li>

        </ul>
      </nav>
    );
  };

  const getContainerClass = () => {
    if(isScrolled && isHomePage) {
      return "bg-[#01182e] shadow-[inset_0_0_25px_rgba(16,149,195,0.1),inset_0_0_6px_rgba(16,149,195,0.12),0_4px_20px_rgba(255,255,255,0.05)]";
    } else if (!isHomePage) {
        return "bg-[#01182e] shadow-[inset_0_0_25px_rgba(16,149,195,0.1),inset_0_0_6px_rgba(16,149,195,0.12),0_4px_20px_rgba(255,255,255,0.05)]";
    }
    return ""
  }

  const getHeaderClass = () => {
    if(isScrolled && isHomePage) {
      return "py-3 shadow-[inset_0_0_25px_rgba(16,149,195,0.12),inset_0_0_6px_rgba(16,149,195, 0.08),0_4px_20px_rgba(0,0,0,0.15)]";
    } else if (!isHomePage) {
        return "py-3 shadow-[inset_0_0_25px_rgba(16,149,195,0.12),inset_0_0_6px_rgba(16,149,195, 0.08),0_4px_20px_rgba(0,0,0,0.15)]";
    }
    return "bg-white/[0.03] border border-white/[0.10] rounded-xl py-3 px-4"
  }

  return (
      <div
          ref={headerRef}
          className={`
            fixed left-0 right-0
            ${isHomePage ? "top-0" : ""}
            z-[100]
            flex items-center justify-between
            md:px-4 py-3
            transition-all duration-300
            ${getContainerClass()}
          `}
        >
        <header
          ref={headerRef}
          className={`
            container-wrapper-transparent
            flex items-center justify-between
            ${getHeaderClass()}
          `}
        > 
        <div className="w-1/2"><Logo /></div>
        

        <div className="text-right flex items-center justify-end w-1/2">
          <Nav />

          <button
            type="button"
            name="Menu"
            aria-label="Menu"
            onClick={() => setFlyoutOpen(!flyoutOpen)}
            className="lg:hidden inline-flex items-center justify-center text-gray-700 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition -mr-2"
          >
            <MenuIcon className="h-10 w-10 text-white" />
          </button>
          <Actions />
        </div>

      </header>
    </div>
  );
};

export default Header;