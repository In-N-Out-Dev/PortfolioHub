import styled from '@emotion/styled';

const name = 'NAME';
const link = '#';

const Footer = () => {
  return (
    <FooterWrapper>
      <Contents>
        <Texts>
          © 2023 <NameLink href={link}>{name}</NameLink>_ALL RIGHTS RESERVED.
        </Texts>
        <Texts>MADE BY_IN N OUT</Texts>
      </Contents>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  padding: 3.5rem 12rem;
  font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_SUB};
  ::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.BACKGROUND};
    z-index: -1;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Texts = styled.p`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

const NameLink = styled.a`
  color: ${({ theme }) => theme.colors.HIGHLIGHT};
`;

export default Footer;
