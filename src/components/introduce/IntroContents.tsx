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
        {INTRODUCE_DATA.resume.map((resume, index) => {
          return <StackButton url={resume.url}>{resume.title}</StackButton>;
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
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Contents = styled.p`
  margin-bottom: 1.4rem;
  font-size: 1rem;
  line-height: 1.4rem;
  white-space: normal;
`;

const Contact = styled.ul`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 1.4rem;
  font-size: 1.1rem;
`;

const Resume = styled.ul`
  display: flex;
  gap: 14px;
`;

export default IntroContents;
