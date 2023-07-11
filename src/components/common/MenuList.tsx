import React, { useState } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MENU_LIST, MenuListProps } from 'contents';
import HEADER_DATA from 'contents/headerData';
import { useModalStore } from 'stores/useModalStore';

interface Props {
  origin: 'header' | 'sidebar';
}

const MenuList = (props: Props) => {
  const [selectedMenu, setSelectedMenu] = useState<MenuListProps>('HOME');
  const { setIsModalOn } = useModalStore((state) => ({
    setIsModalOn: state.setIsModalOn,
  }));

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

    if (props.origin === 'header') {
      setIsModalOn('MOBILE_MENU', false);
    }
  };

  return (
    <>
      {MENU_LIST.map((menu) => {
        return (
          <MenuItem
            key={menu}
            onClick={() => {
              onClickMenu(menu);
              setSelectedMenu(menu);
            }}
            isSidebarNav={props.origin === 'sidebar'}
          >
            <Dot isSelectedMenu={selectedMenu === menu} />
            <span>{menu}</span>
          </MenuItem>
        );
      })}
      {props.origin === 'header' && (
        <CopyrightText>
          © 2023 <NameText>{HEADER_DATA.title}</NameText> All rights reserved.
        </CopyrightText>
      )}
    </>
  );
};

const MenuItem = styled.li<{ isSidebarNav: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.CONTENT_FONT};
  padding: 2rem 0;

  ${({ theme }) => theme.breakPoint.xlarge} {
    font-size: 6.4rem;
    padding: 5rem 0;
  }

  ${({ theme }) => theme.breakPoint.large} {
    font-size: 4.8rem;
    padding: 3rem 0;
  }

  ${({ isSidebarNav }) =>
    isSidebarNav &&
    css`
      padding: 0;
    `}
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

const CopyrightText = styled.span`
  margin-top: 4rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
  font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const NameText = styled(CopyrightText)`
  color: ${({ theme }) => theme.colors.HIGHTLIGHT};
`;

export default MenuList;
