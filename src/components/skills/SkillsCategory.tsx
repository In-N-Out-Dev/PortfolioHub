import styled from '@emotion/styled';

import type { SkillData } from './SkillsData';

const SkillsCategory = ({ category, skills }: SkillData) => {
  return (
    <CategoryCard>
      <Title>{category}</Title>
      <SkillsList>
        {skills.map(({ highlight, skill }) => (
          <Item
            highlight={highlight}
            key={skill}
          >
            {skill}
          </Item>
        ))}
      </SkillsList>
    </CategoryCard>
  );
};

const CategoryCard = styled.li`
  padding-bottom: 6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.MAIN_FONT};
`;

const Title = styled.h4`
  font-family: 'Bebas Neue', cursive;
  margin-bottom: 1.6rem;
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
`;

const Item = styled.li<{ highlight: boolean }>`
  padding: 1rem 1.4rem;
  width: fit-content;
  border: 0.1rem solid;
  border-radius: 5rem;
  ${({ highlight, theme: { colors } }) => {
    if (highlight) {
      return {
        borderColor: colors.HIGHLIGHT,
        backgroundColor: colors.HIGHLIGHT,
        color: colors.BACKGROUND,
      };
    }
    return {
      borderColor: colors.BORDER,
      backgroundColor: colors.BACKGROUND,
      color: colors.MAIN_FONT,
    };
  }};
`;

export default SkillsCategory;
