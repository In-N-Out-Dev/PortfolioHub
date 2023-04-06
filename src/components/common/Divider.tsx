import styled from '@emotion/styled';

interface DividerProps {
  height?: number;
  margin?: number;
  backgroundBlack?: boolean;
}

const Divider = ({ height = 2, margin = 60, backgroundBlack = false }: DividerProps) => {
  return (
    <Stroke
      height={height}
      margin={margin}
      backgroundBlack={backgroundBlack}
    />
  );
};

const Stroke = styled.div<{ height: number; margin: number; backgroundBlack: boolean }>`
  width: 100%;
  height: ${(props) => props.height + 'px'};
  margin-bottom: ${(props) => props.margin + 'px'};
  background-color: ${({ backgroundBlack, theme }) =>
    backgroundBlack ? '#000' : theme.colors.BORDER};
`;

export default Divider;
