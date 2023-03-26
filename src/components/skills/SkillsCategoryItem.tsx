import styled from '@emotion/styled';

import type { Skill } from './SkillsData';

const SkillsCategoryItem = ({ highlight, skill }: Skill) => {
  return <Item highlight={highlight}>{skill}</Item>;
};

const Item = styled.li<{ highlight: boolean }>`
  margin: 0px 14px 16px 0px;
  padding: 10px 14px;
  width: fit-content;
  border: 1px solid
    ${({
      highlight,
      theme: {
        colors: { HIGHTLIGHT, BUTTON_BORDER },
      },
    }) => (highlight ? HIGHTLIGHT : BUTTON_BORDER)};
  border-radius: 50px;
  background-color: ${({
    highlight,
    theme: {
      colors: { HIGHTLIGHT, BACKGROUND },
    },
  }) => (highlight ? HIGHTLIGHT : BACKGROUND)};
  color: ${({
    highlight,
    theme: {
      colors: { MAIN_FONT, BACKGROUND },
    },
  }) => (highlight ? BACKGROUND : MAIN_FONT)};
`;

export default SkillsCategoryItem;
