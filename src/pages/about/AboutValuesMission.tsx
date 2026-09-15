import CardsHolder from "../../components/shared/CardsHolder";
import AutomationPlatformIcon from "../../shared/svg/AutomationIcon";
import OptimisationIcon from "../../shared/svg/OptimisationIcon";
import ExpandIcon from "../../shared/svg/ExpandIcon";

const valueMissionData = [
    {
      title: "Integrity",
      description: "Integrity is our foundation. We uphold honesty, transparency, and ethical conduct in all our business activities, ensuring a trust-based relationship with all stakeholders.",
      icon: <AutomationPlatformIcon width={36} height={36} className='sdp-icon-rocket'/>
    },
    {
      title: "Collaboration",
      description: "We believe in the power of collective dreams, daring, and collaboration. Our vision involves forging strong, transparent partnerships with co-workers, clients, and partners, fostering trust and long-term alliances for impactful results.",
      icon: <OptimisationIcon width={36} height={36} className='sdp-icon-rocket'/>
    },
    {
      title: "Innovation",
      description: "Central to our approach is a relentless pursuit of innovation. We are committed to continually challenging the status quo and excelling in all our creations, keeping innovation as our guiding principle.",
      icon: <ExpandIcon width={36} height={36} className='sdp-icon-rocket'/>
    },
    {
      title: "Empowerment",
      description: "Committed to excellence, we constantly seek to enhance our services and foster co-worker growth. We provide dynamic environments and tailored career paths, encouraging coworkers to realise their full potential.",
      icon: <ExpandIcon width={36} height={36} className='sdp-icon-rocket'/>
    }
  ];

const AboutValuesMission = () => {
  return (
    <div className='bg-[#f9f9f9] py-8 md:py-16'>
        <div className='container-wrapper-transparent'>
          <CardsHolder
            title="Values & Mission"
            subheading="SoftwareSeni’s Vision is to revolutionise the outsourcing industry, setting new benchmarks in service delivery, customer interaction, and ethical business practices."
            columns={4}
            gap={16}
            type='white'
            data={valueMissionData}
          />
        </div>
      </div>
  );
}

export default AboutValuesMission;