import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface HamburgerMenuButtonProps {
  onClickAction: () => void;
  isOpen: boolean;
}

const HamburgerMenuButton = ({ onClickAction, isOpen }: HamburgerMenuButtonProps) => {
  return (
    <ButtonWrapper
      onClick={() => {
        onClickAction();
      }}
    >
      <Line isOpen={isOpen}></Line>
      <Line isOpen={isOpen}></Line>
      <Line isOpen={isOpen}></Line>
      <Line isOpen={isOpen}></Line>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  width: 32px;
  height: 23px;
  position: relative;
  margin: 0 auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
`;

const Line = styled.span<{ isOpen: boolean }>`
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: ${({ theme }) => theme.colors.MAIN_FONT};
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;

  &:nth-of-type(1) {
    top: 0px;
  }

  &:nth-of-type(2),
  &:nth-of-type(3) {
    top: 10px;
  }

  &:nth-of-type(4) {
    top: 20px;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      &:nth-of-type(1) {
        top: 0;
        width: 0%;
        left: 50%;
      }

      &:nth-of-type(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      &:nth-of-type(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }

      &:nth-of-type(4) {
        top: 10px;
        width: 0%;
        left: 50%;
      }
    `}
`;

export default HamburgerMenuButton;
