import React from "react";
import {
  FaGlobe,
  FaFileInvoiceDollar,
  FaInfinity,
  FaStar,
} from "react-icons/fa";
import CompHeader from "../shared/CompHeader";

interface WhyChooseCodefluxTestingServicesProps {
  onCtaClick?: () => void;
}

const WhyChooseCodefluxTestingServices: React.FC<WhyChooseCodefluxTestingServicesProps> = () => {
  const features = [
    {
      icon: FaGlobe,
      title: "Engineering Tenure",
      description: "Shipping digital products since 2015 across multiple industries and tech stacks.",
    },
    {
      icon: FaGlobe,
      title: "Tool-Agnostic Practice",
      description: "We pick test frameworks based on your stack and release shape, not vendor relationships.",
    },
    {
      icon: FaFileInvoiceDollar,
      title: "Global Delivery",
      description: "Our engineers span across the US, UK, Singapore, India, and Australia enable follow-the-sun coverage.",
    },
    {
      icon: FaInfinity,
      title: "AI-Augmented Testing",
      description: "Self-healing scripts, GenAI test data generation, and predictive defect models inside our toolchain.",
    },
    {
      icon: FaStar,
      title: "Transparent Reporting",
      description: "Weekly dashboards expose defect leakage, automation coverage, MTTD, and release readiness.",
    },
    {
      icon: FaStar,
      title: "Flexible Engagement",
      description: "Multiple engagement models and pricing structures, with onboarding inside two weeks for most projects.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-sky-700 py-6 md:py-20 font-sans"
      aria-label="Why choose Codeflux for testing services"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.18]"
        style={{
          backgroundImage:
            "url('https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/06/15143844/why-businesses-choose-sdlc-corp.webp')",
        }}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(135deg,rgba(12,11,29,0.88)_0%,rgba(12,11,29,0.72)_50%,rgba(12,11,29,0.88)_100%)]" />

      {/* Dot Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top Glow */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 z-[2] h-[500px] w-[500px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 65%)",
        }}
      />

      {/* Bottom Glow */}
      <div
        className="pointer-events-none absolute -bottom-[60px] -left-[60px] z-[2] h-[380px] w-[380px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[3] mx-auto container-wrapper-transparent">

        <CompHeader
          highlighter='Why Choose Us'
          title="Why Businesses Choose Codeflux"
          subheading="Engineering teams pick us as their software testing company for one reason: outcomes. Our QA outsourcing and offshore delivery hold cost discipline without losing release speed."
          variant="bluegradient"
        />

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-2 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] px-[22px] py-7 transition-all duration-300 hover:-translate-y-[5px] hover:border-sky-800/50 hover:bg-white/[0.06] hover:shadow-[0_20px_52px_rgba(0,0,0,0.3),0_4px_14px_rgba(37,99,235,0.12)]"
              >
                {/* Top animated line */}
                <span className="absolute left-0 top-0 h-[2px] w-0 rounded-t-2xl bg-sky-400 transition-all duration-500 ease-out group-hover:w-full" />

                {/* Card Dot Pattern */}
                <span
                  className="pointer-events-none absolute inset-0 z-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />

                <div className="relative z-[1]">
                  {/* Icon */}
                  <div className="mb-4 flex w-10 h-10 md:h-12 md:w-12 items-center justify-center rounded-xl border border-[#2563eb]/30 bg-[#2563eb]/15 transition-all duration-300 group-hover:scale-[1.08] group-hover:border-sky-600 group-hover:bg-sky-400">
                    <Icon className="text-[16px] md:text-[20px] text-sky-400 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2.5 text-base md:text-[18px] font-medium leading-[1.25] text-white">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-sm font-normal leading-[1.4] md:leading-[1.5] text-gray-300/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseCodefluxTestingServices;