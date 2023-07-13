import React from 'react';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import GalleryIcon from 'assets/GalleryIcon';
import ListIcon from 'assets/ListIcon';

import type { ListHeaderProps, ViewModeState } from 'types/props';

const ViewModeButton = ({ ViewModeState, setViewModeState }: ListHeaderProps) => {
  const { colors } = useTheme();
  const handleClick = (type: ViewModeState) => {
    setViewModeState(type);
  };
  const isHighlighted = (type: ViewModeState) =>
    ViewModeState === type ? colors.HIGHLIGHT : colors.MAIN_FONT;

  return (
    <IconWrapper>
      <button onClick={() => handleClick('GALLERY')}>
        <GalleryIcon color={isHighlighted('GALLERY')} />
      </button>
      <button onClick={() => handleClick('LIST')}>
        <ListIcon color={isHighlighted('LIST')} />
      </button>
    </IconWrapper>
  );
};

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export default ViewModeButton;
