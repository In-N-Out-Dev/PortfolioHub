import styled from '@emotion/styled';
import { BLOG_DATA } from 'components/blog/blogMockData';
import BlogItem from 'components/blog/list/BlogItem';

const BlogList = () => {
  return (
    <List>
      {BLOG_DATA.map((item, index) => (
        <BlogItem
          title={item.title}
          image={item.image}
          date={item.date}
          index={(index + 1).toString().padStart(2, '0')}
          link={item.link}
          key={item.id}
        />
      ))}
    </List>
  );
};

const List = styled.ul`
  border-top: 0.3rem solid ${({ theme }) => theme.colors.MAIN_FONT};
`;

export default BlogList;
