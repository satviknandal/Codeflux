import React from "react";
import {
  Search,
  PencilRuler,
  Code2,
  Bug,
  Rocket,
  Clock,
  ArrowRight,
} from "lucide-react";
import CompHeader from "../shared/CompHeader";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration: string;
  icon: React.ElementType;
  link?: {
    label: string;
    href: string;
  };
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description:
      "Project brief, feature list, wireframes, and cost estimate. We define what gets built before coding begins.",
    duration: "Week 1",
    icon: Search,
  },
  {
    number: "02",
    title: "Information Architecture",
    description:
      "Sitemap, URL structure, page hierarchy, and content plan mapped to buyer intent and search demand before a single pixel is designed.",
    duration: "Week 1 to 2",
    icon: PencilRuler
  },
  {
    number: "03",
    title: "UX & UI Design",
    description:
      "Figma prototype, design system, and screen-by-screen sign-off before development starts.",
    duration: "Week 2 to 4",
    icon: PencilRuler
  },
  {
    number: "04",
    title: "Agile Development",
    description:
      "Working demo every two-week sprint. You review progress throughout, not just at final delivery. Clean, scalable frontend and backend built to perform.",
    duration: "Week 4 to 10",
    icon: Code2,
  },
  {
    number: "05",
    title: "QA & Testing",
    description:
      "Web functional testing, security validation, performance, accessibility, QA report and UAT sign-off before anything goes live.",
    duration: "Week 10 to 12",
    icon: Bug
  },
  {
    number: "06",
    title: "Launch & Ongoing Support",
    description:
      "Deployment with zero-downtime handover, monitoring setup, and an ongoing maintenance plan to keep your site improving after launch day.",
    duration: "Launch and beyond",
    icon: Rocket,
  }
];

