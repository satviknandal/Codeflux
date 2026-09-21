import React from "react";
import webuiuxbg from "../../assets/hero/webuiuxbg.svg";
import uxbannerbg from "../../assets/hero/uxbg.webp";
import { PaletteIcon } from "lucide-react";

interface UIUXHeroProps {
  children?: React.ReactNode;
}

const UIUXHero: React.FC<UIUXHeroProps> = () => {

    const DigitalBanner = () => {
        return <div className='py-12 relative h-[600px] overflow-hidden flex flex-col justify-center radialgradient'>
        <div className='container-wrapper-transparent z-10 relative pl-6 '>
            {/* <label className='font-normal text-white text-sm ml-1'>Website Design & UX</label> */}
            <div className="mb-2 md:mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-300/10 px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-blue-200">
            <div className="flex w-5 h-5 md:h-7 md:w-7 items-center justify-center rounded-full bg-blue-400/20">
                <PaletteIcon/>
            </div>
            Website Design & UX
        </div>
            <h1 className='max-w-3xl text-2xl font-normal leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl'>
            Elevating
            <span className='mx-2 bg-[linear-gradient(84deg,#3ca1ff_0%,#6e24fb_30%,#c61ee8_60%,#ff6948_100%)] bg-clip-text font-medium text-transparent pb-5'>Forward Thinking</span>
            <br/> User Experience</h1>
            <p className='mt-6 max-w-xl text-base leading-6 text-gray-200'>Crafting websites that elevate your brand and enhance user experience. We specialise in designing custom websites that are not only visually compelling but also strategically aligned with your business objectives. Our team combines creativity with functionality to deliver websites that captivate audiences and convert visitors into loyal customers.</p>
        </div>
        {/* <GradientDots duration={20} className='opacity-50' /> */}
        <img
            src={webuiuxbg}
            className="absolute -top-10 z-[2] w-full opacity-20"
            alt=""
        />
        {/* <div className="absolute z-[1] h-full w-full bg-gradient-to-br from-[#8adcffe3] to-[#fac9ffe3]" /> */}
        <img src={uxbannerbg} className='w-full absolute top-0 opacity-50'/>
        </div>
    }

    // const Banner = () => {
    //     return <section
    //   className="
    //     relative
    //     flex
    //     h-[600px]
    //     w-full
    //     flex-col
    //     justify-center
    //     overflow-hidden
    //     py-12
    //   "
    // >
    //   {/* Content */}
    //   <div className="container-wrapper-transparent relative z-10 pl-6">
    //     <div className="mb-2 md:mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-400/10 px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-blue-400">
    //         <div className="flex w-5 h-5 md:h-7 md:w-7 items-center justify-center rounded-full bg-blue-400/20">
    //             <PhoneIcon/>
    //         </div>
    //         Website Design & UX
    //     </div>
            
    //     <h1 className="max-w-3xl text-2xl font-normal leading-[1.08] tracking-tight text-gray-800 sm:text-4xl lg:text-5xl"> 
    //       Elevating
        
    //       <span
    //         className="mx-2
    //           bg-[linear-gradient(84deg,#3ca1ff_0%,#6e24fb_30%,#c61ee8_60%,#ff6948_100%)]
    //             bg-clip-text
              
    //           font-semibold
    //           text-transparent
    //           pb-5
    //         "
    //       >
    //         Forward Thinking
    //       </span>
    //     <br/>
    //       user experience
    //     </h1>

    //     <p className="mt-6 max-w-xl text-base leading-6 text-gray-900">
    //       Crafting websites that elevate your brand and enhance user
    //       experience. We specialise in designing custom websites that are not
    //       only visually compelling but also strategically aligned with your
    //       business objectives. Our team combines creativity with functionality
    //       to deliver websites that captivate audiences and convert visitors
    //       into loyal customers.
    //     </p>

    //     {children}
    //   </div>

    //   <img
    //     src={webuiuxbg}
    //     className="absolute -top-10 z-[2] w-full opacity-10"
    //     alt=""
    //   />

    //   <div className="absolute z-[1] h-full w-full bg-gradient-to-br from-[#8adcffe3] to-[#fac9ffe3]" />
    // </section>
    // }
  return (
    <>
    <DigitalBanner/>
    {/* <Banner/> */}
    </>
  );
};

export default UIUXHero;