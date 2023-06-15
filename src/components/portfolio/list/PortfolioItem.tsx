import { useMediaQuery } from 'react-responsive';

import styled from '@emotion/styled';
import { ModalType, useModalStore } from 'stores/useModalStore';
import { PortfolioData } from 'types/portfolio';

import PortfolioItemSkills from './PortfolioItemSkills';

const PortfolioItem = ({ no, title, skills, start, end }: PortfolioData) => {
  const { setIsModalOn, modalState } = useModalStore((state) => ({
    setIsModalOn: state.setIsModalOn,
    modalState: state.modalState,
  }));

  const openModal = () => {
    setIsModalOn(ModalType.PORTFOLIO_DETAILED, true);
  };

  const isSmallDisplay = useMediaQuery({ query: '(max-width: 320px)' });
  const isMediumDisplay = useMediaQuery({ query: '(max-width: 768px)' });

  if (isSmallDisplay) {
    return (
      <Item onClick={openModal}>
        <SmallWrapper>
          <CardNo>{String(no).padStart(2, '0')}</CardNo>
          <TitleText>{title}</TitleText>
          <InfoDate>
            {start} - {end}
          </InfoDate>
        </SmallWrapper>
      </Item>
    );
  }

  if (isMediumDisplay) {
    return (
      <Item onClick={openModal}>
        <MediumWrapper>
          <CardNo>{String(no).padStart(2, '0')}</CardNo>
          <MediumTitleWrapper>
            <TitleText>{title}</TitleText>
            <PortfolioItemSkills skills={skills} />
          </MediumTitleWrapper>
        </MediumWrapper>
        <InfoDate>
          {start} - {end}
        </InfoDate>
      </Item>
    );
  }

  return (
    <Item onClick={openModal}>
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
  ${({ theme: { colors } }) => ({
    color: colors.MAIN_FONT,
  })};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.MAIN_FONT};
  align-items: center;
  padding: 4rem 0;
  ${({ theme }) => theme.breakPoint.medium} {
    padding: 6rem 0;
    align-items: flex-start;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const CardNo = styled.p`
  font-size: 3.2rem;
  font-family: 'Bebas Neue', cursive;
  font-weight: 500;
  ${({ theme }) => theme.breakPoint.medium} {
    font-size: 2.4rem;
  }
  ${({ theme }) => theme.breakPoint.small} {
    font-size: 2rem;
  }
`;

const TitleText = styled.h4`
  font-size: 3rem;
  font-weight: 700;
  ${({ theme }) => theme.breakPoint.medium} {
    font-size: 2.4rem;
  }
  ${({ theme }) => theme.breakPoint.small} {
    font-size: 2rem;
  }
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
  ${({ theme }) => theme.breakPoint.medium} {
    font-size: 1.6rem;
  }
  ${({ theme }) => theme.breakPoint.small} {
    font-size: 1.4rem;
  }
`;

const SmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: 'flex-start';
`;

const MediumWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: 'flex-start';
`;

const MediumTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default PortfolioItem;
