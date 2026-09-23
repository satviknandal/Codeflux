import { motion } from "framer-motion";
import { ContainerVariant } from "../../shared/MotionSetting";
import { MoveUpIcon } from "lucide-react";
import CompHeader from "../shared/CompHeader";

const AIBlueprint = ({}) => {


    const renderCard = () => {
      return (
        <>
        <motion.div
          variants={ContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
        <CompHeader
            highlighter="Technology"
            title="Codeflux blueprint for AI tansformation"
            subheading="AI creates lasting impact when strategy, technology, and people work together. Our approach helps you align on vision, build the right foundations, and empower your teams. It is supported by trusted, secure, and ethical AI practices throughout."
            variant="pinkgradient"
        />
        <div className="flex flex-col gap-1 md:gap-4 w-full md:w-[90%] mx-auto">
            <div className="border md:border-2 border-dashed border-white p-2 md:p-6 w-full">
                <h3 className="mb-4 uppercase text-white text-sm md:text-xl font-medium md:font-semibold leading-4 md:leading-5 tracking-widest">Business & <br/>Customer Value</h3>
                <p className="text-white text-sm md:text-base leading-4 md:leading-5">Drive measurable growth through AI-enabled innovation and insight.</p>
            </div>
            <div className="flex justify-baseline gap-4 py-2">
                <div className="flex w-1/3"><MoveUpIcon size={30} className="mx-auto text-white"/></div>
                <div className="flex w-1/3"><MoveUpIcon size={30} className="mx-auto text-white"/></div>
                <div className="flex w-1/3"><MoveUpIcon size={30} className="mx-auto text-white"/></div>
            </div>
            <div className="flex gap-1 md:gap-4">
                <div className="flex flex-col gap-1 md:gap-4">
                    <div className="flex gap-1 md:gap-4">
                        <div className="border md:border-2 border-dashed border-white px-1.5 py-2 md:p-6">
                            <h3 className="mb-4 uppercase text-white text-sm md:text-xl font-medium md:font-semibold leading-4 md:leading-4.5 tracking-widest">Workforce <br/>& organization</h3>
                            <p className="text-white text-sm md:text-base leading-4 md:leading-5">Empower people and teams with AI-ready skills and leadership.</p>
                        </div>
                        <div className="border md:border-2 border-dashed border-white px-1.5 py-2 md:p-6">
                            <h3 className="mb-4 uppercase text-white text-sm md:text-xl font-medium md:font-semibold leading-4 md:leading-5 tracking-widest">Experience & <br/>Process</h3>
                            <p className="text-white text-sm md:text-base leading-4 md:leading-5">Redesign experiences and workflows to amplify human-AI collaboration.</p>
                        </div>
                    </div>
                    <div className="border md:border-2 border-dashed border-white px-1.5 py-2 md:p-6">
                <h3 className="mb-4 uppercase text-white text-sm md:text-xl font-medium md:font-semibold leading-4 md:leading-5 tracking-widest">Technology & <br/>Data</h3>
                <p className="text-white text-sm md:text-base leading-4 md:leading-5">Deploy scalable AI tools, data and automation capabilities.</p>
            </div>
            <div className="border md:border-2 border-dashed border-white px-1.5 py-2 md:p-6">
                <h3 className="mb-4 uppercase text-white text-sm md:text-xl font-medium md:font-semibold leading-4 md:leading-5 tracking-widest">Strategic Alignment & <br/>Governance</h3>
                <p className="text-white text-sm md:text-base leading-4 md:leading-5">Establish shared vision, strategy and disciplined governance - grounded in clear business and customer value - to guide AI transformation.</p>
            </div>

                </div>
                <div className="flex  flex-col border md:border-2 border-dashed border-white p-2 md:p-6 justify-center">
                    <h3 className="mb-4 uppercase text-white text-sm md:text-xl font-medium md:font-semibold leading-4 md:leading-5 tracking-widest">Trust & <br/>Security</h3>
                    <p className="text-white text-sm md:text-base leading-4 md:leading-5">Embed trusted, secure, and ethical practices in AI delivery.</p>
                </div>
            </div>
        </div>
        </motion.div>
        </>
      );
    }

  return <div className={`py-6 md:py-16 radialgradientpink`}>
      <div className='container-wrapper-transparent mx-[16px] md:mx-auto'>
        {renderCard()}
      </div>
    </div>;
};

export default AIBlueprint;







// interface BlueprintCardProps {
//   number: string;
//   title: string;
//   description: string;
//   items: string[];
//   highlighted?: boolean;
// }

// const BlueprintCard: React.FC<BlueprintCardProps> = ({
//   number,
//   title,
//   description,
//   items,
//   highlighted = false,
// }) => {
//   return (
//     <article
//       className={[
//         "relative z-10 rounded-xl border-2 border-dashed p-6 transition-all duration-300",
//         highlighted
//           ? "border-[#0c62fb] bg-[#0c62fb]/[0.03] shadow-[0_12px_40px_rgba(12,98,251,0.10)]"
//           : "border-[#0c62fb]/60 bg-white",
//       ].join(" ")}
//     >
//       {/* Number */}
//       <div className="mb-6 flex items-center justify-between">
//         <span className="text-xs font-bold tracking-[0.2em] text-[#0c62fb]">
//           STEP
//         </span>

//         <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0c62fb] text-sm font-bold text-white">
//           {number}
//         </span>
//       </div>

//       {/* Content */}
//       <h3 className="text-2xl font-bold text-slate-900">{title}</h3>

//       <p className="mt-3 text-sm leading-6 text-slate-600">
//         {description}
//       </p>

//       {/* Features */}
//       <ul className="mt-6 space-y-3">
//         {items.map((item) => (
//           <li
//             key={item}
//             className="flex items-start gap-3 text-sm text-slate-700"
//           >
//             <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0c62fb]" />
//             <span>{item}</span>
//           </li>
//         ))}
//       </ul>
//     </article>
//   );
// };