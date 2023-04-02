export const darkTheme = {
  MAIN_FONT: '#000000',
  SUB_FONT: '#0D0D0D',
  HIGHTLIGHT: '#E85913',
  BACKGROUND: '#FFFFFF',
  BUTTON_BORDER: '#FFFFFF',
};

export const lightTheme: ColorTheme = {
  MAIN_FONT: '#FFFFFF',
  SUB_FONT: '#f0f0f0',
  HIGHTLIGHT: '#E85913',
  BACKGROUND: '#000000',
  BUTTON_BORDER: '#D9D9D9',
};

const Color = {
  dark: darkTheme,
  light: lightTheme,
};

const mode = 'dark' || 'light';

export const colors = Color[mode];

export type ColorTheme = typeof darkTheme;

// font type

export const fontSize = {
  FONT_TITLE: '24px',
  FONT_XSM: '10px',
  FONT_SM: '14px',
  FONT_MD: '16px',
  FONT_LG: '20px',
  FONT_XLG: '40px',
};

// constants
export const MEDIA_QUERY_BREAK_POINT = {
  SMALL: '320px',
  MEDIUM: '768px',
  LARGE: '1024px',
};

export const breakPoint = {
  small: `@media (max-width: ${MEDIA_QUERY_BREAK_POINT.SMALL})`, // Smaller than mobile size
  medium: `@media (min-width: 321px) and (max-width: ${MEDIA_QUERY_BREAK_POINT.MEDIUM})`, // Mobile size
  large: `@media (min-width: 769px) and (max-width: ${MEDIA_QUERY_BREAK_POINT.LARGE})`, // Tablet size
  xlarge: `@media (min-width: 1025px)`, // Desktop+ size
};

export type BreakPointType = typeof breakPoint;

const theme = {
  colors,
  fontSize,
  breakPoint,
};

export default theme;

export type Font = typeof fontSize;
