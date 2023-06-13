import styled from '@emotion/styled';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

const markdown = `
  # 헤딩

  **굵게**
`;
const MarkdownRenderer = () => {
  return (
    <MarkdownStyle>
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
      />
    </MarkdownStyle>
  );
};
const MarkdownStyle = styled.div`
  font-size: 1rem;
  line-height: 2.5rem;
  background-color: antiquewhite;
`;

export default MarkdownRenderer;
