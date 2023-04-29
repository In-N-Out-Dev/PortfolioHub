import styled from '@emotion/styled';
import ContactButton from 'components/header/ContactButton';
import HEADER_DATA from 'components/header/HeaderData';
import ThemeToggleButton from 'components/header/ThemeToggleButton';

const Header = () => {
  return (
    <HeaderWrapper>
      <TitleLogo>
        <Title href={'/'}>{HEADER_DATA.title}</Title>
      </TitleLogo>
      <ButtonsWrapper>
        <ContactButton />
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

const TitleLogo = styled.h1``;

const Title = styled.a`
  font-family: 'Bebas Neue', cursive;
  font-size: 4.8rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
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
