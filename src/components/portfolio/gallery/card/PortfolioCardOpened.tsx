import styled from '@emotion/styled';

import PortfolioCardSkills from './PortfolioCardSkills';

import type { PortfolioData } from 'types/portfolio';

const PortfolioCardOpened = ({
  title,
  no,
  skills,
  start,
  end,
  width,
}: PortfolioData & { width: number }) => {
  return (
    <Card width={width}>
      <SkillList>
        <PortfolioCardSkills skills={skills} />
      </SkillList>
      <InfoWrapper>
        <TitleWrapper>
          <CardNo>{String(no).padStart(2, '0')}</CardNo>
          <TitleText>{title}</TitleText>
        </TitleWrapper>
        <InfoDate>
          {start} - {end}
        </InfoDate>
      </InfoWrapper>
    </Card>
  );
};

const Card = styled.li<{ width: number }>`
  position: relative;
  ${({ theme: { colors } }) => {
    return {
      color: colors.BACKGROUND,
      backgroundColor: colors.HIGHLIGHT,
    };
  }};
  padding: 3.2rem 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ width }) => width}rem;
  ${({ theme }) => theme.breakPoint.medium} {
    width: 100%;
  }
  ${({ theme }) => theme.breakPoint.small} {
    width: 100%;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const TitleWrapper = styled.div``;

const CardNo = styled.p`
  font-size: 3.6rem;
  font-family: 'Bebas Neue', cursive;
`;

const TitleText = styled.h4`
  font-size: 3.2rem;
`;

const InfoDate = styled.p`
  font-size: 1.4rem;
`;

const SkillList = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: right;
`;

export default PortfolioCardOpened;
