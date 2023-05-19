import React, { useCallback } from 'react';

import styled from '@emotion/styled';

import Card from './Card';

interface ListCardProps {
  title: string;
  children: React.ReactNode;
}

const ListCard = ({ title, children }: ListCardProps) => {
  const renderHeader = useCallback(
    () => (
      <TitleWrapper>
        <Title>{title}</Title>
        <TitleDescription>대표적인 블로그 포스팅</TitleDescription>
      </TitleWrapper>
    ),
    [],
  );

  const renderBody = useCallback(() => <ArticleWrapper>{children}</ArticleWrapper>, []);

  return (
    <Card
      renderHeader={renderHeader}
      renderBody={renderBody}
      id={title}
    />
  );
};

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  gap: 1.6rem;
`;

const Title = styled.h2`
  font-family: 'Bebas Neue', cursive;
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
