import React from 'react';

import styled from '@emotion/styled';
import Divider from 'components/common/Divider';

interface ListCardProps {
  title: string;
  children: React.ReactNode;
}

const ListCard = ({ title, children }: ListCardProps) => {
  return (
    <>
      <Divider />
      <Wrap>
        <TitleWrapper>
          <Title>{title}</Title>
          <TitleDescription></TitleDescription>
        </TitleWrapper>
        <article>{children}</article>
      </Wrap>
    </>
  );
};

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Title = styled.h2`
  font-family: 'Bebas Neue', cursive;
  font-size: 4.8rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

const TitleDescription = styled.p``;

export default ListCard;
