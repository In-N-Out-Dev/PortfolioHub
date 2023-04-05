import styled from '@emotion/styled';

export interface BlogItemProps {
  index?: string;
  title: string;
  date: string;
  image: string;
}

const BlogItem = ({ index, title, date, image }: BlogItemProps) => {
  return (
    <ItemWrapper>
      <ImageWrapper>
        <BlogThumbnail src={image} />
      </ImageWrapper>
      <TextWrapper>
        <IndexText>{index}</IndexText>
        <Title>{title}</Title>
        <DateText>{date}</DateText>
      </TextWrapper>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.li``;

const ImageWrapper = styled.div`
  background-color: #f5f5f5;
  width: 28.2rem;
  height: 28.2rem;
`;

const BlogThumbnail = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
`;

const TextWrapper = styled.div`
  padding: 3rem 0 2rem 0;
  gap: 1rem;
`;

const IndexText = styled.p`
  font-family: 'Bebas Neue';
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

const Title = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

const DateText = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

export default BlogItem;
