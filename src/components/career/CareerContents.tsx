import styled from '@emotion/styled';

import CARRER_DATA from '@/components/career/careerData';
import Divider from '@/components/common/Divider';

const CareerContents = () => {
  return (
    <Wrap>
      {CARRER_DATA.map((carrer, index) => {
        return (
          <>
            <TitleWrap key={index}>
              <h3>{carrer.company}</h3>
              {carrer.cureentCompany ? (
                <CurrentDate>{carrer.date}</CurrentDate>
              ) : (
                <p>{carrer.date}</p>
              )}
            </TitleWrap>
            <Position>{carrer.position}</Position>
            <Contents>{carrer.contnets}</Contents>
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
  margin-bottom: 3.8rem;
  font-size: 1.6rem;
  line-height: 2.2rem;
  white-space: normal;

  ${({ theme }) => theme.breakPoint.small} {
    margin-bottom: 6rem;
  }
`;

export default CareerContents;
