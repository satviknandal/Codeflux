import { useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import CloseXIcon from "../../shared/svg/CloseXIcon";

interface FlyoutNavProps {
  open: boolean;
  setOpen: (val: boolean) => void;
  headerHeight: number;
}

interface FlyoutLinkProps {
  to: string;
  children: React.ReactNode;
}

const footerLinks = {
  Services: [
    {
      label: "Our Services",
      path: "services",
    },
    {
      label: "AI services",
      path: "services/aiservices",
    },
    {
      label: "Software Development",
      path: "services/softwaredevelopmentservices",
    },
    {
      label: "Web Development",
      path: "services/webdevelopmentservices",
    },
    {
      label: "Web Design UI/UX",
      path: "services/webdesignuiux",
    },
    {
      label: "Cloud Solutions",
      path: "services/cloudsolutionsservices",
    },
  ],
  Company: [
    {
      label: "About Us",
      path: "aboutus",
    },
    {
      label: "Team",
      path: "team",
    },
    {
      label: "Client Stories",
      path: "clientstories",
    },
    {
      label: "Careers",
      path: "careers",
    },
    {
      label: "Contact",
      path: "contactus",
    },
  ],
};

const FlyoutNav = ({
  open,
  setOpen,
  headerHeight
}: FlyoutNavProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const FlyoutLink = ({ to, children }: FlyoutLinkProps) => {
    const isExternal = to.startsWith("http");
    const classes = "block text-sm font-normal text-white hover:text-cyan-400 transition";

    if (isExternal) {
      return (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        to={to}
        onClick={() => setOpen(false)}
        className={classes}
      >
        {children}
      </Link>
    );
  };

  const content = (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/60 transition-opacity duration-300 ${
          open
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Panel */}
      <nav
        ref={panelRef}
        className={`
          fixed
          left-0
          z-[9999]
          overflow-y-auto
          bg-[#094460]
          transition-transform duration-300 ease-in-out
          ${
            open
              ? "translate-y-0"
              : "-translate-y-full pointer-events-none"
          }

          top-0
          w-screen
          h-screen
          lg:w-full
          lg:h-auto
        `}
        style={{
          top:
            window.innerWidth >= 1024
              ? headerHeight
              : 0,
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-6 top-6 text-white"
        >
          <CloseXIcon className="h-8 w-8" />
        </button>

        <div className="h-[450px] mx-auto max-w-7xl px-8 py-20 lg:py-12">

          {/* Mobile Main Navigation */}
          <div className="lg:hidden space-y-3 border-b border-white/20 pb-6 mb-3">
            <FlyoutLink to="/">Home</FlyoutLink>
            <FlyoutLink to="/services">Services</FlyoutLink>
            <FlyoutLink to="/pages">Pages</FlyoutLink>
            <FlyoutLink to="/blog">Blog</FlyoutLink>
            <FlyoutLink to="/contact">Contact</FlyoutLink>
          </div>

          {/* Desktop / Additional Links */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-white">

            {/* Footer links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <nav
              key={heading}
              aria-label={heading}
              className="flex flex-col gap-3"
            >
              <h3
                className="relative mb-5 text-[16px] font-semibold uppercase text-[#77d8ff]
                after:absolute after:left-0 after:-bottom-2 after:h-[2px]
                after:w-[108px] after:bg-[#08899d]"
              >
                {heading}
              </h3>

              {links.map((link) => (
                <span
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className="cursor-pointer text-xs text-[#f3f5f8]
                  transition hover:text-[#7be2fc]"
                >
                  {link.label}
                </span>
              ))}
            </nav>
          ))}

            <div>
              <ul className="space-y-3">
                <li><FlyoutLink to="/about">About Us</FlyoutLink></li>
                <li><FlyoutLink to="/contact">Contact Us</FlyoutLink></li>
                <li><FlyoutLink to="https://police.wa.gov.au">WA</FlyoutLink></li>
              </ul>
            </div>

            <div>
              <ul className="space-y-3">
                <li><FlyoutLink to="/">Further Information</FlyoutLink></li>
                <li><FlyoutLink to="/">Home</FlyoutLink></li>
                <li><FlyoutLink to="/usefullinks">Useful Services</FlyoutLink></li>
                <li><FlyoutLink to="https://wa.gov.au">WA Government Search</FlyoutLink></li>
              </ul>
            </div>

            <div>
              <ul className="space-y-3">
                <li><FlyoutLink to="/">Contact</FlyoutLink></li>
                <p><FlyoutLink to="/">Replace this section with your contact
                information, address, social media links
                or any additional content.</FlyoutLink></p>
              </ul>
            </div>

          </div>
        </div>
      </nav>
    </>
  );

  return createPortal(content, document.body);
}

export default FlyoutNav