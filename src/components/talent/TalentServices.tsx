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
    title: "Contract Recruitment",
    description: "Our contract recruitment services offer end-to-end talent attraction and management, providing a quick, efficient, and cost-effective solution",
    icon: GitBranch,
  },
  {
    number: "02",
    title: "Permanent Recruitment",
    description: "Our permanent recruitment service finds skilled pros for your unique needs, delivering talent fast with minimal admin and transparent pricing",
    icon: Code2
  },
  {
    number: "03",
    title: "Executive Search",
    description: "Our executive search service finds leaders with the right mix of passion, experience, and credentials to drive your business to success",
    icon: RotateCw
  },
  {
    number: "04",
    title: "Talent Advisory",
    description: "Our Talent Advisory service solves specific talent acquisition challenges with expertise in people, process, technology, and brand",
    icon: PlugZap,
  },
  {
    number: "05",
    title: "Recruitment Managed Service Provider",
    description: "Our MSP service guarantees the talent you need, eliminates admin burden, and improves ROI. It's your end-to-end solution for workforce optimisation",
    icon: Brain
  },
  {
    number: "06",
    title: "Embedded Recruitment",
    description: "Our embedded recruitment service is tailor-made for start-ups and scale-ups, with recruitment pros working within your business as part of your brand",
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

const TalentServices = () => {
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
            highlighter="services"
            title="Recruitment Services"
            subheading="Choosing Codeflux means partnering with an recruitment agency that understands the specific demands of the project and professional services sectors. Our expertise and industry knowledge enable us to provide bespoke recruitment solutions that cater to your teams’ unique needs."
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

export default TalentServices;