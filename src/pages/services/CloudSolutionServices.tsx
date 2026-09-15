import NeedTeam from '../../components/shared/NeedTeam';
import CardsHolder from '../../components/shared/CardsHolder';
import { CloudServicesFaqs } from '../../shared/Faq';
import FAQs from '../../components/faq/FAQs';
import { CloudServicesData, WhyCloudServicesData } from '../../shared/data/CloudPlatformData';
import KeyCloudPartners from '../../components/cloudsolutions/KeyCloudPartners';
import CloudPlatformServices from '../../components/cloudsolutions/CloudPlatformServices';
import BreadCrumbNav from '../../components/BreadcrumbNav';
import cloud from "../../assets/cloud.png";
import CloudSolutionsHero from '../../components/cloudsolutions/CloudSolutionsHero';

const CloudSolutionServices = () => {

  const CloudServices = () => {
    return <CloudPlatformServices
      data={CloudServicesData}
      columns={3}
      gap={16}
      width='w-[100%]'
      isBg={true}
    />
  }

  const WhyCloudServices = () => {
    return <CardsHolder
      highlighter='How we deliver'
      title="Why Codeflux for Cloud Engineering?"
      subheading="Our delivery process keeps business goals, system dependencies, security requirements, and compliance checkpoints visible from discovery to post-launch support."
      columns={3}
      gap={16}
      data={WhyCloudServicesData}
      width='w-[80%]'
    />
  }

  return <>
  <CloudSolutionsHero/>
  {/* <div className="overflow-hidden blogsbg text-white pt-32 pb-16 lg:pt-24 lg:pb-24 inset-0 -z-10 bg-gradient-to-br from-[#022c82] via-surface-container-lowest to-[#2b115b] pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
          <div className='w-full'>
            <BreadCrumbNav label="All Services"/>
            <h1 className="text-4xl sm:text-5xl font-headline font-bold tracking-tighter mb-6 max-w-3xl">
              Cloud & Platform Engineering Services
            </h1>
             <p className='mt-6 text-xl text-gray-300 font-semibold'>AI-led Transformation for Scalable Cloud and Modern Infrastructure</p>
              <ul className='text-base text-gray-300 max-w-2xl font-normal mt-6 text-md list-disc ml-8'>
                <li>As AI becomes the bedrock of digital transformation, cloud infrastructure emerges as a critical enabler. From infrastructure to innovation, we enable you to harness the full power of cloud and AI with speed and scale for impactful outcomes.</li>
                <li>Build secure, cost-efficient, and scalable cloud-native platforms. Our engineering-led approach reduces provisioning time by up to 40% and embeds compliance and observability from day one.</li>
              </ul>
          </div>
          <div>
            <img src={cloud} width={500}/>
          </div>
        </div>
      </div> */}
      {/* <DigitalBanner/> */}
      <CloudServices/>
      <div className="container-wrapper">
        <WhyCloudServices/>
      </div>
      <KeyCloudPartners/>
      <main className="container-wrapper">
        <FAQs title="Cloud & Infrastructure Services FAQs" faqs={CloudServicesFaqs}/>
      </main>
      <div className="container-wrapper">
        <NeedTeam/>
    </div>
  </>
}

export default CloudSolutionServices
