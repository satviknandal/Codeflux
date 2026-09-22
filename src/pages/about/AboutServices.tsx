import aiconsulting from "../../assets/ai/aiconsulting.webp";
import AIengineering from "../../assets/webapp.png";
import { Link } from "react-router-dom";

const AboutServices = () => {

  const RenderAICard = () => {
    return <div className="relative p-8 bg-[#ffd0fe] w-full rounded-xl overflow-hidden h-[800px]">
        <div className="mb-16">
          <h3 className="font-normal text-3xl mb-6 leading-11">Pioneer the AI Revolution through <span className="font-semibold">CodefluxAI</span></h3>
          <p className="mb-12">Integrity is our foundation. We uphold honesty, transparency, and ethical conduct in all our business activities, ensuring a trust-based relationship with all stakeholders.</p>
          <Link className="
            cursor-pointer
            hidden
            md:inline-flex
            min-h-5
            md:min-h-10
            items-center
            rounded-full
            bg-white
            px-8
            py-4
            text-xs
            md:text-base
            text-black
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:shadow-[0_0_25px_rgba(79,70,229,0.35)]
          "
          to="../services/aiservices">Explore Our CodefluxAI Services</Link>
        </div>
        <div className="absolute -left-0">
          <img src={aiconsulting} className=""/>
        </div>
    </div>
  }

  const RenderDigitalCard = () => {
    return <div className="relative p-8 bg-[#3761fc] w-full rounded-xl text-white overflow-hidden h-[800px]">
        <div className="mb-16">
          <h3 className="font-normal text-3xl mb-6 leading-11">Amplify Your Market Presence with <span className="font-semibold">Codeflux Digital</span></h3>
          <p className="mb-12">We believe in the power of collective dreams, daring, and collaboration. Our vision involves forging strong, transparent partnerships with co-workers, clients, and partners, fostering trust and long-term alliances for impactful results.</p>
          <Link className="
            cursor-pointer
            hidden
            md:inline-flex
            min-h-5
            md:min-h-10
            items-center
            rounded-full
            bg-white
            px-8
            py-4
            text-xs
            md:text-base
            text-black
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:shadow-[0_0_25px_rgba(0,0,0,0.15)]
          "
          to="../services/webdevelopmentservices">View CodefluxAI Digital Services</Link>
        </div>
        <div className="absolute left-0 bottom-0">
          <img src={AIengineering} />
        </div>
    </div>
  }

  return (
    <div className='bg-white py-8 md:py-16'>
        <div className='container-wrapper-transparent'>
          <div className="flex gap-4 w-full justify-between">
            <RenderDigitalCard/>
            <RenderAICard/>
          </div>
        </div>
      </div>
  );
}

export default AboutServices;

