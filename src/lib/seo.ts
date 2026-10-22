import type { Metadata } from "next";
import { faqCategories } from "../shared/Faq";

export const SITE_URL = "https://codeflux.com.au";
export const SITE_NAME = "Codeflux";
export const DEFAULT_OG_IMAGE = "/assets/codeflux-logo.png";

export interface PageSeo {
  title: string;
  description: string;
  image?: string;
  // Placeholder pages stay out of search results and the sitemap until they have content.
  noindex?: boolean;
}

export interface BlogSeo extends PageSeo {
  category: string;
  // ISO date (YYYY-MM-DD)
  published: string;
}

// One entry per static route. Used for <head> metadata and sitemap.xml.
export const pages = {
  "/": {
    title: "Codeflux | AI, Software, Web & Mobile App Development Company",
    description:
      "Codeflux is an Australian technology partner delivering AI development, custom software, web and mobile apps, cloud engineering, QA testing and talent services.",
  },
  "/aboutus": {
    title: "About Us",
    description:
      "Learn about Codeflux: our mission, values and the team helping businesses across Australia and Asia build AI, software, cloud and digital products.",
  },
  "/contactus": {
    title: "Contact Us",
    description:
      "Talk to Codeflux about your next AI, software, web, mobile or cloud project. Offices in Sydney, Perth, Singapore and Gurugram.",
  },
  "/careers": {
    title: "Careers",
    description:
      "Join Codeflux and work on AI, cloud, web and mobile projects for enterprise clients. See open roles and how to apply.",
  },
  "/clientstories": {
    title: "Client Stories",
    description:
      "See how Codeflux has helped brands like Flight Centre, Gumtree, McGrath and Savills deliver software, web and mobile products.",
  },
  "/services": {
    title: "IT Services",
    description:
      "Explore Codeflux services: AI development and consulting, custom software, web and mobile apps, UI/UX design, cloud solutions, QA testing and talent.",
  },
  "/services/aiservices": {
    title: "AI Development Company",
    description:
      "Codeflux is a specialist AI development company building and deploying artificial intelligence solutions for fintech, healthcare, logistics, retail and manufacturing.",
  },
  "/services/aiconsulting": {
    title: "AI Consulting Services",
    description:
      "Enterprise AI consulting from Codeflux: data and readiness assessments, predictive models, NLP and generative AI, with pilots launched in 6 to 8 weeks.",
  },
  "/services/softwaredevelopmentservices": {
    title: "Custom Software Development Company",
    description:
      "Custom software built around how your teams work: workflows, roles, data rules and approvals, delivered in stages with production-ready engineering.",
  },
  "/services/webdevelopmentservices": {
    title: "Web Application Development Company",
    description:
      "Agile, collaborative web application development from Codeflux: secure, scalable web apps and portals aligned with your business goals.",
  },
  "/services/webdesignuiux": {
    title: "Web Design & UI/UX Services",
    description:
      "Custom website and UI/UX design that is visually compelling, strategically aligned with your business, and built to convert visitors into customers.",
  },
  "/services/cloudsolutionsservices": {
    title: "Cloud & Platform Engineering Services",
    description:
      "Cloud migration, platform engineering and modern infrastructure on AWS, Azure and Google Cloud, with AI-led transformation from Codeflux.",
  },
  "/services/mobileappservices": {
    title: "Custom Mobile App Development Company",
    description:
      "Custom iOS, Android and cross-platform app development for startups and enterprises, from discovery to post-launch support.",
  },
  "/services/testingservices": {
    title: "Software Testing & QA Services",
    description:
      "End-to-end QA and software testing: functional, automation, performance, security and AI testing for regulated and high-traffic software.",
  },
  "/services/talentservices": {
    title: "Talent & Recruitment Services",
    description:
      "Flexible recruitment solutions from Codeflux: permanent placements, temporary staffing and contract roles tailored to your business.",
  },
  "/services/maintenancesupportplans": {
    title: "Maintenance & Support Plans",
    description:
      "Ongoing maintenance and support plans that keep your websites, apps and software secure, up to date and running smoothly.",
    noindex: true,
  },
  "/privacypolicy": {
    title: "Privacy Policy",
    description: "How Codeflux Pty Ltd collects, uses and protects your personal information.",
  },
  "/termsofservice": {
    title: "Terms of Service",
    description: "The terms and conditions for using the Codeflux website and services.",
  },
  "/faq": {
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about Codeflux AI, software, web, mobile, cloud, QA testing and talent services, including pricing, timelines and process.",
  },
  "/blogs": {
    title: "Blog",
    description:
      "Insights from Codeflux on AI, software development, cloud migration, mobile apps, QA testing and digital transformation.",
  },
} satisfies Record<string, PageSeo>;

