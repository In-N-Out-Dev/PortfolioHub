import PORTFOLIO_DATA from 'contents/portfolioData';

import PortfolioGallery from './gallery/PortfolioGallery';

import type { PortfolioState } from 'types/portfolio';

const PortfolioContents = ({ portfolioState }: { portfolioState: PortfolioState }) => {
  if (portfolioState === 'GALLERY') return <PortfolioGallery portfolioData={PORTFOLIO_DATA} />;
  return <ul></ul>;
};

export default PortfolioContents;
