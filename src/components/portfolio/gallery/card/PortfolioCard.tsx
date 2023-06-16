import { memo } from 'react';

import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { PortfolioData } from 'types/portfolio';

import PortfolioCardSkills from './PortfolioCardSkills';

const PortfolioCard = ({
  isActive,
  no,
  skills,
  start,
  title,
  end,
}: { isActive: boolean } & PortfolioData) => {
  return (
    <li css={[cardStyle(isActive), styles.container]}>
      <div
        css={
          isActive
            ? css({
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                transform: 'rotate(0deg)',
              })
            : styles.wrapper
        }
      >
        {isActive ? (
          <>
            <SkillList>
              <PortfolioCardSkills skills={skills} />
            </SkillList>
            <InfoWrapper>
              <TitleWrapper>
                <CardNo>{String(no).padStart(2, '0')}</CardNo>
                <TitleText>{title}</TitleText>
              </TitleWrapper>
              <InfoDate>
                {start} - {end}
              </InfoDate>
            </InfoWrapper>
          </>
        ) : (
          <>
            <CardNo2>{String(no).padStart(2, '0')}</CardNo2>
            <Title2>{title}</Title2>
          </>
        )}
      </div>
    </li>
  );
};

const styles = {
  container: css({
    position: 'relative',
    transition: 'all .3s',
    transformOrigin: 'center center',
  }),
  wrapper: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '1.6rem',
    justifyContent: 'space-between',
    transform: 'rotate(90deg) translate(50%, -50%)',
    transformOrigin: 'top',
    padding: '2rem 0 2rem 2rem',
  }),
};

const cardStyle = (isActive: boolean) => {
  const { colors, breakPoint } = useTheme();
  return isActive
    ? css({
        color: colors.BACKGROUND,
        backgroundColor: colors.HIGHLIGHT,
        padding: '3.2rem 2.4rem',
        width: `44rem`,
        [breakPoint.medium]: {
          width: '100%',
        },
        [breakPoint.small]: {
          width: '100%',
        },
      })
    : css({
        border: '0.1rem solid',
        width: '9.2rem',
        borderColor: colors.BORDER,
        backgroundColor: colors.BACKGROUND_SUB,
        color: colors.MAIN_FONT,
        [breakPoint.medium]: {
          display: 'none',
        },
        [breakPoint.small]: {
          display: 'none',
        },
      });
};

const CardNo2 = styled.p`
  font-family: 'Bebas Neue', cursive;
  font-size: 2.4rem;
  white-space: nowrap;
`;

const Title2 = styled.h4`
  font-size: 2rem;
  white-space: nowrap;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const TitleWrapper = styled.div``;

const CardNo = styled.p`
  font-size: 3.6rem;
  font-family: 'Bebas Neue', cursive;
`;

const TitleText = styled.h4`
  font-size: 3.2rem;
`;

const InfoDate = styled.p`
  font-size: 1.4rem;
`;

const SkillList = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: right;
`;

export default memo(PortfolioCard);
