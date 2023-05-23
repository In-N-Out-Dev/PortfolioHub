import { FC, PropsWithChildren } from 'react';

import styled from '@emotion/styled';

interface Props extends PropsWithChildren {
  id: string;
}

const SectionCard: FC<Props> = ({ children, ...rest }) => {
  return <Wrap {...rest}>{children}</Wrap>;
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

export default SectionCard;
