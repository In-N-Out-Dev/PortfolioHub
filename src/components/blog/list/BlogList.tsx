import { useMediaQuery } from 'react-responsive';

import styled from '@emotion/styled';
import { BLOG_DATA } from 'components/blog/blogMockData';
import ListBlogItem from 'components/blog/list/ListBlogItem';
import { MEDIA_QUERY_BREAK_POINT } from 'styles/theme';

const BlogList = () => {
  const isSmallDisplay = useMediaQuery({ query: `(max-width: ${MEDIA_QUERY_BREAK_POINT.SMALL})` });

  return (
    <ListWrapper>
      {!isSmallDisplay && (
        <ListBlogItem
          title="Title"
          image=""
          date="Date"
          index="No."
          link=""
          isHeader={true}
        />
      )}
      <List>
        {BLOG_DATA.map((item, index) => (
          <ListBlogItem
            title={item.title}
            image={item.image}
            date={item.date}
            index={(index + 1).toString().padStart(2, '0')}
            link={item.link}
            key={item.id}
          />
        ))}
      </List>
    </ListWrapper>
  );
};

const ListWrapper = styled.div``;

const List = styled.ul`
  border-top: 0.3rem solid ${({ theme }) => theme.colors.MAIN_FONT};
`;

export default BlogList;
