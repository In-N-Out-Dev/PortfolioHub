import styled from '@emotion/styled';

import PortfolioItem from './PortfolioItem';

import type { PortfolioData } from 'types/portfolio';

const PortfolioList = ({ portfolioData }: { portfolioData: PortfolioData[] }) => {
  return (
    <List>
      {portfolioData.map((portfolio) => (
        <PortfolioItem
          key={portfolio.no}
          {...portfolio}
        />
      ))}
    </List>
  );
};

const List = styled.ul`
  border-top: 0.3rem solid ${({ theme }) => theme.colors.MAIN_FONT};
`;

export default PortfolioList;
