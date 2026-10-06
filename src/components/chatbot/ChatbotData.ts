import { Brain, Cloud, Code2, Globe, Lightbulb, PaletteIcon, Smartphone, UserRound } from "lucide-react";

export interface ChatbotItem {
  id: string;
  title: string;
  description: string;
  details?: string[];
  cta?: string;
  ctaPath?: string;
}

export interface ChatbotCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  items: ChatbotItem[];
}
const chatbotCategories: ChatbotCategory[] = [
  {
    id: "ai-services",
    title: "AI Services",
    description: "Build intelligent AI solutions for your business.",
    icon: Brain,
    items: [
      {
        id: "ai-chatbots",
        title: "AI Chatbots",
        description:
          "Intelligent chatbots for customer support, lead generation and business automation.",
        details: [
          "Website AI chatbots",
          "Customer support automation",
          "Lead qualification",
          "Business knowledge integration",
          "Custom conversational experiences",
        ],
        cta: "Explore AI Services",
        ctaPath: "/services/aiservices",
      },
      {
        id: "rag",
        title: "RAG & Knowledge Systems",
        description:
          "AI systems that can search and answer questions using your business data.",
        details: [
          "Document-based question answering",
          "Enterprise knowledge search",
          "Vector search",
          "LLM integration",
          "Secure business data retrieval",
        ],
        cta: "Explore AI Services",
        ctaPath: "/services/aiservices",
      },
      {
        id: "document-ai",
        title: "Document Intelligence",
        description:
          "Extract structured information from documents using AI.",
        details: [
          "Invoice processing",
          "Contract extraction",
          "Form recognition",
          "Document classification",
          "AI-powered data extraction",
        ],
        cta: "Explore AI Services",
        ctaPath: "/services/aiservices",
      },
      {
        id: "ai-automation",
        title: "AI Automation",
        description:
          "Automate repetitive workflows and business processes with AI.",
        details: [
          "Workflow automation",
          "AI-powered decision support",
          "Email automation",
          "Data processing",
          "Business process automation",
        ],
        cta: "Talk to our AI team",
        ctaPath: "/contactus",
      },
    ],
  },
  {
    id: "ai-consulting",
    title: "AI Consulting",
    description: "Turn AI opportunities into practical business solutions.",
    icon: Lightbulb,
    items: [
      {
        id: "ai-strategy",
        title: "AI Strategy",
        description:
          "Identify where AI can create measurable value for your business.",
        details: [
          "AI opportunity assessment",
          "Use-case identification",
          "Technology evaluation",
          "AI adoption strategy",
          "Implementation planning",
        ],
        cta: "Talk to an AI consultant",
        ctaPath: "/contactus",
      },
      {
        id: "ai-roadmap",
        title: "AI Roadmap",
        description:
          "Create a practical roadmap for implementing AI.",
        details: [
          "Prioritised AI use cases",
          "Architecture planning",
          "Technology selection",
          "Implementation phases",
          "ROI considerations",
        ],
        cta: "Build an AI roadmap",
        ctaPath: "/contactus",
      },
      {
        id: "ai-integration",
        title: "AI Integration",
        description:
          "Integrate AI into your existing applications and workflows.",
        details: [
          "LLM integration",
          "AI APIs",
          "Existing system integration",
          "Data pipelines",
          "Enterprise AI architecture",
        ],
        cta: "Discuss AI integration",
        ctaPath: "/contactus",
      },
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    description: "Scalable software solutions built around your business.",
    icon: Code2,
    items: [
      {
        id: "web-applications",
        title: "Web Applications",
        description:
          "Modern and scalable web applications designed for your users.",
        details: [
          "React applications",
          "Angular applications",
          "Enterprise portals",
          "Business applications",
          "API-driven applications",
        ],
        cta: "Explore Software Development",
        ctaPath: "/services/softwaredevelopmentservices",
      },
      {
        id: "enterprise-software",
        title: "Enterprise Software",
        description:
          "Robust software platforms designed for complex business requirements.",
        details: [
          "Enterprise applications",
          "Workflow systems",
          "Internal business platforms",
          "Integration solutions",
          "Cloud-native architecture",
        ],
        cta: "Discuss your project",
        ctaPath: "/contactus",
      },
      {
        id: "api-development",
        title: "API Development",
        description:
          "Secure and scalable APIs for applications and integrations.",
        details: [
          "REST APIs",
          "Microservices",
          "Third-party integrations",
          "Authentication",
          "API architecture",
        ],
        cta: "Discuss your API project",
        ctaPath: "/contactus",
      },
    ],
  },

  {
    id: "web-development",
    title: "Web Development",
    description: "High-performance websites and web experiences.",
    icon: Globe,
    items: [
      {
        id: "business-websites",
        title: "Business Websites",
        description:
          "Professional websites designed to establish and grow your online presence.",
        details: [
          "Corporate websites",
          "Responsive design",
          "SEO-friendly architecture",
          "CMS integration",
          "Performance optimisation",
        ],
        cta: "Discuss your website",
        ctaPath: "/contactus",
      },
      {
        id: "web-portals",
        title: "Web Portals",
        description:
          "Secure portals for customers, employees and business operations.",
        details: [
          "Customer portals",
          "Employee portals",
          "Partner portals",
          "Secure authentication",
          "Role-based access",
        ],
        cta: "Discuss your portal",
        ctaPath: "/contactus",
      },
      {
        id: "ecommerce",
        title: "E-commerce",
        description:
          "Modern online stores designed around your customers.",
        details: [
          "Online stores",
          "Payment integration",
          "Product management",
          "Order management",
          "Third-party integrations",
        ],
        cta: "Discuss your e-commerce project",
        ctaPath: "/contactus",
      },
    ],
  },

  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Mobile experiences for iOS, Android and cross-platform.",
    icon: Smartphone,
    items: [
      {
        id: "ios",
        title: "iOS Applications",
        description:
          "Custom mobile applications designed for Apple devices.",
        details: [
          "Native iOS applications",
          "API integration",
          "Push notifications",
          "Authentication",
          "App Store deployment",
        ],
        cta: "Discuss your mobile app",
        ctaPath: "/contactus",
      },
      {
        id: "android",
        title: "Android Applications",
        description:
          "Custom Android applications built around your business needs.",
        details: [
          "Native Android applications",
          "API integration",
          "Push notifications",
          "Authentication",
          "Google Play deployment",
        ],
        cta: "Discuss your mobile app",
        ctaPath: "/contactus",
      },
      {
        id: "cross-platform",
        title: "Cross-platform Apps",
        description:
          "Build applications that work across multiple mobile platforms.",
        details: [
          "Cross-platform development",
          "Shared codebase",
          "API integration",
          "Responsive experiences",
          "App deployment",
        ],
        cta: "Discuss your mobile app",
        ctaPath: "/contactus",
      },
    ],
  },

  {
    id: "cloud",
    title: "Cloud Solutions",
    description: "Cloud architecture, migration and modernisation.",
    icon: Cloud,
    items: [
      {
        id: "azure",
        title: "Microsoft Azure",
        description:
          "Design and build scalable cloud solutions using Azure.",
        details: [
          "Azure App Services",
          "Azure Functions",
          "Azure Kubernetes Service",
          "Azure AI services",
          "Azure databases",
        ],
        cta: "Discuss your Azure project",
        ctaPath: "/contactus",
      },
      {
        id: "aws",
        title: "Amazon Web Services",
        description:
          "Cloud-native solutions designed using AWS services.",
        details: [
          "AWS application hosting",
          "Serverless architecture",
          "Containerisation",
          "Cloud databases",
          "AWS integrations",
        ],
        cta: "Discuss your AWS project",
        ctaPath: "/contactus",
      },
      {
        id: "devops",
        title: "DevOps & CI/CD",
        description:
          "Automate software delivery and improve engineering operations.",
        details: [
          "CI/CD pipelines",
          "Infrastructure as Code",
          "Containerisation",
          "Cloud deployments",
          "Monitoring and observability",
        ],
        cta: "Discuss DevOps",
        ctaPath: "/contactus",
      },
    ],
  },

  {
    id: "webdesign",
    title: "Web Design UI/UX",
    description: "Brand Development, User Experience, UX Audit, Web and Mobile Design.",
    icon: PaletteIcon,
    items: [
      {
        id: "webapp",
        title: "Web App Design",
        description: "Design responsive Websites and Web app backed with user research and usuability.",
        details: [
          "Saas Product Design",
          "Website Design",
          "Web Application Design",
          "Responsive Design",
          "User Research and Usuability Testing",
        ],
        cta: "Discuss your Web project",
        ctaPath: "/contactus",
      },
      {
        id: "mobileapp",
        title: "Mobile App Design",
        description: "Design native iOS, Andrioid or Hybrid mobile interfaces.",
        details: [
          "Native iOS inteface",
          "Native Andriod inteface",
          "Hybrid app design",
          "Figma handoff with motion specs"
        ],
        cta: "Discuss your Mobile project",
        ctaPath: "/contactus",
      },
      {
        id: "uxaudit",
        title: "UX Audit",
        description: "Get professionally audited Website, Webapp or Mobile App.",
        details: [
          "UI Design Audit",
          "Heuristic Evaluation",
          "Information Architecture Audit",
          "Responsive/Mobile Audit",
          "Accessibility Audit",
          "Behaviour Analysis and Analytics",
          "Usability Testing"
        ],
        cta: "Discuss UX Audit",
        ctaPath: "/contactus",
      },
    ],
  },

  {
    id: "talent",
    title: "Talent Services",
    description: "Cloud architecture, migration and modernisation.",
    icon: UserRound,
    items: [
      {
        id: "recruitmentservices",
        title: "Recruitment Services",
        description: "Hire and build professional team using our services.",
        details: [
            "Permanent Recruitment",
            "Contract Recruitment",
            "Executive Search",
            "Talent Advisory",
            "Recruitment Managed Service Provider",
            "Embedded Recruitment",
        ],
        cta: "Discuss your Recruitment requirements",
        ctaPath: "/contactus",
      },
      {
        id: "staffaugmentation",
        title: "Staff Augmentation",
        description: "Augment your internal team with skilled developers, testers, and engineers.",
        details: [
          "Rapid access to skilled professionals",
          "Cost-effective scalability",
          "OECD security standards.",
          "Seamless transitions"
        ],
        cta: "Discuss your Augmentation needs",
        ctaPath: "/contactus",
      },
      {
        id: "devteam",
        title: "Dedicated Development Teams",
        description:
          "Automate software delivery and improve engineering operations.",
        details: [
          "Dedicated developers",
          "Flexible team scaling",
          "Cross-functional collaboration with developers, testers, and UX/UI specialists.",
          "Fast iterations and seamless integration."
        ],
        cta: "Discuss Team requirements",
        ctaPath: "/contactus",
      },
    ],
  },

  
];

export {
    chatbotCategories
} 