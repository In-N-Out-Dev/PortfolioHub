import { useState } from 'react';

import SectionCard from 'components/common/SectionCard';
import { SectionProps } from 'types/props';

import PortfolioContents from './PortfolioContents';
import PortfolioHeader from './PortfolioHeader';

import type { PortfolioState } from 'types/portfolio';

const Portfolio = ({ forwardRef }: SectionProps) => {
  const [portfolioState, setPortfolioState] = useState<PortfolioState>('GALLERY');

  return (
    <div ref={forwardRef}>
      <SectionCard id="PORTFOLIO">
        <PortfolioHeader
          portfolioState={portfolioState}
          setPortfolioState={setPortfolioState}
        />
        <PortfolioContents portfolioState={portfolioState} />
      </SectionCard>
    </div>
  );
};

export default Portfolio;
