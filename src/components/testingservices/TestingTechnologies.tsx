
import React from "react";
import {
  Smartphone,
  Server,
  Cloud,
  CreditCard,
  MessageCircle,
  MapPin
} from "lucide-react";
import CompHeader from "../shared/CompHeader";

interface TechnologyCategory {
  title: string;
  description: string;
  icon: any;
  technologies: string[];
  tag: string;
}

interface Stat { number: string; label: string; } 

const stats: Stat[] = [ 
  { number: "30+", label: "Industry Tools Supported", }, 
  { number: "9", label: "QA Categories Covered", }, 
  { number: "100%", label: "Tool-Agnostic Practice", }, 
];

const technologyCategories: TechnologyCategory[] = [
  {
    title: "Test Automation",
    description:
      "Cross-browser and cross-platform automation across web and mobile builds.",
    icon: Smartphone,
    technologies: [
      "Selenium",
      "Cypress",
      "Playwright",
      "Appium",
      "TestNG",
      "Cucumber"
    ],
    tag: 'Regression Ready'
  },
  {
    title: "Manual Testing",
    description: "Hands-on validation by ISTQB-trained engineers catching edge cases automation misses.",
    icon: Server,
    technologies: [
      "Exploratory testing",
      "Usability testing",
      "Smoke and sanity",
      "Ad-hoc validation",
      "UAT support",
      "Accessibility checks"
    ],
    tag: 'Human Insight'
  },
  {
    title: "Performance",
    description: "Load, stress, and soak tests scaled to your real peak-traffic patterns.",
    icon: Cloud,
    technologies: [
      "JMeter",
      "K6",
      "LoadRunner",
      "Gatling",
      "NeoLoad"
    ],
    tag: 'High Throughput'
  },
  {
    title: "API Testing",
    description: "Contract, payload, and auth validation across REST, GraphQL, and SOAP.",
    icon: CreditCard,
    technologies: [
      "Postman",
      "REST Assured",
      "SoapUI",
      "Karate"
    ],
    tag: 'Contract Safe'
  },
  {
    title: "Mobile",
    description: "Real-device coverage across iOS, Android, and tablet form factors.",
    icon: MessageCircle,
    technologies: [
      "Appium",
      "BrowserStack",
      "Sauce Labs",
      "Perfecto"
    ],
    tag: 'Device Cloud'
  },
  {
    title: "Security",
    description: "OWASP Top 10 sweeps, pen tests, and fuzzing across APIs and web surfaces.",
    icon: MapPin,
    technologies: [
      "OWASP ZAP",
      "Burp Suite",
      "Nessus",
      "Acunetix"
    ],
    tag: 'OWASP Aligned'
  },
  {
    title: "Test Management",
    description: "Case authoring, run tracking, and defect routing inside your existing tracker.",
    icon: MapPin,
    technologies: [
      "Jira",
      "Test Rail",
      "Zephyr",
      "qTest",
      "Xray"
    ],
    tag: 'Audit Trail'
  },
  {
    title: "CI/CD Integration",
    description: "Quality gates wired into your pipelines for unit, regression, and security checks.",
    icon: MapPin,
    technologies: [
      "Jenkins",
      "Gitlab CI",
      "Github Actions",
      "Azure Devops",
      "CircleCI"
    ],
    tag: 'Shift Left'
  },
  {
    title: "AI and Autonomous",
    description: "Self-healing scripts and GenAI test data lower maintenance overhead per sprint.",
    icon: MapPin,
    technologies: [
      "AI test generators",
      "Self-healing frameworks",
      "Predictive Analysis"
    ],
    tag: 'AI Native'
  },
];

const QaToolsStats: React.FC = () => { 
  return <div className=" mx-auto mb-[50px] flex max-w-4xl flex-wrap items-center justify-center gap-9 rounded-xl border border-[#e6e9f5] bg-[#f7f9ff] px-7 py-5 max-md:gap-6 max-md:px-5 max-md:py-[18px] max-[600px]:grid max-[600px]:grid-cols-1 max-[600px]:gap-0 max-[600px]:p-0 " > 
      {stats.map((stat, index) => ( 
        <React.Fragment key={stat.label}> 
          <div className=" flex items-center gap-3 text-left max-md:[&>span:first-child]:text-2xl max-[600px]:justify-center max-[600px]:px-5 max-[600px]:py-4 " > 
            <span className=" whitespace-nowrap text-[28px] font-semibold leading-none tracking-[-0.5px] text-sky-700"> 
              {stat.number}
            </span> 
            <span className="text-[13px] font-medium leading-[1.35] tracking-[0.2px] text-[#4a5170] max-md:text-xs max-[600px]:max-w-none " > 
              {stat.label} 
            </span> 
          </div> 
          {index < stats.length - 1 && ( 
            <div className=" h-9 w-px shrink-0 bg-[#e6e9f5] max-[600px]:mx-auto max-[600px]:h-px max-[600px]:w-[calc(100%-40px)] " /> )} 
        </React.Fragment> ))} 
      </div>
  };

