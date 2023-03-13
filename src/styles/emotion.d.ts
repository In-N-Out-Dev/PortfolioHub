import '@emotion/react';
import { Font, ColorTheme, BreakPointType, NeutralColorType } from 'styles/theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorTheme;
    fontSize: Font;
    breakPoint: BreakPointType;
  }
}
