import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Pause,
  Play,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

const slides = [
  {
    eyebrow: "Introducing CodeFlux AI Development",
    title: (
      <>
        <span className="text-[#9ebcff]">Transforming</span>
        <br />
        <span className="text-[#0879ff]">Business</span>
        <br />
        <span className="text-white">with AI-First Development</span>
      </>
    ),
    description:
      "From intelligent automation to agentic AI systems. We design, build, and scale the future for Fortune 500 enterprises and ambitious challengers alike.",
  },
  {
    eyebrow: "AI-Powered Digital Transformation",
    title: (
      <>
        <span className="text-[#9ebcff]">Building</span>
        <br />
        <span className="text-[#0879ff]">Smarter</span>
        <br />
        <span className="text-white">Digital Experiences</span>
      </>
    ),
    description:
      "Transform customer experiences, streamline operations, and unlock new opportunities with intelligent AI-powered solutions.",
  },
  {
    eyebrow: "Enterprise Web Engineering",
    title: (
      <>
        <span className="text-[#9ebcff]">Engineering</span>
        <br />
        <span className="text-[#0879ff]">Web Applications</span>
        <br />
        <span className="text-white">Built for Scale</span>
      </>
    ),
    description:
      "From strategy to production, we engineer secure, scalable AI platforms designed around your most critical business challenges.",
  },
  {
    eyebrow: "Intelligent Automation",
    title: (
      <>
        <span className="text-[#9ebcff]">Automate</span>
        <br />
        <span className="text-[#0879ff]">What Matters</span>
        <br />
        <span className="text-white">Most to Your Business</span>
      </>
    ),
    description:
      "Connect AI agents, workflows, data, and enterprise systems to eliminate repetitive work and accelerate business outcomes.",
  },
  {
    eyebrow: "AI Strategy & Consulting",
    title: (
      <>
        <span className="text-[#9ebcff]">Your AI</span>
        <br />
        <span className="text-[#0879ff]">Advantage</span>
        <br />
        <span className="text-white">Starts Here</span>
      </>
    ),
    description:
      "Turn ambitious AI ideas into practical business solutions with an experienced team covering strategy, engineering, and implementation.",
  },
];

const HeroNew = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  // Banner duration
  const duration = 6000;

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, duration);

    return () => clearInterval(timer);
  }, [paused]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  const slide = slides[activeSlide];

  return (
    <section className="relative md:min-h-screen overflow-hidden container-wrapper-transparent text-white flex flex-col gap-16 justify-between border-0">

      {/* Main content */}
      <div className="w-full relative z-10 mx-auto flex min-h-[620px]  md:min-h-[calc(100vh-100px)] items-center md:px-7 pt-4">
        <div className="w-full">
          {/* Eyebrow */}
          <div
            key={`eyebrow-${activeSlide}`}
            className="mb-4 md:mb-7 inline-flex animate-fadeUp items-center gap-2 rounded-full border border-white/[0.05] md:border-white/10 bg-white/[.045] px-4 py-2 text-xs md:text-sm md:font-medium text-white/90 backdrop-blur"
          >
            <Sparkles size={16} className="text-blue-400" />
            {slide.eyebrow}
          </div>

          {/* Heading */}
          <h1
            key={`title-${activeSlide}`}
            className="max-w-[1100px] animate-fadeUp text-5xl md:text-[clamp(52px,6vw,70px)] font-normal md:leading-[.99] tracking-[-.055em]"
          >
            {slide.title}
          </h1>

          {/* Description */}
          <p
            key={`description-${activeSlide}`}
            className="mt-4 md:mt-8 max-w-[850px] animate-fadeUp text-white/65 text-md md:text-[21px] leading-[1.45] md:leading-[1.65]"
          >
            {slide.description}
          </p>

          {/* CTA + metrics */}
          <div className="mt-11 flex flex-wrap items-center gap-4">
            <button className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 md:px-7 md:py-4 text-[14px] md:text-[16px] font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-xl">
              Explore AI Solutions
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

            <button className="rounded-full border border-white/10 bg-white/[.025] px-6 py-3 md:px-7 md:py-4 text-[14px] md:text-[16px] font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
              Talk to Experts
            </button>

          </div>

        
        </div>
      </div>

      {/* Top navigation / progress */}
      <div className="w-full relative z-20 bottom-10 md:bottom-30 mx-auto flex items-center gap-5 md:px-7">
        <button
          onClick={previousSlide}
          className="flex h-8 w-8 items-center justify-center text-white rounded-full border border-white/10 bg-white/[.04] transition hover:bg-white/10"
        >
          <ArrowLeft size={14} />
        </button>

        <button
          onClick={() => setPaused((value) => !value)}
          className="flex h-8 w-8 items-center justify-center text-white rounded-full border border-white/10 bg-white/[.04] transition hover:bg-white/10"
        >
          {paused ? <Play size={11} /> : <Pause size={11} />}
        </button>

        <button
          onClick={nextSlide}
          className="flex h-8 w-8 items-center justify-center text-white rounded-full border border-white/10 bg-white/[.04] transition hover:bg-white/10"
        >
          <ArrowRight size={14} />
        </button>

        {/* Progress bars */}
        <div className="ml-3 flex flex-1 gap-5">
          {slides.map((_, index) => (
            <div
              key={index}
              className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-white/10"
            >
              <div
                className={`absolute inset-y-0 left-0 rounded-full ${
                  index < activeSlide
                    ? "w-full bg-white/70"
                    : index === activeSlide
                      ? "animate-progress bg-white"
                      : "w-0"
                }`}
                style={
                  index === activeSlide && !paused
                    ? {
                        animationDuration: `${duration}ms`,
                        animationTimingFunction: "linear",
                      }
                    : {}
                }
              />
            </div>
          ))}
        </div>

        <span className="ml-2 whitespace-nowrap text-xs tracking-[.25em] text-white/50">
          {String(activeSlide + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030609] to-transparent" />

      {/* Tailwind animation definitions */}
      <style>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-progress {
          animation-name: progress;
        }

        .animate-fadeUp {
          animation: fadeUp .65s ease-out both;
        }
      `}</style>
    </section>
  );
}

export default HeroNew;