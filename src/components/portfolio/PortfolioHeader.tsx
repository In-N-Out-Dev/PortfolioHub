import { useTheme } from '@emotion/react';

import * as S from './Portfolio.style';

import GalleryIcon from '@/assets/GalleryIcon';
import ListIcon from '@/assets/ListIcon';

const PortfolioHeader = ({ portfolioState, setPortfolioState }: PortfolioHeaderProps) => {
  const { colors } = useTheme();
  const handleClick = (type: PortfolioState) => {
    setPortfolioState(type);
  };
  const isHighlighted = (type: PortfolioState) =>
    portfolioState === type ? colors.HIGHTLIGHT : colors.MAIN_FONT;

  return (
    <S.TitleWrapper>
      <S.Title>PORTFOLIO</S.Title>
      <S.IconWrapper>
        <button onClick={() => handleClick('GALLERY')}>
          <GalleryIcon color={isHighlighted('GALLERY')} />
        </button>
        <button onClick={() => handleClick('LIST')}>
          <ListIcon color={isHighlighted('LIST')} />
        </button>
      </S.IconWrapper>
    </S.TitleWrapper>
  );
};

export default PortfolioHeader;
