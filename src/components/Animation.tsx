import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Premium easing curve
const premiumEase = [0.22, 1, 0.36, 1] as const;


// Detect if mobile for optimized animations
const isMobile = typeof window !== "undefined" && window.innerWidth < 768;


// Hero Animation with staggered content
interface HeroAnimationProps {
  children: ReactNode;
  className?: string;
}

export const HeroItem = ({
  children,
  className = "",
  scale = false,
}: HeroAnimationProps & { scale?: boolean }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 24,
          ...(scale && { scale: 0.96 }),
        },
        visible: {
          opacity: 1,
          y: 0,
          ...(scale && { scale: 1 }),
          transition: {
            duration: isMobile ? 0.5 : 0.7,
            ease: premiumEase,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

