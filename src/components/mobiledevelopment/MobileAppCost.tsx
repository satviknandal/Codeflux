import React from "react";
import { CircleCheckIcon, ClockIcon, TrendingUpIcon } from "lucide-react";
import CompHeader from "../shared/CompHeader";

interface PricingCard {
  tier: string;
  title: string;
  price: string;
  timeline: string;
  features: string[];
  featured?: boolean;
}

const pricingCards: PricingCard[] = [
  {
    tier: "Simple App",
    title: "Single Platform",
    price: "$10k to $30k",
    timeline: "2 to 4 Months",
    features: [
      "1 platform (iOS or Android)",
      "5 to 8 screens",
      "Basic auth and user accounts",
      "Firebase or Auth0 backend",
      "App Store submission",
    ],
  },
  {
    tier: "Mid-Complexity",
    title: "Dual Platform",
    price: "$30k to $100k",
    timeline: "4 to 7 Months",
    featured: true,
    features: [
      "iOS and Android (native or cross-platform)",
      "Payment processing (Stripe, Apple Pay)",
      "Push notifications and real-time features",
      "Custom backend architecture",
      "Admin dashboard included",
    ],
  },
  {
    tier: "Enterprise",
    title: "Full Complexity",
    price: "$100k+",
    timeline: "6 to 14 Months",
    features: [
      "AI/ML features",
      "HIPAA/GDPR compliance",
      "Complex third-party integrations",
      "Multi-role architecture",
      "Dedicated project manager",
    ],
  },
];

const costFactors = [
  {
    icon: <TrendingUpIcon className="w-4 h-4"/>,
    title: "What Increases Cost",
    items: [
      "Building for both iOS and Android natively",
      "Real-time features (chat, GPS, live data)",
      "Payment processing and financial compliance",
      "AI, ML, or on-device intelligence",
      "Complex third-party integrations",
    ],
  },
  {
    icon: <ClockIcon className="w-4 h=4"/>,
    title: "What Increases Timeline",
    items: [
      "Unclear requirements at project kickoff",
      "Long approval cycles between stages",
      "Third-party API dependencies",
      "App Store review time (1 to 3 business days)",
    ],
  },
];

