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
    description: "During discovery, we review workflows, existing systems, user roles, integration dependencies, and compliance needs to define a practical roadmap.",
    duration: "Week 1",
    icon: Search,
  },
  {
    number: "02",
    title: "Architecture Planning",
    description: "The architecture phase defines system boundaries, data flows, access controls, infrastructure needs, and security inputs before development starts.",
    duration: "Week 1 to 2",
    icon: PencilRuler
  },
  {
    number: "03",
    title: "Agile Development",
    description: "Development runs in planned sprints with backlog visibility, progress reviews, release priorities, and checkpoints aligned to the approved scope.",
    duration: "Week 2 to 4",
    icon: PencilRuler
  },
  {
    number: "04",
    title: "QA and Security Review",
    description: "At this stage, functional testing, integration checks, performance reviews, code quality checks, and security validation are handled based on project needs.",
    duration: "Week 4 to 10",
    icon: Code2,
  },
  {
    number: "05",
    title: "Controlled Launch",
    description: "Before release, the team prepares deployment steps, rollback paths, go-live support, monitoring setup, and handover documentation.",
    duration: "Week 10 to 12",
    icon: Bug
  },
  {
    number: "06",
    title: "Maintenance and Support",
    description: "After launch, enterprise applications can be supported with issue fixes, version updates, performance checks, monitoring, and planned improvements.",
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
        <div className="mb-6 flex items-center justify-between gap-2">
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
        </div>

        <h3 className="mb-4 text-[18px] font-semibold leading-[1.25] text-sky-600">
          {step.title}
        </h3>
        <p className="flex-1 text-[14px] font-normal leading-[1.65] text-gray-800">
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

const SoftwareDevelopmentProcess = () => {
  const firstRow = processSteps.slice(0, 3);
  const secondRow = processSteps.slice(3, 6);

  return (
    <section className="py-10 md:py-20 relative overflow-hidden bg-white font-sans">

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(166,220,255,0.1)_0%,rgba(166,220,255,0.04)_50%,rgba(166,220,255,0.1)_100%)]"/>

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
            highlighter="How we deliver"
            title="Enterprise Software Delivery Process"
            subheading="Our delivery process keeps business goals, system dependencies, security requirements, and compliance checkpoints visible from discovery to post-launch support."
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
              <div key={step.number} className="relative">
                {/* Vertical line */}
                {index !== processSteps.length - 1 && (
                  <div
                    className="
                      absolute
                      left-6 top-14
                      h-[calc(100%+24px)]
                      w-[2px]
                      bg-gradient-to-b
                      from-sky-600/50
                      to-sky-600/10
                    "
                  />
                )}

                <div className="flex gap-4">
                  {/* Number */}
                <div
                  className="
                    relative z-[2]
                    mb-3
                    flex
                    items-center justify-center
                    rounded-full
                    border-2 border-sky-600
                    bg-sky-600
                    text-base
                    font-semibold
                    text-white
                    shrink-0
                    w-[40px] h-[40px] p-2 shadow-sm
                  "
                >
                  {step.number}
                </div>

                {/* Card */}
                <div className="ml-0 rounded-[14px] border border-white/[0.07] border-t-2 border-t-sky-600/35 bg-white/[0.04] p-3 md:p-5">
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <div
                      className="
                        flex h-7 w-7 shrink-0
                        items-center justify-center
                        rounded-md
                        border border-sky-600/25
                        bg-sky-600/15
                      "
                    >
                      <Icon size={16} className="text-sky-400"/>
                    </div>

                    <span
                      className="
                        inline-flex items-center gap-[5px]
                        rounded-full
                        border border-gray-sky/20
                        bg-gray-200/10
                        px-[10px] py-[3px]
                        text-[11px]
                        font-semibold
                        text-sky-400
                      "
                    >
                      <Clock size={9} />
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="mb-2 text-base font-semibold leading-[1.25] text-sky-600">
                    {step.title}
                  </h3>

                  <p className="text-xs md:text-[14px] leading-[1.5] md:leading-[1.65] text-gray-800">
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


                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SoftwareDevelopmentProcess;