import styled from '@emotion/styled';
import ThemeToggleButton from 'components/header/ThemeToggleButton';

import HEADER_DATA from './HeaderData';

const Header = () => {
  const handleTitleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <HeaderWrapper>
      <TitleLogo onClick={handleTitleClick}>{HEADER_DATA.title}</TitleLogo>
      <ButtonsWrapper>
        <button>contact</button>
        <ThemeToggleButton />
      </ButtonsWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 12rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.MAIN_FONT};
  background: ${({ theme }) => theme.colors.BACKGROUND};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const TitleLogo = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 4.8rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
  cursor: pointer;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  /* TODO: this code is temp */
  * {
    color: ${({ theme }) => theme.colors.MAIN_FONT};
  }
`;
