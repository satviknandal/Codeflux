import React from "react";
import { ArrowRight } from "lucide-react";
import CompHeader from "../shared/CompHeader";

interface Industry {
  title: string;
  description: string;
  image: string;
  href: string;
  alt: string;
}

const industries: Industry[] = [
  {
    title: "FinTech UI/UX Design",
    description: "PCI-DSS aware banking and payments design.",
    image:
      "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/04/17124023/FinTech.webp",
    href: "/industries/fintech-software-development-company/",
    alt: "FinTech UI/UX design",
  },
  {
    title: "Healthcare UI/UX Design",
    description: "HIPAA aware design with WCAG 2.2 AA.",
    image:
      "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/04/16175222/healthcare.webp",
    href: "/industries/healthcare-software-development-company/",
    alt: "Healthcare UI/UX design",
  },
  {
    title: "eCommerce UI/UX Design",
    description: "Conversion-tested storefronts and checkout flows.",
    image:
      "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/04/16181024/ecommerce-and-eetail.webp",
    href: "https://sdlccorp.com/ecommerce-retail-development-company/",
    alt: "eCommerce UI/UX design",
  },
  {
    title: "Manufacturing UI/UX Design",
    description: "Production dashboards and shop-floor interfaces.",
    image:
      "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/04/22124118/manufacturing-Inventory.webp",
    href: "https://sdlccorp.com/manufacturing-software-development-company/",
    alt: "Manufacturing UI/UX design",
  },
  {
    title: "Logistics UI/UX Design",
    description: "Fleet tracking and driver app interfaces.",
    image:
      "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/03/06102413/Logistics-and-Supply-Chain.webp",
    href: "https://sdlccorp.com/logistic-software-development-company/",
    alt: "Logistics UI/UX design",
  },
  {
    title: "EdTech UI/UX Design",
    description: "LMS, student, and admin dashboards.",
    image:
      "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/04/16175731/edtech-and-e-learning.webp",
    href: "/industries/edtech-app-development-services/",
    alt: "EdTech UI/UX design",
  },
  {
    title: "Real Estate UI/UX Design",
    description: "Listings, agent, and broker dashboards.",
    image:
      "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/05/05162628/real_estate_image.webp",
    href: "https://sdlccorp.com/real-estate-app-development-company/",
    alt: "Real Estate UI/UX design",
  },
  {
    title: "Gaming UI/UX Design",
    description: "Cross-platform game UIs and HUDs.",
    image:
      "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/05/20131422/game-development.webp",
    href: "https://sdlccorp.com/game-development/",
    alt: "Gaming UI/UX design",
  },
];

const UIUXIndustries: React.FC = () => {
  return (
    <section className="radialgradient text-white">
        <div className="container-wrapper-transparent py-12 sm:py-[50px] lg:py-20">
            <CompHeader
              highlighter="Industries We Serve"
              title={<p>UI/UX Design Across <span className="text-sky-400">Industries</span></p>}
              subheading="Dedicated design pods for the verticals we ship in every quarter. In addition, each team trains on the compliance, workflows, and user behavior unique to your domain."
              variant="bluegradient"
            />

            {/* Industries Grid */}
            <div className="grid grid-cols-1 gap-2 md:gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {industries.map((industry) => (
                <a
                    key={industry.title}
                    href={industry.href}
                    aria-label={`Explore ${industry.title}`}
                    className="
                    group relative
                    flex flex-col
                    overflow-hidden
                    rounded-xl md:rounded-2xl
                    border border-white/[0.08]
                    bg-white/[0.07]
                    text-inherit no-underline
                    transition-all duration-500
                    ease-[cubic-bezier(.4,0,.2,1)]
                    hover:-translate-y-1.5
                    hover:border-[#2563eb]/50
                    hover:bg-[#2563eb]/[0.05]
                    hover:shadow-[0_30px_60px_-20px_rgba(0,132,209,.4),0_12px_24px_-12px_rgba(0,0,0,.4)]
                    "
                >
                    {/* Top hover line */}
                    <span
                    className="
                        absolute left-0 right-0 top-0 z-10
                        h-0.5
                        bg-gradient-to-r
                        from-transparent via-gray-600 to-transparent
                        opacity-0
                        transition-opacity duration-500
                        group-hover:opacity-100
                    "
                    />

                    {/* Image */}
                    <div className="relative h-[210px] overflow-hiddenbg-[#1a1932] lg:h-[200px]">
                    <img
                        src={industry.image}
                        alt={industry.alt}
                        loading="lazy"
                        decoding="async"
                        width={400}
                        height={320}
                        className="
                        block h-full w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-[cubic-bezier(.4,0,.2,1)]
                        group-hover:scale-[1.08]
                        "
                    />

                    {/* Image gradient */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0c0b1d]/0 via-[#0c0b1d]/10 to-[#0f0e22]/85"/>
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-1 flex-col p-3 md:p-6 gap-2">
                      <h3 className="text-base md:text-lg font-medium leading-[1.3] text-white transition-colors duration-300 group-hover:text-sky-400">
                          {industry.title}
                      </h3>
                      <p className="m-0 text-sm leading-[1.35] tracking-[0.2px] text-gray-300/90">
                          {industry.description}
                      </p>
                    </div>
                </a>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
                <a
                href="#contact-us"
                className="
                    inline-flex items-center gap-2.5
                    rounded-lg
                    bg-sky-600
                    px-[30px] py-3.5
                    text-[15px] font-semibold
                    text-white no-underline
                    shadow-[0_10px_24px_-6px_rgba(0,132,209,.4)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-sky-500
                    hover:shadow-[0_14px_32px_-6px_rgba(0,132,209,.55)]
                "
                >
                Hire a UI/UX Designer
                <ArrowRight size={14} />
                </a>
            </div>
        </div>
    </section>
  );
};

export default UIUXIndustries;