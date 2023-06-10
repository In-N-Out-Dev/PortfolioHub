import PORTFOLIO_DATA from 'contents/portfolioData';

import PortfolioGallery from './gallery/PortfolioGallery';
import PortfolioList from './list/PortfolioList';

import type { PortfolioState } from 'types/portfolio';

const PortfolioContents = ({ portfolioState }: { portfolioState: PortfolioState }) => {
  if (portfolioState === 'GALLERY') return <PortfolioGallery portfolioData={PORTFOLIO_DATA} />;
  return <PortfolioList portfolioData={PORTFOLIO_DATA} />;
};

export default PortfolioContents;
