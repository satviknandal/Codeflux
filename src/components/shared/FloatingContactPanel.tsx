import React from "react";
import { CalendarDays, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FloatingContactPanel: React.FC = () => {
  const navigate = useNavigate();

  // Replace this with your actual Calendly URL
  const calendlyUrl = "https://calendly.com/YOUR-CALENDLY-LINK";

  const whatsappNumber = "61478575587";
  const phoneNumber = "+61478575587";

  const openCalendly = () => {
    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank", "noopener,noreferrer");
  };

  const goToContact = () => {
    navigate("/contactus");
  };

  const callUs = () => {
    window.location.href = `tel:${phoneNumber}`;
  };


  return (
    <div className="
        fixed
        left-1/2
        right-auto
        z-[100]
        flex
        flex-row
        gap-2.5
        -translate-x-1/2
        max-md:top-auto
        max-md:bottom-4
        max-md:translate-y-0
        md:right-5
        md:top-1/2
        md:left-auto
        md:-translate-y-1/2
        md:flex-col
        md:translate-x-0
        rounded-full
        p-3
        md:p-0
        bg-white/25
        md:bg-transparent
        max-md:backdrop-blur-xl
        max-md:shadow-[
            inset_0_0_8px_rgba(255,255,255,0.95),
            inset_0_0_20px_rgba(255,255,255,0.55),
            0_6px_30px_rgba(0,0,0,0.12)
        ]
        md:shadow-none
        "
    aria-label="Contact options"
    >
      
      <button
        type="button"
        onClick={openWhatsApp}
        aria-label="Chat with us on WhatsApp"
        className="
          group
          flex w-[36px] h-[36px]
          items-center
          justify-center
          rounded-full
          md:border
          md:border-white/20
          md:bg-white/40
          shadow-[0_5px_20px_rgba(0,0,0,0.10)]
          transition-all
          duration-300
          ease-out
          hover:scale-[1.08]
          hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]
          focus:outline-none
          focus:ring-4
          focus:ring-sky-200/50
          md:h-[48px]
          md:w-[48px]
          cursor-pointer
        "
      >
        <WhatsAppIcon
            size={24}
            className="text-slate-900 transition-transform duration-300"
            />
      </button>

      {/* =========================================================
          CALENDAR / CALENDLY
      ========================================================= */}
      <button
        type="button"
        onClick={openCalendly}
        aria-label="Book a meeting"
        className="
          group
          flex h-[36px] w-[36px]
          items-center
          justify-center
          rounded-full
          md:border
          md:border-white/20
          md:bg-white/40
          shadow-[0_5px_20px_rgba(0,0,0,0.10)]
          transition-all
          duration-300
          ease-out
          hover:scale-[1.08]
          hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]
          focus:outline-none
          focus:ring-4
          focus:ring-sky-500/50
          md:h-[48px]
          md:w-[48px]
          cursor-pointer
        "
      >
        <CalendarDays size={24} className="text-slate-900 transition-transform duration-300"
        />
      </button>

      {/* =========================================================
          EMAIL / CONTACT US
      ========================================================= */}
      <button
        type="button"
        onClick={goToContact}
        aria-label="Contact us"
        className="
          group
          flex h-[36px] w-[36px]
          items-center
          justify-center
          rounded-full
          md:border
          md:border-white/20
          md:bg-white/40
          shadow-[0_5px_20px_rgba(0,0,0,0.10)]
          transition-all
          duration-300
          ease-out
          hover:scale-[1.08]
          hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]
          focus:outline-none
          focus:ring-4
          focus:ring-sky-500/50
          md:h-[48px]
          md:w-[48px]
          cursor-pointer
        "
      >
        <Mail size={24} className="text-slate-900 transition-transform duration-300"/>
      </button>

      {/* =========================================================
          PHONE
      ========================================================= */}
      <button
        type="button"
        onClick={callUs}
        aria-label="Call us"
        className="
          group
          flex h-[36px] w-[36px]
          items-center
          justify-center
          rounded-full
          md:border
          md:border-white/20
          md:bg-white/40
          shadow-[0_5px_20px_rgba(0,0,0,0.10)]
          transition-all
          duration-300
          ease-out
          hover:scale-[1.08]
          hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]
          focus:outline-none
          focus:ring-4
          focus:ring-sky-500/50
          md:h-[48px]
          md:w-[48px]
          cursor-pointer
        "
      >
        <Phone size={20} className="text-slate-900 transition-transform duration-300"/>
      </button>
    </div>
  );
};

interface WhatsAppIconProps {
  size?: number;
  className?: string;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  size = 35,
  className = "",
}) => {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="
          M16 3.5
          C9.1 3.5 3.5 9.1 3.5 16
          C3.5 18.2 4.1 20.3 5.2 22.1
          L3.5 28.5
          L10.1 26.8
          C11.9 27.8 13.9 28.3 16 28.3
          C22.9 28.3 28.5 22.7 28.5 15.8
          C28.5 8.9 22.9 3.5 16 3.5Z
        "
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="
          M11.2 9.7
          C11.6 9.3 12 9.3 12.3 9.6
          L13.8 11.4
          C14.1 11.8 14.1 12.1 13.9 12.5
          L13.1 13.5
          C12.9 13.8 12.9 14.1 13.1 14.4
          C13.7 15.5 14.8 16.7 15.9 17.3
          C16.2 17.5 16.5 17.5 16.8 17.2
          L17.7 16.3
          C18 16 18.4 16 18.8 16.2
          L20.9 17.2
          C21.3 17.4 21.4 17.8 21.3 18.2
          C21 19.3 20.2 20 19.2 20.2
          C17.8 20.4 15.8 19.6 13.8 18
          C12.1 16.6 10.6 14.7 10.1 13.2
          C9.6 11.7 10.2 10.3 11.2 9.7Z
        "
        fill="currentColor"
      />
    </svg>
  );
};

export default FloatingContactPanel;