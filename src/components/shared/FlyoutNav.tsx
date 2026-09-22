import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/codeflux-logo.png";
import {
  XIcon,
  Sparkles,
  BrainCircuit,
  Code2,
  Globe2,
  Palette,
  Smartphone,
  Cloud,
} from "lucide-react";

interface FlyoutNavProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}

interface FlyoutLinkProps {
  to: string;
  children: React.ReactNode;
}

const navigationlinks = {
  Services: [
    {
      label: "Our Services",
      link: "/services",
      icon: BrainCircuit,
    },
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
  ],

  Company: [
    {
      label: "About Us",
      link: "/aboutus",
      icon: BrainCircuit,
    },
    {
      label: "Team",
      link: "/team",
      icon: BrainCircuit,
    },
    {
      label: "Blogs",
      link: "/blogs",
      icon: BrainCircuit,
    },
    {
      label: "Client Stories",
      link: "/clientstories",
      icon: BrainCircuit,
    },
    {
      label: "Careers",
      link: "/careers",
      icon: BrainCircuit,
    },
    {
      label: "Contact Us",
      link: "/contactus",
      icon: BrainCircuit,
    },
  ],
};

const FlyoutNav = ({
  open,
  setOpen,
}: FlyoutNavProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, setOpen]);

  const FlyoutLink = ({to, children}: FlyoutLinkProps) => {
    const isExternal = to.startsWith("http");
    const classes = "block text-sm font-normal text-white hover:text-cyan-400 transition-colors duration-200";
    if (isExternal) {
      return <a href={to} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className={classes}>{children}</a>
    }
    return <Link to={to} onClick={() => setOpen(false)} className={classes}>{children}</Link>
  };

  if (!open) {
    return null;
  }

  return createPortal(
    <div
      className="
        fixed
        inset-0
        z-[999999]
        lg:hidden
      "
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
      }}
    >

      <nav className="relative flex flex-col left-0 top-0 h-[100dvh] w-full overflow-y-auto bg-gradient-to-br from-[#0a4985] to-[#012546]" style={{zIndex: 1000000}}>
        <div className="flex justify-between p-5 h-[100px] max-h-[100px] text-right border-b-[1px] border-b-black/25 bg-black/20">
          <img src={logo} className="h-10"/>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="z-[1000001] text-white transition hover:text-cyan-300"
          >
            <XIcon className="h-8 w-8"/>
          </button>

        </div>

        <div className="h-[calc(100vh - 200px)] p-5 overflow-scroll">
          <div className="mb-8 space-y-3">
            <FlyoutLink to="/">Home</FlyoutLink>
            {/* <FlyoutLink to="/services">Services</FlyoutLink>
            <FlyoutLink to="/aboutus">About Us</FlyoutLink>
            <FlyoutLink to="/blogs">Blog</FlyoutLink>
            <FlyoutLink to="/contactus">Contact</FlyoutLink> */}
          </div>

          <div className="flex flex-col gap-8 text-white">

            {Object.entries(navigationlinks).map(
              ([heading, links]) => (
                <div key={heading}>

                  <h3
                    className="
                      relative
                      mb-6
                      inline-block
                      text-[16px]
                      font-semibold
                      uppercase
                      text-[#a1b8ff]
                      after:absolute
                      after:left-0
                      after:-bottom-2
                      after:h-[2px]
                      after:w-full
                      after:bg-[#a1b8ff]
                    "
                  >
                    {heading}
                  </h3>

                  <div className="flex flex-col gap-3">

                    {links.map((link) => {
                      const Icon = link.icon;

                      return <button
                        key={link.link}
                        type="button"
                        onClick={() => {
                          setOpen(false);
                          navigate(link.link);
                        }}
                        className="flex gap-2.5 py-3 border-b border-b-amber-50/10 text-left text-sm text-[#f3f5f8] transition hover:text-[#7be2fc]"
                      >
                        <Icon size={16} strokeWidth={0.8} className={`transition-transform duration-300 group-hover:scale-110 
                          group-hover:text-white"
                        `}/>
                        {link.label}
                      </button>
                    }
                    )}

                  </div>
                </div>
              )
            )}

          </div>

         

        </div>

        <div className="p-5 h-[100px] max-h-[100px]">
           <button
              type="button"
              className="
                w-[320px]
                cursor-pointer
                min-h-12
                items-center
                rounded-full
                bg-gradient-to-br
              from-[#1d66fc]
              to-[#7c37fc]
                border border-white/30
                px-12
                text-sm
                text-white
              "
              onClick={() => navigate("/contactus")}
            >
              Start a Project
            </button>
        </div>

      </nav>

    </div>,
    document.body
  );
};

export default FlyoutNav;