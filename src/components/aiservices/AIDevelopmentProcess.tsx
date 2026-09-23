import { motion } from "framer-motion";
import {
    ContainerVariant,
    ItemVariant
} from "../../shared/MotionSetting";
import { CircleCheckIcon } from "lucide-react";
import CompHeader from "../shared/CompHeader";

interface AIDevelopmentProcessProps {}

const AIDevelopmentProcess = ({}: AIDevelopmentProcessProps) => {
    const steps = [
        {
            number: 1,
            title: "Discovery & AI Strategy",
            description: "Before starting AI development, we identify high-impact AI opportunities, assess data availability, validate technical feasibility, and define success metrics for your business. This strategy helps organizations avoid investing in AI initiatives that lack sufficient data, clear business value, or a realistic path to deployment."
        },
        {
            number: 2,
            title: "Data Engineering & Preparation",
            description: "AI models are only as good as the data behind them. Through our data engineering services, we consolidate, clean, structure, and enrich data from multiple sources. Then, we establish scalable pipelines that ensure training datasets remain accurate, consistent, and production-ready throughout the AI lifecycle."
        },
        {
            number: 3,
            title: "Model Architecture & Development",
            description: "Based on business problems and data characteristics, we design and develop custom AI models employing machine learning, deep learning, generative AI, or multimodal approaches. We ensure every model is built to balance accuracy, scalability, inference speed, and real-world usability."
        },
        {
            number: 4,
            title: "Validation & Optimization",
            description: "Before deployment, we test models for accuracy, bias, reliability, and performance under real-world conditions. This helps ensure that the AI system produces trustworthy outputs and consistently meets business and operational expectations."
        },
        {
            number: 5,
            title: "Deployment & Integration",
            description: "Once the development is done, we deploy AI models into existing applications, workflows, and enterprise systems. Whether through APIs, cloud platforms, or embedded intelligence layers, we ensure AI delivers value where employees and customers use it."
        },
        {
            number: 6,
            title: "MLOps & Continuous Evolution",
            description: "AI performance changes as data, user behavior, and business conditions evolve. We implement monitoring, retraining, and optimization frameworks to allow organizations to maintain model accuracy, adapt to changing environments, and maximize long-term ROI."
        }
    ];

    const services = [
        "AI feasibility assessment within 5 working days",
        "PoC validated before full-scale commitment",
        "Working code delivered at every milestone",
        "30-day post-launch performance monitoring",
        "All models validated on real-world data before go-live",
        "Full IP and code ownership from day one"
    ]

    const LeftPanel = () => {
        return (
            <div className="w-full lg:w-[40%]">
                <div className="hidden lg:block sticky top-24">
                    <div className="text-lg font-medium mb-6">We Ensure to Provide:</div>
                    <ul className="m-0 p-0 list-none mb-10">
                        {services.map((item, index) => (
                            <li key={index} className="flex items-start pl-1 mb-4">
                                <svg width="0" height="0">
                                    <defs>
                                        <linearGradient
                                            id={`pointer-gradient-${index}`}
                                            x1="0%"
                                            y1="0%"
                                            x2="100%"
                                            y2="0%"
                                        >
                                            <stop offset="0%" stopColor="#6025F5" />
                                            <stop offset="50%" stopColor="#E40CD3" />
                                            <stop offset="100%" stopColor="#FF5555" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <CircleCheckIcon size={24} stroke={`url(#pointer-gradient-${index})`} className="mr-3 mt-0.5 shrink-0"/>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="px-6 py-3 rounded-full border border-pink-400 text-sm md:text-base font-medium hover:text-pink-900 cursor-pointer text-white bg-[linear-gradient(to_right,#6025F5,#E40CD3,#FF5555)]">Schedule an AI Consultation</button>
                </div>
            </div>
        );
    };

    const RightPanel = () => {
        return (
            <div className="w-full lg:w-[60%]">
                <div className="relative">
                    <div className="absolute left-[20px] md:left-[33px] top-[25px] bottom-[25px] w-px bg-[#E40CD3]"/>
                    <ol className="relative list-none m-0 p-0">
                        {steps.map((step) => (
                            <motion.li key={step.number} variants={ItemVariant} className="relative flex gap-5 pb-6 md:pb-10 last:pb-0">
                                <div className="relative z-10 shrink-0">
                                    <div className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] p-2 rounded-full border border-[#FF5555] bg-white flex flex-col items-center justify-center shadow-sm">
                                        <small className="text-[10px] md:text-[11px] leading-none text-[#6025F5]">Step</small>
                                        <span className="text-lg md:text-3xl font-medium leading-tight text-[#6025F5]">{step.number}</span>
                                    </div>
                                </div>
                                {/* ,#E40CD3,#FF5555 */}
                                <div className="flex-1 bg-[#fff4fe]/50 border border-[#ffe5fd]/50 rounded-md md:rounded-xl p-3 md:py-4 md:px-6 -mt-1">
                                    <h4 className="text-base md:text-xl font-medium mb-1 md:mb-2 text-[#E40CD3]">{step.title}</h4>
                                    <p className="text-sm md:text-md text-[#4b5563]">{step.description}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    };

    return (
        <motion.div
            variants={ContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.3
            }}
            className="bg-white"
        >
                <CompHeader
                    highlighter="Our Delivery process"
                    title={<p className='bg-[linear-gradient(to_right,#6025F5,#E40CD3,#FF5555)] bg-clip-text text-transparent'>Our Structured AI Development Process</p>}
                    subheading="From AI strategy and data engineering to model development, deployment, and MLOps, we follow a structured approach to build scalable, secure, and production-ready AI solutions tailored to your business goals."
                    variant="pinkdefault"
                />

                <section className="mx-auto mt-4 md:mt-20 flex flex-col lg:flex-row gap-8 lg:gap-12">
                    <LeftPanel />
                    <RightPanel />
                </section>
        </motion.div>
    );
};

export default AIDevelopmentProcess;