import NeedTeam from '../../components/shared/NeedTeam';
import { TestingServicesFaqs } from '../../shared/Faq';
import FAQs from '../../components/faq/FAQs';
import TestingProcess from '../../components/testingservices/TestingProcess';
import TestingServicesCta from '../../components/testingservices/TestingServicesCta';
import TestingServicesHero from '../../components/testingservices/TestingServicesHero';
import TestingServices from '../../components/testingservices/TestingServices';
import TestingTechnologies from '../../components/testingservices/TestingTechnologies';
import EngagementOptionsComparison from '../../components/testingservices/EngagementOptionsComparison';
import WhyChooseCodefluxTestingServices from '../../components/testingservices/WhyChooseCodefluxTestingServices';
import Blogs from '../../components/Blogs';
import { TestingServicesBlogsData } from '../../shared/data/TestingServicesPageData';
import QaOutsourcingComparison from '../../components/testingservices/QaOutsourcingComparison';

const TestingServicesPage = () => {

  const TestingServicesBlogs = () => {
    return <Blogs
      title="QA and Software Testing Insights"
      subheading="Three reads from our engineering team on testing tactics and quality-engineering practice. Practical patterns you can apply on your next sprint without theory bloat."
      data={TestingServicesBlogsData}
      isBg={true}
      type="default"
      columns={3}
      gap={16}
    />
  }
  
  return <>
      <TestingServicesHero/>
      <TestingServices/>
      <TestingProcess/>
      <TestingTechnologies/>
      <WhyChooseCodefluxTestingServices/>
      <EngagementOptionsComparison/>
      <TestingServicesCta/>
      <QaOutsourcingComparison/>
      <TestingServicesBlogs/>
      <main className="container-wrapper">
        <FAQs title="Our QA Testing Services FAQs" faqs={TestingServicesFaqs}/>
      </main>
      <div className="container-wrapper">
      <NeedTeam/>
    </div>
  </>
}

export default TestingServicesPage
