import { useState } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { BlogItemProps } from 'types/blog';

const GalleryBlogItem = ({ index, title, date, image, link }: BlogItemProps) => {
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
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-bottom: 28.2rem;

  ${({ theme }) => theme.breakPoint.xlarge} {
    padding-bottom: 100%;
  }
`;

const BlogThumbnail = styled.img<{ isHovered: boolean }>`
  position: absolute;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;

  -webkit-transition: border-radius 0.3s;
  -moz-transition: border-radius 0.3s;
  -o-transition: border-radius 0.3s;
  transition: border-radius 0.3s;

  ${({ theme }) => theme.breakPoint.xlarge} {
    ${({ isHovered }) =>
      isHovered &&
      css`
        border-radius: 50%;
      `}
  }
`;

const TextWrapper = styled.div`
  padding: 3rem 0 2rem 0;
  gap: 1rem;
`;

const IndexText = styled.p`
  font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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

export default GalleryBlogItem;
