import styled from '@emotion/styled';

import SkillsCategoryItem from './SkillsCategoryItem';

import type { SkillData } from './SkillsData';

const SkillsCategory = ({ category, skills }: SkillData) => {
  return (
    <CategoryCard>
      <Title>{category}</Title>
      <SkillsList>
        {skills.map((skill, i) => (
          <SkillsCategoryItem
            {...skill}
            key={i}
          />
        ))}
      </SkillsList>
    </CategoryCard>
  );
};

const CategoryCard = styled.article``;

const Title = styled.h4`
  font-family: 'Bebas Neue', cursive;
  margin-bottom: 16px;
  font-size: 32px;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /**
   *  @todos: #10 Skills/modify width of category skill list
   */
  max-width: 480px;
`;

export default SkillsCategory;
