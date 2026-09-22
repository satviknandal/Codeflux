import NeedTeam from '../../components/shared/NeedTeam';
import CardsHolder from '../../components/shared/CardsHolder';
import { CloudServicesFaqs } from '../../shared/Faq';
import FAQs from '../../components/faq/FAQs';
import { CloudServicesData, WhyCloudServicesData } from '../../shared/data/CloudPlatformData';
import KeyCloudPartners from '../../components/cloudsolutions/KeyCloudPartners';
import CloudPlatformServices from '../../components/cloudsolutions/CloudPlatformServices';
import CloudSolutionsHero from '../../components/cloudsolutions/CloudSolutionsHero';

const CloudSolutionServices = () => {

  const CloudServices = () => {
    return <CloudPlatformServices
      data={CloudServicesData}
      columns={3}
      gap={16}
      width='w-[100%]'
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
