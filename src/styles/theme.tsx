export const lightTheme: ColorTheme = {
  MAIN_FONT: '#0D0D0D',
  CONTENT_FONT: '#444444',
  SUB_FONT: '#858585',
  BORDER: '#D9D9D9',
  BACKGROUND: '#FFFFFF',
  HIGHTLIGHT: '#E85913',
  BACKGROUND_SUB: 'rgba(217, 217, 217, 0.2)',
  TEXT_DECORATION: '#D9D9D9',
};

export const darkTheme = {
  MAIN_FONT: '#FFFFFF',
  CONTENT_FONT: '#444444',
  SUB_FONT: '#858585',
  BORDER: '#333333',
  BACKGROUND: '#000000',
  HIGHTLIGHT: '#ED6927',
  BACKGROUND_SUB: 'rgba(51, 51, 51, 0.2)',
  TEXT_DECORATION: '#FFFFFF',
};

const Color = {
  dark: darkTheme,
  light: lightTheme,
};

const mode = 'light' || 'dark';

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
  light: {
    colors: Color['light'],
    fontSize,
    breakPoint,
  },
  dark: {
    colors: Color['dark'],
    fontSize,
    breakPoint,
  },
};

export default theme;

export type Font = typeof fontSize;
