import styled from '@emotion/styled';
import '@theme-toggles/react/css/Classic.css';
import { Classic } from '@theme-toggles/react';

const ThemeToggleButton = () => {
  return (
    <Wrapper>
      <Classic duration={750} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 35px;
`;

export default ThemeToggleButton;
