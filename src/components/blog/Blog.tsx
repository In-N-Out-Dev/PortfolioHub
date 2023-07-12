import { useState } from 'react';

import BlogContents from 'components/blog/BlogContents';
import ListCard from 'components/common/ListCard';
import { SectionProps, ViewModeState } from 'types/props';

const Blog = ({ forwardRef }: SectionProps) => {
  const [blogViewState, setBlogViewState] = useState<ViewModeState>('GALLERY');
  return (
    <div ref={forwardRef}>
      <ListCard
        title="BLOG"
        ViewModeState={blogViewState}
        setViewModeState={setBlogViewState}
      >
        <BlogContents blogViewState={blogViewState} />
      </ListCard>
    </div>
  );
};

export default Blog;
