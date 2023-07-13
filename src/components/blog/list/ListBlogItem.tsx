import { useMediaQuery } from 'react-responsive';

import styled from '@emotion/styled';
import { MEDIA_QUERY_BREAK_POINT } from 'styles/theme';
import { BlogItemProps } from 'types/blog';

const ListBlogItem = ({ index, title, date, link }: BlogItemProps) => {
  const handleClickBlogItem = () => {
    window.open(link, '_blank');
  };

  const isSmallDisplay = useMediaQuery({ query: `(max-width: ${MEDIA_QUERY_BREAK_POINT.SMALL})` });
  const isMediumDisplay = useMediaQuery({ query: '(max-width: 768px)' });

  if (isSmallDisplay) {
    return (
      <Item onClick={handleClickBlogItem}>
        <SmallWrapper>
          <CardNo>{String(index).padStart(2, '0')}</CardNo>
          <TitleText>{title}</TitleText>
          <DateText>{date}</DateText>
        </SmallWrapper>
      </Item>
    );
  }

  if (isMediumDisplay) {
    return (
      <Item onClick={handleClickBlogItem}>
        <MediumWrapper>
          <CardNo>{String(index).padStart(2, '0')}</CardNo>
          <MediumTitleWrapper>
            <TitleText>{title}</TitleText>
          </MediumTitleWrapper>
        </MediumWrapper>
        <DateText>{date}</DateText>
      </Item>
    );
  }

  return (
    <Item onClick={handleClickBlogItem}>
      <TitleWrapper>
        <CardNo>{String(index).padStart(2, '0')}</CardNo>
        <TitleText>{title}</TitleText>
      </TitleWrapper>
      <DateText>{date}</DateText>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.MAIN_FONT};
  align-items: flex-start;
  padding: 4rem 0;
  cursor: pointer;

  * {
    color: ${({ theme }) => theme.colors.MAIN_FONT};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const CardNo = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
  font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  flex-shrink: 0;
`;

const TitleText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.6rem;
`;

const DateText = styled(TitleText)`
  ${({ theme: { breakPoint } }) => {
    return {
      [breakPoint.small]: {
        fontSize: '1.4rem',
      },
      fontSize: '2rem',
    };
  }}
  flex-shrink: 0;
`;

const SmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  padding: 5rem 0 0 2rem;
  width: 100%;
  max-width: 100%;
`;

const MediumWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: 'flex-start';
`;

const MediumTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default ListBlogItem;
