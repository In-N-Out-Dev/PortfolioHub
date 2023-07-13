import { useMediaQuery } from 'react-responsive';

import styled from '@emotion/styled';
import { SectionProps } from 'types/props';

const PageTitle = ({ forwardRef }: SectionProps) => {
  const isXLargeDisplay = useMediaQuery({ query: '(min-width: 1024px)' });
  const isSmallDisplay = useMediaQuery({ query: '(max-width: 320px)' });

  const atIcon = '@';
  const bracketOpen = '{';
  const bracketClosed = '}';
  const partField = 'FRONT-';
  const partLast = 'END';
  const position = 'WEB DEVELOPER';
  const userName = 'NAME FILED';
  const codeBracketOpen = '<';
  const codeBracketClosed = '/>';
  return (
    <div ref={forwardRef}>
      <PageTitleWrap id="HOME">
        <li>
          {!isXLargeDisplay && <DecoIcon>{atIcon}</DecoIcon>}
          {isSmallDisplay && <br />}
          <span>{partField}</span>
          {isSmallDisplay && <br />}
          {!isXLargeDisplay && <DecoIcon>{bracketOpen}</DecoIcon>}
          <span>{partLast}</span>
          {!isXLargeDisplay && <DecoIcon>{bracketClosed}</DecoIcon>}
        </li>
        <li>
          <span>{position}</span>
        </li>
        <li>
          {!isXLargeDisplay && <DecoIcon>{codeBracketOpen}</DecoIcon>}
          <span>{userName}</span>
          {!isXLargeDisplay && <DecoIcon>{codeBracketClosed}</DecoIcon>}
        </li>
      </PageTitleWrap>
    </div>
  );
};

const PageTitleWrap = styled.ul`
  text-align: center;
  font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 18rem;
  line-height: 17rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
  padding: 9rem 0;

  ${({ theme }) => theme.breakPoint.medium} {
    font-size: 14rem;
    line-height: 13rem;
    padding: 7rem 0;
  }
  ${({ theme }) => theme.breakPoint.small} {
    font-size: 8rem;
    line-height: 9.6rem;
    text-align: left;
    padding: 5rem 0;
  }

  li:last-of-type {
    color: ${({ theme }) => theme.colors.HIGHLIGHT};
  }
`;

const DecoIcon = styled.span`
  color: ${({ theme }) => theme.colors.TEXT_DECORATION};
`;

export default PageTitle;
