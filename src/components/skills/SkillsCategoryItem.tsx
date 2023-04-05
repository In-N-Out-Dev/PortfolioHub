import styled from '@emotion/styled';

import type { Skill } from './SkillsData';

const SkillsCategoryItem = ({ highlight, skill }: Skill) => {
  return <Item highlight={highlight}>{skill}</Item>;
};

const Item = styled.li<{ highlight: boolean }>`
  margin: 0px 14px 16px 0px;
  padding: 10px 14px;
  width: fit-content;
  border: 1px solid;
  border-radius: 50px;
  ${({
    highlight,
    theme: {
      colors: { HIGHTLIGHT, BORDER, BACKGROUND, MAIN_FONT },
    },
  }) =>
    highlight
      ? {
          borderColor: HIGHTLIGHT,
          backgroundColor: HIGHTLIGHT,
          color: BACKGROUND,
        }
      : {
          borderColor: BORDER,
          backgroundColor: BACKGROUND,
          color: MAIN_FONT,
        }};
`;

export default SkillsCategoryItem;
