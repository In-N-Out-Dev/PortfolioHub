import styled from '@emotion/styled';

import type { PortfolioData } from 'types/portfolio';

const PortfolioCardFolded = ({ no, title }: PortfolioData) => {
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
  font-family: 'Bebas Neue', cursive;
  font-size: 2.4rem;
  white-space: nowrap;
`;

const Title = styled.h4`
  font-size: 2rem;
  white-space: nowrap;
`;

export default PortfolioCardFolded;
