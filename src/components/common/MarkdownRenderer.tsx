import { FC } from 'react';

import styled from '@emotion/styled';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import markdownStyle from 'styles/markdownStyle';

const MarkdownRenderer: FC<{ contents: string }> = ({ contents }) => {
  return (
    <MarkdownStyle>
      <ReactMarkdown
        children={contents}
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
