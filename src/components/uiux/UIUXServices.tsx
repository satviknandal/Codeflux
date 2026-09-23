import { ArrowRight, Boxes, Check, Gauge, LayoutGrid, Lightbulb, PenTool, RefreshCw, Search, Smartphone, Star, Users, } from "lucide-react"; 
import CompHeader from "../shared/CompHeader";

const services = [ 
    { icon: Smartphone, title: "Mobile App UI/UX Design", text: "Native iOS and Android interfaces with Figma handoff, auto-layout, and motion specs.", }, 
    { icon: Gauge, title: "Web App and Dashboard Design", text: "Admin panels, data tables, and analytics dashboards built for clarity and reuse.", }, 
    { icon: Search, title: "UX Audit and Heuristic Evaluation", text: "Review against Nielsen heuristics and WCAG 2.2 AA, with a prioritized fix list in 7 days.", }, 
    { icon: RefreshCw, title: "UI/UX Redesign and Modernization", text: "Modernize outdated products with mobile-first migration in measured, safe releases.", }, 
    { icon: LayoutGrid, title: "Design System Development", text: "Component libraries with design tokens, docs, and Storybook handoff your team can extend.", }, 
    { icon: Users, title: "User Research and Usability Testing", text: "Moderated tests and interviews with video clips, severity scores, and design fixes.", }, 
    { icon: PenTool, title: "Wireframing and Prototyping", text: "Low-fidelity sketches to clickable prototypes, validated with real users before any code.", }, 
    { icon: Lightbulb, title: "UI/UX Strategy and Consulting", text: "Product design strategy with roadmap audits, workshops, and lightweight process setup.", }
];


