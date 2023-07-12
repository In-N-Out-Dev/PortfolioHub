import { PropsWithChildren } from 'react';

import styled from '@emotion/styled';
import { ListHeaderProps } from 'types/props';

import SectionCard from './SectionCard';
import ViewModeButton from './ViewModeButton';

interface Props extends PropsWithChildren, ListHeaderProps {
  title: string;
}

const ListCard = ({ title, children, ViewModeState, setViewModeState }: Props) => {
  return (
    <SectionCard id={title}>
      <TitleWrapper>
        <TextWrapper>
          <Title>{title}</Title>
          <TitleDescription>대표적인 블로그 포스팅</TitleDescription>
        </TextWrapper>
        <ViewModeButton
          ViewModeState={ViewModeState}
          setViewModeState={setViewModeState}
        />
      </TitleWrapper>
      <ArticleWrapper>{children}</ArticleWrapper>
    </SectionCard>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.6rem;
`;

const Title = styled.h2`
  font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 4.8rem;
  line-height: 4.8rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

const TitleDescription = styled.p`
  font-size: 1.3rem;
  line-height: 3.2rem;
  color: #858585;
`;

const ArticleWrapper = styled.article`
  margin-top: 6rem;
`;

export default ListCard;
