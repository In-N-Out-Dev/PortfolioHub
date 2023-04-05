import styled from '@emotion/styled';

import SkillsCategoryItemList from './SkillsCategoryItemList';

import type { SkillData } from './SkillsData';

const SkillsCategory = ({ category, skills }: SkillData) => {
  return (
    <CategoryCard>
      <Title>{category}</Title>
      <SkillsCategoryItemList skills={skills} />
    </CategoryCard>
  );
};

const CategoryCard = styled.li``;

const Title = styled.h4`
  font-family: 'Bebas Neue', cursive;
  margin-bottom: 16px;
  font-size: 3.2rem;
`;

export default SkillsCategory;
