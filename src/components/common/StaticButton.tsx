import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface StaticButtonProps {
  title: string;
  onClickAction: () => void;
  children?: React.ReactNode;
  isColorInversion?: boolean;
}

const StaticButton = ({
  title,
  onClickAction,
  children,
  isColorInversion = false,
}: StaticButtonProps) => {
  return (
    <ButtonWrapper
      onClick={onClickAction}
      isColorInversion={isColorInversion}
    >
      <p>{title}</p>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ isColorInversion: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 2rem;
  border-radius: 5rem;
  background: ${({ isColorInversion, theme }) =>
    isColorInversion ? theme.colors.BACKGROUND : theme.colors.MAIN_FONT};
  height: min-content;

  p {
    color: ${({ isColorInversion, theme }) =>
      isColorInversion ? theme.colors.MAIN_FONT : theme.colors.BACKGROUND};
  }

  ${({ isColorInversion, theme }) =>
    isColorInversion && BorderStyle(isColorInversion, theme.colors.MAIN_FONT)}
`;

const BorderStyle = (isColorInversion: boolean, color: string) => css`
  border: 1px solid ${isColorInversion && color};
`;

export default StaticButton;
