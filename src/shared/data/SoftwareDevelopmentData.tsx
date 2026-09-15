import { BlocksIcon, BrainCircuitIcon, Building2Icon, CloudSyncIcon, Columns3CogIcon, FolderCodeIcon, MonitorCogIcon, ScanFaceIcon, ShieldLockIcon } from "lucide-react";
import AutomationPlatformIcon from "../svg/AutomationIcon";
import DesignIcon from "../svg/DesignIcon";
import ExpandIcon from "../svg/ExpandIcon";
import MaintenanceIcon from "../svg/MaintenanceIcon";
import OptimisationIcon from "../svg/OptimisationIcon";
import RocketIcon from "../svg/RocketIcon";
import SoftwareCodeIcon from "../svg/SoftwareCodeIcon";

const CustomSoftwareData = [
  {
    title: "Enterprise Software Consulting",
    description: "Review current systems, software risks, architecture gaps, integration needs, and delivery priorities before development begins.",
    icon: <Building2Icon width={30} height={30} className="text-white" />
  },
  {
    title: "Custom Software Development",
    description: "Build secure business platforms for approvals, user roles, reporting, and operational processes that packaged tools cannot fully support.",
    icon: <Columns3CogIcon width={30} height={30} className="text-white" />
  },
  {
    title: "Legacy Software Modernization",
    description: "Modernize aging applications through phased migration, code refactoring, cloud readiness, database upgrades, and rollback planning.",
    icon: <FolderCodeIcon width={30} height={30} className="text-white" />
  },
  {
    title: "Enterprise System Integration",
    description: "Connect ERP, CRM, finance, inventory, HR, and operations systems through APIs, middleware, data sync, and secure access layers.",
    icon: <BlocksIcon width={30} height={30} className="text-white" />
  },
  {
    title: "Enterprise Data and AI Solutions",
    description: "Design data pipelines, analytics layers, automation flows, and AI features that fit existing business systems and governance rules.",
    icon: <BrainCircuitIcon width={30} height={30} className="text-white" />
  },
  {
    title: "Enterprise Software Maintenance and Support",
    description: "Keep enterprise applications stable after launch with issue fixes, version updates, performance checks, security patches, and planned improvements.",
    icon: <MonitorCogIcon width={30} height={30} className="text-white" />
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
    icon: <ScanFaceIcon className="text-white w-4 h-4 md:w-6 md:h-6"/>
  },
  {
    title: "Data Security and Privacy",
    description: "Define encryption needs, retention rules, sensitive-field handling, backup requirements, and data residency controls before the build phase.",
    tags: ['Encryption', 'TLS 1.2/1.3', 'Key Management', 'Data Residency'],
    icon: <ShieldLockIcon className="text-white w-4 h-4 md:w-6 md:h-6"/>
  },
  {
    title: "Secure SDLC and DevSecOps",
    description: "Release pipelines can include code quality checks, dependency scanning, secrets handling, vulnerability review, and environment validation based on project risk.",
    tags: ['SAST', 'DAST', 'SCA', 'Secrets Management'],
    icon: <CloudSyncIcon className="text-white w-4 h-4 md:w-6 md:h-6"/>
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
  CustomSoftwareData,
  SoftwareDevelopmentProcessData,
  SoftwareSecurityData,
  SoftwareValueDrivenData
}