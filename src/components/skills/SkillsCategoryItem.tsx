import styled from '@emotion/styled';

import type { Skill } from './SkillsData';

const SkillsCategoryItem = ({ highlight, skill }: Skill) => {
  return <Item highlight={highlight}>{skill}</Item>;
};

const Item = styled.li<{ highlight: boolean }>`
  margin: 0 1.4rem 1.6rem 0;
  padding: 1rem 1.4rem;
  width: fit-content;
  border: 0.1rem solid;
  border-radius: 5rem;
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
