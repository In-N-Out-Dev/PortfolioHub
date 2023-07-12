import styled from '@emotion/styled';
import SectionCard from 'components/common/SectionCard';

import ContactContents from './ContactContents';
import ContactTitle from './ContactTitle';

const Contact = () => {
  return (
    <ContactCard id="CONTACT">
      <ContactTitle />
      <ContactContents />
    </ContactCard>
  );
};

const ContactCard = styled(SectionCard)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 6rem;
  ${({ theme: { breakPoint } }) => {
    return {
      [breakPoint.large]: {
        flexDirection: 'row',
      },
      [breakPoint.xlarge]: {
        flexDirection: 'row',
      },
    };
  }}
`;

export default Contact;
