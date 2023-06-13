import styled from '@emotion/styled';
import XIcon from 'assets/XIcon';
import ContactButton from 'components/common/StaticButton';
import PortfolioDetailedContainer from 'components/portfolio/detailed/PortfolioDetailedContainer';
import { ModalType, useModalStore } from 'stores/useModalStore';

import BaseModal from './BaseModal';

const PortfolioDetailedModal = () => {
  const { setIsModalOn } = useModalStore((state) => ({
    setIsModalOn: state.setIsModalOn,
  }));

  const closeModal = () => {
    setIsModalOn(ModalType.PORTFOLIO_DETAILED, false);
  };

  return (
    <BaseModal>
      <Container>
        <Header>
          <h2>Title</h2>
          <ContactButton
            title={'Close'}
            onClickAction={closeModal}
            isColorInversion={true}
          >
            <XIcon />
          </ContactButton>
        </Header>
        <PortfolioDetailedContainer />
      </Container>
    </BaseModal>
  );
};
const Container = styled.div`
  width: calc(100vw - 1.2rem);

  ${({ theme }) => theme.breakPoint.xlarge} {
    width: calc(100vw - 12rem);
  }

  ${({ theme }) => theme.breakPoint.large} {
    width: calc(100vw - 3.9rem);
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.2rem;

  //TODO: 미디어쿼리 패딩 추가
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.MAIN_FONT};
  h2 {
    font-family: 'Bebas Neue', cursive;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.MAIN_FONT};
  }

  ${({ theme }) => theme.breakPoint.xlarge} {
    padding: 2rem 12rem;

    h2 {
      font-size: 4.8rem;
    }
  }

  ${({ theme }) => theme.breakPoint.large} {
    padding: 2rem 3.9rem;

    h2 {
      font-size: 4.8rem;
    }
  }
`;

export default PortfolioDetailedModal;
