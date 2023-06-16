import styled from '@emotion/styled';
import CAREER_DATA from 'components/career/careerData';

const CareerContents = () => {
  return (
    <Wrap>
      {CAREER_DATA.map((career, index) => {
        return (
          <Item key={index}>
            <TitleWrap>
              <h3>{career.company}</h3>
              {career.cureentCompany ? (
                <CurrentDate>{career.date}</CurrentDate>
              ) : (
                <p>{career.date}</p>
              )}
            </TitleWrap>
            <Position>{career.position}</Position>
            <Contents>{career.contnets}</Contents>
          </Item>
        );
      })}
    </Wrap>
  );
};

const Wrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

const Item = styled.li`
  padding-bottom: 6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.MAIN_FONT};
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 2.4rem;
  font-weight: bold;

  h3 {
    margin-right: 0.4rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakPoint.small} {
    display: block;

    h3 {
      margin-bottom: 2rem;
    }
  }
`;

const CurrentDate = styled.div`
  padding: 1.1rem 1rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
  background-color: ${({ theme }) => theme.colors.HIGHLIGHT};

  ${({ theme }) => theme.breakPoint.small} {
    padding: 0;
    color: ${({ theme }) => theme.colors.HIGHLIGHT};
    background-color: transparent;
  }
`;

const Position = styled.p`
  font-size: 1.6rem;
  line-height: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const Contents = styled.p`
  font-size: 1.6rem;
  line-height: 2.2rem;
  white-space: normal;

  ${({ theme }) => theme.breakPoint.small} {
    margin-bottom: 6rem;
  }
`;

export default CareerContents;
