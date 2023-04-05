import * as S from './Contact.style';
import contactData from './ContactData';

import StackButton from '@/components/common/StackButton';

const ContactContents = () => {
  return (
    <S.Article>
      <S.Email>{contactData.email}</S.Email>
      <S.List>
        <StackButton url={contactData.github}>Github</StackButton>
        <StackButton url={contactData.linkedin}>Linkedin</StackButton>
        <StackButton url={contactData.instagram}>Instagram</StackButton>
      </S.List>
    </S.Article>
  );
};

export default ContactContents;
