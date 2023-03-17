import { Global, css } from '@emotion/react';

const style = css`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
    flex-shrink: 0;
  }
  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-break: break-word;
    -moz-tab-size: 4;
    tab-size: 4;
  }
  html,
  body {
    height: 100%;
  }
  dl,
  li,
  menu,
  ol,
  ul {
    list-style: none;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }
  button {
    background: none;
    border: 0;
    cursor: pointer;
    background-color: transparent;
  }
  textarea {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: transparent;
    border: 0;
    word-break: keep-all;
    word-wrap: break-word;
  }
  button,
  input {
    -webkit-border-radius: 0;
    border-radius: 0;
    border: 0;
  }
  a,
  a:active,
  a:hover {
    text-decoration: none;
    color: inherit;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }

  .sr-only {
    position: absolute;
    margin: -1px;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    white-space: nowrap;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
