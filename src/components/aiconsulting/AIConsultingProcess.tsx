import React from "react";
import {
  Search,
  PencilRuler,
  Code2,
  Bug,
  Rocket,
  ArrowRight,
} from "lucide-react";
import CompHeader from "../shared/CompHeader";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
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
    description: "Uncovering business goals, pain points, and existing systems to ensure every AI initiative ties directly to measurable ROI.",
    icon: Search,
  },
  {
    number: "02",
    title: "Opportunity mapping",
    description: "Identifying the most feasible, high-impact use cases and filtering out distractions so investments focus only on results that matter.",
    icon: PencilRuler
  },
  {
    number: "03",
    title: "Data and infrastructure audit",
    description: "Evaluating data quality, pipelines, and platforms, exposing gaps that could derail projects and defining fixes before development begins.",
    icon: PencilRuler
  },
  {
    number: "04",
    title: "Strategic roadmap design",
    description: "Creating a phased plan with quick wins, scalable milestones, and clear ownership so progress is visible at every stage.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Solution architecture",
    description: "Design the technical blueprint by selecting models, frameworks, and integrations so AI solutions are built on a foundation that scales.",
    icon: Bug
  },
  {
    number: "06",
    title: "Guided implementation",
    description: "Partner with in-house teams on development, integration, and testing to avoid costly rework or operational downtime.",
    icon: Rocket,
  },
  {
    number: "07",
    title: "Change management and training",
    description: "Prepare teams for adoption, transfer knowledge, and build buy-in so AI initiatives succeed beyond launch.",
    icon: Rocket,
  },
  {
    number: "08",
    title: "Continuous improvement",
    description: "Monitoring, iterating, and optimizing to keep models accurate, workflows smooth, and your AI strategy aligned with evolving business priorities.",
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
        border-t-2 border-t-pink-600/50
        
        bg-[linear-gradient(160deg,rgba(255,186,228,0.08)_0%,rgba(255,186,228,0.04)_50%,rgba(255,186,228,0.1)_100%)]
        px-5 pb-5 pt-[22px]
        transition-all duration-300
        hover:-translate-y-[3px
        hover:border-t-pink-600
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
              border border-pink-600/50
              bg-pink-600/15
              transition-all duration-300
              group-hover:border-pink-600
              group-hover:bg-pink-600
            "
          >
            <Icon
              size={16}
              strokeWidth={2}
              className="text-pink-600 transition-colors duration-300 group-hover:text-white"
            />
          </div>

         
        </div>

        <h3 className="mb-2 text-[18px] font-semibold leading-[1.25] text-pink-600">
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
      <div className="pointer-events-none absolute left-7 right-7 top-7 z-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"/>

      {/* Numbers */}
      <div className="relative z-[1] grid grid-cols-4">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div
              className="
                relative z-[2]
                flex h-14 w-14
                items-center justify-center
                rounded-full
                border-2 border-pink-600
                bg-pink-600
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
            <div className="h-7 w-[2px] bg-gradient-to-b from-pink-600/50 to-pink-600/15"/>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-4">
        {steps.map((step) => (
          <ProcessCard key={step.number} step={step} />
        ))}
      </div>
    </div>
  );
};

const AIConsultingProcess = () => {
  const firstRow = processSteps.slice(0, 4);
  const secondRow = processSteps.slice(4, 8);

  return (
    <section className="py-6 md:py-16 relative overflow-hidden bg-white">
      {/* Top right glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20 -top-20
          h-[500px] w-[500px]
          rounded-full
          bg-[radial-gradient(circle,rgba(251,100,182,0.1)_0%,transparent_35%)]
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
          bg-[radial-gradient(circle,rgba(251,100,182,0.1)_0%,transparent_50%)]
        "
      />

      {/* Content */}
      <div className="relative z-[3] container-wrapper-transparent">
        <CompHeader
            highlighter="Our Approach"
            title={<p className="bg-[linear-gradient(to_right,#6025F5,#E40CD3,#FF5555)] bg-clip-text text-transparent">Our AI Consultation Approach</p>}
            subheading="Our consulting process works because it’s structured, practical, and tied directly to business outcomes. Each step from discovery to continuous improvement is designed to emilinate risk, maximize ROI, and keep your project aligned with your overarching objectives."
            variant="pinkdefault"
        />

        {/* Desktop / Tablet Process */}
        <div className="hidden md:block mt-12">
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
            return (
              <div key={step.number} className="relative flex justify-between ">
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
                    flex
                    w-[40px] h-[40px] 
                    items-center justify-center
                    rounded-full
                    border-2 border-pink-600
                    bg-pink-600
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
                    border-t-2 border-t-pink-600/50
                    bg-[linear-gradient(160deg,rgba(255,186,228,0.08)_0%,rgba(255,186,228,0.04)_50%,rgba(255,186,228,0.1)_100%)]
                    w-[85%]
                    p-4
                  "
                >

                  <h3 className="mb-2 text-base font-medium text-pink-600">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-[1.4] text-gray-700">
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
        <div className="mt-[30px] md:mt-[52px] flex justify-center">
          <a
            href="#contact-us"
            className="
              inline-flex
              items-center
              gap-[9px]
              rounded-lg
              bg-pink-600
              px-8 py-[15px]
              text-sm md:text-[15px]
              font-semibold
              text-white
              no-underline
              transition-all duration-200
              hover:-translate-y-0.5
              hover:bg-pink-700
              hover:shadow-[0_10px_28px_rgba(0,188,255,0.25)]
            "
          >
            Talk to Our AI Consulting Team
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIConsultingProcess;