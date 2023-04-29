import { useState } from 'react';

import styled from '@emotion/styled';
import Divider from 'components/common/Divider';

import PortfolioContents from './PortfolioContents';
import PortfolioHeader from './PortfolioHeader';

import type { PortfolioState } from 'types/portfolio';

const Portfolio = () => {
  const [portfolioState, setPortfolioState] = useState<PortfolioState>('GALLERY');

  return (
    <Section>
      <Divider />
      <PortfolioHeader
        portfolioState={portfolioState}
        setPortfolioState={setPortfolioState}
      />
      <PortfolioContents portfolioState={portfolioState} />
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
`;

export default Portfolio;