export const blogs = {
  "/enterprisewebsecuritychecklistblog": {
    title: "Enterprise Web Portal Security Checklist & Compliance Guide",
    description:
      "A practical security checklist for enterprise web portals: authentication, access control, API security, data protection and compliance evidence.",
    category: "Web Development",
    published: "2026-09-30",
    image: "/assets/blogs/web-security.png",
  },
  "/agenticaiblog": {
    title: "What is Agentic AI?",
    description:
      "Agentic AI systems act autonomously to achieve goals. Learn their characteristics, use cases and how they differ from traditional AI.",
    category: "Artificial Intelligence",
    published: "2026-09-28",
    image: "/assets/blogs/agentic-ai.png",
  },
  "/aiadoptionblog": {
    title: "AI Adoption Framework: How Enterprises Structure Their AI Initiatives",
    description:
      "How enterprises structure AI initiatives with an AI adoption framework covering strategy, governance, data readiness and scaling.",
    category: "Artificial Intelligence",
    published: "2026-09-20",
    image: "/assets/blogs/ai-adoption.jpg",
  },
  "/inframigrationblog": {
    title: "How to Move On-Premise Infrastructure to the Cloud: A Step-by-Step Migration Guide",
    description:
      "A step-by-step guide to migrating on-premise infrastructure to the cloud: assessment, planning, migration strategies and cost control.",
    category: "Tech",
    published: "2026-09-16",
    image: "/assets/blogs/cloudmigration.jpg",
  },
  "/mobileappdevblog": {
    title: "Must-Have Mobile App Development Tools: What's Trending?",
    description:
      "The mobile app development tools trending in 2026 and how to choose the right ones for high-quality, feature-rich apps.",
    category: "App Development",
    published: "2026-09-15",
    image: "/assets/blogs/mobile-app-development.webp",
  },
  "/topaiservicesblog": {
    title: "Top AI Services and Tools Every Business Will Need in the Next 3 Years",
    description:
      "The AI services and tools businesses will rely on next: chatbots and virtual assistants, generative AI, predictive analytics and more.",
    category: "Artificial Intelligence",
    published: "2026-09-16",
    image: "/assets/blogs/ai-tools.webp",
  },
  "/mobileorwebappblog": {
    title: "Do You Need a Mobile App or a Progressive Web App?",
    description:
      "Native mobile app vs progressive web app (PWA): a side-by-side comparison of features, cost and when to choose each.",
    category: "App Development",
    published: "2026-09-16",
    image: "/assets/blogs/mobilewebapp.jpg",
  },
  "/digitalTranformationBlog": {
    title: "What Is Digital Transformation?",
    description:
      "What digital transformation means, why it matters, and how organisations can adopt new technology to stay competitive.",
    category: "Digital Transformation",
    published: "2026-09-15",
    image: "/assets/blogs/digital-transformation.jpg",
  },
  "/generativeaiblog": {
    title: "Generative AI: What Is It, and How Can It Impact Business?",
    description:
      "What generative AI technology is, real-world examples, and how it can impact business operations and growth.",
    category: "Artificial Intelligence",
    published: "2026-09-15",
    image: "/assets/blogs/generativeai.webp",
  },
  "/agileinnovationblog": {
    title: "Agile Innovation: A Blueprint for Rapid and Effective Change",
    description:
      "Why agile innovation matters for enterprises and how to combine it with strategic innovation for rapid, effective change.",
    category: "Innovation",
    published: "2026-09-10",
    image: "/assets/blogs/agile.png",
  },
  "/mobileapptestingblog": {
    title: "Mobile App Testing: The Ultimate Guide to Ensure Quality and Performance",
    description:
      "The ultimate guide to mobile app testing: techniques, types and best practices for delivering seamless, bug-free apps.",
    category: "Testing",
    published: "2026-09-28",
    image: "/assets/blogs/mobile-app-testing.png",
  },
  "/uattestingblog": {
    title: "A Complete Guide to User Acceptance Testing (UAT)",
    description:
      "How to plan and run user acceptance testing that validates software meets user expectations and business goals before launch.",
    category: "Testing",
    published: "2026-10-01",
    image: "/assets/blogs/uat-testing.webp",
  },
  "/testcasemanagement": {
    title: "Optimizing Test Case Management for Large-Scale Projects",
    description:
      "Handling massive test case volumes, distributed testers and traceability in large projects, with practical ways to optimise test case management.",
    category: "Testing",
    published: "2026-10-01",
    image: "/assets/blogs/testcase-management.webp",
  },
} satisfies Record<string, BlogSeo>;

export type PagePath = keyof typeof pages;
export type BlogPath = keyof typeof blogs;

export function pageMetadata(path: PagePath): Metadata {
  return buildMetadata(path, pages[path]);
}

export function blogMetadata(path: BlogPath): Metadata {
  const blog: BlogSeo = blogs[path];
  const metadata = buildMetadata(path, blog, "article");
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: blog.published,
      section: blog.category,
    },
  };
}

function buildMetadata(path: string, seo: PageSeo, type: "website" | "article" = "website"): Metadata {
  const image = seo.image ?? DEFAULT_OG_IMAGE;
  return {
    // The home page title is already complete; others get the "| Codeflux" template.
    title: path === "/" ? { absolute: seo.title } : seo.title,
    description: seo.description,
    alternates: { canonical: path },
    ...(seo.noindex && { robots: { index: false, follow: true } }),
    openGraph: {
      type,
      url: path,
      siteName: SITE_NAME,
      title: seo.title,
      description: seo.description,
      images: [image],
      locale: "en_AU",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [image],
    },
  };
}

export function blogPostingJsonLd(path: BlogPath) {
  const blog: BlogSeo = blogs[path];
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    image: `${SITE_URL}${blog.image ?? DEFAULT_OG_IMAGE}`,
    datePublished: blog.published,
    articleSection: blog.category,
    mainEntityOfPage: `${SITE_URL}${path}/`,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}${DEFAULT_OG_IMAGE}` },
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Codeflux Pty Ltd",
  alternateName: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  email: "sales@codeflux.com.au",
  telephone: "+61478575587",
  address: { "@type": "PostalAddress", addressLocality: "Sydney", addressCountry: "AU" },
  sameAs: ["https://www.linkedin.com/company/codeflux-com-au"],
};

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          // Answers are stored as HTML; structured data takes plain text.
          text: faq.answer.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
        },
      })),
    ),
  };
}
