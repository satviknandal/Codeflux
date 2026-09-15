import React from "react";
import {
  Network,
  Monitor,
  Headphones,
  Box
} from "lucide-react";
import { ItemVariantLeft } from "../../shared/MotionSetting";
import { motion } from "framer-motion";
import CompHeader from "../shared/CompHeader";

const Avatar = ({
  src,
  fallback,
}: {
  src?: string;
  fallback: string;
}) => (
  <div className="relative h-16 w-16 overflow-hidden rounded-full border-[3px] border-slate-500/70 bg-slate-700 shadow-[0_0_20px_rgba(255,255,255,0.08)]">
    {src ? (
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover"
      />
    ) : (
      <div className="flex h-full w-full items-center justify-center text-2xl">
        {fallback}
      </div>
    )}
  </div>
);

const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`
        px-6 py-7
        group relative overflow-hidden rounded-xl md:rounded-[32px]
        border border-slate-600/50
        bg-[#0c111b]/90
        shadow-[0_0_30px_rgba(255,255,255,0.025)]
        backdrop-blur-xl
        transition-all duration-500
        hover:-translate-y-1
        hover:border-slate-500/70
        hover:shadow-[0_15px_50px_rgba(0,220,255,0.08)]
        ${className}
      `}
    >
      {/* subtle inner glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[32px] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]" />

      {/* cyan ambient glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {children}
    </div>
  );
};

/* -------------------------------------------------------
   CARD 1 — Personalized Support
------------------------------------------------------- */

const SupportVisual = () => (
  <div className="flex h-[190px] items-center justify-center">
    <div className="flex -space-x-4">
      <Avatar fallback="👩🏻" />
      <Avatar fallback="👨🏻" />
      <Avatar fallback="👩🏽" />
      <Avatar fallback="🧑🏻" />
    </div>
  </div>
);

/* -------------------------------------------------------
   CARD 2 — With You Every Step
------------------------------------------------------- */

const ChatVisual = () => (
  <div className="h-[190px] px-4">
    <div className="mb-2 flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-500 bg-gradient-to-br from-orange-300 to-purple-500 text-sm">
        👩🏻
      </div>

      <div className="text-[10px] text-white">
        Maddy <span className="text-slate-400">• 10:15 AM</span>
      </div>
    </div>

    <div className="ml-11 space-y-2">
      <div className="w-fit rounded-xl md:rounded-2xl border border-slate-500/70 bg-slate-800/40 px-4 py-1.5 text-xs md:text-sm text-slate-100">
        Hi, Daniel! Your design draft is ready.
      </div>

      <div className="w-fit rounded-xl md:rounded-2xl border border-slate-500/70 bg-slate-800/40 px-4 py-1.5  text-xs md:text-sm text-slate-100">
        Want feedback before next step?
      </div>

      <div className="flex h-6 md:h-8 w-fit items-center gap-1 rounded-xl md:rounded-full border border-slate-500/70 px-4">
        <span className="h-1 w-1 rounded-full bg-slate-300" />
        <span className="h-1 w-1 rounded-full bg-slate-300" />
        <span className="h-1 w-1 rounded-full bg-slate-300" />
      </div>
    </div>
  </div>
);

/* -------------------------------------------------------
   CARD 3 — Measurable Impact
------------------------------------------------------- */

const ImpactVisual = () => {
  const bars = Array.from({ length: 18 });

  return (
    <div className="h-[190px] pt-3">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-xs text-slate-200">
          Uptime Trends
        </span>

        <div className="flex rounded-full border border-slate-600 px-1 py-0.5 text-[9px] text-slate-400">
          <span className="px-2">D</span>
          <span className="px-2">W</span>
          <span className="rounded-full bg-slate-600 px-2 text-white">
            M
          </span>
          <span className="px-2">Y</span>
        </div>
      </div>

      <div className="flex h-[65px] items-end gap-[7px]">
        {bars.map((_, index) => (
          <div
            key={index}
            className="relative h-full w-[9px] overflow-hidden rounded-full bg-slate-600"
          >
            <div
              className={`
                absolute bottom-0 left-0 w-full rounded-full
                ${index === 11 ? "h-[90%] bg-cyan-400" : ""}
                ${index !== 11 ? "h-[75%] bg-gradient-to-t from-white via-slate-200 to-transparent" : ""}
              `}
            />
          </div>
        ))}
      </div>

      <div className="mt-3 ml-auto max-w-[120px] text-[10px] leading-3 text-slate-500">
        99.8% average uptime
        maintained across all
        client systems.
      </div>
    </div>
  );
};

/* -------------------------------------------------------
   CARD 4 — Future Ready
------------------------------------------------------- */

const FutureVisual = () => (
  <div className="relative flex h-[190px] items-center justify-center">
    {/* connection lines */}
    <div className="absolute h-[1px] w-52 rotate-45 bg-slate-700" />
    <div className="absolute h-[1px] w-52 -rotate-45 bg-slate-700" />
    <div className="absolute h-52 w-[1px] bg-slate-700" />
    <div className="absolute h-[1px] w-52 bg-slate-700" />

    {/* surrounding icons */}
    <div className="absolute left-[18%] top-[42%] flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 bg-[#111722]">
      <Network className="h-5 w-5 text-slate-200" />
    </div>

    <div className="absolute right-[18%] top-[42%] flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 bg-[#111722]">
      <Monitor className="h-5 w-5 text-slate-200" />
    </div>

    <div className="absolute left-[27%] top-[10%] text-slate-600">
      <Headphones className="h-7 w-7" />
    </div>

    <div className="absolute right-[27%] top-[10%] text-slate-600">
      <Headphones className="h-7 w-7" />
    </div>

    <div className="absolute bottom-[10%] left-[27%] text-slate-600">
      <Headphones className="h-7 w-7" />
    </div>

    <div className="absolute bottom-[10%] right-[27%] text-slate-600">
      <Headphones className="h-7 w-7" />
    </div>

    {/* central cube */}
    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-500/60 bg-gradient-to-br from-slate-500/40 to-slate-800 shadow-[0_0_35px_rgba(255,255,255,0.08)]">
      <Box className="h-10 w-10 text-white" strokeWidth={1.2} />
    </div>
  </div>
);

/* -------------------------------------------------------
   CARD 5 — Transparent Process
------------------------------------------------------- */

const ProcessVisual = () => (
  <div className="relative h-[190px] overflow-hidden pt-3">
    {/* timeline grid */}
    <div className="absolute inset-0 flex justify-between px-10 opacity-40">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="h-full w-px bg-slate-600"
        />
      ))}
    </div>

    {/* timeline items */}
    <div className="relative z-10">

      <div className="absolute left-[7%] top-0 rounded-lg border border-slate-600 bg-slate-800/70 px-2 md:px-4 py-2 text-xs text-slate-400 blur-[1px]">
        Initial system audit
      </div>

      <div className="absolute left-[19%] top-9 rounded-lg border border-slate-600 bg-slate-800 px-2 md:px-4 py-2 text-xs text-slate-200">
        Strategy draft
      </div>

      <div className="absolute left-[31%] top-9 rounded-lg border border-slate-600 bg-slate-800 px-2 md:px-4 py-2 text-xs text-slate-200">
        Strategy draft
      </div>

      <div className="absolute left-[44%] top-[70px] rounded-lg border border-slate-600 bg-slate-800 px-2 md:px-4 py-2 text-xs text-slate-200">
        <span className="absolute -left-[1px] top-0 h-full w-[3px] rounded-full bg-cyan-400" />
        Feedback collection
      </div>

      <div className="absolute left-[57%] top-[105px] rounded-lg border border-slate-600 bg-slate-800 px-2 md:px-4 py-2 text-xs text-slate-200">
        <span className="absolute -left-[1px] top-0 h-full w-[3px] rounded-full bg-cyan-400" />
        Client review
      </div>

      <div className="absolute left-[70%] top-[140px] rounded-lg border border-slate-600 bg-slate-800 px-2 md:px-4 py-2 text-xs text-slate-200">
        <span className="absolute -left-[1px] top-0 h-full w-[3px] rounded-full bg-cyan-400" />
        Client review
      </div>
    </div>
  </div>
);

