import React from "react";
import { motion } from "framer-motion";
import { ItemVariant } from "../../shared/MotionSetting";
import CompHeader from "../shared/CompHeader";

const AIConsultingTransform: React.FC = () => {

  const data = [
    {
      count: '75%',
      content: 'of CEOs agree that organizations with superior AI capabilities will dominate the market',
      company: 'IBM'
    },
    {
      count: '84%',
      content: 'of data decision-makers believe AI will help their organization access insights faster',
      company: 'Google'
    },
    {
      count: '73%',
      content: 'of US companies have already adopted AI in at least some areas of their business operations',
      company: 'PwC'
    },
    {
      count: '67%',
      content: 'of business plan to increase their spending on technology and are focused on investments in Data and AI initiatives',
      company: 'Accenture'
    }
  ]

  return (
   <section className="py-6 md:py-16 relative overflow-hidden bg-white py-[90px] font-sans">
      {/* Dark overlay */}
   
      <div className="relative z-[2] mx-auto container-wrapper-transparent">
        <CompHeader
            highlighter="AI Trend"
            title={<p className="bg-[linear-gradient(to_right,#6025F5,#E40CD3,#FF5555)] bg-clip-text text-transparent">Accelerate your digital transformation with AI technology consulting</p>}
            subheading="Harness the power of AI to streamline operations, unlock new opportunities, and build smarter digital solutions that drive measurable business growth."
            variant="pinkdefault"
        />

        {/* Main content */}
        <div className="grid items-start gap-16 md:grid-cols-[45%_1fr]">
          <div>
            <motion.p variants={ItemVariant} className={`y-2 mt-2 text-gray-700 leading-5 text-md md:text-md mb-6`}>
              AI has the power to solve business challenges faster, cheaper, and more accurately. It reduces (or eliminates) human errors, frees your team from low-value tasks, and delivers the level of personalization customers have come to expect. That means lower delivery costs and a dramatically better experience across the board.
            </motion.p>
            <motion.p variants={ItemVariant} className={`y-2 mt-2 text-gray-700 leading-5 text-md md:text-md mb-6`}>
              But here’s the catch: you need to know which kinds of AI to use and where they’ll actually work. Maybe that’s integrating an off-the-shelf product. Maybe it’s building a custom solution. Maybe it’s both, but in different areas.
            </motion.p>
            <motion.p variants={ItemVariant} className={`y-2 mt-2 text-gray-700 leading-5 text-md md:text-md mb-6`}>
              Most companies don’t notice they’re training models on bad data, overlooking integration points, or ignoring compliance requirements until it’s too late. Those blind spots snowball into stalled projects, broken workflows, and wasted money. We catch the details you can’t see, and that’s what saves you from turning an ambitious AI plan into an expensive setback.
            </motion.p>
          </div>

          {/* Content card */}
          <div className="grid items-start gap-4 md:grid-cols-[50%_1fr]">
            {data && data.length > 0 && data.map((obj) => {
              return <motion.div
                variants={ItemVariant} 
                className="
                    group relative flex flex-col overflow-hidden rounded-[14px]
                    px-5 py-4
                    transition-all duration-300
                    hover:-translate-y-[3px]
                    hover:bg-[#f84471]
                    bg-gray-300
                    hover:shadow-[0_8px_20px_rgba(248,69,110,0.25),0_2px_8px_rgba(232,22,192,0.15)]
                  "
                >
                <label className={`mb-2 text-3xl font-semibold leading-[1.25] text-gray-600`}>
                  {obj.count}
                </label>
                <p className={`text-sm md:text-md text-gray-700/90 h-[70px]`}>{obj.content}</p>
                <p className="text-sm text-right text-gray-700/60">{obj.company}</p>
              </motion.div>
            })}
          </div>
          
        </div>
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes sf3FadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AIConsultingTransform;