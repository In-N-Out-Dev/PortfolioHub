import styled from '@emotion/styled';
import { BLOG_DATA } from 'components/blog/blogMockData';
import GalleryBlogItem from 'components/blog/gallery/GalleryBlogItem';

const BlogGallery = () => {
  return (
    <Wrapper>
      {BLOG_DATA.map((item, index) => (
        <GalleryBlogItem
          title={item.title}
          image={item.image}
          date={item.date}
          index={(index + 1).toString().padStart(2, '0')}
          link={item.link}
          key={item.id}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  width: 100%;
  display: grid;
  flex-wrap: wrap;
  gap: 2.4rem;

  ${({ theme }) => theme.breakPoint.xlarge || theme.breakPoint.large} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default BlogGallery;
