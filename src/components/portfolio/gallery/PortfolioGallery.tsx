import { useState } from 'react';

import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import ForwardIcon from 'assets/ForwardIcon';

import PortfolioCard from './card/PortfolioCard';

import type { PortfolioData } from 'types/portfolio';

const PortfolioGallery = ({ portfolioData }: { portfolioData: PortfolioData[] }) => {
  const { colors } = useTheme();

  const [activeIndex, setActiveIndex] = useState(3);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? portfolioData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === portfolioData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <ul css={cardContainerStyle(activeIndex)}>
        {portfolioData.map((portfolio, i) => {
          return (
            <PortfolioCard
              isActive={i === activeIndex}
              {...portfolio}
            />
          );
        })}
      </ul>
      <ButtonWrapper>
        <BackwardButton onClick={handlePrev}>
          <ForwardIcon color={colors.MAIN_FONT} />
        </BackwardButton>
        <Button onClick={handleNext}>
          <ForwardIcon color={colors.MAIN_FONT} />
        </Button>
      </ButtonWrapper>
    </>
  );
};

const cardContainerStyle = (activeIndex: number) => {
  const theme = useTheme();
  const move = 45 - (activeIndex + 1) * (9.2 + 2.1);

  return css({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    gap: '2.1rem',
    height: '29.5rem',
    width: '100%',
    [theme.breakPoint.small]: {
      marginBottom: '6rem',
    },
    [theme.breakPoint.medium]: {
      marginBottom: '4rem',
    },
    marginBottom: '3rem',
    transition: 'transform 0.5s',
    transform: `translateX(calc(${move}rem))`,
  });
};

const ButtonWrapper = styled.div`
  width: 44rem;
  ${({ theme }) => theme.breakPoint.medium} {
    width: 22rem;
  }
  ${({ theme }) => theme.breakPoint.small} {
    width: 18rem;
  }
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
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
