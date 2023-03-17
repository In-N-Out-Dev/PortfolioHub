import styled from '@emotion/styled';

const Container = () => {
  return <Wrap>Container</Wrap>;
};

const Wrap = styled.div`
  color: red;
  background-color: ${({ theme }) => theme.colors.PIN};
`;

export default Container;
