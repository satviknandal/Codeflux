// import { motion } from "framer-motion";
// import { ItemVariant } from "../../shared/MotionSetting";

// interface CompHeaderProps {
//     highlighter: string;
//     title: any;
//     subheading: string;
//     variant: string;
// }

// const CompHeader = ({
//     highlighter = "",
//     title,
//     subheading = "",
//     variant = "default"
// }: CompHeaderProps) => {
    
//     const getHighlighterColorStyles  = () => {
//       switch (variant) {
//         case "bluegradient":
//             return "#0089f1";
//         case "pinkdefault":
//             return "#fb64b6";
//         case "pinkgradient":
//             return "#fda5d5";
//         default:
//             return "#0089f1";
//         }
//     };

//     const getHighlighterShadowStyles  = () => {
//       switch (variant) {
//         case "bluegradient":
//             return "0 0 0 4px rgba(255,255,255,.1)";
//         case "pinkdefault":
//             return "0 0 0 4px rgba(202, 48, 232,.12)";
//         case "pinkgradient":
//             return "0 0 0 4px rgba(255, 255, 255,.16)";
//         default:
//             return "0 0 0 4px rgba(37,99,235,.12)";
//         }
//     };

//     const getTitleStyles  = () => {
//       switch (variant) {
//         case "bluegradient":
//             return "text-white";
//         case "pinkdefault":
//             return "text-[#215275]";
//         case "pinkgradient":
//             return "text-white";
//         default:
//             return "text-[#292929]";
//         }
//     };

//     const getSubheadingStyles  = () => {
//       switch (variant) {
//         case "bluegradient":
//             return "text-gray-300";
//         case "pinkdefault":
//             return "text-[#215275]";
//         case "pinkgradient":
//             return "text-gray-50";
//         default:
//             return "text-[#215275]";
//         }
//     };
    
//     return (
//         <div className="mx-auto flex flex-col items-center mb-6 md:mb-12 w-full">
//             {highlighter && highlighter !== "" && <div className={`flex flex-row justify-center items-center mb-1 md:mb-4`}  style={{color: getHighlighterColorStyles(),}}>
//                 <span className={`inline-block h-2 w-2 md:h-3 md:w-3 mr-3 rounded-full`} style={{boxShadow: getHighlighterShadowStyles(), backgroundColor: getHighlighterColorStyles()}}/>
//                 <label className="text-[11px] md:text-xs uppercase md:font-medium  tracking-wide">{highlighter}</label>
//             </div>}
//             <motion.h3 variants={ItemVariant} className={`text-[24px] md:text-4xl leading-[30px] md:leading-[40px] font-normal mb-2 md:mb-4 ${getTitleStyles()}`}>
//                 {title}
//             </motion.h3>
//             {subheading !== "" && <motion.span variants={ItemVariant} className={`y-2 ${getSubheadingStyles()} leading-5 md:text-center text-sm md:text-[14px] md:w-[80%]`}>
//                 {subheading}
//             </motion.span>}
//         </div>
//     );
// };

// export default CompHeader;

import { motion } from "framer-motion";
import { ItemVariant } from "../../shared/MotionSetting";

interface CompHeaderProps {
  highlighter: string;
  title: any;
  subheading: string;
  variant: string;
}

const CompHeader = ({
  highlighter = "",
  title,
  subheading = "",
  variant = "default",
}: CompHeaderProps) => {
  const getHighlighterColorStyles = () => {
    switch (variant) {
      case "bluegradient":
        return "#0089f1";
      case "pinkdefault":
        return "#fb64b6";
      case "pinkgradient":
        return "#fda5d5";
      default:
        return "#0089f1";
    }
  };

  const getHighlighterShadowStyles = () => {
    switch (variant) {
      case "bluegradient":
        return "0 0 0 4px rgba(255,255,255,.1)";
      case "pinkdefault":
        return "0 0 0 4px rgba(202, 48, 232,.12)";
      case "pinkgradient":
        return "0 0 0 4px rgba(255, 255, 255, .16)";
      default:
        return "0 0 0 4px rgba(37,99,235,.12)";
    }
  };

  const getTitleStyles = () => {
    switch (variant) {
      case "bluegradient":
        return "text-white";
      case "pinkdefault":
        return "text-[#215275]";
      case "pinkgradient":
        return "text-white";
      default:
        return "text-[#292929]";
    }
  };

  const getSubheadingStyles = () => {
    switch (variant) {
      case "bluegradient":
        return "text-gray-300";
      case "pinkdefault":
        return "text-[#215275]";
      case "pinkgradient":
        return "text-gray-50";
      default:
        return "text-[#215275]";
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="mx-auto mb-6 flex w-full flex-col items-center md:mb-12"
    >
      {/* Highlighter */}
      {highlighter && (
        <motion.div
          variants={ItemVariant}
          className="mb-1 flex flex-row items-center justify-center md:mb-4"
          style={{
            color: getHighlighterColorStyles(),
          }}
        >
          <span
            className="mr-3 inline-block h-2 w-2 rounded-full md:h-3 md:w-3"
            style={{
              boxShadow: getHighlighterShadowStyles(),
              backgroundColor: getHighlighterColorStyles(),
            }}
          />

          <label className="text-[11px] uppercase tracking-wide md:text-xs md:font-medium">
            {highlighter}
          </label>
        </motion.div>
      )}

      {/* Title */}
      <motion.h3
        variants={ItemVariant}
        className={`mb-2 text-center text-[24px] font-normal leading-[30px] md:mb-4 md:text-4xl md:leading-[40px] ${getTitleStyles()}`}
      >
        {title}
      </motion.h3>

      {/* Subheading */}
      {subheading && (
        <motion.span
          variants={ItemVariant}
          className={`text-center text-sm leading-5 w-[90%] md:w-[80%] md:text-[14px] ${getSubheadingStyles()}`}
        >
          {subheading}
        </motion.span>
      )}
    </motion.div>
  );
};

export default CompHeader;