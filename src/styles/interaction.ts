import { Variants } from 'framer-motion';

export const titleVariants: Variants = {
  onscreen: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  offscreen: { y: 100, opacity: 0 },
};

export const contentVariants: Variants = {
  onscreen: { y: 0, opacity: 1, transition: { duration: 1.5 } },
  offscreen: { y: 100, opacity: 0 },
};

export const pageTitleJobPositionTextVariants: Variants = {
  onscreen: { y: 0, x: 0, opacity: 1, transition: { duration: 0.5 } },
  offscreen: { y: 200, opacity: 0 },
};

export const pageTitleNameTextVariants: Variants = {
  onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  offscreen: { y: 200, opacity: 0 },
};

export const pageTitleHorizontalRightVariants: Variants = {
  onscreen: { x: 500, transition: { duration: 2 } },
  offscreen: { x: 0, transition: { duration: 2 } },
};

export const pageTitleHorizontalLeftVariants: Variants = {
  onscreen: { x: -500, transition: { duration: 2 } },
  offscreen: { x: 0, transition: { duration: 2 } },
};
