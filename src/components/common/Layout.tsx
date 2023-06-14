import styled from '@emotion/styled';
import SideNav from 'components/common/SideNav';
import Header from 'components/header/Header';

import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <MainWrapper>
        <SideNav />
        <SectionWrapper>{children}</SectionWrapper>
      </MainWrapper>
      <Footer />
    </>
  );
};

const MainWrapper = styled.main`
  display: flex;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};

  ${({ theme }) => theme.breakPoint.xlarge} {
    padding: 0 12rem;
  }
  ${({ theme }) => theme.breakPoint.large} {
    padding: 0 6.5rem;
  }
  ${({ theme }) => theme.breakPoint.medium} {
    padding: 0 3.8rem;
  }
`;

const SectionWrapper = styled.div`
  width: 100%;

  ${({ theme }) => theme.breakPoint.xlarge} {
    width: calc(100% - 20rem);
  }
`;

export default Layout;
