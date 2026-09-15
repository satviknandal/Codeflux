import footerbg from "../../assets/footerbg.png";
import { useNavigate } from "react-router-dom";
import LinkedinIcon from "../../shared/svg/social/LinkedinIcon";
import FacebookIcon from "../../shared/svg/social/FacebookIcon";
import XIcon from "../../shared/svg/social/XIcon";
import InstagramIcon from "../../shared/svg/social/InstagramIcon";

type SocialName = "facebook" | "twitter" | "instagram" | "linkedin";

const footerLinks = {
  Services: [
    {
      label: "Our Services",
      path: "services",
    },
    {
      label: "AI Services",
      path: "services/aiservices",
    },
    {
      label: "AI Consulting",
      path: "services/aiconsulting",
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
    {
      label: "Mobile App Services",
      path: "services/mobileappservices",
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
  Resources: [
    {
      label: "FAQ",
      path: "faq",
    },
    {
      label: "Blogs",
      path: "blogs",
    }
  ],
};

function SocialIcon({ name }: { name: SocialName }) {
 if(name === "linkedin") return <LinkedinIcon/>;
 if(name === "facebook") return <FacebookIcon width={30} height={30} />;
 if(name === "twitter") return <XIcon width={24} height={24}/>;
 if(name === "instagram") return <InstagramIcon width={32} height={32} />;
 
}

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="relative w-full overflow-hidden bg-[#012546] text-[#f7f9fc]">
      <img src={footerbg} alt="" className="absolute top-[60px] w-full object-cover" />

      <div className="relative mx-auto w-[90%] max-w-[1400px] pt-[300px] pb-0">

        <div className="relative z-10 grid grid-cols-1 gap-12 
          md:grid-cols-2 
          lg:grid-cols-[1.2fr_repeat(2,0.7fr)] 
          xl:grid-cols-[1.2fr_repeat(3,0.7fr)]"
        >
          {/* Brand */}
          <div className="max-w-[350px]">
            <div className="mb-10">
              <h3 className="relative mb-6 text-[16px] font-semibold uppercase text-[#77d8ff]">Follow us</h3>

              <p className="mb-6 text-sm leading-[1.45] text-[#f3f5f8]">
                Get the latest news, updates, and tech tips by following
                Codeflux on LinkedIn.
              </p>
              <div className="flex items-start relative">

                <a
                  href="/"
                  aria-label="Codeflux LinkedIn"
                  className="inline-flex items-center justify-center rounded-full bg-gray-400 w-[48px] h-[48px] p-2 text-black mr-2"
                >
                  <SocialIcon name="linkedin" />
                </a>
                <a
                  href="/"
                  aria-label="Codeflux LinkedIn"
                  className="inline-flex items-center justify-center rounded-full bg-gray-400 w-[48px] h-[48px] p-2 text-black mr-2"
                >
                  <SocialIcon name="facebook" />
                </a>
                <a
                  href="/"
                  aria-label="Codeflux LinkedIn"
                  className="inline-flex items-center justify-center rounded-full bg-gray-400 w-[48px] h-[48px] p-2 text-black mr-2"
                >
                  <SocialIcon name="instagram" />
                </a>
                <a
                  href="/"
                  aria-label="Codeflux LinkedIn"
                  className="inline-flex items-center justify-center rounded-full bg-gray-400 w-[48px] h-[48px] p-2 text-black mr-2"
                >
                  <SocialIcon name="twitter" />
                </a>
              </div>

            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <nav
              key={heading}
              aria-label={heading}
              className="flex flex-col gap-3"
            >
              <h3 className="relative mb-3 text-[16px] font-semibold uppercase text-[#77d8ff]">
                {heading}
              </h3>

              {links.map((link) => (
                <span
                  key={link.path}
                  onClick={() => {
                    window.scrollTo(0,0);
                    navigate(link.path)
                  }}
                  className="cursor-pointer text-sm text-[#f3f5f8]
                  transition hover:text-[#7be2fc]"
                >
                  {link.label}
                </span>
              ))}
            </nav>
          ))}
        </div>
      </div>
      <div className="bg-[#01182e]">
        <div
          className="mx-auto w-[90%] max-w-[1400px] mt-20 grid w-screen
          grid-cols-1 gap-4 py-5 text-xs font-normal text-[#4d666b]
          md:grid-cols-2 md:items-center"
        >
         
          <span className="text-left">
            © 2026 Codeflux Pty Ltd. All rights reserved.
          </span>
          <div className="flex flex-row gap-6 justify-end">
            <span 
              className="cursor-pointer transition hover:text-[#7be2fc]" 
              onClick={() => {
                window.scrollTo(0,0);
                navigate('privacypolicy')
              }}>
                Privacy Policy
              </span>
              <span 
              className="cursor-pointer transition hover:text-[#7be2fc]" 
              onClick={() => {
                window.scrollTo(0,0);
                navigate('termsofservice')
              }}>
                Terms of Service
              </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;