import styled from '@emotion/styled';
import Divider from 'components/common/Divider';

import ContactContents from './ContactContents';
import ContactTitle from './ContactTitle';

const Contact = () => {
  return (
    <>
      <Divider
        marginBottom={10}
        marginTop={8}
      />
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
