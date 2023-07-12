import PORTFOLIO_DATA from 'contents/portfolioData';

import PortfolioGallery from './gallery/PortfolioGallery';

import type { ViewModeState } from 'types/props';

const PortfolioContents = ({ portfolioState }: { portfolioState: ViewModeState }) => {
  if (portfolioState === 'GALLERY') return <PortfolioGallery portfolioData={PORTFOLIO_DATA} />;
  return <ul></ul>;
};

export default PortfolioContents;
