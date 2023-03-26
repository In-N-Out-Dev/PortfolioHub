import styled from '@emotion/styled';

import SkillsCategoryContainer from './SkillsCategoryContainer';

const Skills = () => {
  return (
    <Container>
      <Title>SKILLS</Title>
      <SkillsCategoryContainer />
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-family: 'Bebas Neue', cursive;
  font-size: 48px;
`;

export default Skills;
