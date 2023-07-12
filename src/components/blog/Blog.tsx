import BlogContents from 'components/blog/BlogContents';
import ListCard from 'components/common/ListCard';
import { SectionProps } from 'types/props';

const Blog = ({ forwardRef }: SectionProps) => {
  return (
    <div ref={forwardRef}>
      <ListCard title="BLOG">
        <BlogContents />
      </ListCard>
    </div>
  );
};

export default Blog;
