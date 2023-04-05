import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  height: 9.3rem;
  margin-bottom: 10rem;
`;

export const Title = styled.h2`
  position: relative;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

export const Span = styled.span`
  position: relative;
  top: -1rem;
  font-family: 'Bebas Neue', cursive;
  font-size: 12.8rem;
  line-height: 1;
  vertical-align: top;
`;

export const CircleIcon = styled.div`
  position: absolute;
  right: -3rem;
  top: 0;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ theme }) => theme.colors.HIGHTLIGHT};
  border-radius: 50%;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Email = styled.p`
  font-size: 3.2rem;
  line-height: 0.7;
`;

export const List = styled.ul`
  display: flex;
  gap: 1.4rem;
`;
