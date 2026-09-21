import {
  Award,
  UserRound,
  Rocket,
  ArrowRight,
  CloudIcon,
} from "lucide-react";
// import cloud from "../../assets/hero/cloud.png";
import cloud from "../../assets/hero/cloud-computing-image2.png";

// bg-[#381b65]
const CloudSolutionsHero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#2d1255]
        py-20
        font-sans
        text-white
        before:pointer-events-none
        before:absolute
        before:inset-0
        before:z-0
        before:opacity-40
        before:[background-image:radial-gradient(rgba(65,95,252,0.15)_1px,transparent_1px)]
        before:[background-size:36px_36px]
        after:absolute
        after:left-0
        after:right-0
        after:top-0
        after:z-[1]
        after:h-px
        after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.7)_40%,rgba(255,255,255,0.9)_50%,rgba(255,255,255,0.7)_60%,transparent)]
      "
    >
      <div className="pointer-events-none z-10 absolute -right-[180px] -top-[180px] h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[120px]" aria-hidden="true"/>
      <div className="pointer-events-none z-10 absolute -bottom-[200px] -left-[180px] h-[500px] w-[500px] rounded-full bg-purple-500/30 blur-[120px]" aria-hidden="true"/>
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle,#c3b4ff_1px,transparent_1px)] bg-[size:28px_28px]" aria-hidden="true" />

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
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-purple-400/20
              bg-purple-500/10
              px-4 py-2
              text-sm
              font-medium
              text-purple-300
            "
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/20">
              <CloudIcon size={15} />
            </div>
            Cloud Services
          </div>

          {/* Heading */}
          <h1
            className="
              max-w-3xl
              text-2xl
              font-normal
              leading-[1.08]
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Looking For a Trusted {" "}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 via-purple-400 to-purple-500 bg-clip-text text-transparent font-semibold">
              Cloud & Platform Engineering Services
            </span>
          </h1>

          <p className=" mt-6 max-w-xl text-base leading-6.5 text-gray-200 sm:text-base">
            At Codeflux, we build AI-led Transformation for Scalable Cloud and Modern Infrastructure
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {/* Point 1 */}
            <div className="flex items-center gap-3 text-sm text-gray-200">
              <div
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-lg
                  border border-purple-400/20
                  bg-purple-500/10
                  text-purple-400
                  -mt-5
                "
              >
                <Award size={18} />
              </div>

              <span>As AI becomes the bedrock of digital transformation, cloud infrastructure emerges as a critical enabler. From infrastructure to innovation, we enable you to harness the full power of cloud and AI with speed and scale for impactful outcomes.</span>
            </div>

            {/* Point 2 */}
            <div className="flex items-center gap-3 text-sm text-gray-200">
              <div
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-lg
                  border border-purple-400/20
                  bg-purple-500/10
                  text-purple-400
                  -mt-5
                "
              >
                <UserRound size={18} />
              </div>

              <span>Build secure, cost-efficient, and scalable cloud-native platforms. Our engineering-led approach reduces provisioning time by up to 40% and embeds compliance and observability from day one.</span>
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
                bg-purple-600
                px-6 py-3.5
                text-sm
                font-semibold
                text-white
                shadow-[0_0_30px_rgba(0,188,255,0.10)]
                transition-all
                duration-300
                hover:bg-purple-700
                hover:shadow-[0_0_40px_rgba(0,188,255,0.15)]
              "
            >
              <Rocket size={17} />

              Get Software Quote

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
        <div className="relative flex items-center justify-center">
          {/* Image glow */}
          <div
            className="
              absolute
              inset-10
              rounded-full
              bg-purple-700/30
              blur-[90px]
            "
          />

          <div className='flex items-end justify-end'>
          <img src={cloud} className='w-[1000px]'/>
        </div>
        </div>
      </div>
    </section>
  );
};

export default CloudSolutionsHero;