import styled from '@emotion/styled';

export const FoldedCard = styled.li`
  border: 0.1rem solid;
  width: 9.2rem;
  ${({ theme: { colors } }) => {
    return {
      borderColor: colors.BORDER,
      backgroundColor: colors.BACKGROUND_SUB,
      color: colors.MAIN_FONT,
    };
  }}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: space-between;
  transform: rotate(90deg) translate(50%, -50%);
  transform-origin: top;
  padding: 2rem 0 2rem 2rem;
`;

export const FoldedCardNo = styled.p`
  font-family: 'Bebas Neue', cursive;
  font-size: 2.4rem;
  white-space: nowrap;
`;

export const FoldedCardTitle = styled.h4`
  font-size: 2rem;
  white-space: nowrap;
`;
