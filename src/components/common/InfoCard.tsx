import React from 'react';

import styled from '@emotion/styled';
import Divider from 'components/common/Divider';
import 'styles/fonts/Berbas.css';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

const InfoCard = ({ title, children }: InfoCardProps) => {
  return (
    <>
      <Divider
        height={2}
        backgroundBlack={true}
      />
      <Wrap>
        <Title>{title}</Title>
        <Article>{children}</Article>
      </Wrap>
    </>
  );
};

const Wrap = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

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
