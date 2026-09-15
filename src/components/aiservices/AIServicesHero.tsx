import { Smartphone } from 'lucide-react';
import aidevelopment from '../../assets/ai/AI-engineering.webp';

const AIServicesHero = () => {
    return (
        <section className="relative overflow-hidden py-8 md:py-20 font-sans ">
            <div className="relative z-[1] container-wrapper-transparent">
                <div className='flex flex-col md:flex-row justify-between items-center w-full'>
                    <div className="md:max-w-4xl md:ml-6 flex flex-col items-start content-wrapper gap-4 md:mr-16">                        
                        <div className="mb-2 md:mb-5 inline-flex items-center gap-2 rounded-full border border-pink-400/15 bg-pink-400/10 px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-pink-400">
                            <div className="flex w-5 h-5 md:h-7 md:w-7 items-center justify-center rounded-full bg-pink-400/20">
                            <Smartphone size={15} />
                            </div>
                            AI Development
                        </div>
                        <h1 className="max-w-3xl text-2xl font-semibold leading-[1.08] tracking-tight text-gray-700 sm:text-4xl lg:text-5xl">
                            Looking For a Trusted {" "}
                            <br className="hidden sm:block" />
                            <span className="block bg-[linear-gradient(to_right,#6025F5,#E40CD3,#FF5555)] bg-clip-text text-transparent">
                            AI Development Company
                            </span>
                        </h1>
                        <p className="mt-2 md:mt-6 max-w-xl text-[14px] md:text-base leading-6 md:leading-6.5">
                            Codeflux is a specialist AI development company serving B2B enterprises across fintech, healthcare, logistics, retail, and manufacturing. We design, build, and deploy artificial intelligence solutions that solve real operational problems — not just proof-of-concept demos.
                        </p>
                        <p className="mb-4 max-w-xl text-[14px] md:text-base leading-6 md:leading-6.5">
                            Our AI development services cover the full project lifecycle: from requirements scoping and model selection to deployment, monitoring, and ongoing optimisation. Every engagement begins with a no-obligation technical consultation where our AI architects assess your data infrastructure, identify the highest-impact use cases, and define a delivery roadmap your board can approve.
                        </p>
                        <button className="px-6 py-3 rounded-full border border-pink-400 text-sm md:text-base font-medium hover:text-pink-100 cursor-pointer text-white bg-[linear-gradient(to_right,#6025F5,#E40CD3,#FF5555)]">Schedule an AI Consultation</button>
                    </div>
                    <img src={aidevelopment} alt="" className='hidden md:block md:h-100'/>
                </div>
            </div>

            {/* Background */}
            <div className="absolute top-0 bottom-0 left-0 right-0 h-full bg-[#f8f9ff] z-0 overflow-hidden">

                {/* Ellipse 3 */}
                <div
                    className="
                        opacity-20
                        absolute
                        w-[226px]
                        h-[281px]
                        left-[-5%]
                        top-[10%]
                        bg-[#00e1ff]
                        blur-[50px]
                        saturate-[1.1]
                        rotate-[-60deg]
                    "
                />

                {/* Ellipse 2 */}
                <div
                    className="
                        opacity-20
                        absolute
                        w-[383px]
                        h-[476px]
                        left-[-14%]
                        top-[20%]
                        md:bg-[#ff00b7]
                        blur-[75px]
                        saturate-[1.1]
                        rotate-[-60deg]
                    "
                />

                {/* Ellipse 1 */}
                <div
                    className="
                        opacity-20
                        absolute
                        w-[492px]
                        h-[612px]
                        left-[-12%]
                        top-[40%]
                        bg-[#0004ff]
                        blur-[150px]
                        saturate-[1.1]
                        rotate-[-45deg]
                    "
                />

                {/* Ellipse 4 */}
                <div
                    className="
                        opacity-20
                        absolute
                        w-[226px]
                        h-[281px]
                        left-[59%]
                        top-[62.5%]
                        bg-[#00e1ff]
                        blur-[50px]
                        saturate-[1.1]
                        rotate-[-60deg]
                    "
                />

                {/* Ellipse 5 */}
                <div
                    className="
                        opacity-20
                        absolute
                        w-[383px]
                        h-[476px]
                        left-[65%]
                        top-[6%]
                        bg-[#ff00b7]
                        blur-[75px]
                        saturate-[1.1]
                        rotate-[-60deg]
                    "
                />

                {/* Ellipse 6 */}
                <div
                    className="
                        opacity-20
                        absolute
                        w-[492px]
                        h-[612px]
                        left-[78%]
                        top-[-10%]
                        bg-[#0004ff]
                        blur-[150px]
                        saturate-[1.1]
                        rotate-[-90deg]
                    "
                />

                <div className="grid-lines absolute" />
            </div>
            
        </section>
    );
};

export default AIServicesHero;