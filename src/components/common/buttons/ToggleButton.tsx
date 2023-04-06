import React from 'react';

import styled from '@emotion/styled';

const ToggleButton = () => {
  return <ToggleInput type="checkbox" />;
};

const ToggleInput = styled.input`
  position: relative;
  width: 3.5rem;
  height: 1.5rem;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  border-radius: 2rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.MAIN_FONT};

  &:before {
    content: '';
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.MAIN_FONT};
    position: absolute;
    top: -0.05rem;
    left: 0;
    transition: 0.5s;
  }

  &:checked:before {
    transform: translateX(136%);
  }

  &:checked {
    /* background: #00ed64; */
  }
`;

export default ToggleButton;
