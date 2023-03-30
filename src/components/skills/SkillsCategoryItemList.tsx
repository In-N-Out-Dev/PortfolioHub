import styled from '@emotion/styled';

import SkillsCategoryItem from './SkillsCategoryItem';

import type { Skill } from './SkillsData';

interface SkillsCategoryItemListProps {
  skills: Skill[];
}

const SkillsCategoryItemList = ({ skills }: SkillsCategoryItemListProps) => {
  return (
    <SkillsList>
      {skills.map((skill) => (
        <SkillsCategoryItem
          {...skill}
          key={skill.skill}
        />
      ))}
    </SkillsList>
  );
};

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /**
   *  @todos: #10 Skills/modify width of category skill list
   */
  max-width: 480px;
`;

export default SkillsCategoryItemList;
