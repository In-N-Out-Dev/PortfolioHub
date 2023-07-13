import { Variants } from 'framer-motion';

export const titleVariants: Variants = {
  onscreen: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  offscreen: { y: 100, opacity: 0 },
};

export const contentVariants: Variants = {
  onscreen: { y: 0, opacity: 1, transition: { duration: 1.5 } },
  offscreen: { y: 100, opacity: 0 },
};
