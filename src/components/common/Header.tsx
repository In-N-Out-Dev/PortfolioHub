import styled from '@emotion/styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>name here</Logo>
      <ButtonsWrapper>
        <button>contact</button>
        <button>theme toggler</button>
      </ButtonsWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 120px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.MAIN_FONT};
`;

const Logo = styled.h1`
  font-size: 48px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
