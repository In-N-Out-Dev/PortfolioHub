import styled from '@emotion/styled';
import StackButton from 'components/common/StackButton';
import CONTACT_DATA from 'content/ContactData';

const ContactContents = () => {
  return (
    <Article>
      <Email>{CONTACT_DATA.email}</Email>
      <List>
        <StackButton url={CONTACT_DATA.github}>Github</StackButton>
        <StackButton url={CONTACT_DATA.linkedin}>Linkedin</StackButton>
        <StackButton url={CONTACT_DATA.instagram}>Instagram</StackButton>
      </List>
    </Article>
  );
};

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

const Email = styled.p`
  font-size: 3.2rem;
  line-height: 0.7;
`;

const List = styled.ul`
  display: flex;
  gap: 1.4rem;
`;

export default ContactContents;
