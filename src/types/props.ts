import { RefObject } from 'react';

export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

export interface SectionProps {
  forwardRef: RefObject<HTMLDivElement>;
}

export type ViewModeState = 'GALLERY' | 'LIST';

export type ListHeaderProps = {
  ViewModeState: ViewModeState;
  setViewModeState: React.Dispatch<React.SetStateAction<ViewModeState>>;
};
