import styled from '@emotion/styled';
import { useModalStore, ModalType } from 'stores/useModalStore';

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
  const { setIsModalOn, modalState } = useModalStore((state) => ({
    setIsModalOn: state.setIsModalOn,
    modalState: state.modalState,
  }));

  const openModal = () => {
    console.log('clicked');
    setIsModalOn(ModalType.PORTFOLIO_DETAILED, true);
  };

  return (
    <Card
      width={width}
      onClick={openModal}
    >
      <SkillList>
        <PortfolioCardSkills skills={skills} />
      </SkillList>
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

const Card = styled.li<{ width: number }>`
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
  width: ${({ width }) => width}rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
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
