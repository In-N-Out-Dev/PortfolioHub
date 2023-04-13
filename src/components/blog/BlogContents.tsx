import styled from '@emotion/styled';
import BlogItem from 'components/blog/BlogItem';
import { BLOG_DATA } from 'components/blog/blogMockData';

const BlogContents = () => {
  return (
    <Wrapper>
      {BLOG_DATA.map((item, index) => (
        <BlogItem
          title={item.title}
          image={item.image}
          date={item.date}
          index={(index + 1).toString().padStart(2, '0')}
          link={item.link}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
`;

export default BlogContents;
