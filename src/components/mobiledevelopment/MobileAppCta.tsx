
const MobileAppCta = () => {
  return (
    <section
      id="sdlc-cta-section"
      aria-label="Start your mobile app project"
      className="bg-[#f8f9fc] p-0 font-sans"
    >
      <div
        className="
          group
          relative
          flex
          min-h-[480px]
          w-full
          items-center
          justify-center
          overflow-hidden
        "
      >
        {/* Background Image */}
        <div
          className="
            absolute
            inset-0
            z-0
            bg-cover
            bg-[position:center_top]
            transition-transform
            duration-[8000ms]
            ease-in-out
            group-hover:scale-[1.04]
          "
          style={{
            backgroundImage:
              "url('https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/06/15155519/mobile-app-development-cta-img-1.webp')",
          }}
        />

        <div className="absolute inset-0 z-[1] bg-[linear-gradient(135deg,rgba(12,11,29,0.82)_0%,rgba(12,11,29,0.65)_60%,rgba(37,99,235,0.25)_100%)]"/>

        <div className="relative z-[2] mx-auto max-w-[760px] px-6 py-14 text-center sm:px-10 md:px-[58px]">
          <div className="mb-5 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[1.5px] text-white/70">
            <span className="h-px w-7 shrink-0 bg-white/40" />
            <span>Ready to Build</span>
            <span className="h-px w-7 shrink-0 bg-white/40" />
          </div>

          <h3 className="mb-4 text-[30px] font-normal leading-[1.2] text-white sm:text-[34px] md:text-[38px]">
            Turn Your App Idea Into a
            <br className="hidden sm:block" />
            Live Product in 20 Days
          </h3>

          <p className="mx-auto mb-8 max-w-[540px] text-[15px] font-normal leading-[1.72] text-gray-300">
            Talk to our mobile app team and get a scoped estimate, tech recommendation, and delivery timeline in one free call, no obligation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-[14px]">
            <a
              href="#contact-us"
              className="
                group/primary
                inline-flex
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
            >
              <span>Book a Free Strategy Call</span>

              <span className="text-xs">→</span>
            </a>
          </div>

          {/* Trust Points */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <span className="flex items-center gap-[5px] text-xs font-normal text-gray-400">
              <span className="text-[11px] text-blue-300">✓</span>
              No commitment required
            </span>
            <span className="flex items-center gap-[5px] text-xs font-normal text-gray-400">
              <span className="text-[11px] text-blue-300">✓</span>
              NDA signed on request
            </span>
            <span className="flex items-center gap-[5px] text-xs font-normal text-gray-400">
              <span className="text-[11px] text-blue-300">✓</span>
              Response within 24 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppCta;