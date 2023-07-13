import React from 'react';

import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import ArrowIcon from 'assets/ArrowIcon';
import { BLOG_URL } from 'components/blog/blogMockData';

const HoverInteractionButton = () => {
  const [isButtonHovered, setIsButtonHovered] = React.useState(false);
  const { colors } = useTheme();

  return (
    <ButtonWrapper
      isButtonHovered={isButtonHovered}
      onMouseEnter={() => setIsButtonHovered(true)}
      onMouseLeave={() => setIsButtonHovered(false)}
      onClick={() => window.open(BLOG_URL, '_blank')}
    >
      <ButtonText isButtonHovered={isButtonHovered}>
        {isButtonHovered ? '@ Welcome!' : '블로그 방문하기'}
      </ButtonText>
      <IconWrapper isButtonHovered={isButtonHovered}>
        <ArrowIcon color={colors.MAIN_FONT} />
      </IconWrapper>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div<{ isButtonHovered: boolean }>`
  display: flex;
  padding: 1rem 1.4rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.MAIN_FONT};
  transition: background 0.5s ease-in-out, border 0.5s ease-in-out;
  min-width: 18rem;
  height: 4rem;
  cursor: pointer;

  ${({ isButtonHovered, theme }) =>
    isButtonHovered &&
    css`
      background: ${theme.colors.HIGHLIGHT};
      border: 1px solid ${theme.colors.HIGHLIGHT};
    `};
`;

const ButtonText = styled.span<{ isButtonHovered: boolean }>`
  color: ${({ theme }) => theme.colors.MAIN_FONT};
  font-weight: ${({ isButtonHovered }) => isButtonHovered && '700'};
`;

const IconWrapper = styled.div<{ isButtonHovered: boolean }>`
  transition: transform 0.5s ease-in-out;
  transform: ${({ isButtonHovered }) => isButtonHovered && 'rotate(18deg)'};
`;
export default HoverInteractionButton;
