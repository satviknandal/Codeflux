
import sds from '../assets/software/sds.webp';
import BrandsFullGreyComponent from '../components/shared/BrandsFullGreyComponent';
import satvik from '../assets/team/satvik1.jpg';
import bhawna from '../assets/team/bhawna.jpeg';
import rakshit from '../assets/team/rakshit.jpeg';
import CompHeader from '../components/shared/CompHeader';
import LinkedinIcon from "../shared/svg/social/LinkedinIcon";
import { Link } from 'react-router-dom';

interface TeamMember {
  name?: string;
  role?: string;
  pic?: string;
  href?: string;
  linkedin?: string;
  social?: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}


interface SocialLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

interface TeamMembersProps {
  members?: TeamMember[];
}


const members = [
  {
    name: "Satvik Nandal",
    role: "Director of Product",
    pic: satvik,
    href: "/team-member/",
    linkedin: ""
  },
  {
    name: "Bhawna Khatri",
    role: "Quality Analyst",
    pic: bhawna,
    href: "/team-member/",
    linkedin: ""
  },
  {
    name: "Rakshit Sakhuja",
    role: "Senior AI Engineer",
    pic: rakshit,
    href: "/team-member/",
    linkedin: ""
  },
  {
    name: "Prateek",
    role: "Senior AI Engineer",
    pic: satvik,
    href: "/team-member/",
    linkedin: ""
  },
  {
    name: "Satya",
    role: "Senior Backend Developer",
    pic: satvik,
    href: "/team-member/",
    linkedin: ""
  },
  {
    name: "Bimrendra",
    role: "Senior Software Engineer",
    pic: satvik,
    href: "/team-member/",
    linkedin: ""
  }
];

const SocialLink = ({ href, label, children, }: SocialLinkProps) => { 
  return <a href={href} target="_blank" rel="noopener noreferrer" 
      aria-label={label} 
      className=" flex h-7 w-7 items-center justify-center text-slate-900 transition-transform duration-200 hover:scale-110 hover:opacity-70 " 
    > 
      {children} 
    </a>
};

const TeamMembers = ({ members }: TeamMembersProps) => { 
  return ( 
    <section className="w-full mb-[60px]"> 
      <div className=" grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 " > 
        {members.map((member) => ( 
          <article key={member.name} className=" relative flex flex-col items-start gap-5 " >
            <div className="group relative w-full overflow-hidden rounded-[15px]">
              <Link to={member.href ?? "#"} className="block w-full">
                <img
                  src={member.pic}
                  alt={member.name}
                  loading="lazy"
                  className="
                    block
                    aspect-[299/366]
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-[1.03]
                  "
                />
              </Link>

            {/* Social icons */}
            <div
              className="
                absolute
                bottom-0
                left-0
                z-10
                flex
                items-center
                gap-4
                rounded-tr-[15px]
                rounded-bl-[15px]
                bg-[#6227cf]/60
                px-4 py-3
                opacity-0
                translate-y-2
                pointer-events-none
                transition-all
                duration-300
                group-hover:translate-y-0
                group-hover:opacity-100
                group-hover:pointer-events-auto
              "
            >
                  <SocialLink href={member.linkedin} label="LinkedIn" > 
                    <LinkedinIcon color='white'/>
                  </SocialLink>
            </div>
          </div>
        <Link to={member.href ?? "#"} className="group block" > 
          <p className=" mb-1 text-sm font-medium tracking-wide text-slate-500 " > {member.role} </p> 
          <h3 className="text-lg md:text-[20px] font-medium text-gray-900 md:mb-0 transition-colors duration-200 group-hover:text-slate-600 " > {member.name} </h3> 
          <button className="cursor-pointer text-sm md:text-sm text-sky-600 hover:text-sky-700">View Profile</button>
        </Link> 
      </article> 
      ))} 
      </div> 
    </section>
  )};




const TeamPage = () => {
  return (
    <>
      <main className='container-wrapper'>
        <div className='pt-6 pb-8'>
          <CompHeader
              highlighter="Our Team"
              title={<p>Meet the dedicated experts behind <span className="text-sky-600">our success</span></p>}
              subheading="We’re a collective of sharp-minded creators bound together by a shared curiosity to build better."
              variant="default"
          />
        </div>
        <TeamMembers members={members} />
        <div className='border border-gray-100 mb-6 md:hidden'></div>
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-[60px]">
          <img
            src={sds}
            alt="hunt"
            className="hidden md:block rounded-lg h-[500px] w-auto object-cover"
          />
          <div className="flex flex-col w-full lg:w-[40%]">
            <h3 className="text-2xl md:text-4xl font-medium text-[#07324a] mb-4 md:mb-8 leading-tight">
              We’re always on the hunt for curious like-minded people.
            </h3>
            <button className="w-fit rounded-full bg-[#03A9F4] px-6 md:px-9 py-3 md:py-4 text-white cursor-pointer hover:bg-[#0396d8] transition-colors">
              View current openings
            </button>
          </div>
        </div>
      </main>
      <BrandsFullGreyComponent/>
    </>
  )
}

export default TeamPage
