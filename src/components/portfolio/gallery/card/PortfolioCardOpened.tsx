import { useMediaQuery } from 'react-responsive';

import styled from '@emotion/styled';
import PortfolioDetailedContainer from 'components/portfolio/detailed/PortfolioDetailedContainer';
import { useModalStore, ModalType } from 'stores/useModalStore';

import PortfolioCardSkills from './PortfolioCardSkills';

import type { PortfolioData } from 'types/portfolio';

const PortfolioCardOpened = (portfolio: PortfolioData) => {
  const { title, no, skills, start, end } = portfolio;
  const { setIsModalOn, setComponent } = useModalStore();

  const openModal = () => {
    setIsModalOn(ModalType.PORTFOLIO_DETAILED, true);
    setComponent(<PortfolioDetailedContainer portfolio={portfolio} />);
  };

  const smallBreakPoint = useMediaQuery({ query: '(max-width: 320px)' });

  return (
    <Card onClick={openModal}>
      {!smallBreakPoint && (
        <SkillList>
          <PortfolioCardSkills skills={skills} />
        </SkillList>
      )}
      <InfoWrapper>
        <TitleWrapper>
          <CardNo>{String(no).padStart(2, '0')}</CardNo>
          <Title>{title}</Title>
        </TitleWrapper>
        <InfoDate>
          {start} - {end}
        </InfoDate>
      </InfoWrapper>
    </Card>
  );
};

const Card = styled.li`
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
  ${({ theme: { breakPoint } }) => {
    return {
      [breakPoint.small]: {
        width: '29rem',
        height: '39rem',
        justifyContent: 'flex-end',
      },
      [breakPoint.medium]: {
        width: '64rem',
        height: '43rem',
      },
      [breakPoint.large]: {
        width: '64rem',
        height: '43rem',
      },
      width: '44rem',
      height: '29.5rem',
    };
  }}
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  ${({ theme: { breakPoint } }) => {
    return {
      [breakPoint.small]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '2rem',
      },
    };
  }}
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 3.6rem;
  line-height: 1;
  width: 100%;
`;

const CardNo = styled.p`
  font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const Title = styled.h4`
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const InfoDate = styled.p`
  font-size: 1.4rem;
  width: 100%;
  text-align: right;
`;

const SkillList = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: right;
`;

export default PortfolioCardOpened;
