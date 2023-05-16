import styled from '@emotion/styled';
import { MENU_LIST, MenuListProps } from 'content';

const SideNav = () => {
  const renderMenu = () => {
    return MENU_LIST.map((menu) => {
      return (
        <MenuItem
          key={menu}
          onClick={() => onClickMenu(menu)}
        >
          {menu}
        </MenuItem>
      );
    });
  };
  const onClickMenu = (menu: MenuListProps) => {
    const element = document.getElementById(menu);
    console.log('eleemtn', element);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
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
  position: sticky;
  top: 50vh;
  height: fit-content;
  width: 100%;
`;

const MenuItem = styled.li``;

export default SideNav;
