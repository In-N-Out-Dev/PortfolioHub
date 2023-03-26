import styled from '@emotion/styled';
import React from 'react';

const Nav = () => {
  return (
    <NavWrapper>
      <Logo>name here</Logo>
      <NavMenuWrapper>
        <button>contact</button>
        <button>theme toggler</button>
      </NavMenuWrapper>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 120px;
  width: 100%;
  border-bottom: 1px solid #000;
`;

const Logo = styled.h1`
  font-size: 48px;
`;

const NavMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
