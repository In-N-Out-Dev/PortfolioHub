import styled from '@emotion/styled';
import { PortfolioData } from 'types/portfolio';

import PortfolioItemSkills from './PortfolioItemSkills';

const PortfolioItem = ({ no, title, skills, start, end }: PortfolioData) => {
  return (
    <Item>
      <TitleWrapper>
        <CardNo>{String(no).padStart(2, '0')}</CardNo>
        <TitleText>{title}</TitleText>
      </TitleWrapper>
      <InfoWrapper>
        <InfoDate>
          {start} - {end}
        </InfoDate>
        <PortfolioItemSkills skills={skills} />
      </InfoWrapper>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
  ${({ theme: { colors } }) => ({
    color: colors.MAIN_FONT,
  })};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.MAIN_FONT};
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const CardNo = styled.p`
  font-size: 3.2rem;
  font-family: 'Bebas Neue', cursive;
  font-weight: 700;
`;

const TitleText = styled.h4`
  font-size: 3rem;
  font-weight: 700;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.6rem;
`;

const InfoDate = styled.p`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

export default PortfolioItem;
