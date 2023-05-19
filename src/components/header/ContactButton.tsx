import React from 'react';

import styled from '@emotion/styled';

const ContactButton = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('CONTACT');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return <ButtonWrapper onClick={handleContactClick}>Contact</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.4rem;

  background: ${({ theme }) => theme.colors.MAIN_FONT};
  border-radius: 5rem;

  color: ${({ theme }) => theme.colors.BACKGROUND};
`;

export default ContactButton;
