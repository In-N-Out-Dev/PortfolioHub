import React from 'react';

import styled from '@emotion/styled';

interface BaseModalProps {
  children: React.ReactNode;
  closeModal?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const BaseModal = ({ children, closeModal }: BaseModalProps) => {
  return (
    <Wrapper onClick={closeModal}>
      <Section>
        <div>{children}</div>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Section = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  height: 100%;
  overflow: scroll;
`;

export default BaseModal;
