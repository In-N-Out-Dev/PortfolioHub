import React from 'react';

import styled from '@emotion/styled';

interface StackButtonProps {
  children: React.ReactNode;
  url?: string;
}

const StackButton = ({ children, url }: StackButtonProps) => {
  return (
    <Border>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </Border>
  );
};

const Border = styled.li`
  padding: 0.4rem 0.6rem;
  border: 1.5px solid ${({ theme }) => theme.colors.MAIN_FONT};
  border-radius: 2.3rem;

  :hover {
    border: 1.5px solid ${({ theme }) => theme.colors.HIGHTLIGHT};
    background-color: ${({ theme }) => theme.colors.HIGHTLIGHT};
    color: ${({ theme }) => theme.colors.BACKGROUND};
  }
`;

export default StackButton;
