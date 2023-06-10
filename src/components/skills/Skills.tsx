import styled from '@emotion/styled';
import InfoCard from 'components/common/InfoCard';

import SkillsCategory from './SkillsCategory';
import SKILLS_DATA from './SkillsData';

const Skills = () => {
  return (
    <InfoCard title="SKILLS">
      <CategoryList>
        {SKILLS_DATA.map(({ category, skills }) => (
          <SkillsCategory
            category={category}
            skills={skills}
            key={category}
          />
        ))}
      </CategoryList>
    </InfoCard>
  );
};

const CategoryList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export default Skills;
