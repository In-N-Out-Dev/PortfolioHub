import { useState } from 'react';

import styled from '@emotion/styled';
import BlogContents from 'components/blog/BlogContents';
import ListCard from 'components/common/ListCard';
import { SectionProps, ViewModeState } from 'types/props';

const Blog = ({ forwardRef }: SectionProps) => {
  const [blogViewState, setBlogViewState] = useState<ViewModeState>('GALLERY');
  return (
    <Wrapper>
      <IntersectionDummyDiv ref={forwardRef} />
      <ListCard
        title="BLOG"
        ViewModeState={blogViewState}
        setViewModeState={setBlogViewState}
      >
        <BlogContents blogViewState={blogViewState} />
      </ListCard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const IntersectionDummyDiv = styled.div`
  position: absolute;
  top: 0;
  height: 50vh;
  width: 100%;
  background-color: transparent;
  z-index: -1;
`;

export default Blog;
