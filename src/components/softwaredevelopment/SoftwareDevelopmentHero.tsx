import {
  Smartphone,
  Award,
  UserRound,
  CalendarCheck,
  Rocket,
  ArrowRight,
} from "lucide-react";
import laptop from "../../assets/software/laptop.png";
import mobile from "../../assets/software/mobile.png";
import watch from "../../assets/software/watch.png";


const SoftwareDevelopmentHero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#0b1a29]
        py-8
        md:py-20
        font-sans
        text-white
        before:pointer-events-none
        before:absolute
        before:inset-0
        before:z-0
        before:opacity-40
        before:[background-image:radial-gradient(rgba(0,188,255,0.15)_1px,transparent_1px)]
        before:[background-size:36px_36px]
        after:absolute
        after:left-0
        after:right-0
        after:top-0
        after:z-[1]
        after:h-px
        after:bg-[linear-gradient(90deg,transparent,rgba(0,188,255,0.7)_40%,rgba(0,188,255,0.9)_50%,rgba(0,188,255,0.7)_60%,transparent)]
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
          lg:grid-cols-[1fr_0.85fr]
          lg:px-8
        "
      >
        {/* LEFT */}
        <div className="flex flex-col items-start">
          {/* Eyebrow */}
          <div
            className="
              mb-4 md:mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-sky-400/20
              bg-sky-500/10
              px-3 md:px-4 py-2
              text-xs md:text-sm
              font-medium
              text-sky-300
            "
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20">
              <Smartphone size={15} />
            </div>
            Software Development
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
            Looking For a Trusted {" "}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Software Development Company
            </span>
          </h1>

          <p className="mt-4 md:mt-6 max-w-xl text-[14px] md:text-base leading-6 md:leading-6.5">
            At Codeflux, we build software that matches how your teams actually operate—workflows, roles, data rules, and approvals included. We deliver in stages with clear scope, measurable progress, and production-ready engineering you can maintain long term.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {/* Point 1 */}
            <div className="flex items-center gap-3 text-xs md:text-sm text-slate-300">
              <div
                className="
                  flex w-7 h-7 md:h-9 md:w-9 shrink-0
                  items-center justify-center
                  rounded-lg
                  border border-sky-400/20
                  bg-sky-500/10
                  text-sky-400
                "
              >
                <Award className="h-[16px] md:h-[20px]" />
              </div>

              <span>Built around your workflows, users, and data</span>
            </div>

            {/* Point 2 */}
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <div
                className="
                  flex w-7 h-7 md:h-9 md:w-9 shrink-0
                  items-center justify-center
                  rounded-lg
                  border border-sky-400/20
                  bg-sky-500/10
                  text-sky-400
                "
              >
                <UserRound className="h-[16px] md:h-[20px]"/>
              </div>

              <span>Sprint demos, milestones, and acceptance criteria</span>
            </div>

            {/* Point 3 */}
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <div
                className="
                  flex w-7 h-7 md:h-9 md:w-9 shrink-0
                  items-center justify-center
                  rounded-lg
                  border border-sky-400/20
                  bg-sky-500/10
                  text-sky-400
                "
              >
                <CalendarCheck className="h-[16px] md:h-[20px]" />
              </div>

              <span>Testing, security, and performance engineered in from start</span>
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
              Get Software Quote
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1"/>
            </a>
          </div>

         
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-10 rounded-full bg-blue-500/20 blur-[90px]"/>
          <div className='flex items-end justify-end'>
          <img src={watch} className='w-[50px] md:w-[70px] h-auto'/>
          <img src={laptop} className='w-[250px] md:w-[400px]'/>
          <img src={mobile} className='w-[70px] md:w-[100px]'/>
        </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareDevelopmentHero;