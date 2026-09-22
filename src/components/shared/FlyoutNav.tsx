import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import CloseXIcon from "../../shared/svg/CloseXIcon";

interface FlyoutNavProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}

interface FlyoutLinkProps {
  to: string;
  children: React.ReactNode;
}

const footerLinks = {
  Services: [
    {
      label: "Our Services",
      path: "/services",
    },
    {
      label: "AI Consulting",
      path: "/services/aiconsulting"
    },
    {
      label: "AI Services",
      path: "/services/aiservices"
    },
    {
      label: "Software Development",
      path: "/services/softwaredevelopmentservices"
    },
    {
      label: "Web Development",
      path: "/services/webdevelopmentservices"
    },
    {
      label: "Web Design UI/UX",
      path: "/services/webdesignuiux"
    },
    {
      label: "Mobile App Services",
      path: "/services/mobileappservices"
    },
    {
      label: "Cloud Solutions",
      path: "/services/cloudsolutionsservices"
    },
  ],

  Company: [
    {
      label: "About Us",
      path: "/aboutus",
    },
    {
      label: "Team",
      path: "/team",
    },
    {
      label: "Blogs",
      path: "/blogs",
    },
    {
      label: "Client Stories",
      path: "/clientstories",
    },
    {
      label: "Careers",
      path: "/careers",
    },
    {
      label: "Contact Us",
      path: "/contactus",
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

      <nav className="relative flex flex-col p-6 left-0 top-0 h-[100dvh] w-full overflow-y-auto bg-gradient-to-br from-[#0a4985] to-[#012546]" style={{zIndex: 1000000}}>
        <div className="h-[100px] max-h-[100px] text-right">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="z-[1000001] text-white transition hover:text-cyan-300"
          >
            <CloseXIcon className="h-8 w-8" />
          </button>

        </div>

        <div className="h-[calc(100vh - 200px)] overflow-scroll">
          <div className="mb-8 space-y-3">
            <FlyoutLink to="/">Home</FlyoutLink>
            {/* <FlyoutLink to="/services">Services</FlyoutLink>
            <FlyoutLink to="/aboutus">About Us</FlyoutLink>
            <FlyoutLink to="/blogs">Blog</FlyoutLink>
            <FlyoutLink to="/contactus">Contact</FlyoutLink> */}
          </div>

          <div className="flex flex-col gap-8 text-white">

            {Object.entries(footerLinks).map(
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
                      after:w-[108px]
                      after:bg-[#a1b8ff]
                    "
                  >
                    {heading}
                  </h3>

                  <div className="flex flex-col gap-3">

                    {links.map((link) => (
                      <button
                        key={link.path}
                        type="button"
                        onClick={() => {
                          setOpen(false);
                          navigate(link.path);
                        }}
                        className="text-left text-sm text-[#f3f5f8] transition hover:text-[#7be2fc]"
                      >
                        {link.label}
                      </button>
                    ))}

                  </div>
                </div>
              )
            )}

          </div>

         

        </div>

        <div className="bottom-0 pt-8 h-[75px] max-h-[75px]">
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