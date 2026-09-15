import React from "react";
import {
  AlertTriangle,
  Clock3,
  Smartphone,
  Network,
  TrendingDown,
  Search,
  FilePenLine,
} from "lucide-react";
import { motion } from "framer-motion";
import { ItemVariant } from "../../shared/MotionSetting";
import CompHeader from "../shared/CompHeader";

interface Problem {
  title: string;
  description: string;
  icon: React.ElementType;
}

const problems: Problem[] = [
  {
    title: "Slow and Heavy Pages",
    description:
      "Bloated builds and unoptimized assets hurt rankings and lose visitors before the page even loads.",
    icon: Clock3,
  },
  {
    title: "Poor Mobile Experience",
    description:
      "Layouts that break on phones, where most of your traffic and conversions actually happen.",
    icon: Smartphone,
  },
  {
    title: "Confusing Navigation",
    description:
      "Unclear structure and weak information architecture that bury what visitors came to find.",
    icon: Network,
  },
  {
    title: "Low Conversions",
    description:
      "No clear CTAs, weak page flow, and forms placed where they cannot capture leads and sales.",
    icon: TrendingDown,
  },
  {
    title: "Weak SEO Structure",
    description:
      "Missing semantic markup, messy URLs, and no schema so pages never rank where they should.",
    icon: Search,
  },
  {
    title: "Hard-to-Manage Content",
    description:
      "Editing simple content needs a developer, slowing every update your team wants to make.",
    icon: FilePenLine,
  },
];

const WebDevelopmentProblems = () => {

  return (
    <section
      id="problems"
      aria-labelledby="problems-title"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
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
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-[55%] w-[50%] rounded-full bg-sky-600/[0.08] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[45%] w-[40%] rounded-full bg-sky-600/[0.06] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <CompHeader
          highlighter='Website Problems We Solve'
          title="Is Your Website Holding the Business Back?"
          subheading="Most websites fail on speed, mobile, structure, or conversions. We fix the root causes so your site works as hard as your team does."
          variant="default"
        />

        {/* Main Content */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_1.55fr]">
          {/* Image */}
          <div
            className="
              group
              relative
              min-h-[360px]
              overflow-hidden
              rounded-[18px]
              shadow-[0_0_0_1px_rgba(222,222,222,0.2),0_0_20px_rgba(222,222,222,0.12),0_20px_50px_rgba(0,0,0,0.2)]
              transition-shadow
              duration-300
              hover:shadow-[0_0_0_1px_rgba(222,222,222,0.25),0_0_30px_rgba(222,222,222,0.08),0_24px_60px_rgba(0,0,0,0.25)]
              lg:min-h-[620px]
            "
          >
            {/* Top blue line */}
            <div className="absolute left-[10%] right-[10%] top-0 z-20 h-px bg-gradient-to-r from-transparent via-sky-600 to-transparent opacity-70" />

            <img
              src="https://sdlccorp-web-prod.blr1.cdn.digitaloceanspaces.com/wp-content/uploads/2026/06/09152301/website-problem-we-solve.webp"
              alt="Common website problems SDLC Corp solves for businesses"
              width={560}
              height={620}
              loading="lazy"
              decoding="async"
              className="
                absolute
                inset-0
                h-full
                w-full
                rounded-[18px]
                object-cover
                transition-transform
                duration-500
                ease-out
                group-hover:scale-[1.04]
              "
            />

            {/* Bottom image gradient */}
            <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-gradient-to-b from-transparent via-transparent to-[#080a1c]/50" />

            {/* Badge */}
            <div
              className="
                absolute
                top-[18px]
                left-[18px]
                z-20
                inline-flex
                items-center
                gap-[7px]
                rounded-[9px]
                bg-red-500
                px-3.5
                py-2
                text-xs
                font-semibold
                text-white
                shadow-[0_10px_26px_rgba(239,68,68,0.32)]
                animate-[problemPulse_2.4s_ease-in-out_infinite]
              "
            >
              <AlertTriangle size={13} strokeWidth={2.2} />
              Sound familiar?
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 content-start gap-3.5 sm:grid-cols-2">
            {problems.map((problem) => {
              const Icon = problem.icon;

              return (
                <article
                  key={problem.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-sky-600/[0.18]
                    bg-white/[0.2]
                    p-6
                    shadow-[0_4px_20px_rgba(0,0,0,0.1)]
                    transition-all
                    duration-300
                    ease-out

                    before:absolute
                    before:left-0
                    before:right-0
                    before:top-0
                    before:h-0.5
                    before:origin-left
                    before:scale-x-0
                    before:bg-gradient-to-r
                    before:from-sky-600
                    before:to-sky-600/30
                    before:transition-transform
                    before:duration-500

                    hover:-translate-y-[5px]
                    hover:border-sky-600/[0.45]
                    hover:bg-sky-600/[0.08]
                    hover:shadow-[0_12px_40px_rgba(0,188,235,0.15),0_0_0_1px_rgba(0,188,255,0.25)]
                    hover:before:scale-x-100
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      mb-4
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-sky-600/25
                      bg-blue-600/[0.12]
                      text-sky-600
                      transition-all
                      duration-300
                      group-hover:rotate-[-3deg]
                      group-hover:scale-110
                      group-hover:border-sky-600
                      group-hover:bg-sky-600
                      group-hover:text-white
                      group-hover:shadow-[0_8px_22px_rgba(37,99,235,0.35)]
                    "
                  >
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  <h3
                    className="
                      relative
                      z-[1]
                      mb-[9px]
                      font-semibold
                      leading-[1.2]
                      text-lg
                      text-[#063559]
                    "
                  >
                    {problem.title}
                  </h3>

                  <p
                    className="
                      relative
                      z-[1]
                      m-0
                      text-[14px]
                      font-normal
                      leading-[1.4]
                      text-gray-700
                      "
                  >
                    {problem.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes problemPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
};

export default WebDevelopmentProblems;