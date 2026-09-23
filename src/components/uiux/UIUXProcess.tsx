import React, { useState } from "react";
import {
  Compass,
  Users,
  Network,
  Palette,
  FlaskConical,
  Code2,
  Rocket,
  Check,
} from "lucide-react";
import CompHeader from "../shared/CompHeader";

interface ProcessStep {
  id: number;
  label: string;
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  alt: string;
  deliverables: string[];
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    label: "Discovery",
    title: "Discovery and Stakeholder Alignment",
    description:
      "Before any design work, business goals, user roles, and success metrics get mapped in a kick-off workshop.",
    icon: Compass,
    image:
      "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/05/20122312/discovery-and-stakeholder-alignment.webp",
    alt: "Discovery and stakeholder alignment workshop for UI/UX design project",
    deliverables: ["Written project brief", "Milestone plan"],
  },
  {
    id: 2,
    label: "User Research",
    title: "User Research and Persona Mapping",
    description:
      "Interviews, surveys, and competitor analysis ground the design in real behavior.",
    icon: Users,
    image:
      "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/05/20122310/user-research-and-personna-mapping.webp",
    alt: "User research interviews and persona mapping for UI/UX design",
    deliverables: ["Validated personas", "Jobs-to-be-done list"],
  },
  {
    id: 3,
    label: "Wireframing",
    title: "Information Architecture and Wireframing",
    description:
      "Every screen, flow, and state mapped in low-fidelity wireframes before pixels happen.",
    icon: Network,
    image:
      "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/05/20122313/information-architecture-and-warefarming.webp",
    alt: "Information architecture and wireframing for product design",
    deliverables: [
      "Complete user-flow map",
      "Reviewable wireframes in Figma",
    ],
  },
  {
    id: 4,
    label: "UI Design",
    title: "UI Design and Interactive Prototyping",
    description:
      "Next, high-fidelity visual design ships with motion, accessibility, and responsive states.",
    icon: Palette,
    image:
      "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/05/20122306/ui-design-and-interactive-prototyping.webp",
    alt: "UI design and interactive prototyping in Figma",
    deliverables: ["Clickable prototype", "Ready for demos and testing"],
  },
  {
    id: 5,
    label: "A/B Testing",
    title: "Usability and A/B Testing",
    description:
      "Moderated tests plus A/B testing on key flows to validate hypotheses with real users.",
    icon: FlaskConical,
    image:
      "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/05/20122309/usability-and-ab-testing.webp",
    alt: "Usability testing and A/B testing for UX validation",
    deliverables: ["Severity-scored findings", "Prioritized design fixes"],
  },
  {
    id: 6,
    label: "Dev Handoff",
    title: "Developer Handoff and Design QA",
    description:
      "Component specs, design tokens, and Slack access to our designers during build.",
    icon: Code2,
    image:
      "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/05/20122307/developer-handoff-and-design-qa.webp",
    alt: "Developer handoff with design tokens and component specs",
    deliverables: [
      "Component specs and tokens",
      "Working product verified screen by screen",
    ],
  },
  {
    id: 7,
    label: "Launch Support",
    title: "Launch Support and Continuous Optimization",
    description:
      "Finally, post-launch analytics, heatmaps, and quarterly refresh sprints.",
    icon: Rocket,
    image:
      "https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/05/20122304/launch-support-and-continuous-optimization.webp",
    alt: "Post-launch analytics and continuous design optimization",
    deliverables: [
      "Analytics and heatmap reviews",
      "Quarterly refresh sprints",
    ],
  },
];

const UIUXProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const activeProcess =
    processSteps.find((step) => step.id === activeStep) ?? processSteps[0];

  const ActiveIcon = activeProcess.icon;

  return (
    <section className="container-wrapper-transparent bg-white py-12 text-[#0c0b1d] sm:py-[50px] lg:py-20">
      <CompHeader
        highlighter="How We Work"
        title={<p>Our <span className="text-sky-600">UI/UX Design Process</span></p>}
        subheading="Our UI/UX design process moves from user research to A/B testing and finally to developer handoff. In addition, every stage of the design workflow ships a defined output your team can review."
        variant="default"
      />

      {/* Tabs */}
      <div
        className="
          mb-8 flex overflow-x-auto rounded-[14px]
          border border-[#e8ebf3] bg-white
          shadow-[0_4px_16px_-8px_rgba(12,11,29,0.06)]
          scrollbar-thin
        "
      >
        {processSteps.map((step) => {
          const Icon = step.icon;
          const isActive = activeStep === step.id;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStep(step.id)}
              className={`
                relative flex min-w-[140px] flex-1
                items-center justify-center gap-2
                whitespace-nowrap border-r border-[#eef1f7]
                px-2.5 py-3 text-[12.5px]
                font-medium transition-all duration-300
                last:border-r-0
                sm:px-3 sm:py-[18px] sm:text-[13.5px]
                ${
                  isActive
                    ? "bg-[#fafbfd] font-semibold text-[#0c0b1d]"
                    : "text-[#5b5f75] hover:bg-[#fafbfd] hover:text-[#0c0b1d]"
                }
              `}
            >
              {/* Active underline */}
              <span
                className={`
                  absolute bottom-0 left-1/2 h-[3px]
                  -translate-x-1/2 bg-sky-600
                  transition-all duration-300
                  ${isActive ? "w-full" : "w-0"}
                `}
              />

              <span
                className={`
                  inline-flex h-6 w-6 shrink-0 items-center
                  justify-center rounded-lg text-[11px]
                  transition-all duration-300 sm:h-7 sm:w-7 sm:text-[13px]
                  ${
                    isActive
                      ? "bg-gradient-to-br from-sky-600 to-sky-700 text-white shadow-[0_6px_14px_-4px_rgba(37,99,235,0.5)]"
                      : "bg-[#f4f6fa] text-[#7a7f94]"
                  }
                `}
              >
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </span>

              <span>{step.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Panel */}
      <div
        key={activeProcess.id}
        className="
          relative grid overflow-hidden rounded-[18px]
          border border-[#e8ebf3]
          bg-gradient-to-br from-[#f7f9fc] to-[#eef2f8]
          p-6 shadow-[0_8px_32px_-12px_rgba(12,11,29,0.08)]
          animate-[fadeIn_0.45s_cubic-bezier(.4,0,.2,1)]
          sm:rounded-[24px] sm:p-8
          lg:grid-cols-2 lg:gap-12 lg:p-12
        "
      >
        {/* Decorative glow */}
        <div
          className="
            pointer-events-none absolute -right-[100px] -top-[100px]
            h-[300px] w-[300px]
            rounded-full
            bg-[radial-gradient(circle,rgba(37,99,235,0.08)_0%,transparent_70%)]
          "
        />

        <div
          className="
            pointer-events-none absolute -bottom-20 -left-20
            h-60 w-60 rounded-full
            bg-[radial-gradient(circle,rgba(96,165,250,0.06)_0%,transparent_70%)]
          "
        />

        {/* Image */}
        <div
          className="
            relative z-10 min-h-[240px] overflow-hidden rounded-[18px]
            bg-gradient-to-br from-[#0a0a1e] to-[#1a1b3a]
            shadow-[0_24px_60px_-20px_rgba(12,11,29,0.4),0_8px_20px_-8px_rgba(37,99,235,0.15)]
            sm:min-h-[280px]
            lg:min-h-[380px]
          "
        >
          <img
            src={activeProcess.image}
            alt={activeProcess.alt}
            loading="lazy"
            className="
              absolute inset-0 h-full w-full object-cover
              transition-transform duration-700 ease-out
              hover:scale-[1.04]
            "
          />

          {/* Image overlay */}
          <div
            className="
              pointer-events-none absolute inset-0
              bg-gradient-to-b from-transparent
              via-transparent to-[rgba(12,11,29,0.4)]
            "
          />

          {/* Badge */}
          <div
            className="
              absolute left-5 top-5 z-20
              inline-flex items-center gap-2 rounded-full
              bg-white/[0.96] px-3.5 py-2
              text-xs font-semibold tracking-[0.3px] text-blue-600
              shadow-[0_6px_20px_rgba(0,0,0,0.2)]
              backdrop-blur-xl
            "
          >
            <ActiveIcon className="h-3 w-3" />
            {activeProcess.label}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center pt-8 lg:pt-0">
          {/* Icon */}
          <div
            className="
              mb-3 md:mb-5 inline-flex h-[40px] w-[40px] md:h-[54px] md:w-[54px]
              items-center justify-center self-start
              rounded-lg md:rounded-[14px]
              bg-gradient-to-br from-sky-600 to-sky-700
              text-white
              shadow-[0_12px_28px_-8px_rgba(37,99,235,0.45),inset_0_1px_0_rgba(255,255,255,0.2)]
            "
          >
            <ActiveIcon className="w-[16px] h-[16px] md:h-[22px] md:w-[22px]" />
          </div>

          <h3 className="m-0 mb-[18px] text-[22px] font-nmedium leading-[1.2] tracking-[-0.4px] text-[#0c0b1d] sm:text-[26px] lg:text-[32px]">
            {activeProcess.title}
          </h3>
          <p className="m-0 mb-4 md:mb-8 text-sm md:text-[14.5px] leading-[1.45] md:leading-[1.75] text-gray-600 sm:text-[15.5px]">
            {activeProcess.description}
          </p>

          
          <div className="border-t border-blue-600/[0.15] pt-7">
            <p className="mb-4 text-xs font-bold uppercase tracking-[1.4px] text-gray-500">You get:</p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {activeProcess.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-2 md:gap-3.5 text-sm md:text-md font-semibold md:font-medium text-gray-900 sm:text-base">
                  <span className="inline-flex w-5 h-5 md:h-6 md:w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-600 to-sky-700 text-white shadow-[0_4px_10px_-2px_rgba(37,99,235,0.4)]">
                    <Check className="h-[11px] w-[11px]" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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

export default UIUXProcess;