import { type Variants } from "framer-motion";

const ContainerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const ItemVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ItemVariantLeft: Variants= {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const ItemVariantRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const CardContainerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.18,
    },
  },
};

const ParagraphContainerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.18,
    },
  },
};


export {
    ContainerVariant,
    ItemVariant,
    ItemVariantLeft,
    ItemVariantRight,
    CardContainerVariant,
    ParagraphContainerVariant
}