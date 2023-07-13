import BlogGallery from 'components/blog/gallery/BlogGallery';
import BlogList from 'components/blog/list/BlogList';
import { ViewModeState } from 'types/props';

const BlogContents = ({ blogViewState }: { blogViewState: ViewModeState }) => {
  if (blogViewState === 'GALLERY') {
    return <BlogGallery />;
  } else {
    return <BlogList />;
  }
};

export default BlogContents;
