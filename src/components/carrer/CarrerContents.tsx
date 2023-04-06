import styled from '@emotion/styled';
import CARRER_DATA from 'components/carrer/carrerData';
import StackButton from 'components/common/StackButton';

const CarrerContents = () => {
  return (
    <Wrap>
      {CARRER_DATA.map((carrer) => {
        return (
          <>
            <TitleWrap>
              <h3>{carrer.company}</h3>
              <p>{carrer.position}</p>
            </TitleWrap>
            <Contents>{carrer.contnets}</Contents>
            <Contact>
              <li></li>
              <li>{carrer.date}</li>
            </Contact>
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
  align-items: center;
  margin-bottom: 1.4rem;
  font-size: 2.4rem;
  font-weight: bold;

  h3 {
    margin-right: 0.4rem;
  }
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

export default CarrerContents;
