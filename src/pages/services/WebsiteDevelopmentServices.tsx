import NeedTeam from '../../components/shared/NeedTeam';
import FAQs from '../../components/faq/FAQs';
import { WebDevelopmentFaqs } from '../../shared/Faq';
import { DigitalServicesData } from '../../shared/data/WebDevelopmentData';
import WebDevelopmentProblems from '../../components/webdev/WebDevelopmentProblems';
import WebDevelopmentHero from '../../components/webdev/WebDevelopmentHero';
import WebDevelopmentProcess from '../../components/webdev/WebDevelopmentProcess';
import WebDevelopmentSolutionFinder from '../../components/webdev/WebDevelopmentSolutionFinder';
import WebDevelopmentServices from '../../components/webdev/WebDevelopmentServices';
import WhyCodefluxforWebDevelopment from '../../components/webdev/WhyCodefluxforWebDevelopment';

const WebsiteDevelopmentServices = () => {
  
    const DigitalServices = () => {
        return <WebDevelopmentServices columns={3} gap={16} data={DigitalServicesData}/>
    }

  const pointers = [ 
        { 
            title: "Over a Decade of Expertise", 
            description: "Saigon Technology has over 13 years of experience with more than 800 successful projects. Our extensive experience reflects our ability to stay ahead of technology trends and adapt to changing market needs. We deliver reliable, custom software solutions for various industries like healthcare, e-learning, fintech, logistics, online marketplaces, automotive, insurance, and HR.", 
        }, 
        { 
            title: "Cost-Effective Approach", 
            description: "Saigon Technology delivers great value with a team of 350 top developers in Vietnam. Our careful recruitment process ensures highly qualified staff. This way, you can expect high-quality web applications at competitive prices. The rates we offer are from $22 to $46, which is much lower than in Europe and the U.S. From our resources in Ho Chi Minh City and Da Nang, we efficiently handle projects of any size.", 
        }, 
        { 
            title: "Diverse Domain Experience", 
            description: "We have worked with clients from startups to enterprises in over 150 successful web application development projects. Before your project begins, you’ll meet our team of dedicated managers and tech leads to ensure alignment with your vision and expectations. Our experience and commitment will bring you success.", 
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
            description: "To a reliable web app development company, testing is an essential step. Saigon Technology checks your app for quality and effectiveness at every development stage. Our apps are high-performing and reliable, thanks to rigorous tests. This is key to unlocking business potential."
        }, 
        { 
            title: "Agile Practices for Efficient Deliveries", 
            description: "We adopt Agile methodologies to ensure on-time delivery and adapt to evolving project requirements. This approach fosters close collaboration with clients. Hence, you can be confident that the final product aligns perfectly with your needs. Besides, we provide detailed project proposals and architecture prototypes at the outset to enhance clarity during our partnership."
        },
        { 
            title: "Quality-Centric Approach with ISO Certifications", 
            description: "Quality and security must be your top priority. Don't worry about that once you partner with Saigon Technology! We follow ISO 9001 & ISO/IEC 27001 standards when developing your web app. These certifications show our dedication to providing high-quality and secure solutions. We also have efficient management systems to ensure consistent quality in every project."
        }, 
        { 
            title: "Unified Communication & Global Experience", 
            description: "Effective communication is key to a successful app development process. Our team has outstanding English skills and understands various cultural nuances. To make collaboration easier, we use tools like Slack, Jira, and Zoom. We also try to understand your needs and respect your ideas at every step. Thus, once you work with us, you can experience smooth communication."
        }
    ];

  return <>
      <WebDevelopmentHero/>
      <WebDevelopmentProblems/>
      <DigitalServices/>
      <WhyCodefluxforWebDevelopment
        pointers={pointers}
        pointerClass={''}
      />
      <WebDevelopmentSolutionFinder/>
      <WebDevelopmentProcess/>
      <main className="container-wrapper">
        <FAQs title="Our Web Development FAQs" faqs={WebDevelopmentFaqs}/>
      </main>
      <main className="container-wrapper">
        <NeedTeam/>
      </main>
    </>
}

export default WebsiteDevelopmentServices
