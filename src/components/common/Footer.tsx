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
  ${({ theme }) => theme.breakPoint.large} {
    padding: 3.5rem 6.5rem;
  }
  ${({ theme }) => theme.breakPoint.medium} {
    padding: 3.5rem 4.5rem;
  }
  ${({ theme }) => theme.breakPoint.small} {
    padding: 2.8rem 1.6rem;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.breakPoint.small} {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Texts = styled.p`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
  ${({ theme }) => theme.breakPoint.small} {
    font-size: 1.6rem;
  }
  ${({ theme }) => theme.breakPoint.medium} {
    font-size: 2rem;
  }
`;

const NameLink = styled.a`
  color: ${({ theme }) => theme.colors.HIGHLIGHT};
`;

export default Footer;
