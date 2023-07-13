import styled from '@emotion/styled';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import markdownStyle from 'styles/markdownStyle';

const markdown = `
  # 헤딩

  ## 헤딩

  ### 헤딩

  > ㅇㅇㅇ

  [d]("ddd")
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
  ${markdownStyle}
  padding: 2rem;
`;

export default MarkdownRenderer;
