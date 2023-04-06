import styled from '@emotion/styled';

import Divider from '../common/Divider';

import CARRER_DATA from '@/components/career/careerData';

const CareerContents = () => {
  return (
    <Wrap>
      {CARRER_DATA.map((carrer) => {
        return (
          <>
            <TitleWrap>
              <h3>{carrer.company}</h3>
              {carrer.cureentCompany ? (
                <CurrentDate>{carrer.date}</CurrentDate>
              ) : (
                <p>{carrer.date}</p>
              )}
            </TitleWrap>
            <Position>{carrer.position}</Position>
            <Contents>{carrer.contnets}</Contents>
            <Contact>
              <li></li>
            </Contact>
            <Divider />
          </>
        );
      })}
    </Wrap>
  );
};

const Wrap = styled.div`
  color: ${({ theme }) => theme.colors.MAIN_FONT};
  margin-bottom: 10rem;
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
  color: #fff;
  background-color: ${({ theme }) => theme.colors.HIGHTLIGHT};

  ${({ theme }) => theme.breakPoint.small} {
    padding: 0;
    color: ${({ theme }) => theme.colors.HIGHTLIGHT};
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

export default CareerContents;
