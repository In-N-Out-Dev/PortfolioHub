import { useMediaQuery } from 'react-responsive';

import styled from '@emotion/styled';
import StackButton from 'components/common/StackButton';
import CONTACT_DATA from 'contents/contactData';

const ContactContents = () => {
  const isSmallDisplay = useMediaQuery({ query: '(max-width: 320px)' });
  return (
    <Article>
      <Email>{CONTACT_DATA.email}</Email>
      <List>
        <StackButton url={CONTACT_DATA.github}>
          {isSmallDisplay ? <img src="/src/assets/img/GitHub.png" /> : 'GitHub'}
        </StackButton>
        <StackButton url={CONTACT_DATA.linkedin}>
          {isSmallDisplay ? <img src="/src/assets/img/LinkedIn.png" /> : 'LinkedIn'}
        </StackButton>
        <StackButton url={CONTACT_DATA.instagram}>
          {isSmallDisplay ? <img src="/src/assets/img/Instagram.png" /> : 'Instagram'}
        </StackButton>
      </List>
    </Article>
  );
};

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

const Email = styled.p`
  font-size: 3.2rem;
  line-height: 0.7;
  ${({ theme: { breakPoint } }) => {
    return {
      [breakPoint.large]: {
        fontSize: '2.4rem',
      },
      [breakPoint.medium]: {
        fontSize: '2.4rem',
      },
      [breakPoint.small]: {
        fontSize: '2rem',
      },
    };
  }}
`;

const List = styled.ul`
  display: flex;
  gap: 1.4rem;
`;

export default ContactContents;
