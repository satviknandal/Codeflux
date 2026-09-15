import React, { useState } from "react";
import {
  Monitor,
  ShoppingCart,
  Laptop,
  WandSparkles,
  FileText,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import CompHeader from "../shared/CompHeader";

type Solution = {
  id: string;
  name: string;
  sub: string;
  icon: React.ElementType;
  image: string;
  alt: string;
  title: string;
  description: string;
  features: string[];
  outcome: string;
};

const solutions: Solution[] = [
  {
    id: "business",
    name: "Business Website",
    sub: "Leads and brand",
    icon: Monitor,
    image: "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/06/16152212/business-website-development-1.webp",
    alt: "Business website development",
    title: "Business Website Development",
    description: "Designed for businesses that want to strengthen their online presence, showcase their expertise, and build lasting customer trust.",
    features: [
      "Custom corporate website design",
      "SEO and performance optimization",
      "Responsive design across all devices",
      "Conversion-focused user experience",
    ],
    outcome: "a professional website that builds credibility, engages visitors, and turns traffic into qualified business leads.",
  },
  {
    id: "ecommerce",
    name: "Ecommerce Website",
    sub: "Sell online",
    icon: ShoppingCart,
    image: "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/06/16152207/ecommerce-website-development-1.webp",
    alt: "Ecommerce website development",
    title: "Ecommerce Website Development",
    description: "Ideal for businesses ready to sell online with a high-performing ecommerce experience designed to attract customers, simplify purchasing, and drive conversions.",
    features: [
      "Easy-to-manage product catalog, search and filtering",
      "Secure checkout and payment integration",
      "Inventory and order management",
      "Customer accounts and order tracking"
    ],
    outcome: "A scalable ecommerce store designed to increase conversions, repeat purchases, and online revenue.",
  },
  {
    id: "webapp",
    name: "Custom Web App",
    sub: "Portals and dashboards",
    icon: Laptop,
    image: "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/06/16152209/custom-web-application-1.webp",
    alt: "Custom web application development",
    title: "Custom Web Application",
    description: "Ideal for businesses looking to automate workflows, manage complex processes, and deliver tailored portals, dashboards, or SaaS platforms.",
    features: [
      "Scalable corporate website architecture",
      "Custom portals, dashboards and web applications",
      "Secure authentication and role-based access",
      "API, CRM and third-party integrations",
    ],
    outcome: "A scalable web application that streamlines workflows, reduces manual tasks, and helps your business operate more efficiently.",
  },
  {
    id: "redesign",
    name: "Website Redesign",
    sub: "Modernize and replatform",
    icon: WandSparkles,
    image: "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/06/16152210/website-redesign-and-replatform-1.webp",
    alt: "Website redesign and replatform",
    title: "Website Redesign and Replatform",
    description: "Ideal for businesses with an outdated website that want to modernize the design, improve performance, and deliver a better user experience.",
    features: [
      "Modern UI and improved user experience",
      "Performance and Core Web Vitals",
      "Mobile-first responsive design",
      "Seamless platform or technology migration",
    ],
    outcome: "A faster, modern website that improves user experience, strengthens conversions, and protects your existing search visibility.",
  },
  {
    id: "cms",
    name: "CMS Website",
    sub: "Easy content control",
    icon: FileText,
    image: "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/06/16152210/cms-website-development-1.webp",
    alt: "CMS website development",
    title: "CMS Website Development",
    description: "Ideal for businesses that need a flexible website their marketing team can easily update, manage, and publish content on without relying on developers.",
    features: [
      "Flexible CMS platform integration",
      "Editable content blocks and Pages",
      "Blog and content publishing capabilities",
      "Custom admin roles and permissions",
    ],
    outcome: "A flexible, easy-to-manage website that gives your team complete control over content and day-to-day updates.",
  },
  {
    id: "maintenance",
    name: "Maintenance and Growth",
    sub: "Support and improve",
    icon: Wrench,
    image: "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/06/16152211/maintenance-and-growth-1.webp",
    alt: "Website maintenance and growth",
    title: "Maintenance and Growth",
    description: "Ideal for businesses that want ongoing website support to keep their site secure, reliable, fast, and optimized as their business grows.",
    features: [
      "Regular updates and security maintenance",
      "Ongoing UX and conversion enhancements",
      "Performance and speed optimization",
      "Bug fixes and technical improvement",
    ],
    outcome: "A secure, reliable, high-performing website that stays optimized and improves continuously as your business evolves.",
  },
];

const WebDevelopmentSolutionFinder: React.FC = () => {
  const [activeId, setActiveId] = useState("business");

  const activeSolution = solutions.find((solution) => solution.id === activeId) ?? solutions[0];

  return (
   <section className="py-6 md:py-16 relative overflow-hidden bg-sky-500 py-[90px] font-sans">
      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(12,11,29,0.92)_0%,rgba(12,11,29,0.72)_50%,rgba(12,11,29,0.92)_100%)]"/>
      {/* Dot pattern */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:30px_30px]"/>
      {/* Top right glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_65%)]"/>
      {/* Bottom left glow */}
      <div className="pointer-events-none absolute -bottom-[60px] -left-[60px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.08)_0%,transparent_70%)]"/>
      
      <div className="relative z-[2] mx-auto container-wrapper-transparent">
        <CompHeader
            highlighter="Technology"
            title="Technology Solution for Your Business"
            subheading="Every business needs a different kind of website. Select your goal below and we will show you the right web development approach, what it includes, and the outcome you can expect."
            variant="bluegradient"
        />

        {/* Main content */}
        <div className="grid items-start gap-5 md:grid-cols-[240px_1fr]">
          {/* Tabs */}
          <div className="flex flex-col gap-2">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              const isActive = activeId === solution.id;

              return (
                <button
                  key={solution.id}
                  type="button"
                  onClick={() => setActiveId(solution.id)}
                  className={`
                    group flex w-full cursor-pointer items-center gap-3
                    rounded-xl border p-[13px_14px] text-left
                    transition-all duration-200
                    ${
                      isActive
                        ? "border-sky-800 bg-sky-800 shadow-[0_8px_24px_rgba(0,188,255,0.2)]"
                        : "border-white/[0.08] bg-white/[0.04] hover:border-sky-400/30 hover:bg-white/[0.1]"
                    }
                  `}
                >
                  <span
                    className={`
                      flex h-[34px] w-[34px] shrink-0 items-center justify-center
                      rounded-[9px] border transition-all duration-200
                      ${isActive ? "border-white/30 bg-white/20" : "border-[#2563eb]/30 bg-sky-400/15"}
                    `}
                  >
                    <Icon size={15} strokeWidth={1.8} className={isActive ? "text-white" : "text-[#60a5fa]"}/>
                  </span>

                  <span>
                    <span className={`block text-[13px] font-semibold leading-[1.25] ${isActive ? "text-white" : "text-white/80"}`}>
                      {solution.name}
                    </span>
                    <span className={`mt-0.5 block text-[11px] ${isActive ? "text-white/65" : "text-white/[0.38]"}`}>
                      {solution.sub}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content card */}
          <div
            key={activeSolution.id}
            className="
              overflow-hidden rounded-[20px]
              border border-[#2563eb]/20
              bg-white/[0.03]
              shadow-[0_0_0_1px_rgba(37,99,235,0.08),0_24px_64px_rgba(0,0,0,0.45)]
              animate-[sf3FadeIn_0.4s_ease_both]
            "
          >
            {/* Card top line */}
            <div className="h-px bg-[linear-gradient(90deg,transparent,#2563eb_50%,transparent)] opacity-70" />

            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[300px] overflow-hidden bg-[#154763] md:min-h-[350px]">
                <img
                  src={activeSolution.image}
                  alt={activeSolution.alt}
                  loading="lazy"
                  decoding="async"
                  className="
                    absolute inset-0 h-full w-full object-cover
                    object-center transition-transform duration-500
                    hover:scale-[1.03]
                  "
                />

                {/* Image gradient */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,rgba(8,10,28,0.4)_100%)]"/>
              </div>

              {/* Content */}
              <div
                className="
                  flex flex-col justify-center
                  border-l border-[#2563eb]/15
                  bg-white/[0.02]
                  px-7 py-8 sm:px-8 sm:py-9
                "
              >
                {/* Recommended */}
                <span
                  className="
                    mb-4 inline-flex w-fit items-center gap-1.5
                    rounded-full border border-sky-400/30
                    bg-sky-400/15 px-[13px] py-[5px]
                    text-[11px] font-semibold uppercase
                    tracking-[0.06em] text-sky-400
                  "
                >
                  <span className="h-[5px] w-[5px] rounded-full bg-sky-400" />
                  Recommended
                </span>

                <h3 className="m-0 mb-2.5 text-xl font-semibold leading-[1.3] tracking-[-0.01em] text-white">
                  {activeSolution.title}
                </h3>

                <p className="m-0 mb-[18px] text-[15px] font-normal leading-[1.4] text-gray-400">
                  {activeSolution.description}
                </p>

                {/* Divider */}
                <div className="mb-[18px] h-px w-full bg-[linear-gradient(90deg,#00bcff,rgba(0,188,255,0.08)_60%,transparent)]" />

                {/* Features */}
                <ul className="m-0 mb-5 flex list-none flex-col gap-2 p-0">
                  {activeSolution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-[14px] font-normal leading-[1.3] text-gray-300">
                      <CheckCircle2 size={15} strokeWidth={2} className="shrink-0 text-sky-400"/>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Outcome */}
                <p className="m-0 border-l-2 border-sky-400 pl-3 text-[14px] font-normal leading-[1.5] text-gray-400">
                  <strong className="font-semibold text-sky-400">Outcome:</strong>{" "}
                  {activeSolution.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-11 text-center">
          <a
            href="#contact-us"
            className="
              group relative inline-flex items-center gap-[9px]
              overflow-hidden rounded-[10px]
              bg-sky-600 px-[34px] py-[15px]
              text-[15px] font-semibold text-white
              no-underline
              shadow-[0_4px_20px_rgba(0,188,255,0.25)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-sky-700
              hover:shadow-[0_8px_28px_rgba(0,188,255,0.25)]
            "
          >
            {/* Shine */}
            <span
              className="
                absolute left-[-100%] top-0 h-full w-[60%]
                bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)]
                transition-all duration-500
                group-hover:left-[120%]
              "
            />

            <span className="relative z-[1]">Talk to Our Web Expert</span>

            <ArrowRight
              size={15}
              className="
                relative z-[1]
                transition-transform duration-200
                group-hover:translate-x-1
              "
            />
          </a>
        </div>
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes sf3FadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WebDevelopmentSolutionFinder;