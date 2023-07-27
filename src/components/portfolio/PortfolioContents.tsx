import { FC } from 'react';

import { motion } from 'framer-motion';
import { contentVariants } from 'styles/interaction';

import PortfolioGallery from './gallery/PortfolioGallery';
import PortfolioList from './list/PortfolioList';

import type { ViewModeState } from 'types/props';

interface Props {
  portfolioState: ViewModeState;
}

const PortfolioContents: FC<Props> = ({ portfolioState }) => {
  return (
    <motion.div
      variants={contentVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      {portfolioState === 'GALLERY' && <PortfolioGallery />}
      {portfolioState === 'LIST' && <PortfolioList />}
    </motion.div>
  );
};

export default PortfolioContents;
