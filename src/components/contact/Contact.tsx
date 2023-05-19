import { useCallback } from 'react';

import styled from '@emotion/styled';
import Card from 'components/common/Card';

import ContactContents from './ContactContents';
import ContactTitle from './ContactTitle';

const Contact = () => {
  const renderBody = useCallback(
    () => (
      <>
        <ContactTitle />
        <ContactContents />
      </>
    ),
    [],
  );

  return (
    <Section
      id="CONTACT"
      renderBody={renderBody}
    />
  );
};

const Section = styled(Card)`
  display: flex;
  justify-content: space-between;
`;

export default Contact;
