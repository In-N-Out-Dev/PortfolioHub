import PortfolioCardFolded from './PortfolioCardFolded';
import PortfolioCardOpened from './PortfolioCardOpened';

import type { PortfolioData } from 'types/portfolio';

const PortfolioCardList = ({ portfolios }: { portfolios: PortfolioData[] }) => {
  const n = portfolios.length;
  const half = Math.floor(n / 2);

  return (
    <>
      {portfolios.map((portfolio, i) =>
        i === half ? (
          <PortfolioCardOpened
            {...portfolio}
            key={'' + portfolio.no + i}
          />
        ) : (
          <PortfolioCardFolded
            {...portfolio}
            key={'' + portfolio.no + i}
          />
        ),
      )}
    </>
  );
};

export default PortfolioCardList;
