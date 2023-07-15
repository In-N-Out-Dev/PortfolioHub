import PORTFOLIO_DATA from 'contents/portfolioData';
import { motion } from 'framer-motion';
import { contentVariants } from 'styles/interaction';

import PortfolioGallery from './gallery/PortfolioGallery';
import PortfolioList from './list/PortfolioList';

import type { ViewModeState } from 'types/props';

const PortfolioContents = ({ portfolioState }: { portfolioState: ViewModeState }) => {
  return (
    <motion.div
      variants={contentVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      {portfolioState === 'GALLERY' && <PortfolioGallery portfolioData={PORTFOLIO_DATA} />}
      {portfolioState === 'LIST' && <PortfolioList portfolioData={PORTFOLIO_DATA} />}
    </motion.div>
  );
};

export default PortfolioContents;
