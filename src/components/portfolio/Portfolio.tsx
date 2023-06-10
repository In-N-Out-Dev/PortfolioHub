import { useState } from 'react';

import SectionCard from 'components/common/SectionCard';

import PortfolioContents from './PortfolioContents';
import PortfolioHeader from './PortfolioHeader';

import type { PortfolioState } from 'types/portfolio';

const Portfolio = () => {
  const [portfolioState, setPortfolioState] = useState<PortfolioState>('GALLERY');

  return (
    <SectionCard id="PORTFOLIO">
      <PortfolioHeader
        portfolioState={portfolioState}
        setPortfolioState={setPortfolioState}
      />
      <PortfolioContents portfolioState={portfolioState} />
    </SectionCard>
  );
};

export default Portfolio;
