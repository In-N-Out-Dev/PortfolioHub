import styled from '@emotion/styled';
import PORTFOLIO_DATA from 'contents/portfolioData';

import PortfolioItem from './PortfolioItem';

const PortfolioList = () => {
  return (
    <List>
      {PORTFOLIO_DATA.map((portfolio) => (
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
