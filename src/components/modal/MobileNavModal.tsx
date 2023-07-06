import React from 'react';

import styled from '@emotion/styled';
import MenuList from 'components/common/MenuList';

const MobileNavModal = () => {
  return (
    <Wrapper>
      <MenuList origin={'header'} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  right: 0;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  z-index: 100;
  padding: 0 6.5rem;
  display: flex;
  flex-direction: column;
`;

export default MobileNavModal;
