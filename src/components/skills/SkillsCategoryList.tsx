import { Fragment } from 'react';

import styled from '@emotion/styled';

import SkillsCategory from './SkillsCategory';
import SKILLS_DATA from './SkillsData';

const SkillsCategoryList = () => {
  return (
    <CategoryList>
      {SKILLS_DATA.map((skillData) => (
        <Fragment key={skillData.category}>
          <SkillsCategory {...skillData} />
          <Divider />
        </Fragment>
      ))}
    </CategoryList>
  );
};

const CategoryList = styled.ul`
  width: 100%;
`;

const Divider = styled.hr`
  margin: 3.4rem 0 5rem;
`;

export default SkillsCategoryList;
