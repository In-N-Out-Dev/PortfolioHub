import styled from '@emotion/styled';

import SkillsCategoryItemList from './SkillsCategoryItemList';

import type { SkillData } from './SkillsData';

const SkillsCategory = ({ category, skills }: SkillData) => {
  return (
    <Item>
      <Title>{category}</Title>
      <SkillsCategoryItemList skills={skills} />
    </Item>
  );
};

const Item = styled.li`
  padding-bottom: 6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.MAIN_FONT};
`;

const Title = styled.h4`
  font-family: 'Bebas Neue', cursive;
  margin-bottom: 1.6rem;
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

export default SkillsCategory;
