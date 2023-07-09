import { useMediaQuery } from 'react-responsive';

import styled from '@emotion/styled';

import type { PortfolioData } from 'types/portfolio';

const PortfolioCardFolded = ({ no, title }: PortfolioData) => {
  const mediumBreakPoint = useMediaQuery({ query: '(max-width: 768px)' });

  if (mediumBreakPoint) {
    return null;
  }

  return (
    <Card>
      <Wrapper>
        <CardNo>{String(no).padStart(2, '0')}</CardNo>
        <Title>{title}</Title>
      </Wrapper>
    </Card>
  );
};

const Card = styled.li`
  border: 0.1rem solid;
  width: 9.2rem;
  height: 29.5rem;
  ${({ theme: { colors } }) => {
    return {
      borderColor: colors.BORDER,
      backgroundColor: colors.BACKGROUND_SUB,
      color: colors.MAIN_FONT,
    };
  }}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: space-between;
  transform: rotate(90deg) translate(50%, -50%);
  transform-origin: top;
  padding: 2rem 0 2rem 2rem;
`;

const CardNo = styled.p`
  font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 2.4rem;
  white-space: nowrap;
`;

const Title = styled.h4`
  font-size: 2rem;
  white-space: nowrap;
`;

export default PortfolioCardFolded;
