import React from 'react';

import styled from '@emotion/styled';

interface StackButtonProps {
  children: React.ReactNode;
  url?: string;
}

const StackButton = ({ children, url }: StackButtonProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Border>{children}</Border>
    </a>
  );
};

const Border = styled.li`
  padding: 1rem 1.4rem;
  border: 1px solid ${({ theme }) => theme.colors.MAIN_FONT};
  border-radius: 5rem;
  font-size: 1.6rem;
  font-weight: 600;

  :hover {
    border: 0.15rem solid ${({ theme }) => theme.colors.HIGHTLIGHT};
    background-color: ${({ theme }) => theme.colors.HIGHTLIGHT};
    color: ${({ theme }) => theme.colors.BACKGROUND};
  }
`;

export default StackButton;
