import React from "react";
import { BugOffIcon, CodeIcon, CodeXmlIcon, FolderKanbanIcon, GlobeIcon, WallpaperIcon } from "lucide-react";
import CompHeader from "../shared/CompHeader";

interface HarnessExceptionalTalentProps {
  // onCtaClick?: () => void;
}

const HarnessExceptionalTalent: React.FC<HarnessExceptionalTalentProps> = () => {
  const features = [
    {
      icon: CodeIcon,
      title: "Entry-Level Developers",
      description: "Our entry-level developers, who have accumulated 1 to 2 years of experience, possess a deep understanding of client requirements and ensure that the entire development process aligns with them. With their insightful knowledge, they strive to create exceptional and distinctive solutions.",
    },
    {
      icon: CodeXmlIcon,
      title: "Experienced Developers",
      description: "Our team of experienced developers, boasting 2 to 8 years of expertise, is highly skilled and proficient throughout the entire development cycle. They consistently deliver top-notch, error-free solutions, showcasing their best work.",
    },
    {
      icon: WallpaperIcon,
      title: "UI/UX Designers",
      description: "Recognizing the significance of websites for businesses in today’s fiercely competitive landscape, our web developers are well-versed in the latest web technologies. They provide exceptional web design and development services tailored to meet client requirements.",
    },
    {
      icon: GlobeIcon,
      title: "Web Developers",
      description: "Codeflux takes pride in its exceptional and dedicated team of web developers. With vast experience in the industry, our web developers possess a forward-thinking approach to web development.",
    },
    {
      icon: BugOffIcon,
      title: "Testers",
      description: "Quality assurance is of utmost importance in delivering successful solutions. At our company, we prioritize delivering high-quality solutions to the market. Our dedicated QA team meticulously scrutinizes every project we take on, guaranteeing the provision of flawless solutions to our valued clients.",
    },
    {
      icon: FolderKanbanIcon,
      title: "Project Managers",
      description: "Our project managers possess comprehensive knowledge of project management and execution. Codeflux is well-versed in IT development, and our project managers meticulously oversee every minute detail of the development process, ensuring client satisfaction.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-sky-700 py-10 md:py-20 font-sans"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.18]" style={{backgroundImage: "url('https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/06/15143844/why-businesses-choose-sdlc-corp.webp')",}}/>
      {/* Background Overlay */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(135deg,rgba(12,11,29,0.88)_0%,rgba(12,11,29,0.72)_50%,rgba(12,11,29,0.88)_100%)]" />
      {/* Dot Pattern */}
      <div className="pointer-events-none absolute inset-0 z-[2] opacity-100" style={{backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "28px 28px"}}/>

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
        style={{background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)"}}
      />

      {/* Content */}
      <div className="relative z-[3] mx-auto container-wrapper-transparent">
       <CompHeader
          highlighter="Our Talent"
          title={<p>Harnessing <span className="text-sky-400">Exceptional Talent</span></p>}
          subheading=" We possess a group of seasoned professionals who excel in their respective domains, bringing a wealth of expertise. Their approach is innovative, adaptable, and unparalleled within the industry."
          variant="bluegradient"
      />

        {/* Feature Cards */}
        <div className="md:mb-[22px] grid grid-cols-1 gap-2 md:gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/[0.07] bg-white/[0.04] px-4 md:px-[22px] py-5 md:py-7 transition-all duration-300 hover:-translate-y-[5px] hover:border-sky-800/50 hover:bg-white/[0.06] hover:shadow-[0_20px_52px_rgba(0,0,0,0.3),0_4px_14px_rgba(37,99,235,0.12)]"
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
                    <Icon className="text-[10px] md:text-[20px] text-sky-400 transition-colors duration-300 group-hover:text-white" />
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

export default HarnessExceptionalTalent;