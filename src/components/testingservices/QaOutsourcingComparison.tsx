import React from "react";
import {
  Award,
  Check,
  Expand,
  Globe2,
  Layers,
  Minus,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import CompHeader from "../shared/CompHeader";
import { useNavigate } from "react-router-dom";
import { contactus } from "../../shared/utility";

interface ComparisonRow {
  dimension: string;
  icon: React.ElementType;
  outsourced: string;
  inHouse: string;
}

const comparisonRows: ComparisonRow[] = [
  {
    dimension: "Time to Ramp",
    icon: Zap,
    outsourced: "7 to 10 business days",
    inHouse: "4 to 6 months",
  },
  {
    dimension: "Tool Licenses",
    icon: Wrench,
    outsourced: "Included",
    inHouse: "$40K+ per year, per stack",
  },
  {
    dimension: "Certifications (ISTQB, OWASP)",
    icon: Award,
    outsourced: "Included on bench",
    inHouse: "Hire and train",
  },
  {
    dimension: "Coverage Hours",
    icon: Globe2,
    outsourced: "Follow-the-sun",
    inHouse: "Single time zone",
  },
  {
    dimension: "Scaling Up or Down",
    icon: Expand,
    outsourced: "One sprint",
    inHouse: "30 to 60 day notice",
  },
  {
    dimension: "Specialization Breadth",
    icon: Layers,
    outsourced: "15+ skills on bench",
    inHouse: "2 to 4 skills per hire",
  },
];

const QaOutsourcingComparison: React.FC = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    contactus();
    navigate("../../contactus");
  };
  
  return (
    <section
      id="qa-comparison"
      aria-label="QA outsourcing vs in-house testing comparison"
      className="
        relative
        left-1/2
        w-screen
        -translate-x-1/2
        overflow-hidden
        bg-[#f9f9f9]
        py-6 md:py-20
        text-[#0c0b1d]
      "
    >
      {/* Background glow - top right */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[160px]
          -top-[180px]
          z-0
          h-[520px]
          w-[520px]
          rounded-full
          bg-[radial-gradient(circle,rgba(0,132,209,0.1)_0%,transparent_45%)]
        "
      />

      {/* Background glow - bottom left */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-[160px]
          -left-[140px]
          z-0
          h-[460px]
          w-[460px]
          rounded-full
          bg-[radial-gradient(circle,rgba(0,132,209,0.08)_0%,transparent_35%)]
        "
      />

      {/* Dots */}
      <div
        className="
          pointer-events-none
          absolute
          right-[30px]
          top-[30px]
          z-[1]
          hidden
          h-[80px]
          w-[80px]
          opacity-60
          [background-image:radial-gradient(circle,#c8d0eb_1.2px,transparent_1.2px)]
          [background-size:16px_16px]
          min-[561px]:block
          min-[901px]:right-[60px]
          min-[901px]:top-[60px]
          min-[901px]:h-[120px]
          min-[901px]:w-[120px]
        "
      />

      <div className="relative z-[1] mx-auto container-wrapper-transparent">
        <CompHeader
          highlighter='Outsourcing vs In-House'
          title="QA Outsourcing vs In-House Testing"
          subheading="QA outsourcing ramps a certified testing team in days, while in-house QA hiring takes months, fixed cost, and slower release cadence."
          variant="default"
        />

        {/* ================= COLUMN HEADERS ================= */}
        <div
          className="
            mb-[14px]
            grid
            grid-cols-1
            gap-1
            px-[6px]
            min-[561px]:grid-cols-2
            min-[561px]:gap-[14px]
            min-[901px]:grid-cols-[1.1fr_1fr_1fr]
            min-[901px]:gap-[18px]
          "
        >
          {/* Dimension */}
          <span
            className="hidden p-4 text-[14px] font-medium uppercase tracking-[1.4px] text-[#8895c2] md:block">
            Dimension
          </span>

          {/* Outsourced */}
          <div
            className="
              relative
              flex
              items-center
              gap-2
              overflow-hidden
              rounded-xl
              bg-gradient-to-br
              from-sky-600
              to-sky-700
              p-4
              text-[14px]
              font-semibold
              text-white
              shadow-[0_6px_16px_rgba(0,137,241,0.15)]
              before:absolute
              before:left-0
              before:top-0
              before:h-full
              before:w-[3px]
              before:bg-white/55
            "
          >
            <ShieldCheck size={17} strokeWidth={2} />
            <span>Codeflux Outsourced QA</span>
          </div>

          {/* In-house */}
          <div className="rounded-xl border border-[#e1e6f5] bg-white p-4 text-[14px] font-medium text-gray-600">
            In-House QA Team
          </div>
        </div>

        {/* ================= COMPARISON ROWS ================= */}
        <div className="flex flex-col gap-2.5">
          {comparisonRows.map((row) => {
            const Icon = row.icon;

            return (
              <div
                key={row.dimension}
                className="
                  group
                  grid
                  grid-cols-1
                  gap-[10px]
                  rounded-[14px]
                  border
                  border-[#e6eaf5]
                  bg-white
                  p-[14px]
                  shadow-[0_4px_12px_rgba(12,11,29,0.04)]
                  transition-transform
                  duration-300
                  ease-in-out
                  hover:translate-x-1
                  min-[901px]:grid-cols-[1.1fr_1fr_1fr]
                  min-[901px]:gap-[18px]
                  min-[901px]:rounded-none
                  min-[901px]:border-0
                  min-[901px]:bg-transparent
                  min-[901px]:p-0
                  min-[901px]:shadow-none
                "
              >
                {/* ================= DIMENSION ================= */}
                <div
                  className="
                    flex
                    items-center
                    gap-[14px]
                    border-b
                    border-dashed
                    border-[#e1e5f0]
                    bg-transparent
                    px-0
                    pb-2
                    min-[901px]:rounded-xl
                    min-[901px]:border
                    min-[901px]:border-solid
                    min-[901px]:border-gray-200/80
                    min-[901px]:bg-white
                    min-[901px]:px-4
                    min-[901px]:py-5
                    min-[901px]:shadow-[0_4px_12px_rgba(12,11,29,0.015)]
                  "
                >
                  <span
                    className="
                      inline-flex
                      h-[42px]
                      min-h-[42px]
                      w-[42px]
                      min-w-[42px]
                      items-center
                      justify-center
                      rounded-[11px]
                      bg-sky-50
                      text-sky-600
                      transition-all
                      duration-300
                      group-hover:bg-sky-600
                      group-hover:text-white
                      group-hover:rotate-[-5deg]
                    "
                  >
                    <Icon size={17} strokeWidth={2} />
                  </span>

                  <span className="text-[14px] font-medium text-[#0c0b1d]">
                    {row.dimension}
                  </span>
                </div>

                {/* ================= OUTSOURCED ================= */}
                <div
                  className="
                    relative
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-sky-100
                    bg-gradient-to-b
                    from-white
                    to-sky-50
                    px-4
                    py-[14px]
                    transition-all
                    duration-300
                    group-hover:border-sky-200
                    group-hover:shadow-[0_4px_12px_rgba(0,137,241,0.1)]
                    min-[901px]:px-[22px]
                    min-[901px]:py-5
                    before:absolute
                    before:left-0
                    before:top-1/2
                    before:h-[60%]
                    before:w-[3px]
                    before:-translate-y-1/2
                    before:rounded-r-[3px]
                    before:bg-gradient-to-b
                    before:from-sky-400
                    before:to-sky-600
                  "
                >
                  <span
                    className="
                      inline-flex
                      h-6
                      min-h-6
                      w-6
                      min-w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-sky-600
                      to-sky-700
                      text-white
                    "
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>

                  <span className="text-[14px] font-medium">
                    {row.outsourced}
                  </span>
                </div>

                {/* ================= IN-HOUSE ================= */}
                <div className="flex items-center gap-3 rounded-xl border border-[#e6eaf5] bg-white/80 px-4 py-[14px] min-[901px]:px-[22px] min-[901px]:py-5">
                  <span
                    className="
                      inline-flex
                      h-6
                      min-h-6
                      w-6
                      min-w-6
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#dde2ee]
                      bg-[#f0f2f9]
                      text-[#8895c2]
                    "
                  >
                    <Minus size={11} strokeWidth={2.5} />
                  </span>

                  <span className="text-[14px] text-gray-700">
                    {row.inHouse}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button className="mt-10 
            flex
            cursor-pointer
            group/primary
            items-center
            gap-[9px]
            rounded-lg
            border-2
            border-transparent
            bg-sky-600
            px-7
            py-3.5
            text-sm
            font-semibold
            text-white
            no-underline
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:gap-3
            hover:bg-sky-700
            hover:shadow-[0_10px_28px_rgba(255,255,235,0.18)]
          "
          onClick={handleContactUs}>
            <span>Compare Engagement Models</span><span className="text-md">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default QaOutsourcingComparison;