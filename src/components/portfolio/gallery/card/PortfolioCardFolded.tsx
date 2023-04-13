import * as S from './PortfolioCard.style';

const PortfolioCardFolded = ({ no, title }: PortfolioData) => {
  return (
    <S.FoldedCard>
      <S.Wrapper>
        <S.FoldedCardNo>{String(no).padStart(2, '0')}</S.FoldedCardNo>
        <S.FoldedCardTitle>{title}</S.FoldedCardTitle>
      </S.Wrapper>
    </S.FoldedCard>
  );
};

export default PortfolioCardFolded;
