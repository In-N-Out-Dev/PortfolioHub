import { useMediaQuery } from 'react-responsive';

import styled from '@emotion/styled';
import { useModalStore, ModalType } from 'stores/useModalStore';

import PortfolioCardSkills from './PortfolioCardSkills';

import type { PortfolioData } from 'types/portfolio';

const PortfolioCardOpened = ({ title, no, skills, start, end }: PortfolioData) => {
  const { setIsModalOn, modalState } = useModalStore((state) => ({
    setIsModalOn: state.setIsModalOn,
    modalState: state.modalState,
  }));

  const openModal = () => {
    console.log('clicked');
    setIsModalOn(ModalType.PORTFOLIO_DETAILED, true);
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
          <h4>{title}</h4>
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
      backgroundColor: colors.HIGHTLIGHT,
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
  font-size: 3.6rem;
  line-height: 1;
`;

const CardNo = styled.p`
  font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
