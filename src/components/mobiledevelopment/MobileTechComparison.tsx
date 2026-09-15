import CompHeader from "../shared/CompHeader";

const MobileTechComparison = () => {
  const comparisonRows = [
    {
      label: "Performance",
      native: "Highest — direct OS access",
      flutter: "Near-native",
      reactNative: "Near-native",
    },
    {
      label: "Code Reuse",
      native: "0% — two codebases",
      flutter: "90 to 95%",
      reactNative: "70 to 90%",
    },
    {
      label: "Dev Cost",
      native: "Higher",
      flutter: "Lower",
      reactNative: "Lower",
    },
    {
      label: "Dev Speed",
      native: "Slower",
      flutter: "Faster",
      reactNative: "Faster",
    },
    {
      label: "UI Quality",
      native: "Pixel-perfect, platform-native",
      flutter: "Excellent custom UI",
      reactNative: "Good, some native widgets",
    },
    {
      label: "Best For",
      native: "Performance-critical apps",
      flutter: "MVPs and fast launch",
      reactNative: "JS teams and SaaS products",
    },
  ];

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
          highlighter='Technical Decision Guide'
          title="Native vs Cross-Platform: Which Is Right for You?"
          subheading="Budget, performance, and roadmap determine the answer. Here is the full comparison to help you choose the right approach."
          variant="default"
        />

        {/* Comparison Table */}
        <div className="mb-5 overflow-hidden rounded-2xl border border-[#dde3f0] shadow-[0_4px_24px_rgba(12,11,29,0.06)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr>
                  <th className="w-[20%] border-r border-white/10 bg-[#2563eb] px-[22px] py-[18px] text-left text-[11px] font-semibold uppercase tracking-[1px] text-white/45">
                    &nbsp;
                  </th>

                  <th className="border-r border-white/10 bg-[#2563eb] px-[22px] py-[18px] text-left text-[13px] font-semibold tracking-[0.4px] text-white/75">
                    Native iOS / Android
                  </th>

                  <th className="relative border-r border-white/10 bg-[#2563eb] px-[22px] py-[18px] text-left text-[14px] font-bold text-white">
                    Flutter
                    <span className="ml-2 inline-flex rounded-full bg-white/20 px-[7px] py-[2px] align-middle text-[9px] font-bold uppercase tracking-[1px] text-white">
                      Rec
                    </span>
                  </th>

                  <th className="bg-[#2563eb] px-[22px] py-[18px] text-left text-[13px] font-semibold tracking-[0.4px] text-white/75">
                    React Native
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="group transition-colors duration-200 hover:bg-[#eef3ff]"
                  >
                    {/* Label */}
                    <td className="border-r border-b border-[#eef0f8] bg-white px-[22px] py-[13px] text-[12px] font-semibold uppercase tracking-[0.5px] text-[#64748b] group-hover:bg-[#eef3ff]">
                      {row.label}
                    </td>

                    {/* Native */}
                    <td className="border-r border-b border-[#eef0f8] px-[22px] py-[13px] text-[14px] font-normal text-[#1f2937]">
                      {row.native}
                    </td>

                    {/* Flutter */}
                    <td className="border-r border-b border-[#eef0f8] bg-[#f0f5ff] px-[22px] py-[13px] text-[14px] font-semibold text-[#0c0b1d] group-hover:bg-[#dbeafe]">
                      {row.flutter}
                    </td>

                    {/* React Native */}
                    <td className="border-b border-[#eef0f8] px-[22px] py-[13px] text-[14px] font-normal text-[#1f2937]">
                      {row.reactNative}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommendation Cards */}
        <div className="grid grid-cols-1 gap-[14px] md:grid-cols-3">
          {/* Native */}
          <div className="group relative flex flex-col overflow-hidden rounded-[14px] border border-[#dde3f0] bg-white p-5 pt-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(37,99,235,0.4)] hover:shadow-[0_14px_36px_rgba(12,11,29,0.08),0_4px_10px_rgba(37,99,235,0.07)]">
            {/* Top Line */}
            <span className="absolute left-0 top-0 h-[3px] w-0 rounded-t-[14px] bg-[#2563eb] transition-all duration-500 ease-out group-hover:w-full" />

            <span className="mb-3 self-start rounded-full border border-[#e2e8f0] bg-[#f1f5f9] px-[10px] py-1 text-[10px] font-bold uppercase tracking-[1px] text-[#64748b]">
              Choose Native When
            </span>

            <h3 className="mb-2 text-xl font-semibold leading-[1.25] text-[#0c0b1d]">
              Maximum Performance
            </h3>

            <p className="mb-[18px] flex-1 text-[14px] font-normal leading-[1.62] text-[#6b7280]">
              Deep device integration or absolute performance ceiling required.
            </p>
          </div>

          {/* Flutter - Featured */}
          <div className="group relative flex flex-col overflow-hidden rounded-[14px] border border-[#2563eb] bg-gradient-to-br from-[#f0f5ff] to-white p-5 pt-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(37,99,235,0.14),0_4px_12px_rgba(37,99,235,0.1)]">
            {/* Top Line */}
            <span className="absolute left-0 top-0 h-[3px] w-full rounded-t-[14px] bg-[#2563eb]" />

            <span className="mb-3 flex self-start items-center gap-[5px] rounded-full bg-[#2563eb] px-[10px] py-1 text-[10px] font-bold uppercase tracking-[1px] text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)]">
              <span className="text-[11px]">★</span>
              Our Recommendation
            </span>

            <h3 className="mb-2 text-xl font-semibold leading-[1.25] text-[#0c0b1d]">
              Flutter: Fastest to Market
            </h3>

            <p className="mb-[18px] flex-1 text-[14px] font-normal leading-[1.62] text-[#6b7280]">
              Our default for most new projects. Polished app on both
              platforms, launched faster.
            </p>

            <a
              href="#contact-us"
              className="inline-flex self-start items-center gap-[7px] rounded-lg border-[1.5px] border-transparent bg-[#2563eb] px-4 py-[10px] text-[13px] font-semibold text-white no-underline shadow-[0_3px_10px_rgba(37,99,235,0.28)] transition-all duration-200 hover:gap-[10px] hover:bg-[#1d4ed8]"
            >
              Start with Flutter
              <span className="text-[10px]">→</span>
            </a>
          </div>

          {/* React Native */}
          <div className="group relative flex flex-col overflow-hidden rounded-[14px] border border-[#dde3f0] bg-white p-5 pt-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(37,99,235,0.4)] hover:shadow-[0_14px_36px_rgba(12,11,29,0.08),0_4px_10px_rgba(37,99,235,0.07)]">
            {/* Top Line */}
            <span className="absolute left-0 top-0 h-[3px] w-0 rounded-t-[14px] bg-[#2563eb] transition-all duration-500 ease-out group-hover:w-full" />

            <span className="mb-3 self-start rounded-full border border-[#e9d5ff] bg-[#f5f3ff] px-[10px] py-1 text-[10px] font-bold uppercase tracking-[1px] text-[#7c3aed]">
              Choose RN When
            </span>

            <h3 className="mb-2 text-xl font-semibold leading-[1.25] text-[#0c0b1d]">
              JavaScript-Heavy Teams
            </h3>

            <p className="mb-[18px] flex-1 text-[14px] font-normal leading-[1.62] text-[#6b7280]">
              Strong JS/React experience or extending a web product into
              mobile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileTechComparison;