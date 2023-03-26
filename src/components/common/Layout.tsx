import styled from '@emotion/styled';
import React from 'react';
import Nav from '../nav/Nav';
import SideNav from '../nav/SideNav';

const Layout = ({ content }: { content: JSX.Element }) => {
  return (
    <>
      <Nav />
      <MainWrapper>
        <SideNav />
        <SectionWrapper>{content}</SectionWrapper>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  padding: 0 120px;
`;

const SectionWrapper = styled.div`
  width: 100%;
`;

export default Layout;
