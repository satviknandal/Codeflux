import NeedTeam from '../../components/shared/NeedTeam';
import { MobileAppDevelopmentFaqs } from '../../shared/Faq';
import FAQs from '../../components/faq/FAQs';
import MobileAppHero from '../../components/mobiledevelopment/MobileAppHero';
import { MobileAppServicesData } from '../../shared/data/MobileAppDevelopmentData';
import MobileAppDevelopmentProcess from '../../components/mobiledevelopment/MobileAppDevelopmentProcess';
import MobileTechnologies from '../../components/mobiledevelopment/MobileTechnologies';
import WhyChooseCodefluxMobile from '../../components/mobiledevelopment/WhyChooseCodefluxMobile';
import MobileSecurityCompliance from '../../components/mobiledevelopment/MobileSecurityCompliance';
import MobileTechComparison from '../../components/mobiledevelopment/MobileTechComparison';
import MobileAppCost from '../../components/mobiledevelopment/MobileAppCost';
import MobileAppCta from '../../components/mobiledevelopment/MobileAppCta';
import MobileServices from '../../components/mobiledevelopment/MobileServices';

const MobileAppServices = () => {
  
  const CustomServices = () => {
    return <MobileServices
      highlighter='Mobile Capabilities'
      title="Our Mobile App Development Services"
      subheading="Codeflux delivers custom mobile app development services for iOS, Android, and cross-platform applications. Our team builds secure, scalable, and user-ready mobile products for startups and enterprises worldwide."
      data={MobileAppServicesData}
    />
  }
  
  return <>
      <MobileAppHero/>
      <CustomServices/>
      <MobileAppDevelopmentProcess/>
      <MobileTechnologies/>
      <WhyChooseCodefluxMobile/>
      <MobileSecurityCompliance/>
      <MobileTechComparison/>
      <MobileAppCta/>
      <MobileAppCost/>
      <main className="container-wrapper">
        <FAQs title="Our Mobile App Development FAQs" faqs={MobileAppDevelopmentFaqs}/>
      </main>
      <div className="container-wrapper">
      <NeedTeam/>
    </div>
  </>
}

export default MobileAppServices