const ProcessCard = ({ step }: { step: ProcessStep }) => {
  const Icon = step.icon;

  return (
    <div
      className="
        group relative flex flex-col overflow-hidden rounded-[14px]
        border border-white/[0.07]
        border-t-2 border-t-sky-600/50
        
        bg-[linear-gradient(160deg,rgba(166,220,255,0.08)_0%,rgba(166,220,255,0.04)_50%,rgba(166,220,255,0.1)_100%)]
        px-5 pb-5 pt-[22px]
        transition-all duration-300
        hover:-translate-y-[3px
        hover:border-t-sky-600
        hover:bg-white/[0.06]
        hover:shadow-[0_16px_40px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,188,255,0.05)]
      "
    >
      

      <div className="relative z-[1] flex h-full flex-col">
        {/* Top */}
        <div className="mb-[14px] flex items-center justify-between gap-2">
          {/* Icon */}
          <div
            className="
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-[9px]
              border border-sky-600/50
              bg-sky-600/15
              transition-all duration-300
              group-hover:border-sky-600
              group-hover:bg-sky-600
            "
          >
            <Icon
              size={16}
              strokeWidth={2}
              className="text-sky-600 transition-colors duration-300 group-hover:text-white"
            />
          </div>

          {/* Duration */}
          <span
            className="
              inline-flex shrink-0 items-center gap-[5px]
              rounded-full
              border border-sky-600/20
              bg-sky-600/10
              px-[10px] py-[3px]
              text-[11px] font-semibold
              text-sky-600
            "
          >
            <Clock size={9} />
            {step.duration}
          </span>
        </div>

        <h3 className="mb-2 text-[18px] font-semibold leading-[1.25] text-sky-600">
          {step.title}
        </h3>
        <p className="flex-1 text-[14px] font-normal leading-[1.65] text-gray-700/90">
          {step.description}
        </p>

        {/* Optional link */}
        {step.link && (
          <a
            href={step.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-[14px]
              inline-flex w-fit
              items-center gap-[6px]
              text-[12px]
              font-semibold
              text-gray-400
              no-underline
              transition-all duration-200
              hover:gap-[9px]
              hover:text-white
            "
          >
            {step.link.label}
            <ArrowRight size={10} />
          </a>
        )}
      </div>
    </div>
  );
};

const ProcessRow = ({ steps }: { steps: ProcessStep[] }) => {
  return (
    <div className="relative">
      {/* Horizontal connector */}
      <div className="pointer-events-none absolute left-7 right-7 top-7 z-0 h-[2px] bg-gradient-to-r from-transparent via-sky-600/40 to-transparent"/>

      {/* Numbers */}
      <div className="relative z-[1] grid grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div
              className="
                relative z-[2]
                flex h-14 w-14
                items-center justify-center
                rounded-full
                border-2 border-sky-600
                bg-sky-600
                text-[18px]
                font-semibold
                text-white
                transition-all duration-300
                hover:scale-110
              "
            >
              {step.number}
            </div>

            {/* Vertical connector */}
            <div className="h-7 w-[2px] bg-gradient-to-b from-sky-600/50 to-sky-600/15"/>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4">
        {steps.map((step) => (
          <ProcessCard key={step.number} step={step} />
        ))}
      </div>
    </div>
  );
};

const WebDevelopmentProcess = () => {
  const firstRow = processSteps.slice(0, 3);
  const secondRow = processSteps.slice(3, 6);

  return (
    <section className="py-6 md:py-20 relative overflow-hidden bg-white font-sans">

      {/* Dark overlay */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[linear-gradient(160deg,rgba(166,220,255,0.1)_0%,rgba(166,220,255,0.04)_50%,rgba(166,220,255,0.1)_100%)]
        "
      />

      {/* Dot pattern */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          [background-image:radial-gradient(rgba(191,212,255,0.04)_1px,transparent_1px)]
          [background-size:30px_30px]
        "
      />

      {/* Top right glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20 -top-20
          h-[500px] w-[500px]
          rounded-full
          bg-[radial-gradient(circle,rgba(255,255,255,0.5)_0%,transparent_35%)]
        "
      />

      {/* Bottom left glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-[60px] -left-[60px]
          h-[360px] w-[360px]
          rounded-full
          bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,transparent_70%)]
        "
      />

      {/* Content */}
      <div className="relative z-[3] container-wrapper-transparent">
        <CompHeader
            highlighter="How We Work"
            title="Our Web Development Process"
            subheading="A clear, milestone-driven process from discovery and strategy through design, development, and launch, with ongoing support built in from day one."
            variant="default"
        />

        {/* Desktop / Tablet Process */}
        <div className="hidden md:block">
          {/* Row 1 */}
          <ProcessRow steps={firstRow} />

          {/* Row 2 */}
          <div className="relative mt-10">
            <ProcessRow steps={secondRow} />
          </div>
        </div>

        {/* Mobile Process */}
        <div className="grid gap-6 md:hidden">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative flex justify-between">
                {/* Vertical line */}
                {index !== processSteps.length - 1 && (
                  <div
                    className="
                      absolute
                      left-5 top-10
                      h-[calc(100%+24px)]
                      w-[2px]
                      bg-gradient-to-b
                      from-gray-600/50
                      to-gray-600/10
                    "
                  />
                )}

                {/* Number */}
                <div
                  className="
                    relative z-[2]
                    mb-3
                    flex w-[40px] h-[40px] 
                    items-center justify-center
                    rounded-full
                    border-2 border-sky-600
                    bg-sky-600
                    text-lg
                    font-medium
                    text-white
                  "
                >
                  {step.number}
                </div>

                {/* Card */}
                <div
                  className="
                    ml-0
                    rounded-[14px]
                    border border-white/[0.07]
                    border-t-2 border-t-sky-600/35
                    bg-[linear-gradient(160deg,rgba(166,220,255,0.08)_0%,rgba(166,220,255,0.04)_50%,rgba(166,220,255,0.1)_100%)]
                    w-[85%]
                    p-4
                  "
                >
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <div
                      className="
                        flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-[9px]
                        border border-sky-600/25
                        bg-sky-600/15
                      "
                    >
                      <Icon
                        size={16}
                        className="text-sky-600"
                      />
                    </div>

                    <span
                      className="
                        inline-flex items-center gap-[5px]
                        rounded-full
                        border border-sky-600/20
                        bg-sky-200/10
                        px-[10px] py-[3px]
                        text-[11px]
                        font-medium md:font-semibold
                        text-sky-600
                      "
                    >
                      <Clock size={9} />
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="mb-2 text-base font-medium text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-[1.4] text-gray-800">
                    {step.description}
                  </p>

                  {step.link && (
                    <a
                      href={step.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-4
                        inline-flex
                        items-center
                        gap-2
                        text-xs
                        font-semibold
                        text-gray-400
                        transition-all
                        hover:gap-3
                        hover:text-white
                      "
                    >
                      {step.link.label}
                      <ArrowRight size={10} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-[52px] flex justify-center">
          <a
            href="#contact-us"
            className="
              inline-flex
              items-center
              gap-[9px]
              rounded-lg
              bg-sky-600
              px-8 py-[15px]
              text-sm md:text-[15px]
              font-semibold
              text-white
              no-underline
              transition-all duration-200
              hover:-translate-y-0.5
              hover:bg-sky-700
              hover:shadow-[0_10px_28px_rgba(0,188,255,0.25)]
            "
          >
            Talk to Our Web Team
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentProcess;