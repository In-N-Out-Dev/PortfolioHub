import styled from '@emotion/styled';
import React from 'react';

const Container = () => {
  return <Wrap>Container</Wrap>;
};

const Wrap = styled.div`
  color: red;
  background-color: ${({ theme }) => theme.colors.PIN};
`;

export default Container;