const TestingTechnologies: React.FC = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f8f9fc]
        py-6
        md:py-20
        font-sans
      "
      aria-label="Technology stack for mobile app development"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-24
          h-[500px]
          w-[500px]
          rounded-full
          bg-[radial-gradient(circle,rgba(37,99,235,.05)_0%,transparent_65%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-16
          h-[380px]
          w-[380px]
          rounded-full
          bg-[radial-gradient(circle,rgba(37,99,235,.05)_0%,transparent_70%)]
        "
      />

      {/* Dotted background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(rgba(12,11,29,.04)_1px,transparent_1px)]
          [background-size:28px_28px]
        "
      />

      <div className="relative z-10 mx-auto container-wrapper-transparent">
        <CompHeader
          highlighter='Technology Stack'
          title="QA Testing Frameworks and Tools"
          subheading="Our toolchain combines manual exploration with continuous testing, DevOps pipelines, and autonomous testing capabilities. We pick frameworks based on your stack, not vendor relationships."
          variant="default"
        />
        <QaToolsStats/>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {technologyCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="
                  group relative flex flex-col overflow-hidden rounded-[14px]
                  border border-sky-400/[0.15] md:border-sky-400/[0.1]
                  border-t-2 border-t-sky-600/50 md:border-t-sky-600/50
                  bg-[linear-gradient(160deg,rgba(166,220,255,0.08)_0%,rgba(166,220,255,0.04)_50%,rgba(166,220,255,0.1)_100%)]
                  bg-[radial-gradient(circle_at_92%_8%,rgba(0,188,235,0.06),transparent_34%),linear-gradient(180deg,#fff_0%,#f8fbff_100%)]
                  px-4 md:px-5 py-4 md:py-6 pb-6 md:pb-8
                  transition-all duration-300
                  hover:-translate-y-[3px
                  hover:border-t-sky-600
                  hover:bg-white/[0.06]
                  hover:-translate-y-[3px]
                  hover:shadow-[0_16px_40px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,188,255,0.05)]
                "
              >
                {/* Card dotted pattern */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-0
                    bg-[radial-gradient(rgba(12,11,29,.03)_1px,transparent_1px)]
                    [background-size:18px_18px]
                  "
                />

                {/* Card Header */}
                <div className="relative z-10 mb-3 flex items-center justify-between gap-2">
                  <div className={`h-9 w-9 md:h-11 md:w-11 shrink-0 flex items-center justify-center rounded-xl bg-blue-50 text-sky-600 group-hover:border-sky-600 group-hover:bg-sky-600`}>
                    <Icon size={18} strokeWidth={1.8} className={'group-hover:text-white'}/>
                  </div>
                    <span className="inline-flex w-fit items-center gap-1.5 `px-2 py-1 text-[10px] uppercase font-medium text-sky-700 border rounded-full px-2 py-1 bg-white border-sky-100">
                      <span className="h-[5px] w-[5px] rounded-full bg-sky-700"></span>{category.tag}
                    </span>
                  
                </div>
                <h3 className="mb-3 text-base md:text-lg font-semibold leading-[1.2] text-sky-600">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mb-4 text-[14px] font-normal leading-[1.65] text-gray-700 ">
                  {category.description}
                </p>

                {/* Divider */}
                <div className="relative z-10 mb-[14px] h-px bg-[#eef0f8]" />

                {/* Technology Tags */}
                <div className="relative z-10 flex flex-wrap gap-1.5">
                  {category.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        inline-flex
                        items-center
                        whitespace-nowrap
                        rounded-full
                        border
                        border-sky-100
                        bg-sky-50
                        px-3
                        py-1
                        text-xs
                        font-normal
                        leading-[1.4]
                        text-sky-800
                        transition-all
                        duration-200
                        group-hover:border-sky-200
                        group-hover:bg-sky-100
                        group-hover:text-sky-900
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestingTechnologies;