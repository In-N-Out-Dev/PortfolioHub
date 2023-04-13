import styled from '@emotion/styled';

export const List = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 2.1rem;
  height: 29.5rem;
  width: 100%;
  margin-bottom: 3rem;
`;

export const ButtonWrapper = styled.div<{ width: number }>`
  width: ${({ width }) => width}rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 10rem;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid ${({ theme }) => theme.colors.BORDER};
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
`;

export const BackwardButton = styled(Button)`
  transform: rotate(180deg);
`;
