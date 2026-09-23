import React from "react";
import { GlobeIcon, DollarSignIcon, LinkIcon, StarIcon } from "lucide-react";
import CompHeader from "../shared/CompHeader";

const WhyChooseCodefluxAIConsulting: React.FC = () => {
  const features = [
    {
      icon: GlobeIcon,
      title: "Faster time to value",
      description: "Instead of spending 12 months experimenting, engagements shorten the path to impact. Clients see working solutions in weeks instead of years.",
    },
    {
      icon: DollarSignIcon,
      title: "Cost savings that compound",
      description: "Avoid sunk costs from failed pilots and endless rebuilds. Guidance ensures every dollar spent moves you closer to measurable ROI.",
    },
    {
      icon: LinkIcon,
      title: "Seamless team integration",
      description: "Rather than dropping in and dictating, our AI consultants embed alongside your team to guide, train, and build capability that lasts long after the engagement ends.",
    },
    {
      icon: StarIcon,
      title: "AI that actually sticks",
      description: "With change management and adoption support, solutions become part of daily operations and stay valuable long-term.",
    },
  ];

  return (
    <section className="py-6 md:py-20 relative overflow-hidden bg-pink-700">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.18]"
        style={{ backgroundImage: "url('https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/06/15143844/why-businesses-choose-sdlc-corp.webp')"}}
      />
 
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(135deg,rgba(229,43,139,0.88)_0%,rgba(94,38,242,0.72)_50%,rgba(229,43,139,0.8)_90%)]" />

      <div className="pointer-events-none absolute inset-0 z-[2] opacity-100" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "28px 28px"}}/>

      {/* Top Glow */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 z-[2] h-[500px] w-[500px]"
        style={{background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 45%)" }} 
      />

      <div className="pointer-events-none absolute -bottom-[60px] -left-[60px] z-[2] h-[380px] w-[380px]" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 30%)"}} />

      {/* Content */}
      <div className="relative z-[3] mx-auto container-wrapper-transparent">
        <CompHeader
            highlighter="Why Choose Us"
            title="Why Choose Codeflux"
            subheading="From the first scoping call to post-launch support, we are accountable for the complete outcome. One team, full lifecycle, zero hand-offs."
            variant="pinkgradient"
        />

        <div className="mb-[22px] grid grid-cols-1 gap-2 md:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/[0.07] bg-white/[0.1] px-[22px] py-7 transition-all duration-300 hover:-translate-y-[5px] hover:border-pink-400/20 hover:bg-white/[0.15] hover:shadow-[0_20px_52px_rgba(255,255,255,0.05),0_4px_14px_rgba(255,255,255,0.12)]"
              >
                <span className="absolute left-0 top-0 h-[2px] w-0 rounded-t-2xl bg-pink-400 transition-all duration-500 ease-out group-hover:w-full" />

                <span className="pointer-events-none absolute inset-0 z-0" style={{backgroundImage: "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "18px 18px"}}/>

                <div className="relative z-[1]">
                  <div className="mb-4 flex w-8 h-8 md:h-12 md:w-12 items-center justify-center rounded-md md:rounded-xl border border-pink-300/30 bg-pink-200/15 transition-all duration-300 group-hover:scale-[1.08] group-hover:border-pink-400 group-hover:bg-pink-500">
                    <Icon size={20} strokeWidth={2} className="text-pink-100 transition-colors duration-300 group-hover:text-white"/>
                  </div>
                  <h3 className="mb-2.5 text-md md:text-[18px] font-medium leading-[1.25] text-white">{feature.title}</h3>
                  <p className="text-sm font-normal leading-[1.5] text-gray-200/90">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCodefluxAIConsulting;