import styled from '@emotion/styled';
import Introduce from 'components/introduce/Introduce';

const Container = () => {
  return (
    <Wrap>
      <Introduce />
    </Wrap>
  );
};

const Wrap = styled.div`
  /* background-color: ${({ theme }) => theme.colors.HIGHTLIGHT}; */
`;

export default Container;
