import styled from '@emotion/styled';

import SkillsCategory from './SkillsCategory';
import SKILLS_DATA from './SkillsData';

const SkillsCategoryList = () => {
  return (
    <CategoryList>
      {SKILLS_DATA.map((skillData) => (
        <SkillsCategory
          key={skillData.category}
          {...skillData}
        />
      ))}
    </CategoryList>
  );
};

const CategoryList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export default SkillsCategoryList;
