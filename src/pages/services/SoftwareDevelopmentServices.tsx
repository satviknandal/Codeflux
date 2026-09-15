
import NeedTeam from '../../components/shared/NeedTeam';
import CardsHolder from '../../components/shared/CardsHolder';
import { SoftwareDevelopmentFaqs } from '../../shared/Faq';
import FAQs from '../../components/faq/FAQs';
import { SoftwareSecurityData, SoftwareValueDrivenData } from '../../shared/data/SoftwareDevelopmentData';
import SoftwareSecurityArchitecture from '../../components/softwaredevelopment/SoftwareSecurityArchitecture';
import SPEApproach from '../../components/softwaredevelopment/SPEApproach';
import SoftwareDevelopmentHero from '../../components/softwaredevelopment/SoftwareDevelopmentHero';
import CustomSoftwareDevelopmentServices from '../../components/softwaredevelopment/CustomSoftwareDevelopmentServices';
import SoftwareDevelopmentProcess from '../../components/softwaredevelopment/SoftwareDevelopmentProcess';
import WhyChooseCodefluxSoftwareDevelopment from '../../components/softwaredevelopment/WhyChooseCodefluxSoftwareDevelopment';
import SoftwareTechnologyStack from '../../components/softwaredevelopment/SoftwareTechnologyStack';

const SoftwareDevelopmentServices = () => {

  const ValueDrivenSolutions = () => {
    return <CardsHolder
      title="Value-Driven Solutions at Every Step"
      subheading="Our custom software development services are built to streamline operations, enhance workflows, and support your business’s long-term goals. With Codeflux, you gain tools that drive efficiency, reduce costs, and empower growth—delivering real value at every step."
      columns={3}
      gap={16}
      type='blue'
      data={SoftwareValueDrivenData}
      width='w-full'
      isGreyBg={true}
    />
  }

  const SoftwareSecurityArchitectureComp = () => {
    const content = [
      `Enterprise software security works best when access control, data protection, audit logging, and deployment policies are planned before development starts.`,
      `Based on project scope, SDLC Corp maps controls against relevant frameworks such as SOC 2, ISO 27001, HIPAA, PCI DSS, SOX, and GDPR before key architecture decisions are finalized.`
    ];
    return (
      <SoftwareSecurityArchitecture
        highlighter="Security Planning"
        title="Enterprise Software Security Planned at the Architecture Stage"
        body={content}
        data={SoftwareSecurityData}
      />
    );
  };

  return <>
      <SoftwareDevelopmentHero/>
      <CustomSoftwareDevelopmentServices/>
      <SoftwareSecurityArchitectureComp/>
      <SoftwareDevelopmentProcess/>
      <SPEApproach/>
      <WhyChooseCodefluxSoftwareDevelopment/>
      <ValueDrivenSolutions/>
      <SoftwareTechnologyStack/>
      <main className="container-wrapper">
        <FAQs title="Our Software Development FAQs" faqs={SoftwareDevelopmentFaqs}/>
      </main>
      <div className="container-wrapper">
      <NeedTeam/>
    </div>
  </>
}

export default SoftwareDevelopmentServices
