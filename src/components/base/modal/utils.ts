import { type AnimationProps } from "framer-motion";

const defaultModalAnimation: AnimationProps = {
  animate: { opacity: 1, scale: 1 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  initial: { opacity: 0, scale: 0.9 },
  transition: { delay: 0.1, duration: 0.2, ease: "easeInOut" },
};

const defaultModalBackdropAnimation: AnimationProps = {
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  initial: { opacity: 0 },
  transition: { duration: 0.2, ease: "easeInOut" },
};

export { defaultModalAnimation, defaultModalBackdropAnimation };
