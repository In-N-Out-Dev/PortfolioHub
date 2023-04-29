import styled from '@emotion/styled';
import Divider from 'components/common/Divider';

import SkillsCategoryItemList from './SkillsCategoryItemList';

import type { SkillData } from './SkillsData';

const SkillsCategory = ({ category, skills }: SkillData) => {
  return (
    <li>
      <Title>{category}</Title>
      <SkillsCategoryItemList skills={skills} />
      <Divider
        height={0.1}
        marginTop={6}
        marginBottom={0}
      />
    </li>
  );
};

const Title = styled.h4`
  font-family: 'Bebas Neue', cursive;
  margin-bottom: 1.6rem;
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

export default SkillsCategory;
