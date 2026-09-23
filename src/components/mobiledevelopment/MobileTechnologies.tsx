
import React from "react";
import {
  Smartphone,
  Server,
  Cloud,
  CreditCard,
  MessageCircle,
  MapPin,
  ExternalLink,
  Apple,
  Bot,
  Code2,
  Atom,
} from "lucide-react";
import CompHeader from "../shared/CompHeader";

interface TechnologyCategory {
  title: string;
  description: string;
  icon: any;
  technologies: string[];
  color: {
    border: string;
    iconBg: string;
    iconBorder: string;
    iconText: string;
  };
}

const technologyCategories: TechnologyCategory[] = [
  {
    title: "Mobile Layer",
    description:
      "Native and cross-platform technologies powering our iOS and Android apps with industry-leading performance.",
    icon: Smartphone,
    technologies: [
      "Swift",
      "SwiftUI",
      "Kotlin",
      "Jetpack Compose",
      "Flutter",
      "Dart",
      "React Native",
      "Java",
    ],
    color: {
      border: "border-t-blue-600",
      iconBg: "bg-blue-600/[0.18]",
      iconBorder: "border-blue-600/[0.28]",
      iconText: "text-blue-400",
    },
  },
  {
    title: "Backend & APIs",
    description:
      "Scalable server-side architectures and API layers that power the intelligence behind your mobile application.",
    icon: Server,
    technologies: [
      "Node.js",
      "Python",
      "Django",
      "Firebase",
      "GraphQL",
      "REST APIs",
      "Auth0",
      "PostgreSQL",
    ],
    color: {
      border: "border-t-violet-600",
      iconBg: "bg-violet-600/[0.18]",
      iconBorder: "border-violet-600/[0.28]",
      iconText: "text-violet-400",
    },
  },
  {
    title: "Cloud & DevOps",
    description:
      "Enterprise-grade cloud infrastructure with automated CI/CD pipelines and containerised deployments.",
    icon: Cloud,
    technologies: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Fastlane",
    ],
    color: {
      border: "border-t-emerald-600",
      iconBg: "bg-emerald-600/[0.18]",
      iconBorder: "border-emerald-600/[0.28]",
      iconText: "text-emerald-400",
    },
  },
  {
    title: "Payments & Finance",
    description:
      "Secure payment integrations, banking connectivity, and financial compliance tools across all app types.",
    icon: CreditCard,
    technologies: [
      "Stripe",
      "PayPal",
      "Apple Pay",
      "Google Pay",
      "Plaid",
      "Braintree",
      "Adyen",
    ],
    color: {
      border: "border-t-amber-600",
      iconBg: "bg-amber-600/[0.18]",
      iconBorder: "border-amber-600/[0.28]",
      iconText: "text-amber-400",
    },
  },
  {
    title: "Communication",
    description:
      "Real-time messaging, notifications, voice, and video integrations for user engagement and operations.",
    icon: MessageCircle,
    technologies: [
      "Twilio",
      "SendGrid",
      "Firebase FCM",
      "OneSignal",
      "Agora",
      "Pusher",
      "WebSockets",
    ],
    color: {
      border: "border-t-red-600",
      iconBg: "bg-red-600/[0.18]",
      iconBorder: "border-red-600/[0.28]",
      iconText: "text-red-400",
    },
  },
  {
    title: "Maps & Enterprise",
    description:
      "Location services, mapping, and enterprise system integrations that power logistics and field operations.",
    icon: MapPin,
    technologies: [
      "Google Maps",
      "Mapbox",
      "HERE Maps",
      "Salesforce",
      "SAP",
      "Zendesk",
      "HubSpot",
    ],
    color: {
      border: "border-t-cyan-600",
      iconBg: "bg-cyan-600/[0.18]",
      iconBorder: "border-cyan-600/[0.28]",
      iconText: "text-cyan-400",
    },
  },
];

