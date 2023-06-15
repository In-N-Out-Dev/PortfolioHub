import styled from '@emotion/styled';
import SectionCard from 'components/common/SectionCard';
import { SectionProps } from 'types/props';

import ContactContents from './ContactContents';
import ContactTitle from './ContactTitle';

const Contact = ({ forwardRef }: SectionProps) => {
  return (
    <div ref={forwardRef}>
      <ContactCard id="CONTACT">
        <ContactTitle />
        <ContactContents />
      </ContactCard>
    </div>
  );
};

const ContactCard = styled(SectionCard)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 6rem;
  ${({ theme }) => theme.breakPoint.large} {
    flex-direction: row;
  }
  ${({ theme }) => theme.breakPoint.xlarge} {
    flex-direction: row;
  }
`;

export default Contact;
