import React from "react";
import {
  Smartphone,
  Award,
  UserRound,
  CalendarCheck,
  Rocket,
  ArrowRight,
} from "lucide-react";

const MobileAppHero = () => {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#0b2051]
        p-0 m-0
        font-sans
        before:absolute before:top-0 before:left-0 before:right-0
        before:h-[3px]
        before:z-10
        before:bg-[linear-gradient(90deg,transparent,#2563eb_30%,#60a5fa_50%,#2563eb_70%,transparent)]
        before:bg-[length:200%_100%]
        before:animate-[shimmer_3s_linear_infinite]
      "
    >
      <div className="pointer-events-none absolute -right-[180px] -top-[180px] h-[500px] w-[500px] rounded-full bg-sky-600/20 blur-[120px]" aria-hidden="true"/>
      <div className="pointer-events-none absolute -bottom-[200px] -left-[180px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" aria-hidden="true"/>
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle,#60a5fa_1px,transparent_1px)] bg-[size:28px_28px]" aria-hidden="true" />

      {/* Content */}
      <div
        className="
          relative z-[1]
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          items-center
          gap-10
          px-6
          py-10
          lg:grid-cols-[1fr_0.85fr]
          lg:px-8
          lg:py-12
        "
      >
        {/* LEFT */}
        <div className="flex flex-col items-start">
          {/* Eyebrow */}
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-blue-400/20
              bg-sky-500/10
              px-4 py-2
              text-sm
              font-medium
              text-blue-300
            "
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/20">
              <Smartphone size={15} />
            </div>
            Mobile App Development
          </div>

          {/* Heading */}
          <h1
            className="
              max-w-3xl
              text-2xl
              font-semibold
              leading-[1.08]
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Custom Mobile App Development Company{" "}
            <br className="hidden sm:block" />

            <span
              className="
                bg-gradient-to-r
                from-blue-400
                via-cyan-300
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              Built for Results
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-6.5
              text-slate-300
              sm:text-base
            "
          >
            We are a mobile app development company that delivers custom iOS,
            Android, and cross-platform apps for startups and enterprises
            worldwide. From discovery to post-launch support, every app is
            secure, scalable, and built to drive real business outcomes.
          </p>

          {/* Trust points */}
          <div className="mt-8 flex flex-col gap-4">
            {/* Point 1 */}
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <div
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-lg
                  border border-blue-400/20
                  bg-blue-500/10
                  text-blue-400
                "
              >
                <Award size={18} />
              </div>

              <span>ISO-Certified Developer</span>
            </div>

            {/* Point 2 */}
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <div
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-lg
                  border border-blue-400/20
                  bg-blue-500/10
                  text-blue-400
                "
              >
                <UserRound size={18} />
              </div>

              <span>Dedicated Project Manager on Every Build</span>
            </div>

            {/* Point 3 */}
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <div
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-lg
                  border border-blue-400/20
                  bg-blue-500/10
                  text-blue-400
                "
              >
                <CalendarCheck size={18} />
              </div>

              <span>On-Time Delivery, Guaranteed in Writing</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-9">
            <a
              href="#contact-us"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-lg
                bg-blue-600
                px-6 py-3.5
                text-sm
                font-semibold
                text-white
                shadow-[0_0_30px_rgba(37,99,235,0.25)]
                transition-all
                duration-300
                hover:bg-blue-500
                hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]
              "
            >
              <Rocket size={17} />

              Get Your App Scoped

              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>

         
        </div>

        {/* RIGHT */}
        <div
          className="
            relative
            flex
            items-center
            justify-center
          "
        >
          {/* Image glow */}
          <div
            className="
              absolute
              inset-10
              rounded-full
              bg-blue-500/20
              blur-[90px]
            "
          />

          <img
            fetchPriority="high"
            className="
              relative z-[1]
              h-auto
              w-full
              max-w-[550px]
              object-contain
              drop-shadow-[0_20px_70px_rgba(37,99,235,0.25)]
            "
            src="https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/06/18114756/mobile-app-development-company.webp"
            alt="Custom mobile app development showcase — iOS and Android app built by SDLC Corp"
            width="900"
            height="1100"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileAppHero;