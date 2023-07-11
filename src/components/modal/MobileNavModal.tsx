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
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  z-index: 9;
  padding: 10rem 6.5rem 10rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export default MobileNavModal;
