
import NeedTeam from '../../components/shared/NeedTeam';
import CardsHolder from '../../components/shared/CardsHolder';
import { AIDevelopmentFaqs } from '../../shared/Faq';
import FAQs from '../../components/faq/FAQs';
import Blogs from '../../components/Blogs';
import TechAIDifference from '../../components/aiservices/TechAIDifference';
import Carousel from '../../components/carousel/Carousel';
import chatbot from "../../assets/ai/chatbot.png";
import AIDevelopmentProcess from '../../components/aiservices/AIDevelopmentProcess';
import { AIBlogsData, AIDevelopmentServices, AIIndustryDrivenData, WhyCodefluxForAIDevelopmentData } from '../../shared/data/AIServicesData';
import AIServicesHero from '../../components/aiservices/AIServicesHero';
import AIBusinessBanner from '../../components/aiservices/AIBusinessBanner';
import WhyCodefluxforAI from '../../components/aiservices/WhyCodefluxforAI';

const AIServices = () => {
  
  const CustomAIServices = () => {
    return <CardsHolder
      title="Our AI Development Services"
      subheading=" We offer a full range of AI development services designed to solve real business problems. Each service is delivered by dedicated AI specialists with deep domain expertise and hands-on experience across industries."
      columns={3}
      gap={16}
      data={AIDevelopmentServices}
      type='pinkgradient'
      isGreyBg={true}
    />
  }

  const IndustryDrivenSolutions = () => {
    return <Carousel data={AIIndustryDrivenData} />
  }

  const AIDevelopmentBlogs = () => {
    return <Blogs
      title="Latest Blogs & Insights on AI Development"
      subheading="Explore expert insights on AI development, automation, and enterprise use cases. Discover practical guides, industry trends, and proven strategies for building scalable AI solutions that drive business value."
      data={AIBlogsData}
      type="aiblog"
      isBg={true}
      columns={3}
      gap={16}
    />
  }

  return <>
      <AIServicesHero/>
      <CustomAIServices/>
      <WhyCodefluxforAI
        pointers={WhyCodefluxForAIDevelopmentData}
        pointerClass={'bg-[linear-gradient(to_right,#6025F5,#E40CD3,#FF5555)] bg-clip-text text-transparent'}
      />
      <AIBusinessBanner
        title='Ready to Build an AI Solution for Your Business?'
        subheading='If you are exploring AI for automation, analytics, knowledge search, or internal productivity, our team can help you validate the right use case and build a secure, scalable solution aligned with your business goals.'
        image={chatbot}
        buttonText='Get a Custom AI Roadmap'
      />

      <div className="container-wrapper">
        <AIDevelopmentProcess/>
      </div>
      <IndustryDrivenSolutions/>
      <AIDevelopmentBlogs/>
      <TechAIDifference/>
      {/* <AITechnologyStack/> */}
      <div className="container-wrapper">
        <FAQs title="AI Development FAQs" faqs={AIDevelopmentFaqs}/>
      </div>
      <div className="container-wrapper">
        <NeedTeam/>
    </div>
  </>
}

export default AIServices