/* -------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------- */

const WhyChooseUs = () => {
  return <section className="relative overflow-hidden bg-[#020812] md:px-5 py-12 md:py-24">
      <div className="pointer-events-none absolute bottom-[-300px] left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="relative mx-auto container-wrapper-transparent">
        <CompHeader
          highlighter="Perks"
          title={<p>Why Companies Choose <span className="text-sky-600">Codeflux</span></p>}
          subheading=""
          variant="bluegradient"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <GlassCard>
            <SupportVisual />
            <div className="">
              <h3 className="text-xl md:text-2xl font-normal tracking-tight text-sky-300">Personalized Support</h3>
              <p className="mt-2 text-sm leading-5 md:leading-6 text-slate-200">Work with dedicated consultants who understand your business goals.</p>
            </div>
          </GlassCard>

          <GlassCard>
            <ChatVisual />
            <div className="">
              <h3 className="text-xl md:text-2xl font-normal tracking-tight text-sky-300">With You Every Step</h3>
              <p className="mt-2 text-sm leading-5 md:leading-6 text-slate-200">From the first consultation to post-launch, we stay with you to ensure lasting success.</p>
            </div>
          </GlassCard>

          <GlassCard>
            <ImpactVisual />
            <div className="">
              <h3 className="text-xl md:text-2xl font-normal tracking-tight text-sky-300">Measurable Impact</h3>
              <p className="mt-2 text-sm leading-5 md:leading-6 text-slate-200">From performance gains to savings, we track progress and show ROI at every stage.</p>
            </div>
          </GlassCard>

          <GlassCard>
            <FutureVisual />
            <div className="mt-6 md:mt-2">
              <h3 className="text-xl md:text-2xl font-normal tracking-tight text-sky-300">Future-Ready Solutions</h3>
              <p className="mt-2 text-sm leading-5 md:leading-6 text-slate-200">We design scalable systems that keep you competitive tomorrow.</p>
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-2">
            <ProcessVisual />
            <div className="mt-4 md:mt-2">
              <h3 className="text-xl md:text-2xl font-normal tracking-tight text-sky-300">Transparent Process</h3>
              <p className="mt-2 text-sm leading-5 md:leading-6 text-slate-200">You’ll always know what’s happening with clear timelines, regular updates, and open communication.</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
};

export default WhyChooseUs;