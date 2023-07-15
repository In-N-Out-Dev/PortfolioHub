import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import ForwardIcon from 'assets/ForwardIcon';
import { usePortfolioGallery } from 'hooks/usePortfolio';

import PortfolioCardList from './card/PortfolioCardList';

const PortfolioGallery = () => {
  const { colors } = useTheme();
  const { portfolios, handleIncreaseOpenedNo, handleDecreaseOpenedNo } = usePortfolioGallery();

  return (
    <>
      <List>
        <PortfolioCardList portfolios={portfolios} />
      </List>
      <ButtonWrapper>
        <BackwardButton onClick={handleDecreaseOpenedNo}>
          <ForwardIcon color={colors.MAIN_FONT} />
        </BackwardButton>
        <Button onClick={handleIncreaseOpenedNo}>
          <ForwardIcon color={colors.MAIN_FONT} />
        </Button>
      </ButtonWrapper>
    </>
  );
};

const List = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 2.1rem;
  width: 100%;
  margin-bottom: 3rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  ${({ theme: { breakPoint } }) => {
    return {
      [breakPoint.small]: {
        width: '18rem',
      },
      [breakPoint.medium]: {
        width: '22rem',
      },
      width: '44rem',
    };
  }}
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid ${({ theme }) => theme.colors.BORDER};
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
`;

const BackwardButton = styled(Button)`
  transform: rotate(180deg);
`;

export default PortfolioGallery;