const MobileTechnologies: React.FC = () => {
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
          title="Technologies We Work With"
          subheading="We pick technology around your project goals, not our convenience. Here is what our mobile engineering team works with across 500+ delivered apps."
          variant="default"
        />

        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {technologyCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className={`
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  rounded-xl md:rounded-2xl
                  border
                  border-gray-200
                  border-t-[3px]
                  bg-white
                  p-[24px_22px_22px]
                  transition-all
                  duration-300
                  hover:-translate-y-[5px]
                  hover:shadow-[0_20px_48px_rgba(12,11,29,.1),0_4px_16px_rgba(37,99,235,.08)]
                  ${category.color.border}
                `}
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
                <div className="relative z-10 mb-3 flex items-center gap-[13px]">
                  <div
                    className={`
                      flex
                      w-[36px]
                      h-[36px]
                      md:h-9
                      md:w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-md md:rounded-lg
                      border
                      transition-transform
                      duration-300
                      group-hover:scale-110
                      ${category.color.iconBg}
                      ${category.color.iconBorder}
                    `}
                  >
                    <Icon size={18} strokeWidth={1.8} className={category.color.iconText}/>
                  </div>

                  <h3 className="text-base md:text-lg font-semibold leading-[1.2] text-[#0c0b1d]">
                    {category.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="relative z-10 mb-4 text-[14px] font-normal leading-[1.65] text-gray-500">
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
                        border-gray-200
                        bg-gray-100
                        px-3
                        py-1
                        text-xs
                        font-normal
                        leading-[1.4]
                        text-gray-700
                        transition-all
                        duration-200
                        group-hover:border-gray-300
                        group-hover:bg-gray-200
                        group-hover:text-[#0c0b1d]
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

        {/* Official Docs */}
       
        <div className=" mt-8 flex flex-wrap items-center justify-center gap-2 border-t border-gray-200 pt-6">
          <span className="mr-1.5 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.08em] text-gray-400">
            Official Docs
          </span>

          <a
            href="https://developer.apple.com/documentation/swift"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-1.5
              whitespace-nowrap
              rounded-full
              border
              border-gray-200
              bg-gray-50
              px-[13px]
              py-[5px]
              text-xs
              font-medium
              text-gray-500
              transition-all
              duration-200
              hover:border-blue-600/35
              hover:bg-blue-50
              hover:text-blue-600
            "
          >
            <Apple size={14} />
            Apple Developer
            <ExternalLink size={9} />
          </a>

          <a
            href="https://developer.android.com/docs"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-1.5
              whitespace-nowrap
              rounded-full
              border
              border-gray-200
              bg-gray-50
              px-[13px]
              py-[5px]
              text-xs
              font-medium
              text-gray-500
              transition-all
              duration-200
              hover:border-blue-600/35
              hover:bg-blue-50
              hover:text-blue-600
            "
          >
            <Bot size={14} />
            Android Developer
            <ExternalLink size={9} />
          </a>

          <a
            href="https://flutter.dev/docs"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-1.5
              whitespace-nowrap
              rounded-full
              border
              border-gray-200
              bg-gray-50
              px-[13px]
              py-[5px]
              text-xs
              font-medium
              text-gray-500
              transition-all
              duration-200
              hover:border-blue-600/35
              hover:bg-blue-50
              hover:text-blue-600
            "
          >
            <Code2 size={14} />
            Flutter
            <ExternalLink size={9} />
          </a>

          <a
            href="https://reactnative.dev/docs/getting-started"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-1.5
              whitespace-nowrap
              rounded-full
              border
              border-gray-200
              bg-gray-50
              px-[13px]
              py-[5px]
              text-xs
              font-medium
              text-gray-500
              transition-all
              duration-200
              hover:border-blue-600/35
              hover:bg-blue-50
              hover:text-blue-600
            "
          >
            <Atom size={14} />
            React Native
            <ExternalLink size={9} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MobileTechnologies;