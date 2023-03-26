import styled from '@emotion/styled';

interface DividerProps {
  height?: number;
  margin?: number;
}

const Divider = ({ height = 2, margin = 60 }: DividerProps) => {
  return (
    <Stroke
      height={height}
      margin={margin}
    />
  );
};

const Stroke = styled.div<{ height: number; margin: number }>`
  width: 100%;
  height: ${(props) => props.height + 'px'};
  margin-bottom: ${(props) => props.margin + 'px'};
  background-color: ${({ theme }) => theme.colors.SUB_FONT};
`;

export default Divider;
