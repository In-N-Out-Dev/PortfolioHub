import React, { PropsWithChildren, useCallback } from 'react';

import styled from '@emotion/styled';

import 'styles/fonts/Berbas.css';
import Card from './Card';

interface Props extends PropsWithChildren {
  title: string;
}

const InfoCard = ({ title, children }: Props) => {
  const renderHeader = useCallback(() => <Title>{title}</Title>, []);
  const renderBody = useCallback(() => <Article>{children}</Article>, []);

  return (
    <CardWrapper
      renderHeader={renderHeader}
      renderBody={renderBody}
      id={title}
    />
  );
};

const CardWrapper = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${({ theme }) => theme.breakPoint.small} {
    display: block;
  }

  ${({ theme }) => theme.breakPoint.medium} {
    display: block;
  }
`;

const Title = styled.h2`
  font-family: 'Bebas Neue', cursive;
  font-size: 4.8rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

const Article = styled.article`
  max-width: 59.1rem;

  ${({ theme }) => theme.breakPoint.small} {
    width: 100%;
  }

  ${({ theme }) => theme.breakPoint.medium} {
    width: 100%;
  }
`;

export default InfoCard;
