import { FC } from 'react';

import styled from '@emotion/styled';

interface Props {
  renderHeader?: () => React.ReactNode;
  renderBody?: () => React.ReactNode;
  [key: string]: unknown;
}

const Card: FC<Props> = ({ renderHeader, renderBody, ...rest }) => {
  return (
    <Wrap {...rest}>
      {renderHeader?.()}
      {renderBody?.()}
    </Wrap>
  );
};

const Wrap = styled.section`
  border-top: 0.2rem solid ${({ theme }) => theme.colors.MAIN_FONT};
  padding: 10rem 0;

  ${({ theme }) => theme.breakPoint.small} {
    padding: 6rem 0;
  }

  ${({ theme }) => theme.breakPoint.medium} {
    padding: 8rem 0;
  }
`;

export default Card;
