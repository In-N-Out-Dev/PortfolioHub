import styled from '@emotion/styled';

interface DividerProps {
  height?: number;
  marginTop?: number;
  marginBottom?: number;
}

const Divider = ({ height = 0.2, marginTop = 0, marginBottom = 6 }: DividerProps) => {
  return (
    <Stroke
      height={height}
      marginTop={marginTop}
      marginBottom={marginBottom}
    />
  );
};

const Stroke = styled.div<{
  height: number;
  marginBottom: number;
  marginTop: number;
}>`
  width: 100%;
  height: ${(props) => props.height + 'rem'};
  margin-top: ${(props) => props.marginTop + 'rem'};
  margin-bottom: ${(props) => props.marginBottom + 'rem'};
  background-color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

export default Divider;
