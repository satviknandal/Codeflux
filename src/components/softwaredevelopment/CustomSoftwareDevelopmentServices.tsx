import React from "react";
import {
  Code2,
  Wrench,
  ArrowRight,
  GitBranch,
  RotateCw,
  Brain,
  PlugZap,
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
    title: "Enterprise Software Consulting",
    description: "Review current systems, software risks, architecture gaps, integration needs, and delivery priorities before development begins.",
    icon: GitBranch,
  },
  {
    number: "02",
    title: "Custom Software Development",
    description: "Build secure business platforms for approvals, user roles, reporting, and operational processes that packaged tools cannot fully support.",
    icon: Code2
  },
  {
    number: "03",
    title: "Legacy Software Modernization",
    description: "Modernize aging applications through phased migration, code refactoring, cloud readiness, database upgrades, and rollback planning.",
    icon: RotateCw
  },
  {
    number: "04",
    title: "Enterprise System Integration",
    description: "Connect ERP, CRM, finance, inventory, HR, and operations systems through APIs, middleware, data sync, and secure access layers.",
    icon: PlugZap,
  },
  {
    number: "05",
    title: "Enterprise Data and AI Solutions",
    description: "Design data pipelines, analytics layers, automation flows, and AI features that fit existing business systems and governance rules.",
    icon: Brain
  },
  {
    number: "06",
    title: "Enterprise Software Maintenance and Support",
    description: "Keep enterprise applications stable after launch with issue fixes, version updates, performance checks, security patches, and planned improvements.",
    icon: Wrench,
  }
];

const ProcessCard = ({ step }: { step: ProcessStep }) => {
  const Icon = step.icon;

  return (
    <div
      className="
        group relative flex flex-col overflow-hidden rounded-[14px]
        border border-sky-400/[0.15] md:border-sky-400/[0.1]
        border-t-2 border-t-sky-600/50 md:border-t-sky-600/50
        bg-[linear-gradient(160deg,rgba(166,220,255,0.08)_0%,rgba(166,220,255,0.04)_50%,rgba(166,220,255,0.1)_100%)]
        bg-[radial-gradient(circle_at_92%_8%,rgba(0,188,235,0.06),transparent_34%),linear-gradient(180deg,#fff_0%,#f8fbff_100%)]
        px-4 md:px-5 py-4 md:py-6 pb-6 md:pb-8
        transition-all duration-300
        hover:-translate-y-[3px
        hover:border-t-sky-600
        hover:bg-white/[0.06]
        hover:-translate-y-[3px]
        hover:shadow-[0_16px_40px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,188,255,0.05)]
      "
    >
      

      <div className="relative z-[1] flex h-full flex-col">
        {/* Top */}
        <div className="mb-3 md:mb-4 flex h-9 w-9 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sky-600 group-hover:border-sky-600 group-hover:bg-sky-600">
          <Icon size={19} strokeWidth={2} aria-hidden="true" className="group-hover:text-white"/>
        </div>

        <h3 className="mb-3 md:mb-6 text-base md:text-[18px] font-semibold leading-[1.25] text-sky-600">
          {step.title}
        </h3>
        <p className="flex-1 text-xs md:text-[14px] font-normal md:leading-[1.65] text-gray-700/90">
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
    <div className="relative grid grid-col-1 md:grid-cols-3 gap-4">
      {steps.map((step) => (
        <ProcessCard key={step.number} step={step} />
      ))}
    </div>
  );
};

const CustomSoftwareDevelopmentServices = () => {
  const firstRow = processSteps.slice(0, 3);
  const secondRow = processSteps.slice(3, 6);

  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-white font-sans">

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(166,220,255,0.1)_0%,rgba(166,220,255,0.04)_50%,rgba(166,220,255,0.1)_100%)]"/>

      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(191,212,255,0.04)_1px,transparent_1px)] [background-size:30px_30px]"/>

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
            highlighter="Software Capabilities"
            title="Software Development Services"
            subheading="Codeflux provides enterprise software development services for secure business platforms, legacy modernization, system integration, data workflows, practical AI features, and long-term application support."
            variant="default"
        />
        <div>
          <ProcessRow steps={firstRow} />
          <div className="relative mt-10">
            <ProcessRow steps={secondRow} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSoftwareDevelopmentServices;