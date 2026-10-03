import { useNavigate } from "react-router-dom";
import CompHeader from "../shared/CompHeader";
import { contactus } from "../../shared/utility";

const comparisonRows = [
  {
    label: "Dedicated QA Team",
    bestFor: "Continuous product releases",
    teamSize: "4 to 15 testers",
    pricingModel: "Monthly retainer",
  },
  {
    label: "Managed QA Services",
    bestFor: "Full QA function ownership",
    teamSize: "6 to 50+ engineers",
    pricingModel: "Monthly retainer",
  },
  {
    label: "QA Staff Augmentation",
    bestFor: "Skill-gap filling",
    teamSize: "1 to 10 testers",
    pricingModel: "Hourly",
  },
  {
    label: "Project-Based Testing",
    bestFor: "Fixed-scope deliverables",
    teamSize: "Scope-dependent",
    pricingModel: "Fixed price",
  },
  {
    label: "On-Demand Testing",
    bestFor: "Burst capacity, hotfixes",
    teamSize: "1 to 8 testers",
    pricingModel: "Hourly",
  },
  {
    label: "TCoE Setup",
    bestFor: "Enterprise QA standup",
    teamSize: "Consulting plus ongoing",
    pricingModel: "Time and materials",
  }
];

const EngagementOptionsComparison = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    contactus();
    navigate("../../contactus");
  };
  
  return (
    <section
      className="relative overflow-hidden bg-[#f8f9fc] py-6 md:py-20 font-sans"
      aria-label="Native vs cross-platform mobile app comparison"
    >
      {/* Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(12,11,29,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto container-wrapper-transparent">
        <CompHeader
          highlighter='Engagement Options'
          title="Flexible QA Testing Engagement Models"
          subheading="Pick the QA engagement that fits your team and budget. We deliver managed testing services, software testing staff augmentation, dedicated QA team services, and on-demand software testing services."
          variant="default"
        />

        {/* Comparison Table */}
        <div className="mb-2 md:mb-5 overflow-hidden rounded-xl md:rounded-2xl border border-[#dde3f0] shadow-[0_4px_24px_rgba(12,11,29,0.06)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr>
                  <th className="w-[20%] border-r border-white/10 bg-sky-800 p-6 text-left text-[14px] font-semibold uppercase tracking-[1px] text-white">
                    Model
                  </th>

                  <th className="border-r border-white/10 bg-sky-700 p-6 text-left text-[14px] font-semibold text-white">
                    Best For
                  </th>

                  <th className="relative border-r border-white/10 bg-sky-600 p-6 text-left text-[14px] font-bold text-white">
                    Team Size
                  </th>

                  <th className="bg-sky-600 p-6 text-left text-[14px] font-semibold text-white">
                    Pricing Model
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="group transition-colors duration-200 hover:bg-sky-100/60"
                  >
                    <td className="border-r border-b border-[#eef0f8] bg-sky-50 p-6 text-[14px] font-medium text-[#0c0b1d] group-hover:bg-sky-100">
                      {row.label}
                    </td>

                    <td className="border-r border-b border-[#eef0f8] p-6 text-[14px] font-normal text-[#1f2937]">
                      {row.bestFor}
                    </td>

                    <td className="border-r border-b border-[#eef0f8] p-6 text-[14px] font-normal text-[#0c0b1d] ">
                      {row.teamSize}
                    </td>

                    <td className="border-b border-[#eef0f8] p-6 text-[12px] font-normal text-[#1f2937]">
                      <span className="bg-sky-100 px-4 py-2 rounded-full">{row.pricingModel}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
            <span>Discuss Your Model</span><span className="text-md">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EngagementOptionsComparison;