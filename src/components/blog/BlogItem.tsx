import { useState } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface BlogItemProps {
  id?: number;
  index?: string;
  title: string;
  date: string;
  image: string;
  link: string;
}

const BlogItem = ({ index, title, date, image, link }: BlogItemProps) => {
  const [isBlogItemHovered, setIsBlogItemHovered] = useState(false);

  const handleClickBlogItem = () => {
    window.open(link, '_blank');
  };

  return (
    <ItemWrapper
      isHovered={isBlogItemHovered}
      onClick={handleClickBlogItem}
      onMouseEnter={() => setIsBlogItemHovered(true)}
      onMouseLeave={() => setIsBlogItemHovered(false)}
    >
      <ImageWrapper>
        <BlogThumbnail
          src={image}
          isHovered={isBlogItemHovered}
          alt={`thumbnail-${title}`}
        />
      </ImageWrapper>
      <TextWrapper>
        <IndexText>{index}</IndexText>
        <Title isHovered={isBlogItemHovered}>{title}</Title>
        <DateText>{date}</DateText>
      </TextWrapper>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.li<{ isHovered: boolean }>`
  border-bottom: ${({ isHovered }) => (isHovered ? '0.2rem' : '0.1rem')} solid
    ${({ theme }) => theme.colors.BORDER};
  cursor: pointer;
  margin-bottom: ${({ isHovered }) => isHovered && '-0.1rem'};
  -webkit-transition: all 0.1s;
  -moz-transition: all 0.1s;
  -o-transition: all 0.1s;
  transition: all 0.1s;
`;

const ImageWrapper = styled.div`
  width: 28.2rem;
  height: 28.2rem;
`;

const BlogThumbnail = styled.img<{ isHovered: boolean }>`
  width: 100%;
  height: auto;
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;

  -webkit-transition: border-radius 0.3s;
  -moz-transition: border-radius 0.3s;
  -o-transition: border-radius 0.3s;
  transition: border-radius 0.3s;
  ${({ isHovered }) =>
    isHovered &&
    css`
      border-radius: 14.1rem;
    `}
`;

const TextWrapper = styled.div`
  padding: 3rem 0 2rem 0;
  gap: 1rem;
`;

const IndexText = styled.p`
  font-family: 'Bebas Neue', cursive;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

const Title = styled.p<{ isHovered: boolean }>`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};

  -webkit-transition: all 0.1s;
  -moz-transition: all 0.1s;
  -o-transition: all 0.1s;
  transition: all 0.1s;
  ${({ isHovered }) =>
    isHovered &&
    css`
      font-weight: 700;
    `}
`;

const DateText = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

export default BlogItem;
