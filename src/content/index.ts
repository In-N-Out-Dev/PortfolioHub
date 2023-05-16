export const MENU_LIST = [
  'HOME',
  'INTRODUCE',
  'CAREER',
  'PROJECT',
  'SKILLS',
  'PORTFOLIO',
  'BLOG',
] as const;

export type MenuListProps = Readonly<(typeof MENU_LIST)[number]>;
