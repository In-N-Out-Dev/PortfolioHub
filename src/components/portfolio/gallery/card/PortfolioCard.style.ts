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

/**
 * OpenedCard
 */

export const OpenedCard = styled.li<{ width: number }>`
  position: relative;
  ${({ theme: { colors } }) => {
    return {
      color: colors.BACKGROUND,
      backgroundColor: colors.HIGHTLIGHT,
    };
  }};
  padding: 3.2rem 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ width }) => width}rem;
`;

export const OpenedCardInfoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const OpenedCardTitleWrapper = styled.div`
  font-size: 3.6rem;
  line-height: 1;
`;

export const OpenedCardNo = styled.p`
  font-family: 'Bebas Neue', cursive;
`;

export const OpenedInfoDate = styled.p`
  font-size: 1.4rem;
`;

export const SkillList = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: right;
`;

export const Skill = styled.li`
  font-size: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.BACKGROUND};
  padding: 0.8rem 0.7rem;
`;
