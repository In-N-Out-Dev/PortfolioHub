import styled from '@emotion/styled';

import ContactContents from './ContactContents';
import ContactTitle from './ContactTitle';

import Divider from '@/components/common/Divider';

const Contact = () => {
  return (
    <>
      <Divider />
      <Section>
        <ContactTitle />
        <ContactContents />
      </Section>
    </>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  height: 9.3rem;
  margin-bottom: 10rem;
`;

export default Contact;
