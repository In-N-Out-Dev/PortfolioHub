import { FC } from 'react';

import styled from '@emotion/styled';
import MarkdownRenderer from 'components/common/MarkdownRenderer';
import PortfolioPreview from 'components/portfolio/detailed/PortfolioPreview';
import { PortfolioData } from 'types/portfolio';

interface Props {
  portfolio: PortfolioData;
}

const PortfolioDetailedContainer: FC<Props> = ({ portfolio }) => {
  const { contents } = portfolio;
  return (
    <Section>
      <PortfolioPreview portfolio={portfolio} />
      <MarkdownRenderer contents={contents} />
    </Section>
  );
};

const Section = styled.section`
  display: grid;
  grid-template-columns: 1;
  gap: 1.6rem;
  padding: 0 1.2rem;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};

  ${({ theme }) => theme.breakPoint.xlarge} {
    grid-template-columns: 5fr 7fr;
    padding: 0 12rem;
    gap: 2.4rem;
  }

  ${({ theme }) => theme.breakPoint.large} {
    grid-template-columns: 1fr 2fr;
    padding: 0 3.9rem;
    gap: 2.4rem;
  }
`;

export default PortfolioDetailedContainer;
