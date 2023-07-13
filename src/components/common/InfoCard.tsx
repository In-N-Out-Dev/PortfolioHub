import { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

import 'styles/fonts/Berbas.css';
import SectionCard from './SectionCard';

interface Props extends PropsWithChildren {
  title: string;
}

const InfoCard = ({ title, children }: Props) => {
  return (
    <CardWrapper id={title}>
      <Title>{title}</Title>
      <Article>{children}</Article>
    </CardWrapper>
  );
};

const CardWrapper = styled(SectionCard)`
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
  font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 4.8rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
  min-width: 25rem;

  ${({ theme }) => theme.breakPoint.medium} {
    padding-bottom: 6rem;
  }
  ${({ theme }) => theme.breakPoint.small} {
    padding-bottom: 4rem;
  }
`;

const Article = styled.article`
  width: 100%;
`;

export default InfoCard;
