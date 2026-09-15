import { motion } from "framer-motion";
import { CardContainerVariant, ContainerVariant } from "../../shared/MotionSetting";
import BlogCardComponent, { type BlogPost } from "../shared/BlogCardComponent";
import CompHeader from "../shared/CompHeader";
import useMediaQuery from "../../hooks/useMediaQuery";

interface LatestArticlesProps {
    data: BlogPost[];
    columns?: number;
    gap?: number | string;
}

const LatestArticles = ({
    data,
    columns = 4,
    gap = 8
}: LatestArticlesProps) => {

    const isMobile = useMediaQuery("(max-width: 767px)");


    const renderCard = () => {
      return (
        <section className="mx-auto flex flex-col items-center w-full">
          <CompHeader
            highlighter="Articles"
            title={<p>Latest <span className="text-sky-600">Articles</span></p>}
            subheading="Stay updated with our latest news, insights, and technology trends."  
            variant="default"
          />
          <motion.div
            variants={CardContainerVariant}
            className="grid w-full gap-[var(--grid-gap)]"
            style={
              {
                "--grid-gap":
                  typeof gap === "number" ? `${gap}px` : gap,

                gridTemplateColumns: isMobile
                  ? "repeat(1, minmax(0, 1fr))"
                  : `repeat(${columns}, minmax(0, 1fr))`,
              } as React.CSSProperties
            }
          >
            {data.map((item, index) => <BlogCardComponent key={item.href} post={item} />)}
          </motion.div>
        </section>
      );
    }

  const renderGreyCard = () => {
    return <motion.div 
          variants={ContainerVariant}
          initial="hidden"
          whileInView="visible"
          className={`py-6 md:py-20 bg-[#fff]`}
          viewport={{ once: true, amount: 0.3 }}
        >
        <div className='container-wrapper-transparent'>
          {renderCard()}
        </div>
      </motion.div>
  }

  return renderGreyCard();
};

export default LatestArticles;