const PricingCardComponent = ({ card }: { card: PricingCard }) => {
  return (
    <div
      className={`
        group relative flex flex-col
        bg-white px-7 pb-8 pt-9
        transition-all duration-500
        ${
          card.featured
            ? `
              z-10 overflow-visible rounded-[20px]
              border-t-3
              lineargradientblue
              text-white
              shadow-[0_0_0_1.5px_rgba(37,166,235,.65),0_18px_48px_rgba(37,166,235,.14),0_6px_18px_rgba(0,0,0,.24)]
              -translate-y-2 scale-[1.01]
              hover:-translate-y-3.5
              hover:scale-[1.025]
              hover:bg-[linear-gradient(160deg,#1e2548_0%,#0f1530_55%,#0b1025_100%)]
              hover:shadow-[0_0_0_1px_#0068a8,0_36px_96px_rgba(37,99,235,.45),0_12px_32px_rgba(0,0,0,.5)]
              
              border-t-sky-600
            `
            : `rounded-[20px] border-t-4 border-r border-sky-400 border-r-white hover:z-[2] hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#f4f7ff] hover:shadow-[0_20px_48px_rgba(12,11,29,.12),0_4px_12px_rgba(37,99,235,.06)]`
        }
      `}
    >

      {card.featured && (
        <div className="absolute -right-3 -top-3 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-700 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                <span>★</span>
                Most Popular
            </span>
        </div>
      )}

      <span className={`mb-1 text-xs font-normal uppercase tracking-wide ${card.featured ? "text-sky-300" : "text-[#64748b]"}`}>
        {card.tier}
      </span>

      <h3 className={`text-2xl font-semibold leading-tight ${card.featured ? "text-white" : "text-[#0c0b1d]"}`}>
        {card.title}
      </h3>

      <div className="mt-3 flex items-baseline gap-2">
        <span className={`text-sm ${card.featured ? "text-gray-400" : "text-gray-500"}`}>
          from
        </span>

        <span className={`text-2xl font-semibold ${card.featured ? "text-white" : "text-[#0c0b1d]"}`}>
          {card.price}
        </span>
      </div>

      <span className={`mt-1 text-sm font-normal ${card.featured ? "text-sky-300" : "text-[#64748b]"}`}>
        {card.timeline}
      </span>

      <div className={`my-7 h-px w-full ${card.featured ? "bg-white/10" : "bg-[#e5e7eb]"}`}/>

      <ul className="flex flex-1 flex-col gap-2">
        {card.features.map((feature, index) => (
          <li key={index} className={`flex items-start gap-3 text-sm leading-relaxed ${card.featured ? "text-gray-300" : "text-[#4b5563]"}`}>
            <CircleCheckIcon className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-sm ${card.featured ? "text-sky-400" : "text-sky-600"}`}/>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact-us"
        className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300
          ${
            card.featured
              ? "text-sky-300 hover:gap-3 hover:text-sky-200"
              : "text-sky-600 hover:gap-3 hover:text-sky-700"
          }
        `}
      >
        Get an Estimate <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
};

const CostFactor = ({icon, title, items}: {icon: string; title: string; items: string[]}) => {
  return (
    <div className="flex-1">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb]/10 text-lg text-sky-700">
          {icon}
        </div>
        <h4 className="text-lg font-semibold text-[#0c0b1d]">{title}</h4>
      </div>

      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="relative pl-5 text-sm leading-relaxed text-[#6b7280]">
            <span className="absolute left-0 top-[9px] h-1.5 w-1.5 rounded-full bg-sky-600" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MobileAppCost = () => {
  return (
    <section className="relative overflow-visible bg-[#f8f9fc] py-6 md:py-20">
      {/* Dot pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(rgba(12,11,29,.04)_1px,transparent_1px)] [background-size:28px_28px]"/>
      {/* Decorative glow - top right */}
      <div aria-hidden="true" className="pointer-events-none absolute right-[60px] top-[100px] h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(37,99,235,.07)_0%,transparent_65%)]"/>
      {/* Decorative glow - bottom left */}
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-[80px] -left-[60px] h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(37,99,235,.04)_0%,transparent_70%)]"/>

      <div className="relative z-[1] mx-auto container-wrapper-transparent">
        <CompHeader
          highlighter='Pricing Transparency'
          title="Mobile App Cost &amp; Timeline"
          subheading="Honest estimates based on real project data. Ranges reflect our blended global delivery model. US-only engineering typically runs 2 to 3x higher for the same scope."
          variant="default"
        />

        {/* Pricing Cards */}
        <div
          className="
            mb-10 grid
            overflow-visible
            rounded-[20px]
            border border-[#dde3f0]
            shadow-[0_8px_40px_rgba(12,11,29,.08),0_2px_8px_rgba(12,11,29,.04)]
            md:grid-cols-3
            max-md:gap-4
            max-md:border-0
            max-md:shadow-none
          "
        >
          {pricingCards.map((card, index) => <PricingCardComponent key={index} card={card}/>)}
        </div>

        {/* Bottom information strip */}
        <div
          className="
            flex gap-12
            rounded-2xl
            border border-[#dde3f0]
            bg-white
            p-8
            shadow-[0_8px_30px_rgba(12,11,29,.05)]
            md:flex-row
            max-md:flex-col
            max-md:gap-8
          "
        >
          {costFactors.map((factor, index) => (
            <React.Fragment key={index}>
              <CostFactor icon={factor.icon} title={factor.title} items={factor.items}/>
              {index === 0 && <div className="hidden w-px bg-[#e5e7eb] md:block" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes costShimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </section>
  );
};

export default MobileAppCost;