
import RocketIcon from '../../shared/svg/RocketIcon';
import DesignIcon from '../../shared/svg/DesignIcon';
import SoftwareCodeIcon from '../../shared/svg/SoftwareCodeIcon';
import MaintenanceIcon from '../../shared/svg/MaintenanceIcon';
import NeedTeam from '../../components/shared/NeedTeam';
import CardsHolder from '../../components/shared/CardsHolder';
import { AIDevelopmentFaqs } from '../../shared/Faq';
import FAQs from '../../components/faq/FAQs';
import Blogs from '../../components/Blogs';

import TechAIDifference from '../../components/aiservices/TechAIDifference';
import Carousel from '../../components/carousel/Carousel';

import aieducation from "../../assets/carousel/aieducation.jpg";
import aitelecom from "../../assets/carousel/aitelecom.jpg";
import aifintech from "../../assets/carousel/aifintech.jpg";
import aihealthcare from "../../assets/carousel/aihealthcare.jpg";
import aifinance from "../../assets/carousel/aifinance.jpg";
import AIConsultingHero from '../../components/aiconsulting/AIConsultingHero';
import AIConsultingTransform from '../../components/aiconsulting/AIConsultingTransform';
import AIBlueprint from '../../components/aiconsulting/AIBlueprint';
import AIConsultingProcess from '../../components/aiconsulting/AIConsultingProcess';
import WhyChooseCodefluxAIConsulting from '../../components/aiconsulting/WhyChooseCodefluxAIConsulting';
import AIDevelopmentProcess from '../../components/aiservices/AIDevelopmentProcess';
import { AIBlogsData } from '../../shared/data/AIServicesData';
import AITechStack from '../../components/aiconsulting/AITechStack';

const AIConsulting = () => {

  const aiConsultingData = [
    {
      title: "MVP Development",
      description: "Validate ideas quickly with agile prototypes and ready-made modules tested in real-world conditions.",
      icon: (
        <RocketIcon
          width={24}
          height={24}
          strokeWidth={1}
          className="text-white"
        />
      ),
    },
    {
      title: "Strategy Workshops",
      description: "Define use cases and align stakeholders through structured planning and data-readiness sessions.",
      icon: (
        <DesignIcon
          width={24}
          height={24}
          className="text-white"
        />
      ),
    },
    {
      title: "Data Engineering",
      description: "Automate data collection, cleaning, and transformation using secure, production-grade pipelines.",
      icon: (
        <SoftwareCodeIcon
          width={24}
          height={24}
          className="text-white"
        />
      ),
    },
    {
      title: "Model Development",
      description: "Design, train, and tune ML and NLP models using frameworks like TensorFlow and PyTorch.",
      icon: (
        <MaintenanceIcon
          width={24}
          height={24}
          className="text-white"
        />
      ),
    },
    {
      title: "Generative AI Tools",
      description: "Deploy GPT-based copilots, content engines, or custom LLMs for automation and engagement.",
      icon: (
        <MaintenanceIcon
          width={24}
          height={24}
          className="text-white"
        />
      ),
    },
    {
      title: "Cloud Deployment",
      description: "Launch and manage models via MLOps pipelines on AWS, Azure, or Google Cloud infrastructure.",
      icon: (
        <MaintenanceIcon
          width={24}
          height={24}
          className="text-white"
        />
      ),
    },
    {
      title: "BI Dashboards",
      description: "Create real-time visualizations using Power BI or Tableau to track real-time performance and ROI.",
      icon: (
        <MaintenanceIcon
          width={24}
          height={24}
          className="text-white"
        />
      ),
    },
    {
      title: "Team Training",
      description: "Equip teams with documentation, workshops, and support to ensure smooth AI adoption.",
      icon: (
        <MaintenanceIcon
          width={24}
          height={24}
          className="text-white"
        />
      ),
    },
  ];

  const industryDrivenData = [
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
  
  const CustomAIConsulting = () => {
    return <CardsHolder
      highlighter = "AI Services"
      title="Our AI Consulting Services"
      subheading="Codeflux delivers expert-led AI consulting services designed to take you from strategy through deployment. An experienced AI consultant supports each phase, from prototypes and data pipelines to custom models and enterprise-grade systems. We help you plan smart, build fast, and scale with confidence."
      columns={4}
      gap={16}
      data={aiConsultingData}
      type='pinkgradient'
      isGreyBg={true}
    />
  }

  const IndustryDrivenSolutions = () => {
    return <Carousel data={industryDrivenData}  width='w-full'/>
  }

  const AIDevelopmentBlogs = () => {
    return <Blogs
      title="Latest Blogs & Insights on AI"
      subheading="Explore expert insights on AI development, automation, and enterprise use cases. Discover practical guides, industry trends, and proven strategies for building scalable AI solutions that drive business value."
      data={AIBlogsData}
      isBg={true}
      type="aiblog"
      columns={3}
      gap={16}
    />
  }

  return <>
    <AIConsultingHero/>
    <CustomAIConsulting/>
    <AIConsultingTransform/>
    <AIBlueprint/>
    <AIConsultingProcess/>
    <WhyChooseCodefluxAIConsulting/>
    <div className="container-wrapper">
      <AIDevelopmentProcess/>
    </div>
    <IndustryDrivenSolutions/>
    <AIDevelopmentBlogs/>
    <AITechStack/>
    <TechAIDifference/>
      <div className="container-wrapper">
        <FAQs title="AI Development FAQs" faqs={AIDevelopmentFaqs}/>
      </div>
      <div className="container-wrapper">
        <NeedTeam/>
    </div>
  </>
}

export default AIConsulting
