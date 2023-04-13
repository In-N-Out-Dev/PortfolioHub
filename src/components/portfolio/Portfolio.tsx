import { useState } from 'react';

import * as S from './Portfolio.style';
import PortfolioContents from './PortfolioContents';
import PortfolioHeader from './PortfolioHeader';

import Divider from '@/components/common/Divider';

const Portfolio = () => {
  const [portfolioState, setPortfolioState] = useState<PortfolioState>('GALLERY');

  return (
    <S.Section>
      <Divider />
      <PortfolioHeader
        portfolioState={portfolioState}
        setPortfolioState={setPortfolioState}
      />
      <PortfolioContents portfolioState={portfolioState} />
    </S.Section>
  );
};

export default Portfolio;
