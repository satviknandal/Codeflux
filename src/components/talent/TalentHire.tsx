import React from "react";
import { ArrowRightIcon } from "lucide-react";

const TalentHire: React.FC = () => {
  return <section className="relative py-6 md:py-20 bg-[#01182e] overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#437189,transparent_1px),linear-gradient(to_bottom,#437189_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-8xl font-medium md:font-black text-white tracking-tighter leading-[0.85] mb-2 md:mb-4 text-left">READY TO BUILD</h2>
                <div className="flex flex-col items-end text-right">
                    <h2 className="text-4xl md:text-9xl font-medium md:font-black text-transparent bg-clip-text bg-gradient-to-l from-sky-400 to-white tracking-tighter leading-[0.85] mb-6 sm:mb-12">YOUR DREAM TEAM?</h2>
                    <p className="text-sm md:text-lg text-gray-300 max-w-xl font-light md:leading-relaxed mb-8 sm:mb-12 border-r border-sky-400 pr-4 sm:pr-6">
                        Lets discuss your resourcing needs and find the perfect match for your projects.
                    </p>
                    <button className="group relative inline-flex rounded-xl items-center justify-center gap-3 sm:gap-4 px-6 py-4 sm:px-10 sm:py-5 md:px-10 md:py-5 bg-white text-black text-sm sm:text-base md:text-base font-bold uppercase tracking-widest overflow-hidden hover:bg-sky-400 hover:text-white transition-all duration-500">
                        <span className="relative z-10 flex items-center gap-3">Start Hiring Now 
                            <ArrowRightIcon className="w-4"/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>;
};

export default TalentHire;
