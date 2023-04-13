import * as S from './PortfolioCard.style';

const PortfolioCardSkills = ({ skills }: { skills: string[] }) => {
  return (
    <>
      {skills.map((skill) => (
        <S.Skill key={skill}>{skill}</S.Skill>
      ))}
    </>
  );
};

export default PortfolioCardSkills;
