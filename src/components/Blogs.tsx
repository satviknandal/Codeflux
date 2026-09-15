import { motion } from "framer-motion";
import BlogCardComponent from "./shared/BlogCardComponent";
import CompHeader from "./shared/CompHeader";
import { CardContainerVariant } from "../shared/MotionSetting";

interface Card {
    title: string;
    description: string;
    img: string;
    href: string;
}

interface BlogsProps {
    title?: string;
    subheading: string;
    data: any[];
    type?: "default" | 'gradient' | 'aiblog';  
    width?: string;
    isBg?: boolean;
    bgclass?: string;
    columns: number;
    gap: number
}

const Blogs = ({
    title = "",
    subheading = "",
    data,
    type = "default",
    width = "w-full",
    isBg = false,
    gap,
    columns
}: BlogsProps) => {

    const getCompStyles  = () => {
      switch (type) {
        case "gradient":
            return "radialgradient";
        case "aiblog":
            return "bg-[#fff]";
        default:
            return "bg-[#fff]";
        }
    };

    const getCardStyles  = () => {
      switch (type) {
        case "gradient":
            return "bg-[#e3f3ff]/10 border-[#c0ddf3]/15";
        case "aiblog":
            return "bg-[#f5f5f5] border-[#e5e5e5]";
        default:
            return "bg-[#f5f5f5] border-[#e5e5e5]";
        }
    };

    const getCardTitleStyles  = () => {
      switch (type) {
        case "gradient":
            return "text-blue-200";
        case "aiblog":
          return "text-[#505050]"
        default:
            return "text-black";
        }
    };

    const getCardTextStyles  = () => {
      switch (type) {
        case "gradient":
            return "text-sky-600 hover:text-sky-900";
        case "aiblog":
            return "text-[#E40CD3] hover:text-[#FF5555]";
        default:
            return "text-sky-600 hover:text-sky-900";
        }
    };


    const renderCard = () => {
      return (
        <section className="mx-auto flex flex-col items-center">
          <CompHeader
              highlighter="Blogs"
              title={type === 'aiblog' ? <p className='bg-[linear-gradient(to_right,#6025F5,#E40CD3,#FF5555)] bg-clip-text text-transparent'>{title}</p> : ''}
              subheading={subheading}
              variant={type === 'aiblog' ? 'pinkdefault': 'default'}
          />
          <motion.div variants={CardContainerVariant}
              className={`grid grid-cols-1 gap-1 md:gap-[var(--grid-gap)] w-full md:w-full`}
              style={{
                  "--grid-gap": typeof gap === "number" ? `${gap}px` : gap,
                gridTemplateColumns:
                  window.innerWidth >= 768
                    ? `repeat(${columns}, minmax(0, 1fr))`
                    : undefined,
              } as React.CSSProperties}
            >
              {data.map((item, index) => <BlogCardComponent key={item.href} post={item} />)}
          </motion.div>
        </section>
      );
    }

  const renderGreyCard = () => {
    return <div className={`py-6 md:py-16 ${getCompStyles()}`}>
      <div className='container-wrapper-transparent'>
        {renderCard()}
      </div>
    </div>
  }

  return isBg ? renderGreyCard(): renderCard();
};

export default Blogs;
