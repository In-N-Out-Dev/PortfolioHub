import * as S from './Contact.style';
import ContactContents from './ContactContents';
import ContactTitle from './ContactTitle';

import Divider from '@/components/common/Divider';

const Contact = () => {
  return (
    <>
      <Divider />
      <S.Section>
        <ContactTitle />
        <ContactContents />
      </S.Section>
    </>
  );
};

export default Contact;
