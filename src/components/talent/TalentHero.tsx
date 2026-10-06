import {
  Smartphone,
  Award,
  UserRound,
  CalendarCheck,
  Rocket,
  ArrowRight,
} from "lucide-react";
import recruitmentbg from "../../assets/hero/recruitmentbg.avif";



const TalentHero = () => {
  return (
    <div className="relative h-[575px] md:h-[700px] overflow-hidden">
      <section
        className="
          absolute
          w-full
          z-10
          overflow-hidden
          bg-[#0b1a29]/50
          py-6 md:py-20
          font-sans
          text-white
          before:pointer-events-none
          before:absolute
          before:inset-0
          before:z-0
          before:opacity-40
          before:[background-image:radial-gradient(rgba(0,188,255,0.35)_1px,transparent_1px)]
          before:[background-size:36px_36px]
          after:absolute
          after:left-0
          after:right-0
          after:top-0
          after:z-[2]
          after:h-px
          after:bg-[linear-gradient(90deg,transparent,rgba(0,188,255,0.7)_40%,rgba(0,188,255,0.9)_50%,rgba(0,188,255,0.7)_60%,transparent)]
        "
      >
        <div className="pointer-events-none absolute -right-[180px] -top-[180px] h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px]" aria-hidden="true"/>
        <div className="pointer-events-none absolute -bottom-[200px] -left-[180px] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.05] blur-[120px]" aria-hidden="true"/>
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(circle,#60a5fa_1px,transparent_1px)] bg-[size:28px_28px]" aria-hidden="true" />

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
            lg:grid-cols-[1fr_0.85fr]
            lg:px-8
          "
        >
          {/* LEFT */}
          <div className="flex flex-col items-start">

            <div className="mb-2 md:mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/15 bg-sky-400/10 px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-sky-400">
              <div className="flex w-5 h-5 md:h-7 md:w-7 items-center justify-center rounded-full bg-sky-400/20">
                <Smartphone size={15} />
              </div>
              What We Provide / Professional Staffing
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-2xl font-semibold md:font-medium leading-[1.08] tracking-tight text-white lg:text-5xl">
              Business Empowered {" "}
              <br className="hidden sm:block" />

              <span
                className="
                  text-3xl md:text-5xl inline-block
                  bg-gradient-to-r
                  from-sky-300
                  via-sky-400
                  to-sky-500
                  bg-clip-text
                  text-transparent
                "
              >
                Talent Services
              </span>
               {/* <span
                className="
                  text-7xl
                  bg-gradient-to-r
                  from-[#FF6B00]
                  via-[#ff4d00]
                  to-[#fb00ff]
                  bg-clip-text
                  text-transparent
                "
              >
                Talent Services
              </span> */}
            </h1>

            {/* Description */}

            <p className="mt-4 md:mt-6 max-w-xl text-[14px] md:text-base leading-6 md:leading-6.5">
              Codeflux offers a comprehensive range of recruitment solutions tailored to meet the unique needs of each client. From permanent placements to temporary staffing and contract roles, we provide flexible and effective solutions to help businesses thrive.
            </p>

            {/* Trust points */}
            <div className="mt-6 md:mt-8 flex flex-col gap-4">
              {/* Point 1 */}
              <div className="flex items-center gap-3 text-sm text-white">
                <div
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-lg
                    border border-sky-400/20
                    bg-sky-500/10
                    text-sky-400
                  "
                >
                  <Award size={18} />
                </div>

                <span>Temporary & Contract Recruitment</span>
              </div>

              {/* Point 2 */}
              <div className="flex items-center gap-3 text-sm text-white">
                <div
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-lg
                    border border-sky-400/20
                    bg-sky-500/10
                    text-sky-400
                  "
                >
                  <UserRound size={18} />
                </div>

                <span>Permanent Recruitment</span>
              </div>

              {/* Point 3 */}
              <div className="flex items-center gap-3 text-sm text-white">
                <div
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-lg
                    border border-sky-400/20
                    bg-sky-500/10
                    text-sky-400
                  "
                >
                  <CalendarCheck size={18} />
                </div>

                <span>Executive & Senior Professional Recruitment</span>
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
                  bg-sky-600
                  px-6 py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_0_30px_rgba(0,188,255,0.25)]
                  transition-all
                  duration-300
                  hover:bg-sky-500
                  hover:shadow-[0_0_40px_rgba(0,188,255,0.4)]
                "
              >
                <Rocket size={17} />

                Get Website Quote

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
        </div>
       
      </section>
      {/* <div className="absolute right-0 top-0 w-full h-full bg-gradient-to-r from-[#111] to-transparent z-2"></div> */}
      <div className="absolute left-0 top-0 z-[2] h-full w-full bg-gradient-to-r from-[#01182e] via-[#111] to-[#111] opacity-80"/>
       <img
          fetchPriority="high"
          className="
            relative z-[1]
            h-auto
            w-full
            object-contain
            drop-shadow-[0_20px_70px_rgba(37,99,235,0.25)]
          "
          src={recruitmentbg}
          alt=""
          loading="eager"
          decoding="async"
        />
    </div>
  );
};

export default TalentHero;