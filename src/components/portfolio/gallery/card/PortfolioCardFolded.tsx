import { useMediaQuery } from 'react-responsive';

import styled from '@emotion/styled';

import type { PortfolioData } from 'types/portfolio';

const PortfolioCardFolded = ({ no, title }: PortfolioData) => {
  const largeBreakPoint = useMediaQuery({ maxWidth: 1024 });

  if (largeBreakPoint) {
    return null;
  }

  return (
    <Card>
      <Container>
        <Wrapper>
          <CardNo>{String(no).padStart(2, '0')}</CardNo>
          <Title>{title}</Title>
        </Wrapper>
      </Container>
    </Card>
  );
};

const Card = styled.li`
  display: flex;
  justify-content: flex-start;
  border: 0.1rem solid;
  ${({ theme: { colors } }) => {
    return {
      borderColor: colors.BORDER,
      backgroundColor: colors.BACKGROUND_SUB,
      color: colors.MAIN_FONT,
    };
  }}
  flex: 1;
`;

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 1.9rem;
  left: 8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: space-between;
  transform: rotate(90deg);
  transform-origin: top left;
  width: 100%;
`;

const CardNo = styled.p`
  font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 2.4rem;
  white-space: nowrap;
`;

const Title = styled.h4`
  font-size: 2rem;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export default PortfolioCardFolded;
