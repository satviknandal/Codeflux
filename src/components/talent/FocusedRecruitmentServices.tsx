import { ArrowRightIcon } from "lucide-react";
import React from "react";

const FocusedRecruitmentServices = () => {


const RenderCapabilities = () => {
    return <section className="relative">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-24 justify-between items-center">
            <div className="md:w-1/3">
                <div className="mb-4 md:mb-6">
                    <span className="text-sky-400 text-[11px] uppercase tracking-wide md:text-sm md:font-medium mb-2 md:mb-4 block">Capabilities</span>
                    <h2 className="text-3xl sm:text-3xl md:text-6xl text-white uppercase tracking-tighter leading-none mb-2 md:mb-6">Operational<br/>Excellence.</h2>
                    <p className="text-gray-300 text-sm sm:text-md mb-2 md:mb-8 max-w-sm">
                        Streamline your business operations with skilled professionals in administration, finance, and human resources.
                    </p>
                </div>
                <button className="inline-flex items-center gap-3 text-xs md:text-base text-white md:font-bold uppercase tracking-widest border-b border-sky-400 pb-1 hover:text-sky-400 transition-colors">
                    Get Started 
                    <ArrowRightIcon className="w-4"/>
                </button>
            </div>
            <div className="md:w-2/3 flex flex-col gap-2">
                <div className="group relative rounded-md md:rounded-xl bg-[#284562] border border-white/10 p-5 md:p-10 hover:bg-[#3a6590] hover:border-sky-300/50 transition-all duration-500">
                    <div className="hidden md:block absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#333] to-bg-[#284562] group-hover:from-sky-400 group-hover:to-bg-[#284562]">01</span>
                    </div>
                    <h3 className="text-md sm:text-lg md:text-xl font-medium text-white mb-2 md:mb-4 group-hover:text-sky-400 transition-colors duration-300">QUICK DEPLOYMENT</h3>
                    <p className="text-gray-300 text-sm sm:text-md group-hover:text-gray-300">
                        Rapidly onboard pre-screened business professionals to ensure your daily operations run without interruption.
                    </p>
                </div>
                <div className="group relative rounded-md md:rounded-xl bg-[#284562] border border-white/10 p-5 md:p-10 hover:bg-[#3a6590] hover:border-sky-300/50 transition-all duration-500">
                    <div className="hidden md:block absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#333] to-bg-[#284562] group-hover:from-sky-400 group-hover:to-bg-[#284562]">02</span>
                    </div>
                    <h3 className="text-lg sm:text-lg md:text-xl font-medium text-white mb-2 md:mb-4 group-hover:text-sky-400 transition-colors duration-300">RIGOROUS SCREENING</h3>
                    <p className="text-gray-300 text-sm sm:text-md group-hover:text-gray-300">
                        Every candidate undergoes comprehensive background checks and skill assessments tailored to their specific roles.
                    </p>
                </div>
                <div className="group relative rounded-md md:rounded-xl bg-[#284562] border border-white/10 p-5 md:p-10 hover:bg-[#3a6590] hover:border-sky-300/50 transition-all duration-500">
                    <div className="hidden md:block absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#333] to-bg-[#284562] group-hover:from-sky-400 group-hover:to-bg-[#284562]">03</span>
                    </div>
                    <h3 className="text-lg sm:text-lg md:text-xl font-medium text-white mb-2 md:mb-4 group-hover:text-sky-400 transition-colors duration-300">ADAPTABLE WORKFORCE</h3>
                    <p className="text-gray-300 text-sm sm:text-md group-hover:text-gray-300">
                        Seamlessly scale your administrative and support teams to meet fluctuating business demands and seasonal peaks.
                    </p>
                </div>
                <div className="lg:hidden mt-8">
                    <button className="w-full inline-flex items-center rounded-md justify-center gap-3 px-8 py-4 bg-sky-400 text-sm text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                        Start Hiring 
                        <ArrowRightIcon className="w-4"/>
                    </button>
                </div>
            </div>
        </div>
    </section>
}

  const RenderComp = ({children}: {children: React.ReactNode}) => {
    return <section className="py-6 md:py-20 relative overflow-hidden bg-sky-500">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(12,11,29,0.92)_0%,rgba(12,11,29,0.72)_50%,rgba(12,11,29,0.92)_100%)]"/>
      {/* Dot pattern */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:30px_30px]"/>
      {/* Top right glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_65%)]"/>

      {/* Bottom left glow */}
      <div className="pointer-events-none absolute -bottom-[60px] -left-[60px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.08)_0%,transparent_70%)]"/>

      <div className="relative z-[3] mx-auto container-wrapper-transparent">
        {children}
      </div>
    </section>
  }

  return <RenderComp children={<RenderCapabilities/>}/>
};

export default FocusedRecruitmentServices;
