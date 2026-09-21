import DesignIcon from "../svg/DesignIcon";
import MaintenanceIcon from "../svg/MaintenanceIcon";
import RocketIcon from "../svg/RocketIcon";
import SoftwareCodeIcon from "../svg/SoftwareCodeIcon";
import cloudMigration from "../../assets/cloud/cloudMigration.jpg";
import cloudoptimization from "../../assets/cloud/cloudoptimization.jpg";
import devops from "../../assets/cloud/devops.jpg";
import enterprisesecurity from "../../assets/cloud/enterprisesecurity.jpg";
import multicloud from "../../assets/cloud/multicloud.jpg";
import cloudstorage from "../../assets/cloud/cloudstorage.jpg";

const CloudServicesData = [
    {
      title: "Cloud Migration & Transformation",
      description: "We evaluate your current environment, define migration roadmaps, and replatform workloads for AWS, Microsoft Azure, or GCP. Our teams minimize downtime, preserve data integrity, and modernize infrastructure to suit future workloads.",
      icon: <RocketIcon width={24} height={24} strokeWidth={1} className="text-white" />,
      img: cloudMigration,
      tags: ['Workload discovery & mapping', 'Lift-and-shift & re-architecture', 'Database Migration', 'Rollback & disaster recovery planning', 'Post-migration performance tuning'] },
    {
      title: "Multi-cloud Strategy & Management",
      description: "We design governance frameworks and control planes that span cloud providers. Our solutions offer workload portability, policy enforcement, and cost optimization across AWS, Microsoft Azure, GCP, and private clouds.",
      icon: <DesignIcon width={24} height={24} className="text-white" />,
      img: multicloud,
      tags: ['Cloud readiness assessment', 'Platform selection (AWS / Azure / GCP)', 'TCO & ROI modelling', 'Phased cloud roadmap', 'Hybrid & multi-cloud strategy']
    },
    {
      title: "Cloud Optimization & FinOps",
      description: "We align cloud consumption with business priorities. Our engineers apply tagging, rightsizing, usage forecasting, and budget controls to eliminate waste and improve cloud ROI, often saving clients 15–30% on recurring cloud costs.",
      icon: <SoftwareCodeIcon width={24} height={24} className="text-white" />,
      img: cloudoptimization,
      tags: ['Full cloud spend audit', 'Rightsizing & reserved instances', 'FinOps dashboard setup', 'Auto-scaling policy design', 'Ongoing cost governance']
    },
    {
      title: "Cloud Storage Solutions",
      description: "We design storage architectures that match your data's value and access patterns — keeping hot data fast and available, while automatically tiering cold data to lower-cost storage classes. From object and block storage to archiving and disaster recovery, we ensure your data is always accessible, always compliant, and never over-priced.",
      icon: <MaintenanceIcon width={24} height={24} className="text-white" />,
      img: cloudstorage,
      tags: ['Object, block & file storage', 'Intelligent storage tiering', 'Geo-redundant backup', 'Data lifecycle policy management', 'Disaster recovery & failover']
    },
    {
      title: "Cloud Infrastructure & Monitoring",
      description: "We design and provision cloud infrastructure using Infrastructure as Code — Terraform, or CloudFormation — so your environments are repeatable, version-controlled, and auditable. Full-stack observability is built in from the start: logs, metrics, and traces unified in a single view so your team can detect and resolve issues before they affect users.",
      icon: <MaintenanceIcon width={24} height={24} className="text-white" />,
      img: devops,
      tags: ['Terraform & CloudFormation (IaC)', 'VPC, networking & load balancing', 'Full-stack observability', 'Automated alerting & anomaly detection', 'Capacity planning & forecasting']
    },
    {
      title: "Enterprise Security & Compliance",
      description: "We build cloud-native security postures aligned with regulations like HIPAA, GDPR, and SOC 2. Our frameworks include IAM governance, encryption at rest and in transit, continuous threat detection, and policy enforcement baked into pipelines.",
      icon: <MaintenanceIcon width={24} height={24} className="text-white" />,
      img: enterprisesecurity,
      tags: ['IAM & zero-trust access', 'CSPM & threat detection', 'Data encryption (in transit & at rest)', 'Penetration testing', 'GDPR, HIPAA, ISO 27001, SOC 2']
    }
  ];
  
const WhyCloudServicesData = [
  {
    title: "Architecture-first Approach",
    description: "We start with architecture, ensuring platforms are reliable, secure, and aligned with workload requirements. No shortcuts, no vendor lock-in.",
    icon: <RocketIcon width={24} height={24} strokeWidth={1} className="text-white" />,
  },
  {
    title: "Platform Modernization",
    description: "We decouple legacy applications, refactor infrastructure, and implement containerized workloads managed via Kubernetes, Terraform, and CI/CD pipelines.",
    icon: <DesignIcon width={24} height={24} className="text-white" />,
  },
  {
    title: "Proven Delivery Frameworks",
    description: "We use repeatable migration, optimization, and operations blueprints that reduce project risk, accelerate outcomes, and ensure consistency across engagements.",
    icon: <SoftwareCodeIcon width={24} height={24} className="text-white" />,
  },
  {
    title: "Multi-cloud Fluency",
    description: "Our teams work across all major cloud providers and have delivered platform transformations in hybrid, multi-cloud, and edge environments.",
    icon: <MaintenanceIcon width={24} height={24} className="text-white" />,
  },
  {
    title: "DevSecOps by Design",
    description: "We bring together DevOps agility with embedded security practices, ensuring platforms support both innovation and compliance.",
    icon: <MaintenanceIcon width={24} height={24} className="text-white" />,
  }
];

export {
  CloudServicesData,
  WhyCloudServicesData
}