import portfolioData from './PortfoiloData';
import PortfolioGallery from './gallery/PortfolioGallery';

import type { PortfolioState } from '@/types/portfolio';

const PortfolioContents = ({ portfolioState }: { portfolioState: PortfolioState }) => {
  if (portfolioState === 'GALLERY') return <PortfolioGallery portfolioData={portfolioData} />;
  return <ul></ul>;
};

export default PortfolioContents;
