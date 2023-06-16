import React from 'react';

import styled from '@emotion/styled';

const MobileNavModal = () => {
  return <Wrapper>MobileNavModal</Wrapper>;
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  right: 0;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  z-index: 100;
`;

export default MobileNavModal;
