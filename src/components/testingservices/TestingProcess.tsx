import React from "react";
import {
  Search,
  PencilRuler,
  Code2,
  Bug,
  Rocket,
  Wrench,
  Clock,
  ArrowRight,
} from "lucide-react";
import CompHeader from "../shared/CompHeader";
import { useNavigate } from "react-router-dom";
import { contactus } from "../../shared/utility";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  output: string;
  duration: string;
  icon: React.ElementType;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "QA reviews requirements, user stories, and acceptance criteria to define testable scope.",
    duration: "1 to 2 Weeks",
    output: 'Traceability matrix mapping every requirement to test cases.',
    icon: Search,
  },
  {
    number: "02",
    title: "Test Planning and Strategy",
    description:
      "We define test scope, types, tools, entry-exit criteria, and risk-based coverage priorities.",
    duration: "2 to 4 Weeks",
    output: 'Signed test plan with coverage scope and entry-exit criteria.',
    icon: PencilRuler
  },
  {
    number: "03",
    title: "Test Case Design",
    description:
      "Engineers write manual cases and build automation scripts for regression and smoke suites.",
    duration: "8 to 20 Weeks",
    output: 'Manual test cases and ready-to-run automation suite.',
    icon: Code2,
  },
  {
    number: "04",
    title: "Test Execution",
    description:
      "We run functional, regression, performance, security, and API tests across each build.",
    duration: "2 to 4 Weeks",
    output: 'Detailed execution report with all defects logged in tracker.',
    icon: Bug
  },
  {
    number: "05",
    title: "Defect Triage and Retesting",
    description:
      "Defects are prioritized, fixed, retested, and regressed before merging to release branch.",
    duration: "1 to 2 Weeks",
    output: 'Zero critical defects with full retest and regression sign-off.',
    icon: Rocket,
  },
  {
    number: "06",
    title: "Test Closure and Release Sign-Off",
    description:
      "We validate exit criteria, publish coverage metrics, and certify the build for production.",
    duration: "Ongoing",
    output: 'Formal release sign-off with full coverage metrics.',
    icon: Wrench
  },
];

const ProcessCard = ({ step }: { step: ProcessStep }) => {
  const Icon = step.icon;

  return (
    <div
      className="
        group relative flex flex-col overflow-hidden rounded-[14px]
        border border-white/[0.07]
        border-t-2 border-t-sky-600/35
        bg-white/[0.04]
        px-5 pb-5 pt-[22px]
        transition-all duration-300
        hover:-translate-y-[3px]
        hover:border-sky-600/60
        hover:border-t-sky-600
        hover:bg-white/[0.06]
        hover:shadow-[0_16px_40px_rgba(0,0,0,0.3),0_4px_12px_rgba(37,99,235,0.15)]
      "
    >
      {/* Card dot pattern */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-100
          [background-image:radial-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)]
          [background-size:18px_18px]
        "
      />

      <div className="relative z-[1] flex h-full flex-col">
        {/* Top */}
        <div className="mb-[14px] flex items-center justify-between gap-2">
          {/* Icon */}
          <div
            className="
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-[9px]
              border border-sky-600/25
              bg-sky-600/15
              transition-all duration-300
              group-hover:border-sky-600
              group-hover:bg-sky-600
            "
          >
            <Icon
              size={16}
              strokeWidth={2}
              className="text-sky-400 transition-colors duration-300 group-hover:text-white"
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
              text-sky-400
            "
          >
            <Clock size={9} />
            {step.duration}
          </span>
        </div>

        {/* Content */}
        <h3
          className="
            mb-2
            text-[18px]
            font-semibold
            leading-[1.25]
            text-white
          "
        >
          {step.title}
        </h3>

        <p
          className="
            flex-1
            text-[14px]
            font-normal
            leading-[1.65]
            text-gray-300/90
          "
        >
          {step.description}
        </p>
        <p className="mt-[14px] text-[12px] font-medium text-sky-400 uppercase">Output</p>
        <p className="text-[14px] font-medium text-white/90">{step.output}</p>
      </div>
    </div>
  );
};

const ProcessRow = ({ steps }: { steps: ProcessStep[] }) => {
  return (
    <div className="relative">
      {/* Horizontal connector */}
      <div
        className="
          pointer-events-none absolute
          left-7 right-7 top-7
          z-0 h-[2px]
          bg-gradient-to-r
          from-transparent
          via-sky-600/40
          to-transparent
        "
      />

      {/* Numbers */}
      <div className="relative z-[1] grid grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center"
          >
            <div
              className="
                relative z-[2]
                flex 
                h-14 w-14
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
            <div
              className="
                h-7 w-[2px]
                bg-gradient-to-b
                from-sky-600/50
                to-sky-600/15
              "
            />
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

const TestingProcess = () => {
  const firstRow = processSteps.slice(0, 3);
  const secondRow = processSteps.slice(3, 6);
  const navigate = useNavigate();

  const handleContactUs = () => {
    contactus();
    navigate("../../contactus");
  };

  return (
    <section aria-label="Mobile app development process" className="py-6 md:py-20 relative overflow-hidden bg-sky-500 font-sans">

      {/* Dark overlay */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[linear-gradient(160deg,rgba(12,11,29,0.92)_0%,rgba(12,11,29,0.72)_50%,rgba(12,11,29,0.92)_100%)]
        "
      />

      {/* Dot pattern */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          [background-image:radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)]
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
          bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_65%)]
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
          bg-[radial-gradient(circle,rgba(37,99,235,0.08)_0%,transparent_70%)]
        "
      />

      {/* Content */}
      <div
        className="
          relative z-[3]
          mx-auto
          container-wrapper-transparent
        "
      >
        <CompHeader
          highlighter='How We Work'
          title="Our QA Testing Methodology"
          subheading=" Our QA testing methodology follows the Software Testing Life Cycle across six structured stages, from requirement analysis to release sign-off. Functional, regression, performance, and security testing are built into every cycle."
          variant="bluegradient"
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
        <div className="grid gap-4 md:hidden">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative flex justify-between">
                {/* Vertical line */}
                {index !== processSteps.length - 1 && (
                  <div
                    className="
                      absolute
                      left-5 md:left-7 top-10 md:top-14
                      h-[calc(100%+24px)]
                      w-[2px]
                      bg-gradient-to-b
                      from-sky-600/50
                      to-sky-600/10
                    "
                  />
                )}

                {/* Number */}
                <div
                  className="
                    relative z-[2]
                    mb-3
                    flex w-[40px] h-[40px] md:h-14 md:w-14
                    items-center justify-center
                    rounded-full
                    border-2 border-sky-400 md:border-sky-600
                    bg-sky-400
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
                    bg-white/[0.04]
                    w-[85%]
                    p-5
                  "
                >
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <div
                      className="
                        flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-[9px]
                        border border-sky-600/25
                        bg-blue-600/15
                      "
                    >
                      <Icon
                        size={16}
                        className="text-sky-400"
                      />
                    </div>

                    <span
                      className="
                        inline-flex items-center gap-[5px]
                        rounded-full
                        border border-blue-sky/20
                        bg-blue-sky/10
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

                  <h3 className="mb-2 text-base font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-[1.4] text-white/50">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-[52px] flex justify-center">
          <button
            onClick={handleContactUs}
            className="
              cursor-pointer
              inline-flex
              items-center
              gap-[9px]
              rounded-lg
              bg-sky-600
              px-8 py-[15px]
              text-[15px]
              font-semibold
              text-white
              no-underline
              transition-all duration-200
              hover:-translate-y-0.5
              hover:bg-sky-700
              hover:shadow-[0_10px_28px_rgba(0,188,255,0.25)]
            "
          >
            Start Your Project
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestingProcess;