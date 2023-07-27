import React from 'react';

import styled from '@emotion/styled';

interface StackButtonProps {
  children: React.ReactNode;
  url?: string;
}

const StackButton = ({ children, url }: StackButtonProps) => {
  return (
    <li>
      <Border
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Border>
    </li>
  );
};

const Border = styled.a`
  display: block;
  padding: 1rem 1.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.MAIN_FONT};
  border-radius: 5rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;

  :hover {
    text-decoration: underline;
    ${({ theme: { colors } }) => {
      return {
        borderColor: colors.MAIN_FONT,
        backgroundColor: colors.MAIN_FONT,
        color: colors.BACKGROUND,
      };
    }};
  }
`;

export default StackButton;
