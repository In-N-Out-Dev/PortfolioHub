import styled from '@emotion/styled';
import Nav from 'components/nav/Nav';
import SideNav from 'components/nav/SideNav';
import Container from 'components/Container';

const Layout = () => {
  return (
    <>
      <Nav />
      <MainWrapper>
        <SideNav />
        <SectionWrapper>
          <Container />
        </SectionWrapper>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  padding: 0 120px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

const SectionWrapper = styled.div`
  width: 100%;
`;

export default Layout;
