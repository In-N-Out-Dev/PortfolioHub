import styled from '@emotion/styled';
import MailIcon from 'assets/MailIcon';
import StackButton from 'components/common/StackButton';
import INTRODUCE_DATA from 'contents/introduceData';

const IntroContents = () => {
  return (
    <Wrap>
      <TitleWrap>
        <h3>{INTRODUCE_DATA.title}</h3>
        <div>
          <p>{INTRODUCE_DATA.name}</p>
          <p>입니다.</p>
        </div>
      </TitleWrap>
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
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.4rem;
  font-size: 2.4rem;
  font-weight: bold;

  ${({ theme }) => theme.breakPoint.small} {
    display: block;
  }

  h3 {
    margin-right: 0.4rem;
  }

  div {
    display: flex;
    align-items: center;
  }

  p:nth-child(1) {
    color: ${({ theme }) => theme.colors.HIGHTLIGHT};
  }
`;

const Contents = styled.p`
  margin-bottom: 1.4rem;
  font-size: 1.6rem;
  white-space: normal;
  line-height: 2.2rem;
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
