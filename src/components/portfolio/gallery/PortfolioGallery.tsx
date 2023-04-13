import { useTheme } from '@emotion/react';

import { usePortfolioGallery } from '@/hooks';

import * as S from './PortfolioGallery.style';
import PortfolioCardList from './card/PortfolioCardList';

import ForwardIcon from '@/assets/ForwardIcon';

const PortfolioGallery = ({ portfolioData }: { portfolioData: PortfolioData[] }) => {
  const { colors } = useTheme();
  const { portfolios, handleIncreaseOpenedNo, handleDecreaseOpenedNo } =
    usePortfolioGallery(portfolioData);
  const openedWidth = 44;

  return (
    <>
      <S.List>
        <PortfolioCardList
          portfolios={portfolios}
          openedWidth={openedWidth}
        />
      </S.List>
      <S.ButtonWrapper width={openedWidth}>
        <S.BackwardButton onClick={handleDecreaseOpenedNo}>
          <ForwardIcon color={colors.MAIN_FONT} />
        </S.BackwardButton>
        <S.Button onClick={handleIncreaseOpenedNo}>
          <ForwardIcon color={colors.MAIN_FONT} />
        </S.Button>
      </S.ButtonWrapper>
    </>
  );
};

export default PortfolioGallery;
