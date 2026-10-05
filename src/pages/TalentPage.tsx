import { ArrowRightIcon } from "lucide-react";
import FAQs from "../components/faq/FAQs";
import NeedTeam from "../components/shared/NeedTeam";
import FocusedRecruitmentServices from "../components/talent/FocusedRecruitmentServices";
import HarnessExceptionalTalent from "../components/talent/HarnessExceptionalTalent";
import TalentDeliveryProcess from "../components/talent/TalentDeliveryProcess";
import TalentHero from "../components/talent/TalentHero";
import TalentServices from "../components/talent/TalentServices";
import TalentSubServices from "../components/talent/TalentSubServices";
import WhyCodefluxforTalentServices from "../components/talent/WhyCodefluxforTalentServices";
import { TalentFaqs } from "../shared/Faq";


const RenderHiring = () => {
    return <section className="relative py-6 md:py-20 bg-[#01182e] overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#437189,transparent_1px),linear-gradient(to_bottom,#437189_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-8xl font-medium md:font-black text-white tracking-tighter leading-[0.85] mb-2 md:mb-4 text-left">READY TO BUILD</h2>
                <div className="flex flex-col items-end text-right">
                    <h2 className="text-4xl md:text-9xl font-medium md:font-black text-transparent bg-clip-text bg-gradient-to-l from-sky-400 to-white tracking-tighter leading-[0.85] mb-6 sm:mb-12">YOUR DREAM TEAM?</h2>
                    <p className="text-sm md:text-lg text-gray-300 max-w-xl font-light md:leading-relaxed mb-8 sm:mb-12 border-r border-sky-400 pr-4 sm:pr-6">
                        Lets discuss your resourcing needs and find the perfect match for your projects.
                    </p>
                    <button className="group relative inline-flex rounded-xl items-center justify-center gap-3 sm:gap-4 px-6 py-4 sm:px-10 sm:py-5 md:px-10 md:py-5 bg-white text-black text-sm sm:text-base md:text-base font-bold uppercase tracking-widest overflow-hidden hover:bg-sky-400 hover:text-white transition-all duration-500">
                        <span className="relative z-10 flex items-center gap-3">Start Hiring Now 
                            <ArrowRightIcon className="w-4"/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>;
}

const TalentPage = () => {

  const pointers = [ 
        { 
            title: "Senior Engineers With AI in the Workflow", 
            description: "Our developers are senior engineers who build with AI inside the daily workflow. AI speeds up the routine work, and a senior engineer stays accountable for everything that ships. ", 
        }, 
        { 
            title: "Cost-Effective Approach", 
            description: "Codeflux team delivers great value with a team of local developers. Our careful recruitment process ensures highly qualified staff. This way, you can expect high-quality web applications at competitive prices.", 
        }, 
        { 
            title: "Diverse Domain Experience", 
            description: "We have worked with clients from startups to enterprises in over 100+ successful web application development projects. Before your project begins, you’ll meet our team of dedicated managers and tech leads to ensure alignment with your vision and expectations. Our experience and commitment will bring you success.", 
        }, 
        { 
            title: "Technological Agility & Advanced Skillset", 
            description: "We follow the latest tech, including Microsoft tech, Java, .NET, Python, Angular, React, Node.js, Vue.js, PWA, JavaScript, PHP, GraphQL, and more. Our skilled developers, Project Managers, and Tech Leads excel at crafting tailored, future-ready solutions that meet your business needs. We also leverage AI to add innovative features. With such amazing features, your app will stand out!", 
        }, 
        { 
            title: "Performance-Focused Development & Framework Integration", 
            description: "We are a leading web application development company focusing on website development performance. We choose reusable frameworks to streamline development and accelerate feature updates. These frameworks also allow your applications to scale seamlessly as your business evolves. This way, you can ensure long-term value and adaptability."
        }, 
        { 
            title: "Broad Technical Proficiency", 
            description: "Our team has broad skills in many technical areas, including SOA, cloud, and mobile tech. We work with AWS, Azure, MongoDB, and PostgreSQL, staying up-to-date on industry trends. This is how we offer advanced, tech-forward solutions. With us, you can surely enhance the capabilities of your web apps."
        }, 
        { 
            title: "Test-Driven Development for Excellence", 
            description: "To a reliable web app development company, testing is an essential step. Codeflux checks your app for quality and effectiveness at every development stage. Our apps are high-performing and reliable, thanks to rigorous tests. This is key to unlocking business potential."
        }, 
        { 
            title: "Agile Practices for Efficient Deliveries", 
            description: "We adopt Agile methodologies to ensure on-time delivery and adapt to evolving project requirements. This approach fosters close collaboration with clients. Hence, you can be confident that the final product aligns perfectly with your needs. Besides, we provide detailed project proposals and architecture prototypes at the outset to enhance clarity during our partnership."
        },
        { 
            title: "Quality-Centric Approach with ISO Certifications", 
            description: "Quality and security must be your top priority. Don't worry about that once you partner with Codeflux! We follow ISO 9001 & ISO/IEC 27001 standards when developing your web app. These certifications show our dedication to providing high-quality and secure solutions. We also have efficient management systems to ensure consistent quality in every project."
        }, 
        { 
            title: "Unified Communication & Global Experience", 
            description: "Effective communication is key to a successful app development process. Our team has outstanding English skills and understands various cultural nuances. To make collaboration easier, we use tools like Slack, Jira, and Zoom. We also try to understand your needs and respect your ideas at every step. Thus, once you work with us, you can experience smooth communication."
        }
    ];

  return <>
      <TalentHero/>
      <TalentServices/>
      <TalentSubServices/>
      <FocusedRecruitmentServices/>
      <WhyCodefluxforTalentServices
        pointers={pointers}
        pointerClass={''}
      />
      <HarnessExceptionalTalent/>
      <TalentDeliveryProcess/>
      <RenderHiring/>
      <main className="container-wrapper">
        <FAQs title="IT Talent Outsourcing FAQs" faqs={TalentFaqs}/>
      </main>
      <main className="container-wrapper">
        <NeedTeam/>
      </main>
    </>
}

export default TalentPage
