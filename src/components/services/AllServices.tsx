import aiconsultingbg from '../../assets/ai/aiconsulting.webp';
import aiservicesbg from '../../assets/ai/aiconsultingbg.webp';
import sdsservicesbg from '../../assets/services/softwaredevelopment.jpg';
import webdevservicesbg from '../../assets/services/webdevelopment.png';
import webdesignservicesbg from '../../assets/services/webdesignservices.jpg';
import cloudsolutionservicesbg from '../../assets/services/cloudservices.png';
import { Link } from 'react-router-dom';
import CompHeader from '../shared/CompHeader';
import { BrainCircuitIcon, BrainIcon, CloudIcon, CodeXmlIcon, GlobeIcon, PaletteIcon } from 'lucide-react';

const AllServices = () => {

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
    
              {/* Custom Software Development */}
              <div className="bg-[#013e76] text-white group/card flex-[2] hover:flex-[3] transition-[flex] duration-500 ease-in-out overflow-hidden bg-surface-container-low rounded-xl border border-outline-variant/10 flex flex-col justify-between hover:bg-surface-container-highest relative">
                <img
                  alt=""
                  className="absolute right-0 object-cover h-full object-center opacity-20 translate-x-full group-hover/card:translate-x-0 transition-transform duration-500 ease-in-out [mask-image:linear-gradient(to_right,transparent,white_35%)]"
                  sizes="50vw"
                  src={aiservicesbg}
                />


                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent z-10 pointer-events-none"></div>
                <div className="relative z-20 p-12 flex flex-col justify-between h-full">
                  <div>
                    <BrainIcon className='w-9 h-9 mb-5 text-sky-400'/>
                    <h2 className="text-3xl font-medium tracking-tighter text-on-surface mb-4 text-white">
                      AI Services
                    </h2>

                    <p className="text-on-surface-variant text-base mb-8 max-w-md font-light leading-relaxed text-gray-300">
                      We build bespoke software around how your business actually operates — from internal tools and workflow automation to full enterprise platforms. No compromises, no adapting your processes to fit the tool.
                    </p>

                    <div className="flex flex-wrap gap-2">
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
                      className="group/link font-label text-xs tracking-widest text-primary-container font-bold uppercase flex items-center gap-2 text-sky-400"
                      href="/services/software-development"
                    >
                      Explore AI Services {rightArrow()}
                    </a>
                  </div>
                </div>
              </div>

              {/* Systems Consulting */}
              <div className="bg-gray-300 text-white group/card flex-[1] hover:flex-[2] transition-[flex] duration-500 ease-in-out overflow-hidden bg-surface-container-low rounded-xl border border-outline-variant/10 flex flex-col justify-between hover:bg-surface-container-highest relative">
                <img
                  alt=""
                  className="absolute object-cover object-center opacity-20 translate-x-full group-hover/card:translate-x-0 transition-transform duration-500 ease-in-out [mask-image:linear-gradient(to_right,transparent,white_35%)]"
                  sizes="50vw"
                  src={aiconsultingbg}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent z-10 pointer-events-none"></div>
                <div className="relative z-20 p-10 flex flex-col justify-between h-full">
                  <div>
                    <BrainCircuitIcon className='w-9 h-9 mb-5 text-sky-800'/>
                    <h2 className="text-3xl font-medium tracking-tighter text-on-surface mb-4 text-gray-900">
                      AI Consulting
                    </h2>

                    <p className="text-on-surface-variant text-base font-light leading-relaxed text-gray-900">
                      We identify the system-level problems slowing your business down and design practical solutions — from integration strategy and process re-engineering to technology selection and roadmapping.
                    </p>
                  </div>

                  <div className="mt-8">
                    <a
                      className="group/link font-label text-xs tracking-widest text-primary-container font-bold uppercase flex items-center gap-2 text-sky-800"
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
              <div className="bg-gray-300 text-white group/card flex-[1] hover:flex-[2] transition-[flex] duration-500 ease-in-out overflow-hidden bg-surface-container-low rounded-xl border border-outline-variant/10 flex flex-col justify-between hover:bg-surface-container-highest relative">
                <img
                  alt=""
                  className="absolute bottom-0 object-cover object-center opacity-10 translate-x-full group-hover/card:translate-x-0 transition-transform duration-500 ease-in-out [mask-image:linear-gradient(to_right,transparent,white_35%)]"
                  sizes="20vw"
                  src={webdevservicesbg}
                />
                <div className="relative z-20 p-12 flex flex-col justify-between h-full">
                  <div>                    
                    <GlobeIcon className='w-9 h-9 mb-5 text-sky-800'/>
                    
                    <h2 className="text-3xl font-medium tracking-tighter text-on-surface mb-4 text-gray-900">
                      Web Development
                    </h2>

                    <p className="text-on-surface-variant text-base mb-8 max-w-md font-light leading-relaxed text-gray-900">
                      We integrate AI into your existing workflows and systems — from intelligent document processing and automated decision-making to custom LLM-powered tools built around how your business operates.
                    </p>
                  </div>
                    <div className="mt-8">
                    <a
                      className="group/link font-label text-xs tracking-widest text-primary-container font-bold uppercase flex items-center gap-2 text-sky-800"
                      href="/services/website-development"
                    >
                      Explore Web Development {rightArrow()}
                    </a>
                  </div>
                </div>
              </div>

              {/* AI Strategy */}
              <div className="bg-[#013e76] text-white group/card flex-[2] hover:flex-[3] transition-[flex] duration-500 ease-in-out overflow-hidden bg-surface-container-low rounded-xl border border-outline-variant/10 flex flex-col justify-between hover:bg-surface-container-highest relative">

                <img
                  alt=""
                  className="absolute object-cover object-center opacity-10 translate-x-full group-hover/card:translate-x-0 transition-transform duration-500 ease-in-out [mask-image:linear-gradient(to_right,transparent,white_35%)]"
                  sizes="50vw"
                  src={sdsservicesbg}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent z-10 pointer-events-none"></div>

                <div className="relative z-20 p-10 flex flex-col justify-between h-full">
                  <div>
                    <CodeXmlIcon className='w-9 h-9 mb-5 text-sky-400'/>
                    
                    <h2 className="text-3xl font-medium tracking-tighter text-on-surface mb-4 text-white">
                      Software Development
                    </h2>

                    <p className="text-on-surface-variant text-base mb-4 font-light leading-relaxed text-gray-300">
                      We build fast, scalable websites that support business growth — clean code, strong SEO foundations, and designed to convert visitors into enquiries.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-12">
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
                      className="group/link font-label text-xs tracking-widest text-primary-container font-bold uppercase flex items-center gap-2 text-sky-400"
                      href="/services/website-development"
                    >
                      Explore Software Development {rightArrow()}
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Mobile */}
            <div className="flex flex-col gap-2 md:hidden">

              {/* AI Services */}
              <div className="bg-surface-container-low px-4 py-6 rounded-xl border border-gray-200 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-3xl font-headline font-semibold md:font-extrabold tracking-tighter text-on-surface mb-4">AI Services</h3>
                  <p className="text-on-surface-variant text-sm md:text-base font-light leading-relaxed text-gray-700">
                    We build bespoke software around how your business actually operates — from internal tools and workflow automation to full enterprise platforms. No compromises, no adapting your processes to fit the tool.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-gray-100 rounded font-label text-[10px] tracking-widest uppercase font-bold text-gray-700">LLM Integration</span>
                    <span className="px-3 py-1 bg-gray-100 rounded font-label text-[10px] tracking-widest uppercase font-bold text-gray-700">Process Automation</span>
                    <span className="px-3 py-1 bg-gray-100 rounded font-label text-[10px] tracking-widest uppercase font-bold text-gray-700">Custom AI Tooling</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link className="group/link font-label text-xs tracking-wider text-primary-container font-bold uppercase flex items-center text-sky-300" to="/services/software-development">
                    Explore AI Services
                  </Link>
                </div>
              </div>
              
              {/* AI Consulting */}
              <div className="bg-surface-container-low px-4 py-6 rounded-xl border border-gray-200 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-3xl font-headline font-semibold md:font-extrabold tracking-tighter text-on-surface mb-4">AI Consulting</h3>
                  <p className="text-on-surface-variant text-sm md:text-base font-light leading-relaxed text-gray-700">
                    We identify the system-level problems slowing your business down and design practical solutions — from integration strategy and process re-engineering to technology selection and roadmapping.
                  </p>
                </div>
                <div className="mt-6">
                  <Link className="group/link font-label text-xs tracking-wider text-primary-container font-bold uppercase flex items-center gap-2 text-sky-300" to="/services/software-development">
                    Explore AI Consulting
                  </Link>
                </div>
              </div>
              
              {/* Web Development Services */}
              <div className="bg-surface-container-low px-4 py-6 rounded-xl border border-gray-200 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-3xl font-headline font-semibold md:font-extrabold tracking-tighter text-on-surface mb-4">Web Development</h3>
                  <p className="text-on-surface-variant text-sm md:text-base font-light leading-relaxed text-gray-700">
                    We integrate AI into your existing workflows and systems — from intelligent document processing and automated decision-making to custom LLM-powered tools built around how your business operates.
                  </p>
                </div>
                <div className="mt-6">
                  <Link className="group/link font-label text-xs tracking-wider text-primary-container font-bold uppercase flex items-center gap-2 text-sky-300" to="/services/software-development">
                    Explore Web Development
                  </Link>
                </div>
              </div>

              {/* Software Development */}
              <div className="bg-surface-container-low px-4 py-6 rounded-xl border border-gray-200 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-3xl font-headline font-semibold md:font-extrabold tracking-tighter text-on-surface mb-4">Software Development</h3>
                  <p className="text-on-surface-variant text-sm md:text-base font-light leading-relaxed text-gray-700">
                    We build fast, scalable websites that support business growth — clean code, strong SEO foundations, and designed to convert visitors into enquiries.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-6">
                    <span className="px-3 py-1 bg-gray-100 rounded font-label text-[10px] tracking-widest uppercase font-bold text-gray-700">Full-Stack Architecture</span>
                    <span className="px-3 py-1 bg-gray-100 rounded font-label text-[10px] tracking-widest uppercase font-bold text-gray-700">Cloud Native</span>
                    <span className="px-3 py-1 bg-gray-100 rounded font-label text-[10px] tracking-widest uppercase font-bold text-gray-700">API Integration</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link className="group/link font-label text-xs tracking-wider text-primary-container font-bold uppercase flex items-center gap-2 text-sky-300" to="/services/software-development">
                    Explore Software Development
                  </Link>
                </div>
              </div>

              {/* Web Design UI/UX */}
              <div className="bg-surface-container-low px-4 py-6 rounded-xl border border-gray-200 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-3xl font-headline font-semibold md:font-extrabold tracking-tighter text-on-surface mb-4">Web Design UI/UX</h3>
                  <p className="text-on-surface-variant text-sm md:text-base font-light leading-relaxed text-gray-700">
                    We build bespoke software around how your business actually operates — from internal tools and workflow automation to full enterprise platforms. No compromises, no adapting your processes to fit the tool.
                  </p>
                </div>
                <div className="mt-6">
                  <Link className="group/link font-label text-xs tracking-wider text-primary-container font-bold uppercase flex items-center gap-2 text-sky-300" to="/services/software-development">
                    Explore Web Design UI/UX
                  </Link>
                </div>
              </div>

              {/* Cloud Solutions */}
              <div className="bg-surface-container-low px-4 py-6 rounded-xl border border-gray-200 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-3xl font-headline font-semibold md:font-extrabold tracking-tighter text-on-surface mb-4">Cloud Solutions</h3>
                  <p className="text-on-surface-variant text-sm md:text-base font-light leading-relaxed text-gray-700">
                    We identify the system-level problems slowing your business down and design practical solutions — from integration strategy and process re-engineering to technology selection and roadmapping.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-gray-100 rounded font-label text-[10px] tracking-widest uppercase font-bold text-gray-700">Microsoft Azure</span>
                    <span className="px-3 py-1 bg-gray-100 rounded font-label text-[10px] tracking-widest uppercase font-bold text-gray-700">AWS</span>
                    <span className="px-3 py-1 bg-gray-100 rounded font-label text-[10px] tracking-widest uppercase font-bold text-gray-700">GCP</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link className="group/link font-label text-xs tracking-wider text-primary-container font-bold uppercase flex items-center gap-2 text-sky-300" to="/services/software-development">
                    Explore Cloud Solutions
                  </Link>
                </div>
              </div>
              

            </div>
          </div>

          {/* Desktop Row 3 */}
          <div>
            <div className="hidden md:flex gap-4 h-[480px]">
    {/* bg-[#061018] */}
              {/* Custom Software Development */}
              <div className="bg-[#013e76] text-white group/card flex-[1] hover:flex-[2] transition-[flex] duration-500 ease-in-out overflow-hidden bg-surface-container-low rounded-xl border border-outline-variant/10 flex flex-col justify-between hover:bg-surface-container-highest relative">
                <img
                  alt=""
                  className="absolute bottom-0 h-full object-cover object-center opacity-5 translate-x-full group-hover/card:translate-x-0 transition-transform duration-500 ease-in-out [mask-image:linear-gradient(to_right,transparent,white_35%)]"
                  sizes="50vw"
                  src={webdesignservicesbg}
                />


                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent z-10 pointer-events-none"></div>
                <div className="relative z-20 p-12 flex flex-col justify-between h-full">
                  <div>
                    <PaletteIcon className='w-9 h-9 mb-5 text-sky-400'/>
                    <h2 className="text-3xl font-medium tracking-tighter text-on-surface mb-4 text-white">
                      Web Design UI/UX
                    </h2>

                    <p className="text-on-surface-variant text-base mb-8 max-w-md font-light leading-relaxed text-gray-300">
                      We build bespoke software around how your business actually operates — from internal tools and workflow automation to full enterprise platforms. No compromises, no adapting your processes to fit the tool.
                    </p>
                  </div>

                  <div className="mt-8">
                    <a
                      className="group/link font-label text-xs tracking-widest text-primary-container font-bold uppercase flex items-center gap-2 text-sky-400"
                      href="/services/software-development"
                    >
                      Explore Web Design UI/UX {rightArrow()}
                    </a>
                  </div>
                </div>
              </div>

              {/* Systems Consulting */}
              <div className="bg-gray-300 text-white group/card flex-[1] hover:flex-[2] transition-[flex] duration-500 ease-in-out overflow-hidden bg-surface-container-low rounded-xl border border-outline-variant/10 flex flex-col justify-between hover:bg-surface-container-highest relative">
                <img
                  alt=""
                  className="absolute right-0 object-cover object-center opacity-15 h-full translate-x-full group-hover/card:translate-x-0 transition-transform duration-500 ease-in-out [mask-image:linear-gradient(to_right,transparent,white_35%)]"
                  sizes="50vw"
                  src={cloudsolutionservicesbg}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent z-10 pointer-events-none"></div>
                <div className="relative z-20 p-10 flex flex-col justify-between h-full">
                  <div>
                    <CloudIcon className='w-9 h-9 mb-5 text-sky-800'/>
                    <h2 className="text-3xl font-medium tracking-tighter text-on-surface mb-4 text-gray-900">
                      Cloud Solutions
                    </h2>

                    <p className="text-on-surface-variant text-base mb-4 font-light leading-relaxed text-gray-900">
                      We identify the system-level problems slowing your business down and design practical solutions — from integration strategy and process re-engineering to technology selection and roadmapping.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-12">
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
                      className="group/link font-label text-xs tracking-widest text-primary-container font-bold uppercase flex items-center gap-2 text-sky-800"
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

  return SoftwareServices();
}

export default AllServices
