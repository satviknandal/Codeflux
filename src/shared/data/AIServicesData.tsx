import DesignIcon from "../svg/DesignIcon";
import MaintenanceIcon from "../svg/MaintenanceIcon";
import RocketIcon from "../svg/RocketIcon";
import SoftwareCodeIcon from "../svg/SoftwareCodeIcon";
import agenticAi from "../../assets/blogs/agentic-ai.png";
import aiadoption from "../../assets/blogs/ai-adoption.jpg";

import webDesignAI from "../../assets/blogs/aiwebdesign.jpg";
import aieducation from "../../assets/carousel/aieducation.jpg";
import aitelecom from "../../assets/carousel/aitelecom.jpg";
import aifintech from "../../assets/carousel/aifintech.jpg";
import aihealthcare from "../../assets/carousel/aihealthcare.jpg";
import aifinance from "../../assets/carousel/aifinance.jpg";
import generativeai from "../../assets/blogs/generativeai.webp";


const AIDevelopmentServices = [
    {
        title: "Machine Learning Development Services",
        description: "We build custom machine learning models that learn from your data and improve over time. Our ML solutions include supervised, unsupervised, and reinforcement learning models designed for prediction, classification, clustering, anomaly detection, and recommendation systems.",
        icon: <RocketIcon width={24} height={24} strokeWidth={1} className="text-white"/>,
    },
    {
        title: "NLP Development",
        description: "We build NLP systems that enable machines to understand, interpret, and generate human language. Our NLP solutions handle text classification, sentiment analysis, named entity recognition, text summarization, language translation, and semantic search.",
        icon: <DesignIcon width={24} height={24} className="text-white"/>,
    },
    {
        title: "Computer Vision Development",
        description: "We develop computer vision systems that extract meaningful information from images, videos, and visual data streams. Our solutions include object detection, facial recognition, image segmentation, OCR, visual inspection, and video analytics.",
        icon: <SoftwareCodeIcon width={24} height={24} className="text-white"/>
    },
    {
        title: "AI Chatbots and AI Copilots",
        description: "We build intelligent conversational AI systems that handle customer queries, automate support workflows, and provide 24/7 engagement across channels. Our chatbots go beyond scripted responses — they understand context, learn from conversations, and escalate complex issues to human agents.",
        icon: <MaintenanceIcon width={24} height={24} className="text-white"/>
    },
    {
        title: "Custom AI Software Development",
        description: "We build custom AI applications tailored to your business processes, operational goals, and customer needs. Whether you need an internal automation tool or an AI-powered product, we create solutions designed for long-term usability and scale.",
        icon: <MaintenanceIcon width={24} height={24} className="text-white"/>
    },
    {
        title: "AI Consulting & Audit ",
        description: "We help businesses identify the right AI opportunities, assess data readiness, and build a practical implementation roadmap. Our AI consulting services bridge the gap between business objectives and technical execution — ensuring every AI investment delivers measurable ROI.",
        icon: <MaintenanceIcon width={24} height={24} className="text-white"/>
    },
];

const WhyCodefluxForAIDevelopmentData = [ 
    { 
        title: "Exceptional Team of AI Experts", 
        description: "We have a designated team of AI experts working as a separate division solely on AI/ML projects. Our team has extensive experience in working with various complexities of AI projects and delivering powerful solutions.", 
    }, 
    { 
        title: "Innovation with Strong R&D", 
        description: "Continuous R&D efforts lead to the development of more sophisticated algorithms and models. We invest heavily in R&D efforts to help our clients develop their unique and powerful AI solutions.", 
    }, 
    { 
        title: "Security & Compliance-First Approach", 
        description: "To ensure that clients’ data is safe with us, we sign an NDA with them. We even follow data security and confidentiality best practices while enforcing data accessibility controls, using VMs, VPNs, or other considerations to ensure sensitive data confidentiality.", 
    }, 
    { 
        title: "Dedicated Support", 
        description: "The dedicated talent/team you hire for your project from our team works as your remote extended team. Hence, you’ll have direct contact with them during the agreed working hours for effective collaboration.", 
    }, 
    { 
        title: "Transparency", 
        description: "We maintain complete transparency by consistently sharing all updates and incorporating your feedback to improve the project. Every line of code we write is completely owned by our customers."
    }, 
    { 
        title: "Flexible Engagement Models", 
        description: "Instead of working on unwanted, rigid, and strict parameters, we offer our clients the flexibility to choose engagement models and switch between them based on their evolving needs to ensure a long-term, reliable association."
    },
    { 
        title: "Full IP ownership transferred", 
        description: "All code, AI models, training pipelines, and documentation are fully transferred to you upon project completion with complete ownership and zero dependencies. We ensure this from day one by signing clear IP assignment agreements, so you stay in full control of your technology and future growth."
    }
];

const AIBlogsData = [
    {
        title: "What is Agentic AI",
        category: "Digital Transformation",
        readTime: "10 min read",
        description: "The artificial intelligence (AI) realm saw a significant stir towards the close of 2022, as OpenAI unleashed ChatGPT to the digital world, promptly amassing an impressive 100 million users in just a few months. The driving force behind this remarkable uptake? Generative AI models",
        date: "June 8, 2026",
        href: "/agenticaiblog",
        image: agenticAi
    },
    {
        title: "AI Adoption Framework: How Enterprises Structure Their AI Initiatives",
        category: "Tech",
        readTime: "7 min read",
        description: "From strategy and AI assessment to implementation, scaling, and continuous governance, along with real-world best practices and common AI adoption challenges to avoid, this guide offers you a comprehensive, actionable insight on adopting AI successfully.",
        date: "December 15, 2025",
        href: "/aiadoptionblog",
        image: aiadoption
    },
    {
        title: "Generative AI: what is it, and how can it impact business?",
        category: "Digital Transformation",
        readTime: "10 min read",
        description: "The artificial intelligence (AI) realm saw a significant stir towards the close of 2022, as OpenAI unleashed ChatGPT to the digital world, promptly amassing an impressive 100 million users in just a few months. The driving force behind this remarkable uptake? Generative AI models",
        date: "June 8, 2026",
        href: "/generativeaiblog",
        image: generativeai
    }
];

const AIIndustryDrivenData = [
    {
        title: "AI In Education & eLearning",
        description: "We build adaptive learning platforms, automated grading systems, student performance prediction models, and AI-powered content generation for educational institutions. Our edtech AI solutions personalize learning paths and improve student outcomes at scale.",
        image: aieducation
    },
    {
        title: "AI In Telecom & Technology",
        description: "Boost telecom efficiency using AI for network optimization, predictive maintenance, customer insights, and fraud prevention.",
        image: aitelecom
    },
    {
        title: "AI In Fintech",
        description: "Our AI systems support fraud detection, risk analysis, workflow automation, and data-driven decision-making for modern financial operations.",
        image: aifintech
    },
    {
        title: "AI In Healthcare",
        description: "We develop AI solutions for medical image analysis, drug discovery acceleration, patient risk scoring, clinical trial optimization, and electronic health record (EHR) automation. Our healthcare AI systems are built with HIPAA compliance and medical-grade accuracy standards.",
        image: aihealthcare
    },
    {
        title: "AI In Finance & Banking",
        description: "We build AI systems for fraud detection, algorithmic trading, credit risk modeling, anti-money laundering (AML), customer segmentation, and regulatory compliance automation. Our fintech AI solutions process millions of transactions in real time with sub-second response times.",
        image: aifinance
    }
];

export {
  AIDevelopmentServices,
  WhyCodefluxForAIDevelopmentData,
  AIBlogsData,
  AIIndustryDrivenData
}