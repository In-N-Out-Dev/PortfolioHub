import styled from '@emotion/styled';

import contactData from './ContactData';

import StackButton from '@/components/common/StackButton';

const ContactContents = () => {
  return (
    <Article>
      <Email>{contactData.email}</Email>
      <List>
        <StackButton url={contactData.github}>Github</StackButton>
        <StackButton url={contactData.linkedin}>Linkedin</StackButton>
        <StackButton url={contactData.instagram}>Instagram</StackButton>
      </List>
    </Article>
  );
};

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
