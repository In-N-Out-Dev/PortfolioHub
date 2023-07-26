import { useMediaQuery } from 'react-responsive';

import styled from '@emotion/styled';
import HamburgerMenuButton from 'components/common/HamburgerMenuButton';
import ThemeToggleButton from 'components/header/ThemeToggleButton';
import HEADER_DATA from 'contents/headerData';
import { ModalType, useModalStore } from 'stores/useModalStore';

import StaticButton from '../common/StaticButton';

const Header = () => {
  const isXLargeDisplay = useMediaQuery({ query: '(min-width: 1025px)' });

  const handleContactClick = () => {
    const contactSection = document.getElementById('CONTACT');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const { setIsModalOn, modalState } = useModalStore((state) => ({
    setIsModalOn: state.setIsModalOn,
    modalState: state.modalState,
  }));

  return (
    <HeaderWrapper>
      <TitleLogo>
        <Title href={'/'}>{HEADER_DATA.title}</Title>
      </TitleLogo>
      <ButtonsWrapper>
        {isXLargeDisplay && (
          <StaticButton
            title={'Contact'}
            onClickAction={handleContactClick}
          />
        )}
        <ThemeToggleButton />
        {!isXLargeDisplay && (
          <HamburgerMenuButton
            onClickAction={() => {
              setIsModalOn(ModalType.MOBILE_MENU, !modalState.display);
            }}
            isOpen={modalState.display}
          />
        )}
      </ButtonsWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 2rem 3.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.MAIN_FONT};
  background: ${({ theme }) => theme.colors.BACKGROUND};
  position: sticky;
  top: 0;
  z-index: 10;

  ${({ theme }) => theme.breakPoint.xlarge} {
    padding: 2rem 12rem;
  }
  ${({ theme }) => theme.breakPoint.large} {
    padding: 2rem 6.5rem;
  }
`;

const TitleLogo = styled.h1``;

const Title = styled.a`
  font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 4.8rem;
  line-height: 5.8rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};

  ${({ theme }) => theme.breakPoint.medium} {
    font-size: 4rem;
    line-height: 4.8rem;
  }
  ${({ theme }) => theme.breakPoint.small} {
    font-size: 3rem;
    line-height: 3.2rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  /* for theme toggler */
  * {
    color: ${({ theme }) => theme.colors.MAIN_FONT};
  }
`;
