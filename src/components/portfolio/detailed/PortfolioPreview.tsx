import { FC } from 'react';

import styled from '@emotion/styled';
import LinkArrow from 'assets/LinkArrow';
import { PortfolioData } from 'types/portfolio';

const PortfolioPreview: FC<{ portfolio: PortfolioData }> = ({ portfolio }) => {
  const { no, title, skills, start, end, description, role } = portfolio;
  return (
    <Article>
      <Tag>[{String(no).padStart(2, '0')}]</Tag>
      <Title>{title}</Title>
      <Contents>{description}</Contents>
      <Wrap>
        <li>
          <h4>Date</h4>
          {start}-{end}
        </li>
        <li>
          <h4>Role</h4>
          {role}
        </li>
        <li>
          <h4>Skills</h4>
          <SkillsWrap>
            {skills.map((skill) => (
              <Item highlight={false}>{skill}</Item>
            ))}
          </SkillsWrap>
        </li>
        <li>
          <h4>Link</h4>
          <RepoLink>
            DirectLink
            <LinkArrow />
          </RepoLink>
        </li>
      </Wrap>
    </Article>
  );
};

const Article = styled.article`
  color: ${({ theme }) => theme.colors.MAIN_FONT};
  padding: 6rem 0;

  ${({ theme }) => theme.breakPoint.medium} {
    padding: 0;
  }
`;

const Tag = styled.h3`
  font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 2.4rem;
  font-weight: 600;

  ${({ theme }) => theme.breakPoint.small} {
    font-size: 2rem;
  }
`;

const Title = styled.h2`
  margin: 1rem 0 2.4rem;
  font-size: 4rem;

  font-weight: bold;

  ${({ theme }) => theme.breakPoint.xlarge} {
    font-size: 4.8rem;
  }

  ${({ theme }) => theme.breakPoint.small} {
    font-size: 2.4rem;
  }
`;

const Contents = styled.p`
  width: 80%;
  margin-bottom: 6rem;
  font-size: 1.4rem;

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;

  ${({ theme }) => theme.breakPoint.xlarge} {
    font-size: 1.6rem;
  }

  ${({ theme }) => theme.breakPoint.small} {
    font-size: 1.3rem;
  }
`;

const Wrap = styled.ul`
  li {
    display: flex;
    justify-content: flex-star;
    align-items: flex-start;
    padding: 20px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.MAIN_FONT};
    font-size: ${({ theme }) => theme.fontSize.FONT_MD};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.MAIN_FONT};
  }

  li:first-of-type {
    border-top: 1px solid ${({ theme }) => theme.colors.MAIN_FONT};
  }

  li > h4 {
    margin-right: 5rem;
    font-size: ${({ theme }) => theme.fontSize.FONT_MD};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.MAIN_FONT};
    word-break: keep-all;

    ${({ theme }) => theme.breakPoint.small} {
      font-size: ${({ theme }) => theme.fontSize.FONT_SM};
    }
  }
`;

const RepoLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.HIGHLIGHT};

  :hover {
    color: ${({ theme }) => theme.colors.HIGHLIGHT};
    filter: brightness(1.1);
  }
`;

const SkillsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;

  ${({ theme }) => theme.breakPoint.small} {
    font-size: ${({ theme }) => theme.fontSize.FONT_SM};
  }
`;

const Item = styled.div<{ highlight: boolean }>`
  padding: 1rem 1.4rem;
  width: fit-content;
  border: 0.1rem solid;
  border-radius: 5rem;
  ${({ highlight, theme: { colors } }) => {
    if (highlight) {
      return {
        borderColor: colors.HIGHLIGHT,
        backgroundColor: colors.HIGHLIGHT,
        color: colors.BACKGROUND,
      };
    }
    return {
      borderColor: colors.BORDER,
      backgroundColor: colors.BACKGROUND,
      color: colors.MAIN_FONT,
    };
  }};
`;
export default PortfolioPreview;
