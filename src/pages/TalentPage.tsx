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
import TalentHire from "../components/talent/TalentHire";

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
      <TalentHire/>
      <main className="container-wrapper">
        <FAQs title="IT Talent Outsourcing FAQs" faqs={TalentFaqs}/>
      </main>
      <main className="container-wrapper">
        <NeedTeam/>
      </main>
    </>
}

export default TalentPage
