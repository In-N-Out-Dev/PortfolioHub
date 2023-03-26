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
      <Divider />
      <Wrap>
        <Title>{title}</Title>
        <article>{children}</article>
      </Wrap>
    </>
  );
};

const Wrap = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const Title = styled.h2`
  font-family: 'Bebas Neue', cursive;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

export default InfoCard;
