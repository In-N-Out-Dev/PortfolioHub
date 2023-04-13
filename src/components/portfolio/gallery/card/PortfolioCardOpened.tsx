import * as S from './PortfolioCard.style';
import PortfolioCardSkills from './PortfolioCardSkills';

const PortfolioCardOpened = ({
  title,
  no,
  skills,
  start,
  end,
  width,
}: PortfolioData & { width: number }) => {
  return (
    <S.OpenedCard width={width}>
      <S.SkillList>
        <PortfolioCardSkills skills={skills} />
      </S.SkillList>
      <S.OpenedCardInfoWrapper>
        <S.OpenedCardTitleWrapper>
          <S.OpenedCardNo>{String(no).padStart(2, '0')}</S.OpenedCardNo>
          <h4>{title}</h4>
        </S.OpenedCardTitleWrapper>
        <S.OpenedInfoDate>
          {start} - {end}
        </S.OpenedInfoDate>
      </S.OpenedCardInfoWrapper>
    </S.OpenedCard>
  );
};

export default PortfolioCardOpened;
