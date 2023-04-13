import styled from '@emotion/styled';

const PortfolioCardSkills = ({ skills }: { skills: string[] }) => {
  return (
    <>
      {skills.map((skill) => (
        <Skill key={skill}>{skill}</Skill>
      ))}
    </>
  );
};

const Skill = styled.li`
  font-size: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.BACKGROUND};
  padding: 0.8rem 0.7rem;
`;

export default PortfolioCardSkills;
