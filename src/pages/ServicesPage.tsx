import BrandsFullGreyComponent from '../components/shared/BrandsFullGreyComponent';
import NeedTeam from '../components/shared/NeedTeam';
import SoftwareAgency from '../components/SoftwareAgency';
import BreadCrumbNav from '../components/BreadcrumbNav';
import aiconsultingbg from '../assets/ai/aiconsulting.webp';
import aiservicesbg from '../assets/ai/aiconsultingbg.webp';
import sdsservicesbg from '../assets/services/softwaredevelopment.jpg';
import webdevservicesbg from '../assets/services/webdevelopment.webp';
import webdesignservicesbg from '../assets/services/webdesignservices.jpg';
import cloudsolutionservicesbg from '../assets/services/cloudservices.png';
import CompHeader from '../components/shared/CompHeader';

const ServicesPage = () => {

const rightArrow = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right w-4 h-4 group-hover/link:translate-x-2 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
}

const SoftwareServices = () => {
  return (
    <div className="container-wrapper-transparent py-6 md:py-20">
      <CompHeader
          highlighter="Our Capabilities"
          title={<p>Our <span className='text-[#3798e3]'>Services</span></p>}
          subheading="With digital transformation services, we enable enterprises to evolve from fragmented operations to intelligent, connected organizations powered by AI, cloud, data, and automation."
          variant="default"
      />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-4 text-gray-900 ">

        {/* Desktop Row 1 */}
        <div>
          <div className="hidden md:flex gap-4 h-[480px]">
  {/* bg-[#061018] */}
            {/* Custom Software Development */}
            <div className="bg-[#edf0f3] text-white group/card flex-[2] hover:flex-[3] transition-[flex] duration-500 ease-in-out overflow-hidden bg-surface-container-low rounded-xl border border-outline-variant/10 flex flex-col justify-between hover:bg-surface-container-highest relative">
              <img
                alt=""
                className="absolute object-cover h-full object-center opacity-10 translate-x-full group-hover/card:translate-x-0 transition-transform duration-500 ease-in-out [mask-image:linear-gradient(to_right,transparent,white_35%)]"
                sizes="50vw"
                src={aiservicesbg}
              />


              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent z-10 pointer-events-none"></div>
              <div className="relative z-20 p-12 flex flex-col justify-between h-full">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cpu text-[#007ee0] w-12 h-12 mb-6" aria-hidden="true"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
                  <h2 className="text-4xl font-headline font-bold tracking-tighter text-on-surface mb-4 text-[#0f283d]">
                    AI Services
                  </h2>

                  <p className="text-on-surface-variant text-base mb-8 max-w-md font-light leading-relaxed text-gray-700">
                    We build bespoke software around how your business actually operates — from internal tools and workflow automation to full enterprise platforms. No compromises, no adapting your processes to fit the tool.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <span className="px-3 py-1 bg-surface-container-high rounded font-label text-[10px] tracking-widest uppercase font-bold text-on-surface bg-gray-100 text-gray-700">
                      LLM Integration
                    </span>

                    <span className="px-3 py-1 bg-surface-container-high rounded font-label text-[10px] tracking-widest uppercase font-bold text-on-surface bg-gray-100 text-gray-700">
                      Process Automation
                    </span>

                    <span className="px-3 py-1 bg-surface-container-high rounded font-label text-[10px] tracking-widest uppercase font-bold text-on-surface bg-gray-100 text-gray-700">
                      Custom AI Tooling
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    className="group/link font-label text-xs tracking-widest text-primary-container font-bold uppercase flex items-center gap-2 text-[#007ee0]"
                    href="/services/software-development"
                  >
                    Explore AI Services {rightArrow()}
                  </a>
                </div>
              </div>
            </div>

            {/* Systems Consulting */}
            <div className="bg-[#edf0f3] text-white group/card flex-[1] hover:flex-[2] transition-[flex] duration-500 ease-in-out overflow-hidden bg-surface-container-low rounded-xl border border-outline-variant/10 flex flex-col justify-between hover:bg-surface-container-highest relative">
              <img
                alt=""
                className="absolute object-cover object-center opacity-8 translate-x-full group-hover/card:translate-x-0 transition-transform duration-500 ease-in-out [mask-image:linear-gradient(to_right,transparent,white_35%)]"
                sizes="50vw"
                src={aiconsultingbg}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent z-10 pointer-events-none"></div>
              <div className="relative z-20 p-10 flex flex-col justify-between h-full">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-globe text-[#007ee0] w-12 h-12 mb-6" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                  <h2 className="text-3xl font-headline font-extrabold tracking-tighter text-on-surface mb-4 text-[#0f283d]">
                    AI Consulting
                  </h2>

                  <p className="text-on-surface-variant text-base font-light leading-relaxed text-gray-700">
                    We identify the system-level problems slowing your business down and design practical solutions — from integration strategy and process re-engineering to technology selection and roadmapping.
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    className="group/link font-label text-xs tracking-widest text-primary-container font-bold uppercase flex items-center gap-2 text-[#007ee0]"
                    href="/services/systems-consulting"
                  >
                    Explore AI Consulting {rightArrow()}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Desktop Row 2 */}
        <div>
          <div className="hidden md:flex gap-4 h-[480px]">

            {/* Website Development */}
            <div className="bg-[#edf0f3] text-white group/card flex-[1] hover:flex-[2] transition-[flex] duration-500 ease-in-out overflow-hidden bg-surface-container-low rounded-xl border border-outline-variant/10 flex flex-col justify-between hover:bg-surface-container-highest relative">
              <img
                alt=""
                className="absolute object-cover object-center opacity-5 translate-x-full group-hover/card:translate-x-0 transition-transform duration-500 ease-in-out [mask-image:linear-gradient(to_right,transparent,white_35%)]"
                sizes="50vw"
                src={webdevservicesbg}
              />
              <div className="relative z-20 p-12 flex flex-col justify-between h-full">
                <div>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cpu text-[#007ee0] w-12 h-12 mb-6" aria-hidden="true"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-globe text-[#007ee0] w-12 h-12 mb-6" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                  
                  <h2 className="text-4xl font-headline font-extrabold tracking-tighter text-on-surface mb-4  text-[#0f283d]">
                    Web Development
                  </h2>

                  <p className="text-on-surface-variant text-base mb-8 max-w-md font-light leading-relaxed text-gray-700">
                    We integrate AI into your existing workflows and systems — from intelligent document processing and automated decision-making to custom LLM-powered tools built around how your business operates.
                  </p>
                </div>
                  <div className="mt-8">
                  <a
                    className="group/link font-label text-xs tracking-widest text-primary-container font-bold uppercase flex items-center gap-2 text-[#007ee0]"
                    href="/services/website-development"
                  >
                    Explore Web Development {rightArrow()}
                  </a>
                </div>
              </div>
            </div>

            {/* AI Strategy */}
            <div className="bg-[#edf0f3] text-white group/card flex-[2] hover:flex-[3] transition-[flex] duration-500 ease-in-out overflow-hidden bg-surface-container-low rounded-xl border border-outline-variant/10 flex flex-col justify-between hover:bg-surface-container-highest relative">

              <img
                alt=""
                className="absolute object-cover object-center opacity-10 translate-x-full group-hover/card:translate-x-0 transition-transform duration-500 ease-in-out [mask-image:linear-gradient(to_right,transparent,white_35%)]"
                sizes="50vw"
                src={sdsservicesbg}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent z-10 pointer-events-none">
              </div>

              {/* <div className="relative z-20 p-12 flex flex-col justify-between h-full">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cpu text-[#007ee0] w-12 h-12 mb-6" aria-hidden="true"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
                  <h2 className="text-4xl font-headline font-extrabold tracking-tighter text-on-surface mb-4  text-[#0f283d]">
                    Web Development
                  </h2>

                  <p className="text-on-surface-variant text-base mb-8 max-w-md font-light leading-relaxed text-gray-700">
                    We integrate AI into your existing workflows and systems — from intelligent document processing and automated decision-making to custom LLM-powered tools built around how your business operates.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <span className="px-3 py-1 bg-surface-container-high rounded font-label text-[10px] tracking-widest uppercase font-bold text-on-surface bg-gray-100 text-gray-700">
                      LLM Integration
                    </span>

                    <span className="px-3 py-1 bg-surface-container-high rounded font-label text-[10px] tracking-widest uppercase font-bold text-on-surface bg-gray-100 text-gray-700">
                      Process Automation
                    </span>

                    <span className="px-3 py-1 bg-surface-container-high rounded font-label text-[10px] tracking-widest uppercase font-bold text-on-surface bg-gray-100 text-gray-700">
                      Custom AI Tooling
                    </span>
                  </div>
                </div>
                  <div className="mt-8">
                  <a
                    className="group/link font-label text-xs tracking-widest text-primary-container font-bold uppercase flex items-center gap-2 text-[#007ee0]"
                    href="/services/website-development"
                  >
                    Explore AI Strategy {rightArrow()}
                  </a>
                </div>
              </div> */}
              <div className="relative z-20 p-10 flex flex-col justify-between h-full">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code-xml text-[#007ee0] w-12 h-12 mb-6" aria-hidden="true"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                  
                  <h2 className="text-3xl font-headline font-extrabold tracking-tighter text-on-surface mb-4 text-[#0f283d]">
                    Software Development
                  </h2>

                  <p className="text-on-surface-variant text-base mb-4 font-light leading-relaxed text-gray-700">
                    We build fast, scalable websites that support business growth — clean code, strong SEO foundations, and designed to convert visitors into enquiries.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <span className="px-3 py-1 bg-surface-container-high rounded font-label text-[10px] tracking-widest uppercase font-bold text-on-surface bg-gray-100 text-gray-700">
                      Full-Stack Architecture
                    </span>

                    <span className="px-3 py-1 bg-surface-container-high rounded font-label text-[10px] tracking-widest uppercase font-bold text-on-surface bg-gray-100 text-gray-700">
                      Cloud Native
                    </span>

                    <span className="px-3 py-1 bg-surface-container-high rounded font-label text-[10px] tracking-widest uppercase font-bold text-on-surface bg-gray-100 text-gray-700">
                      API Integration
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    className="group/link font-label text-xs tracking-widest text-primary-container font-bold uppercase flex items-center gap-2 text-[#007ee0]"
                    href="/services/website-development"
                  >
                    Explore Software Development {rightArrow()}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-4 md:hidden">

            {/* Custom Software Development */}
            <div style={{ opacity: 0, transform: "translateY(24px)" }}>
              <div className="bg-surface-container-low p-10 rounded-xl border border-outline-variant/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-headline font-extrabold tracking-tighter text-on-surface mb-4">
                    Web Design UI/UX
                  </h3>
                </div>
              </div>
            </div>

            {/* Systems Consulting */}
            <div style={{ opacity: 0, transform: "translateY(24px)" }}>
              <div className="bg-surface-container-low p-10 rounded-xl border border-outline-variant/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-headline font-extrabold tracking-tighter text-on-surface mb-4">
                    Systems Consulting
                  </h3>
                </div>

                <div className="mt-8">
                  <a
                    className="group/link font-label text-xs tracking-widest text-primary-container font-bold uppercase flex items-center gap-2 text-sky-300"
                    href="/services/systems-consulting"
                  >
                    Explore Systems Consulting
                  </a>
                </div>
              </div>
            </div>

            {/* Website Development */}
            <div style={{ opacity: 0, transform: "translateY(24px)" }}>
              <div className="bg-surface-container-low p-10 rounded-xl border border-outline-variant/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-headline font-extrabold tracking-tighter text-on-surface mb-4">
                    Cloud Solutions
                  </h3>
                </div>

                <div className="mt-8">
                  <a
                    className="group/link font-label text-xs tracking-widest text-primary-container font-bold uppercase flex items-center gap-2 text-sky-300"
                    href="/services/website-development"
                  >
                    Explore Website Development
                  </a>
                </div>
              </div>
            </div>

            {/* AI Strategy */}
            <div style={{ opacity: 0, transform: "translateY(24px)" }}>
              <div className="bg-surface-container-low p-10 rounded-xl border border-outline-variant/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-headline font-extrabold tracking-tighter text-on-surface mb-4">
                    AI Strategy
                  </h3>
                </div>

                <div className="mt-8">
                  <a
                    className="group/link font-label text-xs tracking-widest text-primary-container font-bold uppercase flex items-center gap-2 text-sky-300"
                    href="/services/ai-strategy"
                  >
                    Explore AI Strategy
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Desktop Row 3 */}
        <div>
          <div className="hidden md:flex gap-4 h-[480px]">
  {/* bg-[#061018] */}
            {/* Custom Software Development */}
            <div className="bg-[#edf0f3] text-white group/card flex-[1] hover:flex-[2] transition-[flex] duration-500 ease-in-out overflow-hidden bg-surface-container-low rounded-xl border border-outline-variant/10 flex flex-col justify-between hover:bg-surface-container-highest relative">
              <img
                alt=""
                className="absolute object-cover object-center opacity-5 translate-x-full group-hover/card:translate-x-0 transition-transform duration-500 ease-in-out [mask-image:linear-gradient(to_right,transparent,white_35%)]"
                sizes="50vw"
                src={webdesignservicesbg}
              />


              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent z-10 pointer-events-none"></div>
              <div className="relative z-20 p-12 flex flex-col justify-between h-full">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code-xml text-[#007ee0] w-12 h-12 mb-6" aria-hidden="true"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                  <h2 className="text-3xl font-headline font-extrabold tracking-tighter text-on-surface mb-4 text-[#0f283d]">
                    Web Design UI/UX
                  </h2>

                  <p className="text-on-surface-variant text-base mb-8 max-w-md font-light leading-relaxed text-gray-700">
                    We build bespoke software around how your business actually operates — from internal tools and workflow automation to full enterprise platforms. No compromises, no adapting your processes to fit the tool.
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    className="group/link font-label text-xs tracking-widest text-primary-container font-bold uppercase flex items-center gap-2 text-[#007ee0]"
                    href="/services/software-development"
                  >
                    Explore Web Design UI/UX {rightArrow()}
                  </a>
                </div>
              </div>
            </div>

            {/* Systems Consulting */}
            <div className="bg-[#edf0f3] text-white group/card flex-[1] hover:flex-[2] transition-[flex] duration-500 ease-in-out overflow-hidden bg-surface-container-low rounded-xl border border-outline-variant/10 flex flex-col justify-between hover:bg-surface-container-highest relative">
              <img
                alt=""
                className="absolute object-cover object-center opacity-10 h-full translate-x-full group-hover/card:translate-x-0 transition-transform duration-500 ease-in-out [mask-image:linear-gradient(to_right,transparent,white_35%)]"
                sizes="50vw"
                src={cloudsolutionservicesbg}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent z-10 pointer-events-none"></div>
              <div className="relative z-20 p-10 flex flex-col justify-between h-full">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-network text-[#007ee0] w-12 h-12 mb-6" aria-hidden="true"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
                  <h2 className="text-3xl font-headline font-extrabold tracking-tighter text-on-surface mb-4 text-[#0f283d]">
                    Cloud Solutions
                  </h2>

                  <p className="text-on-surface-variant text-base mb-4 font-light leading-relaxed text-gray-700">
                    We identify the system-level problems slowing your business down and design practical solutions — from integration strategy and process re-engineering to technology selection and roadmapping.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-3 py-1 bg-surface-container-high rounded font-label text-[10px] tracking-widest uppercase font-bold text-on-surface bg-gray-100 text-gray-700">
                      Microsoft Azure
                    </span>

                    <span className="px-3 py-1 bg-surface-container-high rounded font-label text-[10px] tracking-widest uppercase font-bold text-on-surface bg-gray-100 text-gray-700">
                      AWS
                    </span>

                    <span className="px-3 py-1 bg-surface-container-high rounded font-label text-[10px] tracking-widest uppercase font-bold text-on-surface bg-gray-100 text-gray-700">
                      GCP
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    className="group/link font-label text-xs tracking-widest text-primary-container font-bold uppercase flex items-center gap-2 text-[#007ee0]"
                    href="/services/systems-consulting"
                  >
                    Explore Cloud Solutions {rightArrow()}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

  return (
    <>
    <div className="blogsbg text-white pt-32 pb-16 lg:pt-24 lg:pb-24 inset-0 -z-10 bg-gradient-to-br from-[#012546] via-surface-container-lowest to-[#013e76] pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <BreadCrumbNav label="All Services"/>
            <h1 className="text-4xl sm:text-5xl font-headline font-bold tracking-tighter mb-6 max-w-2xl">
              Delivering Superior IT Services
            </h1>

            <p className="text-base text-gray-300 max-w-2xl">
              At Codeflux, technology meets imagination, innovation, and a lot of passion! Our quest: Creating meaningful digital experiences and building better solutions. With our insatiable curiosity and relentless drive for excellence, we have become specialists at solving complex technical problems. What we deliver goes beyond good service, it provides our clients with digital assets that improve their present and future.
            </p>
          </div>
        </div>
        
      </div>
      <SoftwareServices/>
      <SoftwareAgency/>
      <BrandsFullGreyComponent 
        label = 'Pioneering Digital Excellence Locally and Globally'
        labelColor = '#007ee0'
        labelSize = 'text-xl md:text-3xl'
      />
      <main className="container-wrapper">
        <NeedTeam/>
      </main>
    </>
  )
}

export default ServicesPage
