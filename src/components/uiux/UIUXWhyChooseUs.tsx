import { Users, Zap, UserRoundCheck, ClipboardCheck, UsersRound, ShieldCheck, Globe } from "lucide-react";
import CompHeader from "../shared/CompHeader";

const UIUXWhyChooseUs = () => {
    const reasons = [
    {
        icon: UserRoundCheck,
        title: "Expert Designers, Exceptional Experiences",
        description:
        "Our specialist UI/UX designers combine visual craft with user-centred thinking to create interfaces that look exceptional, feel intuitive, and turn visitors into engaged users.",
    },

    {
        icon: ClipboardCheck,
        title: "Engaging & Interactive Experiences",
        description:
        "We design purposeful interactions that keep users engaged and make every journey feel effortless—from intuitive navigation and micro-interactions to dynamic, responsive experiences.",
    },

    {
        icon: UsersRound,
        title: "Seamlessly Embedded in Your Workflow",
        description:
        "We work as an extension of your team, integrating directly into your Slack, standups, Figma workspace, and existing processes for faster collaboration and clearer communication.",
    },

    {
        icon: ShieldCheck,
        title: "Designed to Industry Standards",
        description:
        "Our designs follow proven UX principles, accessibility best practices, and WCAG standards to create inclusive, consistent, and user-friendly digital experiences.",
    },

    {
        icon: Globe,
        title: "Agile Delivery & Continuous Feedback",
        description:
        "We work in agile sprints with regular feedback loops, keeping you involved throughout the design process and ensuring every iteration moves closer to your business and user goals.",
    },
    ];

    const stats = [
        ["3", "Global Offices"],
        ["50+", "Projects Shipped"],
        ["WCAG 2.2", "AA Compliance"]
    ];

  return (
    <section className="bg-[#f9f9f9]">
        <div className="container-wrapper-transparent text-[#0c0b1d] py-12 sm:py-[50px] lg:py-20">
            <CompHeader
                highlighter="Why Choose Us"
                title={<p>Why Choose{" "}<span className="text-sky-600"> Our UI/UX Design</span></p>}
                subheading="We understand what long-term means. That's why we focus on creating engaging user experiences that keep visitors returning. We also understand the importance of user engagement in driving conversions and achieving business goals."
                variant="default"
            />
            {/* Main Layout */}
            <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
                {/* Visual */}
                <div className="flex flex-col gap-5">
                {/* Image */}
                <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-2xl border border-[#eceef4] bg-[#f0f4fe] sm:min-h-[420px] lg:min-h-[480px]">
                    <img
                    src="https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/05/13151124/why-choose-our-ui-ux-company.webp"
                    alt="UI/UX designers collaborating on a SaaS product"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    />

                    {/* Top Left Floating Stat */}
                    <div className="absolute left-5 top-5 z-10 flex items-center gap-[11px] rounded-xl border border-[#eceef4] bg-white px-3 py-3 shadow-[0_14px_32px_-8px_rgba(12,11,29,0.12)]">
                    <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] bg-[#f0f4fe] text-sky-600">
                        <Users size={16} strokeWidth={2} />
                    </div>

                    <div>
                        <span className="block text-base font-bold leading-[1.1] text-[#0c0b1d]">
                        60+
                        </span>
                        <span className="mt-0.5 block text-[11px] font-medium text-[#7a7f94]">
                        Senior Designers
                        </span>
                    </div>
                    </div>

                    {/* Bottom Right Floating Stat */}
                    <div className="absolute bottom-5 right-5 z-10 flex items-center gap-[11px] rounded-xl border border-[#eceef4] bg-white px-3 py-3 shadow-[0_14px_32px_-8px_rgba(12,11,29,0.12)]">
                    <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] bg-[#f0f4fe] text-sky-600">
                        <Zap size={16} strokeWidth={2} />
                    </div>

                    <div>
                        <span className="block text-base font-bold leading-[1.1] text-[#0c0b1d]">
                        48hr
                        </span>
                        <span className="mt-0.5 block text-[11px] font-medium text-[#7a7f94]">
                        Proposal Time
                        </span>
                    </div>
                    </div>
                </div>

                {/* Stats Strip */}
                <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-[#eceef4] bg-[#f7f9fe]">
                    {stats.map(([value, label], index) => (
                    <div
                        key={label}
                        className={`px-2 py-4 text-center ${
                        index !== 2 ? "border-r border-[#eceef4]" : ""
                        }`}
                    >
                        <strong className="block text-lg md:text-xl font-semibold md:font-bold leading-[1.1] tracking-[-0.3px] text-sky-600">
                        {value}
                        </strong>

                        <span className="mt-1 block text-[11px] font-medium tracking-[0.2px] text-[#7a7f94]">
                        {label}
                        </span>
                    </div>
                    ))}
                </div>
                </div>

                {/* Reasons List */}
                <div className="flex flex-col gap-3">
                {reasons.map((reason) => {
                    const Icon = reason.icon;

                    return (
                    <div
                        key={reason.title}
                        className="group flex flex-1 items-start md:items-center gap-3.5 rounded-xl border border-[#e8ebf3] bg-white px-5 py-[18px] transition-all duration-300 ease-out hover:translate-x-1 hover:border-sky-600 hover:shadow-[0_10px_22px_-8px_rgba(37,99,235,0.12)]"
                    >
                        {/* Icon */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#eef3ff] to-[#dde7fb] text-sky-600 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-sky-600 group-hover:to-sky-700 group-hover:text-white">
                        <Icon size={17} strokeWidth={2} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <h3 className="m-0 mb-1 text-md md:text-base font-medium md:font-semibold leading-[1.3] text-[#0c0b1d]">{reason.title}</h3>
                            <p className="m-0 text-sm md:text-[13.5px] font-normal leading-[1.45] text-[#5b5f75]">{reason.description}</p>
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>
        </div>

    </section>
  );
};

export default UIUXWhyChooseUs;