import { Fragment } from 'react';

import styled from '@emotion/styled';

import SkillsCategory from './SkillsCategory';
import skillsData from './SkillsData';

const SkillsCategoryContainer = () => {
  return (
    <CategoryList>
      {skillsData.map((skillData, i) => (
        <Fragment key={i}>
          <SkillsCategory
            key={i}
            {...skillData}
          />
          <Divider />
        </Fragment>
      ))}
    </CategoryList>
  );
};

const CategoryList = styled.ul`
  width: 588px;
`;

const Divider = styled.hr`
  margin: 34px 0px 50px;
`;

export default SkillsCategoryContainer;