const UiUXServices = () => {
  return (
    <section className="mx-auto bg-white font-sans text-[#0c0b1d]">
        <div className="container-wrapper-transparent py-6 sm:py-[50px] lg:py-20">
            <CompHeader
              highlighter="What We Do"
              title={<p>Comprehensive{" "}<span className="text-sky-600">UI/UX Design Services</span></p>}
              subheading="From UX audits and design system development through to SaaS product design, our team covers every stage of the design lifecycle. Our UI/UX design services span web, mobile, and embedded systems."
              variant="default"
            />
      <div
        className="
          group relative mb-2 md:mb-6 grid overflow-hidden rounded-lg md:rounded-[18px]
          border border-white/10
          radialgradient
          shadow-[0_40px_80px_-24px_rgba(12,11,29,0.45),0_16px_32px_-12px_rgba(37,99,235,0.15),inset_0_1px_0_rgba(255,255,255,0.06)]
          lg:grid-cols-[1.05fr_1fr]
        "
      >
        {/* Image */}
        <div className="relative z-[1] min-h-[240px] overflow-hidden sm:min-h-[300px] lg:min-h-[420px]">
          <img
            src="https://sdlccorp-web-prod.blr1.digitaloceanspaces.com/wp-content/uploads/2026/05/19164343/ui-ux-design-services.webp"
            alt="SaaS product design showcase"
            loading="lazy"
            width={600}
            height={420}
            className="
              absolute inset-0 h-full w-full object-cover
              transition-transform duration-[800ms]
              ease-[cubic-bezier(0.4,0,0.2,1)]
              group-hover:scale-[1.06]
            "
          />

          {/* Image overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_55%,rgba(10,10,30,0.5)_100%)]" />

          {/* Featured Tag */}
          <span
            className="
              absolute left-6 top-6 z-[2]
              inline-flex items-center gap-2 rounded-full
              bg-white/[0.95] px-3 py-1.5
              text-xs font-semibold uppercase text-sky-600
              shadow-[0_4px_16px_rgba(0,0,0,0.2)]
              backdrop-blur-[10px]
            "
          >
            <i className="fas fa-star text-[11px]" />
            <Star size={11} strokeWidth={2.5} />
            Most Requested
          </span>
        </div>

        {/* Featured Content */}
        <div className="relative z-[1] flex flex-col justify-center px-4 py-4 md:px-6 md:py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-[52px]">
          {/* Icon */}
          <div
            className="
              mb-6 flex h-11 w-11 md:h-[60px] md:w-[60px] items-center justify-center
              rounded-xl md:rounded-2xl border border-blue-300/40
              bg-[linear-gradient(135deg,rgba(37,99,235,0.35)_0%,rgba(37,99,235,0.15)_100%)]
              text-2xl text-white
              shadow-[0_8px_24px_-6px_rgba(37,99,235,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]
            "
          >
            <Boxes size={18} strokeWidth={2} className="text-white"/>
          </div>

          <h3 className="mb-[18px] text-base md:text-2xl font-semibold md:font-medium leading-[1.2] tracking-[-0.4px] text-white">
            SaaS Product Design
          </h3>

          <p className="mb-4 md:mb-7 text-[14px] md:text-[15px] leading-[1.4] md:leading-[1.75] text-[#d8dcee]">
            End-to-end design for onboarding, billing, settings, and feature
            workflows. Every screen accounts for multi-role permissions and
            the jobs your customers do every day.
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-2.5">
            {[
              "Multi-role permissions",
              "Billing flows",
              "Admin dashboards",
            ].map((item) => (
              <span
                key={item}
                className="
                  inline-flex items-center gap-1.5 rounded-full
                  border border-white/[0.12]
                  bg-white/[0.08] px-3.5 py-1.5
                  text-[12.5px] font-medium text-[#e8ecf8]
                  backdrop-blur-[8px]
                  transition-all duration-300
                  hover:border-blue-300/40 hover:bg-blue-600/15
                "
              >
                <Check size={10} strokeWidth={2.5} className="text-blue-400" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-2 md:gap-4 sm:grid-cols-2 sm:gap-[18px] lg:grid-cols-4">
        {services.map((service) => {
            const Icon = service.icon;
            return(
          <div
            key={service.title}
            className="
              group relative flex cursor-default flex-col
              overflow-hidden rounded-[14px]
              border border-[#e8ebf3] bg-white
              px-[22px] py-6
              transition-all duration-500
              ease-[cubic-bezier(0.4,0,0.2,1)]
              hover:-translate-y-[5px]
              hover:border-transparent
              hover:shadow-[0_20px_40px_-16px_rgba(37,99,235,0.18),0_6px_14px_-8px_rgba(12,11,29,0.06)]
            "
          >
            {/* Top-right glow */}
            <div
              className="
                pointer-events-none absolute right-0 top-0
                h-[120px] w-[120px]
                bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08)_0%,transparent_70%)]
                opacity-0 transition-opacity duration-500
                group-hover:opacity-100
              "
            />

            {/* Bottom animated line */}
            <div
              className="
                absolute bottom-0 left-6 right-6 h-0.5
                origin-left scale-x-0
                bg-[linear-gradient(90deg,#2563eb_0%,#60a5fa_100%)]
                transition-transform duration-[450ms]
                ease-[cubic-bezier(0.4,0,0.2,1)]
                group-hover:scale-x-100
              "
            />

            {/* Icon */}
            <div className="relative mb-[18px] h-11 w-11 md:h-12 md:w-12">
              <div
                className="
                  absolute inset-0 rounded-xl
                  bg-[linear-gradient(135deg,#5eb3f6_0%,#0865ae_100%)]
                  transition-all duration-500
                  group-hover:-rotate-6
                  group-hover:bg-[linear-gradient(135deg,#0865ae_0%,#0865ae_100%)]
                  group-hover:shadow-[0_8px_18px_-4px_rgba(0,132,209,0.45)]
                "
              />

              <div
                className="
                  absolute inset-0 z-[1]
                  flex items-center justify-center
                  text-sky-600
                  transition-all duration-500
                  group-hover:rotate-6 group-hover:text-white
                "
              >
                <Icon size={18} strokeWidth={2} className="text-white"/>
              </div>
            </div>

            {/* Card title */}
            <h3
              className="
                relative z-[1] mb-2
                text-base md:text-xl font-medium leading-[1.25]
                text-[#0c0b1d]
                transition-colors duration-300
                group-hover:text-sky-600
              "
            >
              {service.title}
            </h3>

            {/* Card text */}
            <p className="relative z-[1] m-0 text-[14px] md:text-[15px] leading-[1.4] md:leading-[1.65] text-[#5b5f75]">
              {service.text}
            </p>
          </div>
        )})}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <a
          href="#contact-us"
          className="
            inline-flex items-center gap-2.5
            rounded-lg bg-sky-600
            px-[30px] py-3.5
            text-[15px] font-semibold text-white no-underline
            shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)]
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-sky-700
            hover:shadow-[0_12px_28px_-6px_rgba(0,132,219,0.5)]
          "
        >
          Start Your UI/UX Project
          <ArrowRight size={18} strokeWidth={2} />
        </a>
      </div>
        </div>

      
    </section>
  );
};

export default UiUXServices;