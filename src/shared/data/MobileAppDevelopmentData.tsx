import { Apple, CloudSyncIcon, ScanFaceIcon, ShieldLockIcon } from "lucide-react";
import AutomationPlatformIcon from "../svg/AutomationIcon";
import DesignIcon from "../svg/DesignIcon";
import ExpandIcon from "../svg/ExpandIcon";
import MaintenanceIcon from "../svg/MaintenanceIcon";
import OptimisationIcon from "../svg/OptimisationIcon";
import RocketIcon from "../svg/RocketIcon";
import SoftwareCodeIcon from "../svg/SoftwareCodeIcon";
import { FaAndroid, FaGlobe, FaLayerGroup } from "react-icons/fa";
import nativeios from "../../assets/app/ios-app-development.webp";
import nativeandroid from "../../assets/app/native-android-development.webp";
import crossplatform from "../../assets/app/cross-platform-development.webp";
import pwa from "../../assets/app/pwa-and-app-modernisation.webp";

const MobileAppServicesData = [
  {
    icon: <Apple size={14} strokeWidth={2.5} />,
    tag: "Native iOS",
    code: "Swift + SwiftUI + Xcode",
    title: "iOS App Development",
    description: "Swift and SwiftUI for iPhone and iPad, built to Apple HIG standards with full App Store submission. From concept to live on the App Store.",
    list: ["Swift & SwiftUI", "TestFlight QA", "App Store submission", "In-app purchases"],
    cta: {
      label: "iOS Services ",
      link: ""
    },
    image: nativeios
  },
  {
    icon:  <FaAndroid size={14} />,
    tag: "Native Android",
    code: "Kotlin + Jetpack Compose",
    title: "Android App Development",
    description: "Kotlin and Jetpack Compose for phones, tablets, and foldables, optimised for Google Play policies and Material Design 3 guidelines.",
    list: ["Kotlin + Jetpack", "Google Play submission", "Offline-first architecture", "Material Design 3"],
    cta: {
      label: "Android Services",
      link: ""
    },
    image: nativeandroid
  },
  {
    icon: <FaLayerGroup size={14} />,
    tag: "Cross-Platform",
    code: "Flutter + React Native",
    title: "Cross-Platform Development",
    description: "One codebase for iOS and Android. Flutter for custom UI; React Native for JS teams. Cuts cost 30 to 50% vs two native builds without sacrificing quality.",
    list: ["Flutter / Dart", "React Native New Arch", "Single codebase", "30 to 50% cost saving"],
    cta: {
      label: "Cross-Platform Services",
      link: ""
    },
    image: crossplatform
  },
  {
    icon: <FaGlobe size={14} />,
    tag: "PWA",
    code: "React + Service Workers",
    title: "PWA & App Modernisation",
    description: "Installable web apps with native-like UX and offline support. We also rebuild outdated apps after a thorough codebase audit and technical review.",
    list: ["Service workers", "Push notifications", "Offline capability", "App modernisation"],
    cta: {
      label: "PWA Services ",
      link: ""
    },
    image: pwa
  },
];
  
const SoftwareDevelopmentProcessData = [
  {
    title: "Discovery and Scoping",
    description: "During discovery, we review workflows, existing systems, user roles, integration dependencies, and compliance needs to define a practical roadmap.",
    icon: <RocketIcon width={24} height={24} strokeWidth={1} className="text-white" />,
  },
  {
    title: "Architecture Planning",
    description: "The architecture phase defines system boundaries, data flows, access controls, infrastructure needs, and security inputs before development starts.",
    icon: <DesignIcon width={24} height={24} className="text-white" />,
  },
  {
    title: "Agile Development",
    description: "Development runs in planned sprints with backlog visibility, progress reviews, release priorities, and checkpoints aligned to the approved scope.",
    icon: <SoftwareCodeIcon width={24} height={24} className="text-white" />,
  },
  {
    title: "QA and Security Review",
    description: "At this stage, functional testing, integration checks, performance reviews, code quality checks, and security validation are handled based on project needs.",
    icon: <MaintenanceIcon width={24} height={24} className="text-white" />,
  },
  {
    title: "Controlled Launch",
    description: "Before release, the team prepares deployment steps, rollback paths, go-live support, monitoring setup, and handover documentation.",
    icon: <MaintenanceIcon width={24} height={24} className="text-white" />,
  },
  {
    title: "Maintenance and Support",
    description: "After launch, enterprise applications can be supported with issue fixes, version updates, performance checks, monitoring, and planned improvements.",
    icon: <MaintenanceIcon width={24} height={24} className="text-white" />,
  }
];

const SoftwareSecurityData = [
  {
    title: "Identity and Access Management",
    description: "Plan SSO, role-based permissions, MFA, session controls, and access logs around user roles, approval paths, and internal policies.",
    tags: ['SSO', 'RBAC', 'SAML/OIDC', 'MFA'],
    icon: <ScanFaceIcon width={30} height={30} className="text-white"/>
  },
  {
    title: "Data Security and Privacy",
    description: "Define encryption needs, retention rules, sensitive-field handling, backup requirements, and data residency controls before the build phase.",
    tags: ['Encryption', 'TLS 1.2/1.3', 'Key Management', 'Data Residency'],
    icon: <ShieldLockIcon width={30} height={30} className="text-white"/>
  },
  {
    title: "Secure SDLC and DevSecOps",
    description: "Release pipelines can include code quality checks, dependency scanning, secrets handling, vulnerability review, and environment validation based on project risk.",
    tags: ['SAST', 'DAST', 'SCA', 'Secrets Management'],
    icon: <CloudSyncIcon width={30} height={30} className="text-white"/>
  }
];

const SoftwareValueDrivenData = [
  {
    title: "Automation",
    description: "We reduce overheads by developing solutions that automate repetitive tasks. Your team can enjoy focusing on more strategic activities. Our solutions integrate seamlessly with existing systems, providing a smooth transition and immediate efficiency gains.",
    icon: <AutomationPlatformIcon width={36} height={36} className='sdp-icon-rocket'/>
  },
  {
    title: "Optimisation",
    description: "If our software reduces overhead, it also reduces your costs. Our software inevitably improves your processes, enhancing efficiency and reducing operational burdens. By streamlining workflows and eliminating bottlenecks, your team's productivity is boosted.",
    icon: <OptimisationIcon width={36} height={36} className='sdp-icon-rocket'/>
  },
  {
    title: "Scalability",
    description: "We build software to help you grow continuously, not only in the beginning. Our scalable solutions are designed to grow your business over the long term. As your needs evolve, our software adapts to accommodate increased workloads and new functionalities.",
    icon: <ExpandIcon width={36} height={36} className='sdp-icon-rocket'/>
  }
];

export {
  MobileAppServicesData,
  SoftwareDevelopmentProcessData,
  SoftwareSecurityData,
  SoftwareValueDrivenData
}