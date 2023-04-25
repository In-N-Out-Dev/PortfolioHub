import styled from '@emotion/styled';
import MailIcon from 'assets/MailIcon';
import StackButton from 'components/common/StackButton';

import INTRODUCE_DATA from './introduceData';

const IntroContents = () => {
  return (
    <Wrap>
      <Title>{INTRODUCE_DATA.title}</Title>
      <Contents>{INTRODUCE_DATA.contnets}</Contents>
      <Contact>
        <li>
          <MailIcon />
        </li>
        <li>{INTRODUCE_DATA.contact}</li>
      </Contact>
      <Resume>
        {INTRODUCE_DATA.resume.map((resume) => {
          return (
            <StackButton
              key={resume.title}
              url={resume.url}
            >
              {resume.title}
            </StackButton>
          );
        })}
      </Resume>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

const Title = styled.h3`
  margin-bottom: 1.4rem;
  font-size: 2.4rem;
  font-weight: bold;
`;

const Contents = styled.p`
  margin-bottom: 1.4rem;
  font-size: 1.6rem;
  white-space: normal;
`;

const Contact = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 2rem;
  font-size: 1.4rem;
`;

const Resume = styled.ul`
  display: flex;
  gap: 1.4rem;
`;

export default IntroContents;
