import { useState } from 'react';

import styled from '@emotion/styled';
import { MENU_LIST, MenuListProps } from 'contents';

const SideNav = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuListProps>('HOME');

  const renderMenu = () => {
    return MENU_LIST.map((menu) => {
      return (
        <MenuItem
          key={menu}
          onClick={() => {
            onClickMenu(menu);
            setSelectedMenu(menu);
          }}
        >
          <Dot isSelectedMenu={selectedMenu === menu} />
          <span>{menu}</span>
        </MenuItem>
      );
    });
  };
  const onClickMenu = (menu: MenuListProps) => {
    const element = document.getElementById(menu);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const offsetPosition = elementPosition + bodyScrollTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <SideNavWrapper>
      <ContentWrapper>{renderMenu()}</ContentWrapper>
    </SideNavWrapper>
  );
};

const SideNavWrapper = styled.nav``;

const ContentWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  position: sticky;
  top: 50vh;
  height: fit-content;
  width: fit-content;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  font-family: 'Bebas Neue', cursive;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
  cursor: pointer;
`;

const Dot = styled.div<{ isSelectedMenu: boolean }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ theme, isSelectedMenu }) =>
    isSelectedMenu ? theme.colors.MAIN_FONT : theme.colors.BACKGROUND};
  border: ${({ theme, isSelectedMenu }) =>
    isSelectedMenu ? 'none' : `1px solid ${theme.colors.BORDER} `};
`;

export default SideNav;
