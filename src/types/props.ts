import { RefObject } from 'react';

export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

export interface SectionProps {
  forwardRef: RefObject<HTMLDivElement>;
}
