import styled from '@emotion/styled';
import XIcon from 'assets/XIcon';
import StaticButton from 'components/common/StaticButton';
import { ModalType, useModalStore } from 'stores/useModalStore';

import BaseModal from './BaseModal';

const PortfolioDetailedModal = () => {
  const { setIsModalOn, modalState, setComponent } = useModalStore((state) => state);

  const closeModal = () => {
    setIsModalOn(ModalType.PORTFOLIO_DETAILED, false);
    setComponent(null);
  };

  return (
    <BaseModal>
      <Container>
        <Header>
          <h2>Title</h2>
          <StaticButton
            title={'Close'}
            onClickAction={closeModal}
            isColorInversion={true}
          >
            <XIcon />
          </StaticButton>
        </Header>
        {modalState.component}
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
    font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
