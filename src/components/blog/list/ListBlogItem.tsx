import { useMediaQuery } from 'react-responsive';

import styled from '@emotion/styled';
import { MEDIA_QUERY_BREAK_POINT } from 'styles/theme';
import { BlogItemProps } from 'types/blog';

const ListBlogItem = ({ index, title, date, link, isHeader }: BlogItemProps) => {
  const handleClickBlogItem = () => {
    window.open(link, '_blank');
  };

  const isSmallDisplay = useMediaQuery({ query: `(max-width: ${MEDIA_QUERY_BREAK_POINT.SMALL})` });
  const isMediumDisplay = useMediaQuery({ query: '(max-width: 768px)' });

  if (isSmallDisplay) {
    return (
      <SmallItem onClick={handleClickBlogItem}>
        <SmallWrapper>
          <CardNo>{String(index).padStart(2, '0')}</CardNo>
          <TitleText>{title}</TitleText>
          <DateText isHeader={isHeader}>{date}</DateText>
        </SmallWrapper>
      </SmallItem>
    );
  }

  if (isMediumDisplay) {
    return (
      <MediumItem
        onClick={handleClickBlogItem}
        isHeader={isHeader}
      >
        <MediumTitleWrapper>
          <CardNo>{String(index).padStart(2, '0')}</CardNo>
          <TitleText>{title}</TitleText>
        </MediumTitleWrapper>
        <DateText isHeader={isHeader}>{date}</DateText>
      </MediumItem>
    );
  }

  return (
    <LargeItem
      onClick={handleClickBlogItem}
      isHeader={isHeader}
    >
      <TitleWrapper>
        <CardNo>{String(index).padStart(2, '0')}</CardNo>
        <TitleText>{title}</TitleText>
      </TitleWrapper>
      <DateText isHeader={isHeader}>{date}</DateText>
    </LargeItem>
  );
};

const Item = styled.li<{ isHeader?: boolean }>`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.MAIN_FONT};
  align-items: flex-start;
  padding: ${({ isHeader }) => (isHeader ? '2rem 2rem' : '4rem 2rem')};
  gap: 2rem;
  cursor: ${({ isHeader }) => (isHeader ? 'default' : 'pointer')};

  * {
    color: ${({ theme, isHeader }) => (isHeader ? theme.colors.SUB_FONT : theme.colors.MAIN_FONT)};
    font-family: ${({ isHeader }) =>
      isHeader
        ? 'Bebas Neue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important'
        : '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'};
    font-size: ${({ isHeader }) => (isHeader ? '1.6rem' : '2rem')};
  }
`;

const SmallItem = styled(Item)``;

const MediumItem = styled(Item)`
  display: grid;
  grid-template-columns: 0.8fr 0.2fr;
  gap: 2rem;
`;

const LargeItem = styled(Item)`
  display: grid;
  grid-template-columns: 0.8fr 0.2fr;
  gap: 2rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const CardNo = styled.span`
  /* font-size: 2.4rem; */

  font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
  flex-shrink: 0;
  width: 6rem;
`;

const TitleText = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 400;
  flex-grow: 0;
`;

const MediumTitleWrapper = styled(TitleWrapper)`
  align-items: 'flex-start';
`;

const DateText = styled(TitleText)<{ isHeader?: boolean }>`
  font-size: ${({ isHeader }) => (isHeader ? '1.6rem' : '2rem')};
  flex-shrink: 0;

  ${({ theme }) => theme.breakPoint.small} {
    font-size: 1.4rem !important;
  }
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

export default ListBlogItem;
