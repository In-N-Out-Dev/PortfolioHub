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
  width: 100%;
  padding: 3.5rem 6.6rem;
  /**TODO: 추후 머지된 BACKGROUND_SUB로 변경
   */
  background-color: rgba(217, 217, 217, 0.2);
  font-family: 'Bebas Neue', cursive;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Texts = styled.p`
  font-size: 2.4rem;
`;

const NameLink = styled.a`
  color: ${({ theme }) => theme.colors.HIGHTLIGHT};
`;

export default Footer;
