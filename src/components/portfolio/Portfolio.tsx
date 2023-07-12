import { useState } from 'react';

import SectionCard from 'components/common/SectionCard';
import { SectionProps, ViewModeState } from 'types/props';

import PortfolioContents from './PortfolioContents';
import PortfolioHeader from './PortfolioHeader';

const Portfolio = ({ forwardRef }: SectionProps) => {
  const [portfolioState, setPortfolioState] = useState<ViewModeState>('GALLERY');

  return (
    <div ref={forwardRef}>
      <SectionCard id="PORTFOLIO">
        <PortfolioHeader
          ViewModeState={portfolioState}
          setViewModeState={setPortfolioState}
        />
        <PortfolioContents portfolioState={portfolioState} />
      </SectionCard>
    </div>
  );
};

export default Portfolio;
