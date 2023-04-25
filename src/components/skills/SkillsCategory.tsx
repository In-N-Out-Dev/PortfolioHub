import styled from '@emotion/styled';

import SkillsCategoryItemList from './SkillsCategoryItemList';

import type { SkillData } from './SkillsData';

const SkillsCategory = ({ category, skills }: SkillData) => {
  return (
    <li>
      <Title>{category}</Title>
      <SkillsCategoryItemList skills={skills} />
      <Divider />
    </li>
  );
};

const Title = styled.h4`
  font-family: 'Bebas Neue', cursive;
  margin-bottom: 1.6rem;
  font-size: 3.2rem;
`;

const Divider = styled.div`
  margin-top: 6rem;
  background-color: ${({ theme }) => theme.colors.BORDER};
  height: 0.1rem;
`;

export default SkillsCategory;
