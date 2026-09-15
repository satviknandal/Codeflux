import { BlocksIcon, ComponentIcon, GlobeCheckIcon, LayersPlusIcon, ProportionsIcon, ShoppingBasketIcon, TabletSmartphoneIcon } from "lucide-react";
import AutomationPlatformIcon from "../svg/AutomationIcon";
import DesignIcon from "../svg/DesignIcon";
import ExpandIcon from "../svg/ExpandIcon";
import MaintenanceIcon from "../svg/MaintenanceIcon";
import OptimisationIcon from "../svg/OptimisationIcon";
import RocketIcon from "../svg/RocketIcon";
import SoftwareCodeIcon from "../svg/SoftwareCodeIcon";




const DigitalServicesData = [
    {
        title: "Website Design & Development",
        description: "We don't just build websites; we create user experiences that engage and convert. Our designers and developers will collaborate to bring your vision to life with a stunning, functional website.",
        icon: <GlobeCheckIcon width={16} height={16} className="text-white"/>,
        tags: ['Custom Design', 'Responsive Layout', 'SEO Friendly', 'User-Centric']
    },
    {
        title: "CMS Development",
        description: "Empower yourself to easily update and manage your website content with a user-friendly CMS. We'll choose the perfect platform based on your needs, whether it's WordPress, Drupal, or a custom solution.",
        icon: <ComponentIcon width={16} height={16} className="text-white"/>,
        tags: ['Multi-User Support', 'Integrated SEO tools', 'Analytics Integration', 'Flexibility and scalability']
    },
    {
        title: "API Development & Integration",
        description: "Connect your web application to external data sources and services with our expert API development and integration. This allows for a more powerful and dynamic user experience.",
        icon: <BlocksIcon width={16} height={16} className="text-white"/>,
        tags: ['Custom API Solutions', 'Third-Party Integration', 'Secure and Reliable', 'Real-Time Data Access']
    },
    {
        title: "Bespoke Web Development",
        description: "Have a unique vision for your web project? We can build it from the ground up. Our team can handle everything from custom web development to legacy system migration and front-end functionality improvements.",
        icon: <TabletSmartphoneIcon width={16} height={16} className="text-white"/>,
        tags: ['Requirement Analysis', 'Tailored Solutions', 'Agile Methodology', 'Post-Launch support']
    },
    {
        title: "Upgrade & Migration",
        description: "Need to upgrade your existing website or migrate to a new platform? We handle the entire process smoothly and efficiently, minimising downtime and disruption.",
        icon: <LayersPlusIcon width={16} height={16} className="text-white"/>,
        tags: ['Data Integrity Assurance', 'Platform Migration', 'Identify and mitigate risks', 'Performance Optimization']
    },
    {
        title: "Maintenance & Support",
        description: "We don't just build it; we maintain it. Our ongoing support ensures your web application continues to run smoothly and securely and delivers optimal performance. We'll handle bug fixes, updates, security patches, and server monitoring.",
        icon: <MaintenanceIcon width={16} height={16} className="text-white"/>,
        tags: ['Proactive Maintenance', 'Backup and Recovery', 'Bug Fixes and Updates', 'Continuous optimisation']
    },
];

const WebDevelopmentProcessData = [
    {
        title: "Discovery Phase",
        description: "We love workshops, and that's how we begin - by understanding your business objectives and technical requirements to create a roadmap for success. This phase involves in-depth research, stakeholder interviews, and competitor analysis to gather all necessary information. Once that is done, we can take the next step and start designing.",
        icon: <RocketIcon width={24} height={24} strokeWidth={1} className='sdp-icon-rocket'/>
    },
    {
        title: "Web Design and Planning Phase",
        description: "Our web designers craft intuitive, user-centric interfaces that improve user engagement and satisfaction performances. We focus on creating visually attractive and functional designs that reflect your brand identity and resonate with your target audience. This stage requires some back-and-forth communication because we have to get it right before moving on to development.",
        icon: <DesignIcon width={24} height={24} className='sdp-icon-rocket'/>
    },
    {
        title: "Web Development and Testing Phase",
        description: "Once we have signed off on the web design phase, we can start coding. Our web development process follows best practices in coding, security, and performance optimisation. We also ensure that our solutions are flexible and scalable, allowing for future considerations. Our developers work closely with designers and project managers to deliver a cohesive, high-quality product.",
        icon: <SoftwareCodeIcon width={24} height={24} className='sdp-icon-rocket'/>
    },
    {
        title: "Launch and Maintenance Phase",
        description:
        "That's right, we overdeliver. It is not just about developing but ensuring what we build works perfectly. After rigorous testing, we proceed with the deployment and launch, ensuring a smooth transition and minimal downtime. We also provide post-launch support and monitoring to address issues and ensure continuous performance promptly.",
        icon: <MaintenanceIcon width={24} height={24} className='sdp-icon-rocket'/>,
    },
];

const WhatSetsUsApartData = [
    {
        title: "User-Centricity",
        description: "Our focus on user experience ensures that your website is intuitive and enjoyable to navigate. We prioritise usability, engagement and accessibility.",
        icon: <AutomationPlatformIcon width={36} height={36} className='sdp-icon-rocket'/>
    },
    {
        title: "Optimisation",
        description: "If our software reduces overhead, it also reduces your costs. Our software inevitably improves your processes, enhancing efficiency and reducing operational burdens. By streamlining workflows and eliminating bottlenecks, your team's productivity is boosted.",
        icon: <OptimisationIcon width={36} height={36} className='sdp-icon-rocket'/>
    },
    {
        title: "Above and beyond",
        description: "We build software to help you grow continuously, not only in the beginning. Our scalable solutions are designed to grow your business over the long term. As your needs evolve, our software adapts to accommodate increased workloads and new functionalities.",
        icon: <ExpandIcon width={36} height={36} className='sdp-icon-rocket'/>
    }
];

export {
    DigitalServicesData,
    WebDevelopmentProcessData,
    WhatSetsUsApartData
}