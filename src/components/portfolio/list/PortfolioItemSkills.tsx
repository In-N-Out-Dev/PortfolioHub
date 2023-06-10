import styled from '@emotion/styled';

const PortfolioItemSkills = ({ skills }: { skills: string[] }) => {
  return (
    <List>
      {skills.map((skill, index) => {
        return <Item key={index}>{skill}</Item>;
      })}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
`;

const Item = styled.li`
  padding: 1rem 1.4rem;
  width: fit-content;
  border: 0.1rem solid;
  border-radius: 5rem;
  ${({ theme: { colors } }) => {
    return {
      borderColor: colors.BORDER,
      backgroundColor: colors.BACKGROUND,
      color: colors.MAIN_FONT,
    };
  }};
`;

export default PortfolioItemSkills;
