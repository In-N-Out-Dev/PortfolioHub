import styled from '@emotion/styled';
import MailIcon from 'assets/\bMailIcon';
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
  width: 600px;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

const Title = styled.h3`
  margin-bottom: 14px;
  font-size: 2.4rem;
  font-weight: bold;
`;

const Contents = styled.p`
  margin-bottom: 14px;
  font-size: 1.6rem;
  line-height: 2.2rem;
  white-space: normal;
`;

const Contact = styled.ul`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 20px;
  font-size: 1.4rem;
`;

const Resume = styled.ul`
  display: flex;
  gap: 14px;
`;

export default IntroContents;
