import { Award, CalendarCheck, Smartphone, UserRound } from 'lucide-react';
import aiconsulting from '../../assets/ai/aiconsulting.webp';

const AIConsultingHero = () => {
    return (
        <section className="relative overflow-hidden font-sans ">
            <div className="relative z-[1] container-wrapper-transparent py-6 md:py-20">
                <div className='flex justify-between items-end w-full px-6 lg:px-0'>
                    <div className="max-w-4xl ml-6 flex flex-col items-start content-wrapper gap-4 mr-16">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-400/15 bg-pink-400/10 px-4 py-2 text-sm font-medium text-pink-400">
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-400/20">
                            <Smartphone size={15} />
                            </div>
                            AI Consulting
                        </div>
                        <h1 className="max-w-3xl text-2xl font-semibold leading-[1.08] tracking-tight text-gray-700 sm:text-4xl lg:text-5xl">
                            Drive growth with {" "}
                            <br className="hidden sm:block" />
                            <span className="bg-[linear-gradient(to_right,#6025F5,#E40CD3,#FF5555)] bg-clip-text text-transparent">
                            AI Consulting Services
                            </span>
                        </h1>
                        {/* <h1 className="text-[22px] md:text-4xl leading-normal md:leading-[40px] font-normal mb-2 bg-[linear-gradient(to_right,#6025F5,#E40CD3,#FF5555)] bg-clip-text text-transparent">
                            AI Development Company
                        </h1> */}
                        <p className=" mt-6 max-w-xl text-base leading-6.5 sm:text-base">
                            Codeflux's enterprise AI development services help businesses innovate smarter and faster. Our AI consultants assess your data, strategy, and readiness to deliver custom AI solutions including predictive models, NLP systems, and generative AI tools. Leveraging cloud-scale infrastructure and agile delivery, we launch pilots in just 6 to 8 weeks. Each solution is built with secure deployment, scalable architecture, and AI governance in mind to boost automation, insight, and long-term ROI-driven growth.
                        </p>
                        <div className="mt-8 flex flex-col gap-4">
                            {/* Point 1 */}
                            <div className="flex items-center gap-3 text-sm text-gray-700">
                            <div
                                className="
                                flex h-9 w-9 shrink-0
                                items-center justify-center
                                rounded-lg
                                border border-pink-400/20
                                bg-pink-500/10
                                text-pink-400
                                "
                            >
                                <Award size={18} />
                            </div>

                            <span>AI Readiness Assessment</span>
                            </div>

                            {/* Point 2 */}
                            <div className="flex items-center gap-3 text-sm text-gray-700">
                            <div
                                className="
                                flex h-9 w-9 shrink-0
                                items-center justify-center
                                rounded-lg
                                border border-pink-400/20
                                bg-pink-500/10
                                text-pink-400
                                "
                            >
                                <UserRound size={18} />
                            </div>

                            <span>Data management and Predictive analysis</span>
                            </div>

                            {/* Point 3 */}
                            <div className="flex items-center gap-3 text-sm text-gray-700">
                            <div
                                className="
                                flex h-9 w-9 shrink-0
                                items-center justify-center
                                rounded-lg
                                border border-pink-400/20
                                bg-pink-500/10
                                text-pink-400
                                "
                            >
                                <CalendarCheck size={18} />
                            </div>

                            <span>ROI-Driven Outcomes</span>
                            </div>
                        </div>
                        {/* <div className="mb-3 md:mb-2 text-sm md:text-md">
                            Codeflux is a specialist AI development company serving B2B enterprises across fintech, healthcare, logistics, retail, and manufacturing. We design, build, and deploy artificial intelligence solutions that solve real operational problems — not just proof-of-concept demos.
                        </div> */}
                        {/* <div className="mb-3 md:mb-6 text-sm md:text-md">
                            Our AI development services cover the full project lifecycle: from requirements scoping and model selection to deployment, monitoring, and ongoing optimisation. Every engagement begins with a no-obligation technical consultation where our AI architects assess your data infrastructure, identify the highest-impact use cases, and define a delivery roadmap your board can approve.
                        </div> */}
                        <button className="mt-6 px-6 py-3 rounded-full border border-pink-400 text-sm md:text-base font-medium hover:text-pink-100 cursor-pointer text-white bg-[linear-gradient(to_right,#6025F5,#E40CD3,#FF5555)]">Schedule an AI Consultation</button>
                    </div>
                    {/* <img src={aiconsulting} alt="" className='h-120'/> */}
                </div>
                <img src={aiconsulting} alt="" className='absolute bottom-0 right-0 h-180'/>
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
                        bg-[#ff00b7]
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

export default AIConsultingHero;