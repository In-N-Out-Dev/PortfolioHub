import styled from '@emotion/styled';

import Header from '@/components/common/Header';
import SideNav from '@/components/common/SideNav';

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
  gap: 20px;
  padding: 0 120px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

const SectionWrapper = styled.div`
  width: 100%;
`;

export default Layout;
