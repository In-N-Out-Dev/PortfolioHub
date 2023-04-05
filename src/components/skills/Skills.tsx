import styled from '@emotion/styled';

import SkillsCategoryList from './SkillsCategoryList';

const Skills = () => {
  return (
    <Container>
      <Title>SKILLS</Title>
      <SkillsCategoryList />
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-family: 'Bebas Neue', cursive;
  font-size: 4.8rem;
`;

export default Skills;
