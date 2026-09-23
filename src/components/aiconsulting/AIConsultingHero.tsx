import { Award, CalendarCheck, Smartphone, UserRound } from 'lucide-react';
import aiconsulting from '../../assets/ai/aiconsulting.webp';

const AIConsultingHero = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="relative z-[1] container-wrapper-transparent py-6 md:py-20">
                <div className='flex flex-col md:flex-row justify-between items-center w-full h-[950px] md:h-[600px]'>
                    <div className="md:max-w-4xl md:ml-6 flex flex-col items-start content-wrapper gap-4 md:mr-16">       
                        <div className="mb-2 md:mb-5 inline-flex items-center gap-2 rounded-full border border-pink-400/15 bg-pink-400/10 px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-pink-400">
                            <div className="flex w-5 h-5 md:h-7 md:w-7 items-center justify-center rounded-full bg-pink-400/20">
                            <Smartphone size={15} />
                            </div>
                            AI Consulting
                        </div>

                        <h1 className="max-w-3xl text-2xl font-semibold font-sans leading-[1.08] tracking-tight text-gray-700 sm:text-4xl lg:text-5xl">
                            Drive growth with  {" "}
                            <br className="hidden sm:block" />
                            <span className="block bg-[linear-gradient(to_right,#6025F5,#E40CD3,#FF5555)] bg-clip-text text-transparent">
                            AI Consulting Services
                            </span>
                        </h1>
                        <p className="mt-2 md:mt-6 max-w-xl text-[14px] md:text-base leading-6 md:leading-6.5 text-gray-900">
                            Codeflux's enterprise AI development services help businesses innovate smarter and faster. Our AI consultants assess your data, strategy, and readiness to deliver custom AI solutions including predictive models, NLP systems, and generative AI tools. Leveraging cloud-scale infrastructure and agile delivery, we launch pilots in just 6 to 8 weeks. Each solution is built with secure deployment, scalable architecture, and AI governance in mind to boost automation, insight, and long-term ROI-driven growth.
                        </p>
                        <div className="mt-2 mb-6 md:mt-8 flex flex-col gap-3 md:gap-4">
                            {/* Point 1 */}
                            <div className="flex items-center gap-3 text-sm md:text-md text-gray-900">
                            <div
                                className="
                                flex h-7 w-7 md:h-9 md:w-9 shrink-0
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
                            <div className="flex items-center gap-3 text-sm md:text-md text-gray-900">
                            <div
                                className="
                                flex h-7 w-7 md:h-9 md:w-9 shrink-0
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
                            <div className="flex items-center gap-3 text-sm md:text-md text-gray-900">
                            <div
                                className="
                                flex h-7 w-7 md:h-9 md:w-9 shrink-0
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
                        <button className="px-6 py-3 rounded-full border border-pink-400 text-sm md:text-base font-medium hover:text-pink-100 cursor-pointer text-white bg-[linear-gradient(to_right,#6025F5,#E40CD3,#FF5555)]">Schedule an AI Consultation</button>
                    </div>
                    {/* <img src={aiconsulting} alt="" className='h-120'/> */}
                </div>
                <img src={aiconsulting} alt="" className='absolute bottom-0 right-2 md:right-0 h-90 md:h-180'/>
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