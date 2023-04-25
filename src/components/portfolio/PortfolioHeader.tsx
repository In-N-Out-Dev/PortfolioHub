import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import type { PortfolioHeaderProps, PortfolioState } from '@/types/portfolio';

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
    <TitleWrapper>
      <Title>PORTFOLIO</Title>
      <IconWrapper>
        <button onClick={() => handleClick('GALLERY')}>
          <GalleryIcon color={isHighlighted('GALLERY')} />
        </button>
        <button onClick={() => handleClick('LIST')}>
          <ListIcon color={isHighlighted('LIST')} />
        </button>
      </IconWrapper>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-family: 'Bebas Neue', cursive;
  font-size: 4.8rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export default PortfolioHeader;
