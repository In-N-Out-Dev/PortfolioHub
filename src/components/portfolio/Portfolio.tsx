import { useState } from 'react';

import styled from '@emotion/styled';
import Card from 'components/common/Card';

import PortfolioContents from './PortfolioContents';
import PortfolioHeader from './PortfolioHeader';

import type { PortfolioState } from 'types/portfolio';

const Portfolio = () => {
  const [portfolioState, setPortfolioState] = useState<PortfolioState>('GALLERY');

  const renderHeader = () => (
    <PortfolioHeader
      portfolioState={portfolioState}
      setPortfolioState={setPortfolioState}
    />
  );

  const renderBody = () => <PortfolioContents portfolioState={portfolioState} />;

  return (
    <Section
      renderHeader={renderHeader}
      renderBody={renderBody}
      id="PORTFOLIO"
    />
  );
};

const Section = styled(Card)`
  width: 100%;
`;

export default Portfolio;
