import styled from '@emotion/styled';

import SideNav from '@/components/common/SideNav';
import Header from '@/components/header/Header';

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
    </>
  );
};

const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  padding: 0 12rem;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

const SectionWrapper = styled.div`
  width: 100%;
`;

export default Layout;
