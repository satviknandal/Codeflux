import {
  FaShieldAlt,
  FaUserShield,
  FaHospital,
  FaLock,
  FaUniversalAccess,
  FaBug,
  FaExternalLinkAlt,
} from "react-icons/fa";
import CompHeader from "../shared/CompHeader";

const securityItems = [
  {
    icon: FaUserShield,
    title: "GDPR Compliance",
    description:
      "Privacy-by-design, consent flows, data minimisation, and right-to-erasure for EU apps.",
    link: "https://gdpr.eu",
    linkText: "EU GDPR Official",
  },
  {
    icon: FaHospital,
    title: "HIPAA-Aware",
    description:
      "AES-256 encrypted storage, audit logging, role-based access, and BAA support for healthcare.",
    link: "https://www.hhs.gov/hipaa/index.html",
    linkText: "HHS HIPAA Official",
  },
  {
    icon: FaLock,
    title: "Secure API Design",
    description:
      "OAuth 2.0, JWT auth, TLS 1.3, API rate limiting, and input validation throughout.",
  },
  {
    icon: FaShieldAlt,
    title: "End-to-End Encryption",
    description:
      "Data encrypted at rest and in transit. No plaintext storage of PII or credentials.",
  },
  {
    icon: FaUniversalAccess,
    title: "WCAG 2.2 AA",
    description:
      "VoiceOver, TalkBack, 4.5:1 contrast, touch targets, and screen-reader labels built in.",
    link: "https://www.w3.org/TR/WCAG22/",
    linkText: "W3C WCAG 2.2 Spec",
  },
  {
    icon: FaBug,
    title: "Pen Testing",
    description:
      "Third-party penetration testing coordinated for enterprise clients before go-live.",
  },
];

const MobileSecurityCompliance = () => {
  return (
    <section
      aria-label="Security and compliance"
      className="relative overflow-hidden bg-white py-6 md:py-20 font-sans"
    >
      {/* Dotted Background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(12,11,29,.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto container-wrapper-transparent">
        <CompHeader
          highlighter='Built-In by Design'
          title="Security &amp; Compliance in Every App We Build"
          subheading=" Security at Codeflux is an engineering requirement, not a checklist item added before delivery. Every layer of the stack is built with compliance in mind from day one."
          variant="default"
        />

        {/* Content */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Image */}
          <div className="relative flex flex-col">
            <div className="relative min-h-[400px] flex-1 overflow-hidden rounded-[18px] shadow-[0_24px_64px_rgba(12,11,29,0.1)]">
              <img
                src="https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/06/15113915/security-and-compliance-in-every-app-we-buildapp.webp"
                alt="Mobile app security and compliance by SDLC Corp"
                width={700}
                height={560}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
              />

              {/* Badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-xl border border-[#2563eb]/40 bg-[#0c0b1d]/95 px-[18px] py-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-lg">
                <FaShieldAlt className="shrink-0 text-xl text-sky-400" />

                <div>
                  <strong className="block text-sm font-semibold text-white">
                    Enterprise-Grade Security
                  </strong>

                  <span className="text-xs text-white/50">
                    GDPR · HIPAA · SOC2 Ready
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Security Cards */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {securityItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative flex flex-col overflow-hidden rounded-[14px] border border-[#c8d0e0] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563eb]/45 hover:shadow-[0_14px_36px_rgba(12,11,29,0.08),0_4px_10px_rgba(37,99,235,0.08)]"
                >
                  {/* Top Hover Line */}
                  <span className="absolute left-0 top-0 h-0.5 w-0 rounded-t-[14px] bg-sky-400 transition-all duration-400 ease-out group-hover:w-full" />

                  {/* Icon */}
                  <div className="mb-3 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[9px] bg-[#f0f4ff] transition-all duration-300 group-hover:scale-[1.08] group-hover:bg-sky-400">
                    <Icon className="text-base text-sky-500 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-1.5 text-[15px] font-semibold leading-[1.3] text-[#0c0b1d]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="flex-1 text-[13px] font-normal leading-[1.6] text-[#6b7280]">
                    {item.description}
                  </p>

                  {/* External Link */}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="mt-2.5 inline-flex w-fit items-center gap-1.5 text-[11px] font-semibold text-sky-600 opacity-75 transition-opacity duration-200 hover:opacity-100"
                    >
                      {item.linkText}
                      <FaExternalLinkAlt className="text-[9px]" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSecurityCompliance;