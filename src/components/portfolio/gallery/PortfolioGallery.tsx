import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { usePortfolioGallery } from '@/hooks';

import PortfolioCardList from './card/PortfolioCardList';

import type { PortfolioData } from '@/types/portfolio';

import ForwardIcon from '@/assets/ForwardIcon';

const PortfolioGallery = ({ portfolioData }: { portfolioData: PortfolioData[] }) => {
  const { colors } = useTheme();
  const { portfolios, handleIncreaseOpenedNo, handleDecreaseOpenedNo } =
    usePortfolioGallery(portfolioData);
  const openedWidth = 44;

  return (
    <>
      <List>
        <PortfolioCardList
          portfolios={portfolios}
          openedWidth={openedWidth}
        />
      </List>
      <ButtonWrapper width={openedWidth}>
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
  height: 29.5rem;
  width: 100%;
  margin-bottom: 3rem;
`;

const ButtonWrapper = styled.div<{ width: number }>`
  width: ${({ width }) => width}rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 10rem;
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